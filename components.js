/**
 * Global Component Loader for Header and Footer
 * Renders header.html and footer.html dynamically into all pages using function loadHeader() and loadFooter().
 */

function loadHeader(targetId = "header-placeholder") {
    const target = document.getElementById(targetId);
    if (!target) return;

    fetch("header.html")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch header.html");
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;
            highlightActiveNavLink();
        })
        .catch(err => {
            console.warn("Dynamic header fetch failed, using fallback component:", err);
            target.innerHTML = getHeaderFallbackHTML();
            highlightActiveNavLink();
        });
}

function loadFooter(targetId = "footer-placeholder") {
    const target = document.getElementById(targetId);
    if (!target) return;

    fetch("footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch footer.html");
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;
        })
        .catch(err => {
            console.warn("Dynamic footer fetch failed, using fallback component:", err);
            target.innerHTML = getFooterFallbackHTML();
        });
}

function highlightActiveNavLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("#navbar nav a, #mobile-menu a");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("text-secondary", "font-bold");
        }
    });
}

function getHeaderFallbackHTML() {
    return `<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-400 ease-out-expo" id="navbar">
<div class="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<a class="font-display text-headline-lg-mobile text-primary tracking-tight scale-105 transition-transform duration-400 ease-out-expo hover:opacity-80 flex items-center gap-2" href="index.html">
<span class="material-symbols-outlined text-secondary">add_location_alt</span>
<span>GeotaggingPhotos.com</span>
</a>
<nav class="hidden md:flex items-center gap-6">
<a class="text-on-surface-variant hover:text-primary font-label-md text-label-md hover:bg-white/10 transition-colors duration-400 ease-out-expo px-3 py-2 rounded-lg" href="index.html">Home</a>
<div class="relative group">
<button class="text-on-surface-variant hover:text-primary font-label-md text-label-md hover:bg-white/10 transition-colors duration-400 ease-out-expo px-3 py-2 rounded-lg flex items-center gap-1">
<span>Tools</span>
<span class="material-symbols-outlined text-sm">expand_more</span>
</button>
<div class="absolute left-0 top-full pt-2 hidden group-hover:block w-56">
<div class="glass-card rounded-xl p-2 shadow-xl border border-white/40 bg-surface/95 backdrop-blur-md space-y-1">
<a href="add-geotag.html" class="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors">
<span class="material-symbols-outlined text-sm text-secondary">add_location</span>
<span>Add Geotag</span>
</a>
<a href="bulk-geotagging.html" class="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors">
<span class="material-symbols-outlined text-sm text-secondary">photo_library</span>
<span>Bulk Geotagging</span>
</a>
<a href="exif-viewer.html" class="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors">
<span class="material-symbols-outlined text-sm text-secondary">info</span>
<span>EXIF Viewer</span>
</a>
<a href="image-location-finder.html" class="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-secondary/10 hover:text-secondary rounded-lg transition-colors">
<span class="material-symbols-outlined text-sm text-secondary">search</span>
<span>Location Finder</span>
</a>
</div>
</div>
</div>
<a class="text-on-surface-variant hover:text-primary font-label-md text-label-md hover:bg-white/10 transition-colors duration-400 ease-out-expo px-3 py-2 rounded-lg" href="blog.html">Blog</a>
<a class="text-on-surface-variant hover:text-primary font-label-md text-label-md hover:bg-white/10 transition-colors duration-400 ease-out-expo px-3 py-2 rounded-lg" href="about-us.html">About Us</a>
<a class="text-on-surface-variant hover:text-primary font-label-md text-label-md hover:bg-white/10 transition-colors duration-400 ease-out-expo px-3 py-2 rounded-lg" href="contact-us.html">Contact</a>
<a class="text-on-surface-variant hover:text-primary font-label-md text-label-md hover:bg-white/10 transition-colors duration-400 ease-out-expo px-3 py-2 rounded-lg" href="faq.html">FAQ</a>
</nav>
<div class="hidden md:flex items-center gap-4">
<a href="contact-us.html" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Support</a>
<a href="add-geotag.html" class="gradient-btn font-label-md text-label-md px-4 py-2 rounded-lg text-white">Get Started</a>
</div>
<button class="md:hidden text-primary p-2" id="mobile-menu-btn" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
<div id="mobile-menu" class="hidden md:hidden bg-surface border-b border-outline-variant/30 px-6 py-4 space-y-3">
<a href="index.html" class="block text-on-surface hover:text-secondary font-medium py-1">Home</a>
<div class="space-y-1 pl-3 border-l-2 border-outline-variant/30">
<div class="text-xs font-bold uppercase text-on-surface-variant/70 tracking-wider">Tools</div>
<a href="add-geotag.html" class="block text-sm text-on-surface hover:text-secondary py-1">Add Geotag</a>
<a href="bulk-geotagging.html" class="block text-sm text-on-surface hover:text-secondary py-1">Bulk Geotagging</a>
<a href="exif-viewer.html" class="block text-sm text-on-surface hover:text-secondary py-1">EXIF Viewer</a>
<a href="image-location-finder.html" class="block text-sm text-on-surface hover:text-secondary py-1">Image Location Finder</a>
</div>
<div class="space-y-1 pl-3 border-l-2 border-outline-variant/30">
<div class="text-xs font-bold uppercase text-on-surface-variant/70 tracking-wider">Regional</div>
<a href="photo-geotagging-usa.html" class="block text-sm text-on-surface hover:text-secondary py-1">USA Services</a>
<a href="photo-geotagging-uk.html" class="block text-sm text-on-surface hover:text-secondary py-1">UK Services</a>
<a href="photo-geotagging-australia.html" class="block text-sm text-on-surface hover:text-secondary py-1">Australia Services</a>
</div>
<a href="blog.html" class="block text-on-surface hover:text-secondary font-medium py-1">Blog</a>
<a href="about-us.html" class="block text-on-surface hover:text-secondary font-medium py-1">About Us</a>
<a href="contact-us.html" class="block text-on-surface hover:text-secondary font-medium py-1">Contact Us</a>
<a href="faq.html" class="block text-on-surface hover:text-secondary font-medium py-1">FAQ & Support</a>
<div class="pt-2 border-t border-outline-variant/30">
<a href="add-geotag.html" class="block w-full text-center gradient-btn font-label-md py-2.5 rounded-lg text-white">Get Started Free</a>
</div>
</div>
</header>`;
}

