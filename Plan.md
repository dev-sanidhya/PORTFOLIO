# Portfolio - Plan & Context

## Current Direction (May 2026)
Editorial premium aesthetic. Inspired by Linear/Vercel restraint mixed with abstract motion (Rauno-style detail + a single hero "wow" moment).

## Design System
- **Background**: `#0a0a0b` ink + warm `#ebe6dc` paper text. Single accent `#ff5b1f` (ember). Sage `#a8c7a1` reserved for future use.
- **Typography**: Instrument Serif (display + italic accents) / Inter Tight (body) / JetBrains Mono (labels).
- **Motion**: Framer Motion with `cubic-bezier(0.22, 1, 0.36, 1)` easing for premium feel. Long durations (~0.9s) on reveals.
- **Cursor**: Custom dot + lerp ring, `cursor-hover` class swap on interactives.
- **Background**: Canvas2D flow-field with ~90 particles drifting through pseudo-noise field, mouse attraction, trail effect via low-alpha clear.

## Section Architecture
- Hero: massive display "Sanidhya / Shishodia" (italic outline) + bio + marquee strip
- About: long-form prose + numbered principles + stats column
- Skills: list-style rows (no card grid), pill-based tech
- Experience: timeline rail with ember dots, role @ company italic accent
- Projects: alternating side-by-side, gradient-mesh visual card with cursor-following light + 3D tilt
- Achievements: list-style with stats banner
- Contact: massive headline "Let's build something real."
- Footer: giant signature wordmark

## Files of Note
- `src/components/BackgroundField.jsx` - the flow-field canvas
- `src/components/Cursor.jsx` - custom cursor
- `src/index.css` - design tokens and utility classes
- `tailwind.config.js` - extended palette + keyframes

## Decisions Made
- No three.js / WebGL shaders (kept dependencies lean - just Canvas2D)
- Custom cursor only on >768px viewports
- Reduced motion handled via media query
- Removed scanlines / HUD aesthetic from prior version
- Removed violet/cyan multi-color palette - now single ember accent for editorial feel

## Next Steps (if continuing)
- Add scroll-driven section transitions (e.g., projects sticky-scroll)
- Consider replacing TypeAnimation with custom blur-character morph
- Add proper resume/CV link wired to a real PDF
- Maybe an OG image generator
