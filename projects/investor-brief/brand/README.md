# I. Magin Executive Concierge — brand assets

Extracted from `ai_executive_concierge_pitch_deck_with_logo_v2.pptx`, 2026-08-15.
These are the real marks. A thin geometric sans version exists in a Canva deck
(`Presentation - IMAGIN CONCIERGE`); Isaac confirmed that one is another
session's rework and is **not** the identity.

| File | What it is |
|---|---|
| `im-monogram.png` | IM monogram alone — gold serif I over a dark serif M, transparent background, 395×473 |
| `im-lockup-full.png` | Full lockup — monogram over "I. MAGIN EXECUTIVE CONCIERGE", gold ornament rule, "FOR LUXURY REAL ESTATE" |

## Using it on dark grounds

The M is near-black (~#2B2B2B) and disappears on a dark page. For dark layouts,
recolor the neutral strokes to the page's cream and leave the gold untouched:

```python
if max(r,g,b) - min(r,g,b) < 34 and (r+g+b)/3 < 150:
    pixel = CREAM
```

That is how the mark on `briefs/spacex-2026.html` was produced.

## Typography

The identity is a high-contrast serif — Didot/Bodoni family — letterspaced in
caps. Body and label text pairs a clean sans against it. Gold reads ~#AF8554 in
the logo itself; the briefs run a slightly brighter #D6B36B for text so it holds
up at small sizes on black.

## Naming

The full name is **I. Magin Executive Concierge**. The Lucid brief used the
shorter "IMAGIN CONCIERGE" lockup. Both are in use — confirm which Isaac wants
as standard for the investor briefs.

"For luxury real estate" is a real-estate tagline and is deliberately left off
the investor briefs.
