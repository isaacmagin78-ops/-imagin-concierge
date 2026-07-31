# Open House — 2756 NE 35th Street

Mobile-first lead-capture page for a single open house. Proof of concept under the
I.Magin **Concierge** umbrella.

| | |
|---|---|
| **Property** | 2756 NE 35th Street, Fort Lauderdale, FL 33306 |
| **Offered at** | $1,250,000 |
| **Open house** | Saturday, August 1, 2026 · 1:00–3:00 PM |
| **Agent** | Linda Magin Hoyt, ONE Sotheby's International Realty |
| **Preview** | https://claude.ai/code/artifact/662f75f7-9438-4a22-b609-be1d4a68344d |

## What it is

`index.html` — one self-contained file. No build step, no dependencies, no external
network requests. Open it locally or drop it on any static host.

Sections, in scroll order: hero → hero photo brief → title block (specs) → highlights →
gallery briefs → three action buttons → capture form → agent card → footer.

## How it captures leads

Sign-ins are written to `localStorage` on the device that submitted them.

- **Kiosk setup (works today):** one iPad or phone at the entry table. Every visitor
  signs in on that device; Linda opens the agent view and exports.
- **QR-to-own-phone setup (needs one input):** leads land on the *visitor's* phone, not
  Linda's. Set `FORM_ENDPOINT` at the top of the `<script>` block to a URL that accepts
  a JSON `POST` (Formspree, Airtable webhook, Make.com scenario, or a serverless
  function) and submissions are delivered there instead.

### Agent view

Append `#leads` to the URL, or tap **Preview notes → Agent view** in the footer.
Shows every sign-in captured on that device with **Copy CSV** and **Download CSV**.

CSV columns: `capturedAt, name, phone, email, intent, message, property`

## Placeholders

Every unverified value renders in gold with a dotted underline (`.tbd`). Nothing was
invented — no bed/bath counts, no square footage, no contact details, no logo asset.
Search `class="tbd"` to find them all.

## Design notes

- Palette is Intracoastal-at-dusk: `#0B1E2D` abyss navy, `#143A4E` tide, `#FBFAF7` shell,
  `#E8E3DA` dune, `#B18A4A` antique brass (accent only), `#2E7E8C` sea teal (interactive only).
- Display face is a Didone stack led by `Didot`, which ships natively on iOS — the device
  visitors will actually be holding. Fallback chain lands on Hoefler Text / Garamond.
- Structural device is an architect's title block: hairline rule plus label/value row.
  Sharp corners throughout, no rounded accent cards.
- Deliberately single-theme. This is a brand marketing page; it renders identically for
  every viewer regardless of OS dark mode.
- Inputs are `16px` minimum so iOS does not zoom on focus. Safe-area insets respected for
  notched iPhones. Motion respects `prefers-reduced-motion`.

## Deploying elsewhere

`index.html` is a complete standalone document. Any static host works:

```
# Vercel / Netlify: drop this folder in, no config needed
# Or serve locally to test:
python3 -m http.server 8000 --directory .
```

The preview link above is generated from this same file with the outer
`<!DOCTYPE>/<html>/<head>/<body>` wrappers stripped, since that host supplies its own.
`index.html` remains the single source of truth.

## Inputs still needed

- [ ] Linda's mobile, email, and Florida license number
- [ ] Official ONE Sotheby's logo asset (currently a typographic lockup)
- [ ] Linda's headshot (currently an "LMH" monogram)
- [ ] Listing specs: beds, baths, living area, lot size, year built, garage, pool, waterfront, MLS #
- [ ] Four real highlight paragraphs
- [ ] Six listing photos matching the gallery briefs, plus the hero shot
- [ ] Form delivery endpoint, if visitors will sign in on their own phones
- [ ] Confirmation the preview link may be made public before a QR code is printed
