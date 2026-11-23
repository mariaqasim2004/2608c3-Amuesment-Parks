---
name: Carnival Lumina
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#747687'
  outline-variant: '#c4c5d8'
  surface-tint: '#1d4ce7'
  primary: '#0031b1'
  on-primary: '#ffffff'
  primary-container: '#1246e2'
  on-primary-container: '#c6ceff'
  inverse-primary: '#b8c3ff'
  secondary: '#b02f00'
  on-secondary: '#ffffff'
  secondary-container: '#ff5722'
  on-secondary-container: '#541100'
  tertiary: '#553e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#725500'
  on-tertiary-container: '#ffc949'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#ffdf9e'
  tertiary-fixed-dim: '#fabd00'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the wonder, celebration, and kinetic thrill of an international flagship amusement resort. The emotional register is unapologetically exuberant, radiant, and hospitality-grade: delivering instant dopamine through vivid color collisions while sustaining pristine clarity under harsh outdoor sunlight for mobile guests navigating the park grounds.

The design movement synthesizes **Dynamic Tactile Pop** with **Luminous Glassmorphism**. UI surfaces combine rich ambient saturation, pill-shaped interactions, buoyant micro-elevations, and glowing translucent overlays reminiscent of carnival lights against a twilight sky. It avoids childlike cartoonishness; instead, it establishes an elevated, premium family-friendly aesthetic comparable to world-class destination resorts—delivering functional operational data (wait times, wayfinding, ride passes) alongside cinematic wonder.

## Colors

The palette is engineered for daylight brilliance and evening luminosity:
- **Primary (`#1246E2` - Royal Electric Sapphire):** Commands key navigation bars, hero actions, active states, and branded structural anchors. Radiates confidence and scale.
- **Secondary (`#FF5722` - Vivid Sunset Coral):** Drives urgent thrill, flash sales, adrenaline coaster badges, and primary booking conversions.
- **Tertiary (`#FFC107` - Vibrant Golden Sunshine):** Delivers celebratory accents, VIP fast-track ribbons, live parade schedules, star ratings, and luminous focal points.
- **Neutral (`#0F172A` - Rich Midnight Lagoon Slate):** Provides high-contrast anchor depth for typography, deep nocturnal footer sections, and crisp status frames.
- **Surface Tones:** A luminous base of Pure Crisp White (`#FFFFFF`) layered over subtle atmospheric sky-tinted canvas backdrops (`#F8FAFC` to `#EFF4FE`) prevents glare while maintaining high visual energy.

## Typography

Typography balances carnival fanfare with effortless utility. **Outfit** serves as the headline face: geometric, warm, punchy, and confident at scale. It imbues attractions, ticket tiers, and show titles with kinetic anticipation.

**Plus Jakarta Sans** provides the foundation for body copy, data metrics, labels, and wayfinding signage. Its modern geometric curves and generous counterforms ensure extreme legibility on glare-heavy phone screens, interactive park kiosks, and wristband displays. All operational tags, ride wait times, and safety advisories use bold to extra-bold label weights to maintain immediate scannability.

## Layout & Spacing

The layout philosophy uses a flexible, responsive 12-column grid on desktop (max width 1320px) transitioning to an 8-column layout on tablet and a single/two-column stream on mobile devices (4 columns internally). Spacing is derived from an 8pt base grid with a 4pt sub-unit for compact components.

- **Mobile Viewports (<640px):** Spacing compresses to `margin-sm` (1rem) with 1rem element gutters to maximize tap targets and immediate itinerary access during in-park navigation.
- **Tablet / Mid-Viewports (640px - 1024px):** Employs balanced 1.5rem margins and gutters for flexible landscape attraction listings and map panels.
- **Desktop (>1024px):** Generous 2.5rem outer canvas spacing and sweeping hero banners that accommodate multi-lane booking engines, park live-cams, and comprehensive entertainment schedules.

## Elevation & Depth

Visual hierarchy uses **Luminous Ambient Stacking** paired with **Frost Refraction**:

- **Ground Level (Base):** Crisp opaque white cards set on luminous off-white/sky gradients, bordered with a faint 1px hairline border (`rgba(18, 70, 226, 0.08)`).
- **Floating Interaction Tier (Hover / Cards / Menus):** Soft, dual-layer colored shadows tinted with primary blue or sunset coral: `box-shadow: 0 10px 25px -5px rgba(18, 70, 226, 0.12), 0 8px 10px -6px rgba(18, 70, 226, 0.06)`.
- **Glassmorphic Overlays (Navigation Bars, Ride Status Pill Overlays, Live Map Controls):** Translucent white backing (`rgba(255, 255, 255, 0.82)`) with a `backdrop-filter: blur(16px)` and a subtle interior highlight edge (`inset 0 1px 1px rgba(255, 255, 255, 0.9)`).
- **Festival Accent Radiance:** For high-priority status elements (VIP passes, open coaster gates, countdown clocks), surfaces deploy an active outer glow using their respective brand hue at 20-30% opacity.

## Shapes

The shape system adopts a **Pill-Centric (Level 3)** geometry, expressing fluid kinetic movement, safety, and welcoming joy. Interactive buttons, filter pills, search bars, and live wait badges use full circular capsule radii (`rounded-full` / 9999px).

Content containers, promotional banners, and media cards utilize generous curves (`2rem` on desktop, `1.25rem` on mobile) to maintain an organic, approachable feel. Hard right angles are avoided across customer-facing surfaces to reinforce the park's celebratory atmosphere.

## Components

### Buttons & Interactive CTAs
- **Primary Action (Ticket Booking, FastPass Claim):** Fully rounded pill shape with a vibrant gradient from `#FF5722` to `#FF7043`, high-contrast crisp white bold typography, and an animated energetic drop shadow that scales outward on hover.
- **Secondary Action (Park Map, Ride Info):** Pill shaped with solid Royal Sapphire Blue (`#1246E2`), featuring a radiant hover lift.
- **Ghost & Glass Buttons:** Frosted glass background with sapphire or white borders and saturated text for in-map or media-heavy hero surfaces.

### Chips & Filter Pills
- Fully capsule-rounded tags. Unselected state: crisp white with a gentle blue-tint border. Active state: filled with Royal Sapphire or Sunset Coral with high-contrast white text. Used for park land filtering (e.g., "Adventure Cove", "Galaxy Zone", "Carnival Pier").

### Ride Status & Wait Time Badges
- High-visibility pill indicators:
  - *Walk-on (< 15 mins):* Vibrant Emerald green background with white text.
  - *Moderate (15–45 mins):* Sunshine Yellow background (`#FFC107`) with Midnight Lagoon text (`#0F172A`).
  - *High Demand (60+ mins):* Vivid Sunset Coral (`#FF5722`) with white text.
  - *Temporarily Closed:* Frosted neutral slate with subtle warning icon.

### Cards & Ticket Tiers
- Tiered feature cards built with `2rem` rounded corners, subtle sapphire ambient edge glow, and crisp pricing tags. VIP passes feature a golden holographic trim with Sunshine Yellow linear gradients.

### Festival Carnival Banners
- Ribbons and promotional headers using asymmetric angled cutaways or curved arc-tops, layered with high-contrast white Outfit display typography and radiant particle motifs.

### Form Inputs & Selectors
- Pill-shaped entry fields with generous internal padding (1rem 1.5rem), light slate placeholder text, and an active glow ring of Royal Sapphire (`#1246E2`) when focused. Checkboxes and radios feature smooth circular toggles with springy micro-animations.