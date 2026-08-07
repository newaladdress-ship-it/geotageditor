/**
 * GeotagEXIF Utility
 * Embeds real binary EXIF GPS metadata (GPSLatitude, GPSLongitude, GPSLatitudeRef, GPSLongitudeRef)
 * directly into JPEG images client-side before downloading.
 */

function convertDegToExifRational(deg) {
    const absolute = Math.abs(deg);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.round((minutesNotTruncated - minutes) * 60 * 10000);
    return [[degrees, 1], [minutes, 1], [seconds, 10000]];
}

function buildGpsExifData(latNum, lngNum) {
    const latRef = latNum >= 0 ? "N" : "S";
    const lngRef = lngNum >= 0 ? "E" : "W";

    const gpsDict = {};
    gpsDict[piexif.GPSIFD.GPSVersionID] = [2, 2, 0, 0];
    gpsDict[piexif.GPSIFD.GPSLatitudeRef] = latRef;
    gpsDict[piexif.GPSIFD.GPSLatitude] = convertDegToExifRational(latNum);
    gpsDict[piexif.GPSIFD.GPSLongitudeRef] = lngRef;
    gpsDict[piexif.GPSIFD.GPSLongitude] = convertDegToExifRational(lngNum);

    const exifObj = {
        "0th": {},
        "Exif": {},
        "GPS": gpsDict,
        "1st": {},
        "thumbnail": null
    };

    return piexif.dump(exifObj);
}

function geotagImageAndDownload(imageSrcUrl, fileName, lat, lng) {
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    if (isNaN(latNum) || isNaN(lngNum)) {
        alert("Please specify valid latitude and longitude coordinates before downloading.");
        return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        let jpegDataUrl = canvas.toDataURL("image/jpeg", 0.95);

        if (typeof piexif !== 'undefined') {
            try {
                const exifBytes = buildGpsExifData(latNum, lngNum);
                jpegDataUrl = piexif.insert(exifBytes, jpegDataUrl);
                console.log("✓ Successfully embedded EXIF GPS metadata into JPEG binary.");
            } catch (err) {
                console.error("EXIF metadata insertion error:", err);
            }
        } else {
            console.warn("piexifjs library not detected; downloading standard image.");
        }

        const nameParts = fileName.split('.');
        if (nameParts.length > 1) nameParts.pop();
        const baseName = nameParts.join('.');
        const finalFileName = `${baseName}_geotagged_${latNum.toFixed(6)}_${lngNum.toFixed(6)}.jpg`;

        const a = document.createElement('a');
        a.href = jpegDataUrl;
        a.download = finalFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    img.src = imageSrcUrl;
}