function getFooterFallbackHTML() {
    return `<footer class="bg-surface-container-lowest border-t border-outline-variant/30 w-full py-12 px-margin-mobile md:px-margin-desktop mt-auto">
<div class="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
<div class="col-span-2 lg:col-span-2 flex flex-col gap-4">
<a href="index.html" class="font-display text-headline-lg-mobile text-primary hover:opacity-80 transition-opacity">GeotaggingPhotos.com</a>
<p class="font-body-md text-body-md text-on-surface-variant opacity-80">
                    Professional metadata management tools for modern workflows.
                </p>
<p class="font-body-md text-body-md text-on-surface-variant text-sm mt-4">
                    © 2026 GeotaggingPhotos.com. All rights reserved.
                </p>
</div>
<div class="col-span-1 lg:col-span-1 flex flex-col gap-3">
<h4 class="font-label-md text-label-md text-primary font-bold">Tools</h4>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="add-geotag.html">Add Geotag</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="bulk-geotagging.html">Bulk Geotagging</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="exif-viewer.html">EXIF Viewer</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="image-location-finder.html">Location Finder</a>
</div>
<div class="col-span-1 lg:col-span-1 flex flex-col gap-3">
<h4 class="font-label-md text-label-md text-primary font-bold">Company</h4>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="about-us.html">About Us</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="blog.html">Blog</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="contact-us.html">Contact Us</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="faq.html">FAQ &amp; Help</a>
</div>
<div class="col-span-1 lg:col-span-1 flex flex-col gap-3">
<h4 class="font-label-md text-label-md text-primary font-bold">Regional</h4>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="photo-geotagging-usa.html">USA Services</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="photo-geotagging-uk.html">UK Services</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="photo-geotagging-australia.html">Australia Services</a>
</div>
<div class="col-span-1 lg:col-span-1 flex flex-col gap-3">
<h4 class="font-label-md text-label-md text-primary font-bold">Legal</h4>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="privacy-policy.html">Privacy Policy</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="terms-of-service.html">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="cookie-policy.html">Cookie Policy</a>
</div>
</div>
</footer>`;
}

// Auto-execute header and footer loading
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        loadHeader();
        loadFooter();
    });
} else {
    loadHeader();
    loadFooter();
}
