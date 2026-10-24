# DESIGN.md — Strength for Family + Hiking PWA
*Semantic Design System Architecture — Built with Google Stitch Taste Principles*

## 1. Visual Atmosphere & Philosophy
- **Density:** 6/10 (Daily App Balanced — high legibility in motion, big touch targets for tired gym hands).
- **Variance:** 6/10 (Offset Asymmetric — structured tactical bento cards with distinct hero moments).
- **Motion:** 7/10 (Tactile Micro-Springs — elastic press feedback, animated progress indicators, fluid transitions).
- **Vibe:** "Alpine Athletic Studio" — sleek, technical, outdoor-endurance inspired, uncompromisingly modern, zero clutter.

## 2. Color Palette Calibration
Strict anti-slop rule: **No pure black (`#000000`)**, **No generic neon purple/cyan AI glow**, singular high-energy accent with deep charcoal/zinc foundations.

| Token | Name | Hex Code | Functional Role |
| :--- | :--- | :--- | :--- |
| `--bg-app` | Deep Obsidian | `#090d16` | App backdrop surface |
| `--bg-card` | Technical Charcoal | `#111827` | Primary card & bento containers |
| `--bg-surface` | Elevated Zinc | `#172033` | Elevated interaction layers & pills |
| `--bg-input` | Recessed Pitch | `#0c121e` | Inputs, stepper housings, progress tracks |
| `--accent-core` | Alpine Ember | `#ff5722` | Singular focal accent (CTA, active timer, key highlights) |
| `--accent-warm` | Summit Ochre | `#f59e0b` | Target badge, warning indicators, pacing alerts |
| `--accent-trail` | Alpine Forest | `#10b981` | Completed sets, streak ticks, success state |
| `--accent-glacier`| Glacier Blue | `#38bdf8` | Cardio telemetry & recovery stretches |
| `--text-primary`| Crisp Frost | `#f8fafc` | Maximum contrast titles & digits |
| `--text-secondary`| Muted Slate | `#94a3b8` | Cues, descriptions, secondary stats |
| `--text-tertiary` | Dim Granite | `#64748b` | Captions, subtle metadata, inactive icons |
| `--border-subtle` | Glass Edge | `rgba(255, 255, 255, 0.08)` | Refined 1px container dividers |
| `--border-active` | Ember Rim | `rgba(255, 87, 34, 0.35)` | Focus, active set card border |

## 3. Typographic Architecture
- **Font Stack:** Modern geometric sans: `Outfit` / `Satoshi` / Apple `SF Pro Display`, falling back to clean system sans.
- **Numbers & Timers:** Tabular figures with monospaced optical alignment (`font-variant-numeric: tabular-nums; font-family: 'SF Mono', 'Geist Mono', ui-monospace, monospace;`).
- **Headlines:** Track-tight (`letter-spacing: -0.025em; font-weight: 800;`).
- **Hierarchy:**
  - Timer Hero: `clamp(3.4rem, 11vw, 4.2rem)`
  - Section Headings: `1.25rem` (uppercase with subtle 0.05em tracking)
  - Card Titles: `1.05rem` (semibold 700)
  - Body / Form Cues: `0.86rem` (relaxed leading 1.45)
  - Micro Badges: `0.68rem` (bold 800, uppercase 0.08em tracking)

## 4. Component Behaviors & Styling
- **Buttons:** Tactile feedback on touch (`transform: scale(0.96); transition: transform 0.14s cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Steppers:** Unified pill housing with tactile `+` / `−` endpoints and prominent central numerical readout.
- **Visual Stage:** 16:9 athletic ratio stage with dynamic live media container, smooth vignette fade into dark backdrop, and live badge.
- **Segmented Bar:** Ultra-crisp dash array with active pulsing glow and smooth color fill for completed segments.
- **Transport Bar:** Floating dock with thumb-friendly primary action pill (min 54px touch target) flanked by optical skip buttons.
- **Navigation:** Frosted glass dock with safe-area insets, distinct active indicator pill rather than plain colored text.

## 5. Anti-Patterns Enforced (Stitch Anti-Slop Directive)
- ❌ No emojis in formal navigation labels or system titles (clean modern vector SVG icons used).
- ❌ No generic `Inter` or standard default Times/Georgia.
- ❌ No pure black `#000` or oversaturated gradient mush.
- ❌ No multi-column overflow on mobile screens.
- ❌ No horizontal content truncation or clipping.
