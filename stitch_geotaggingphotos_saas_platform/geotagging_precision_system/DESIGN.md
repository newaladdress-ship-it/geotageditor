---
name: Geotagging Precision System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  mono-data:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for professional photographers and GIS specialists who require a high-tech, reliable environment for metadata management. The brand personality is authoritative yet frictionless, balancing enterprise-grade stability with a modern, fluid user experience.

The visual direction utilizes **Glassmorphism** and **Modern Corporate** aesthetics. The UI relies on translucent layers, subtle backdrop blurs, and high-fidelity transitions inspired by Framer Motion to communicate technical sophistication. Every interaction must feel intentional and smooth, reinforcing the precision of the underlying geotagging technology.

- **Primary Style:** Glassmorphism with Tonal Layering.
- **Visual Tone:** Professional, Precise, Technical, and Secure.
- **Motion:** Ease-out-expo transitions (0.4s) for layout changes; subtle spring physics for interactive elements.

## Colors

This design system prioritizes a **WCAG AAA compliant** color palette to ensure maximum accessibility for long-duration technical work. 

- **Primary (#0F172A):** Used for typography and structural elements to provide a grounded, high-contrast foundation.
- **Accent (#2563EB):** Reserved for primary actions, progress indicators, and interactive states.
- **Success (#10B981):** Utilized for verified GPS status, successful uploads, and completed metadata writes.
- **Glass Surfaces:** Containers use `rgba(255, 255, 255, 0.7)` with a `20px` backdrop blur to create depth without sacrificing legibility.

## Typography

The typography strategy leverages **Geist** for technical clarity in headings and labels, paired with **Inter** for sustained reading comfort in data-heavy views.

- **Scale:** A tight modular scale ensures information density remains manageable on mobile devices.
- **Data Display:** For GPS coordinates (Latitude/Longitude), use the `mono-data` style to ensure character alignment and readability.
- **Hierarchy:** Use font weight rather than size to differentiate metadata labels from user input.

## Layout & Spacing

This design system uses a **12-column fluid grid** for the main application area, with a fixed-width sidebar (280px) for metadata controls on desktop.

- **AdSense Integration:** Dedicated containers are reserved in the layout with `min-height` set to common ad sizes (e.g., 250px for rectangles) to prevent Layout Shift (CLS).
- **Mobile Reflow:** On mobile, the Map Preview moves to the top of the viewport with a "Sticky Bottom" metadata editor panel for ergonomic thumb-access.
- **Rhythm:** An 8px baseline grid dictates all vertical padding and margin, ensuring a mathematically consistent flow.

## Elevation & Depth

Depth is conveyed through a "Glass Stack" philosophy rather than traditional heavy shadows.

- **Level 1 (Base):** The Clean Slate background (#F8FAFC).
- **Level 2 (Cards):** Semi-transparent white surfaces with a thin `1px` inner stroke (white at 40% opacity) and a soft ambient shadow (0px 10px 30px rgba(15, 23, 42, 0.05)).
- **Level 3 (Modals/Popovers):** Higher blur intensity (40px) and a more pronounced shadow to create a clear visual hierarchy during critical actions.
- **Interaction:** On hover, cards should subtly "lift" using a Framer Motion scale-up (1.01) and an increased shadow spread.

## Shapes

The shape language is modern and approachable. While standard UI elements use a standard "Rounded" value, primary containers use a more pronounced curvature to emphasize the premium feel.

- **Main Containers/Cards:** Use `rounded-2xl` (1.5rem) to create a distinct, modern silhouette.
- **Buttons/Inputs:** Use `rounded-lg` (0.5rem) for a professional, precise appearance.
- **Selection Chips:** Use pill-shaped (1rem+) for quick visual identification of active tags.

## Components

### Drag-and-Drop Zone
Designed as a large `rounded-2xl` dashed container. On drag-over, the background should transition to a subtle Blue (#2563EB) at 5% opacity with a pulse animation on the icon.

### Coordinate Input Fields
Inputs feature a monospaced font for numeric entry. Validation states are critical:
- **Default:** Neutral border with glass background.
- **Success:** Emerald border (#10B981) with a checkmark suffix.
- **Error:** Sharp red border with a subtle horizontal shake animation.

### Map Preview Containers
A "Floating UI" approach where map controls (zoom, layer toggle) are housed in high-blur glass circles. The map itself should have the standard `2xl` corner radius.

### Gradient CTA Buttons
Primary actions use a linear gradient from #2563EB to #1D4ED8. Text must be white for contrast. The hover state features a slight "glow" effect using an outer shadow of the accent color at 30% opacity.

### Progress Bars
Thin (4px) track with a gradient fill. For photo processing, use a continuous "shimmer" effect on the fill to indicate active background work.

### Lists & Tables
Rows should have a subtle hover state (`rgba(15, 23, 42, 0.02)`) and include a visual indicator (vertical blue line) when a row is selected for bulk editing.