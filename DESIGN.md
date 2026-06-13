---
name: Premium Mineral Heritage
colors:
  surface: '#fdf9f4'
  surface-dim: '#ddd9d5'
  surface-bright: '#fdf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#4d4540'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#7e756f'
  outline-variant: '#cfc4bd'
  surface-tint: '#635d5a'
  primary: '#181512'
  on-primary: '#ffffff'
  primary-container: '#2d2926'
  on-primary-container: '#96908b'
  inverse-primary: '#cdc5c0'
  secondary: '#7c5730'
  on-secondary: '#ffffff'
  secondary-container: '#fdcb9b'
  on-secondary-container: '#79542d'
  tertiary: '#141616'
  on-tertiary: '#ffffff'
  tertiary-container: '#282a2a'
  on-tertiary-container: '#909191'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9e1dc'
  primary-fixed-dim: '#cdc5c0'
  on-primary-fixed: '#1e1b18'
  on-primary-fixed-variant: '#4b4642'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#eebd8e'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#61401b'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fdf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is anchored in the concept of "Premium Earthy"—a visual narrative that bridges the raw, geological power of iron minerals with the refined world of high-end jewelry. The brand personality is authoritative, enduring, and sophisticated, targeting collectors and connoisseurs who value provenance and craftsmanship.

The visual style employs a **Corporate / Modern** foundation with **Minimalist** execution. It leverages expansive white space (or cream space) to allow high-fidelity photography of minerals to breathe. Subtle metallic gradients and fine-line details introduce a tactile quality, while structured layouts convey the scientific precision of mineralogy. The goal is to evoke a sense of "grounded luxury," where the UI feels as permanent and valuable as the stones it showcases.

## Colors
The palette is derived from the geological strata of iron ore and the brilliance of polished gemstones.

- **Primary (Iron Grey):** A deep, near-black charcoal used for primary text and structural elements, representing the raw strength of iron.
- **Secondary (Raw Bronze):** A sophisticated earth tone used for interactive elements, highlights, and subtle accents to provide warmth.
- **Tertiary (Silver/Chrome):** A neutral metallic used for borders, dividers, and secondary iconography, referencing the industrial side of mining.
- **Surface (Cream/Alabaster):** The background is not pure white but a warm, parchment-like cream to soften the high-contrast iron grey and maintain a premium editorial feel.

## Typography
The typography strategy pairings high-contrast editorial serifs with functional, sharp-cut sans-serifs.

**Playfair Display** is reserved for headlines and "hero" moments, echoing the elegance of luxury publishing. **Hanken Grotesk** handles the utilitarian tasks—product specifications, body copy, and UI controls—offering a modern, technical contrast that ensures legibility during the e-commerce journey. 

For mobile devices, headline sizes are scaled down slightly to maintain optimal line-wrapping, while body text remains generous to ensure readability in variable lighting conditions typical of mobile use.

## Layout & Spacing
This design system utilizes a **Fluid Grid** with fixed maximum constraints to maintain an editorial balance on ultra-wide screens. 

- **Desktop:** A 12-column grid with a wide 64px outer margin. This creates a "frame" effect that emphasizes the product as art.
- **Mobile:** A 4-column grid with 16px margins. Content is prioritized vertically, with product images often breaking the grid to bleed to the edges for a more immersive feel.
- **Rhythm:** Spacing follows a 4px baseline, but large-scale components use "Stack" increments (24px, 48px) to create clear visual separation between sections.

**Animations:** Transitions should be "weighted" and deliberate. Use the `premium` easing curve for page transitions and image reveals to mimic the slow, steady movement of a gallery tour. The implementation utilizes `.reveal-on-scroll` and `.reveal-up` classes with intersection observers to trigger weighted fade-in translate-up transitions.

## Elevation & Depth
In keeping with the "Premium Earthy" aesthetic, depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

1.  **Surfaces:** The primary surface is the light cream background. Secondary surfaces (cards, sidebars) use a slightly darker stone-grey or a very thin 1px border in Bronze.
2.  **Shadows:** When necessary for functional depth (e.g., a modal or a floating cart), use "Ambient Shadows"—diffused, low-opacity shadows with a slight Bronze tint (#8C6239 at 5% opacity) to keep the shadow feeling warm and integrated.
3.  **Depth via Photography:** Use high-contrast product photography with natural shadows to create an organic sense of depth on the flat UI.

## Shapes
The shape language is **Soft (Level 1)**. 

While the minerals themselves are often sharp and crystalline, the UI components should feel approachable and trustworthy. Buttons and input fields use a subtle 0.25rem (4px) radius. This provides a professional, architectural feel that avoids the casual nature of pill-shaped buttons while steering clear of the harshness of zero-radius "brutalist" corners. Image containers may use zero-radius corners to emphasize the "editorial" or "gallery" look.

## Components
- **Buttons:** Primary buttons are Solid Iron Grey with Silver text. Hover states shift to Bronze with a smooth 400ms transition. Secondary buttons use a "Ghost" style with a 1px Bronze border.
- **Inputs:** Fields are underlined or use a minimal 1px border. Focus states are indicated by a weight increase in the bottom border rather than a color change, maintaining a sophisticated, quiet aesthetic.
- **Product Cards:** Minimalist design with no background fill and no shadow. The focus is entirely on the product photography, with the price and title set in a tight vertical stack using Hanken Grotesk.
- **Chips/Labels:** Used for mineral categories (e.g., "Hematite", "Rare"). These should be monochromatic, using Iron Grey text on a light Tertiary grey background with 0px roundedness for a "specimen tag" look.
- **Navigation:** A persistent, centered top-bar with a transparent background that frosts or becomes solid Cream on scroll. The logo should always be the anchor, set in Playfair Display.