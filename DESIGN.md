# DESIGN.md: Direction A, "Flight Manual"

The site reads as a well-made engineering document: dark ground, one orange accent, ranked spec tables, a status timeline, real NASA photography.

## Rules
- No white pages or white headers, anywhere. The header is dark (`--ink` at 92%).
- One accent (`--accent` #ff7a3d). Hover goes lighter (`--accent-hover`), active goes darker.
- Manrope for everything; JetBrains Mono only for data (status, dates, IDs, credits).
- No eyebrow labels, no identical card grids, no side-stripe accent borders, no scroll-reveal fades.
- One authored motion moment: the home hero photo opens along the horizon (700 ms ease-out); reduced motion gets a 150 ms fade. Cross-document View Transitions are motion-gated.
- Every photo is real and credited; concept art is labeled "Concept illustration".

## Tokens (src/styles/tokens.css)
| Token | Value | Use | Contrast |
|---|---|---|---|
| ink | #0c0d10 | page ground | |
| surface | #15171c | panels, footer | |
| raised | #1d2027 | cards | |
| hairline | #2a2e37 | decorative rules | decorative |
| field-border | #6b7079 | outlines, inputs | 3.90:1 on ink |
| text | #f3f2ee | body, headings | 17.35:1 on ink |
| muted | #a9adb6 | secondary text | 8.64:1 on ink |
| accent | #ff7a3d | CTA fill, links, focus | 7.50:1 on ink |
| accent-hover | #ff9461 | hover | 8.94:1 on ink |
| accent-active | #e86a30 | active | 6.05:1 on ink |
| on-accent | #1a0d05 | text on orange | 7.34:1 |
| ok / sky | #7fd1a8 / #8fb4e8 | status chips | 10.72:1 / 9.13:1 |

Type: major third. H1 `clamp(2.5rem, 5vw + 1rem, 5rem)` (home hero capped at 4.25rem), H2 up to 2.5rem, H3 1.5rem, body 1.125rem/1.6, measure about 62–68ch.

Focus: 2px accent outline, 3px offset. Targets ≥44px. `::selection`, `accent-color`, `scrollbar-color` themed.
