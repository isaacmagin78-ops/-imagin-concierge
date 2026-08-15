# Gate Map — scan-at-the-gate building finder

A driver pulls up to the gate, scans one QR code, types the unit number they were
given, and gets the building highlighted on a map plus turn-by-turn directions from
the gate. No app, no login, no account. One HTML file.

**Status: working, seeded with placeholder data.** The layout, unit ranges, and
directions in `index.html` are made up so the thing runs end to end. Replace them with
the real community before this goes on a gate.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole map site. Self-contained — no build step, no dependencies, no external requests. |
| `sign.html` | Print-ready 8.5×11 gate sign with the QR embedded. Open it, Print to PDF. |
| `qr.svg` | Bare QR code, vector, scales to any sign size. |
| `tools/make-qr.py` | Regenerates `qr.svg` and `sign.html` for a given URL. |

## Editing the community data

Everything a driver sees comes from the `COMMUNITY` object near the bottom of
`index.html`, between the two `EDIT` banners. Nothing else needs to change.

- `places` — one entry per building or amenity.
  - `units: [101, 124]` is what makes this useful: a driver has a **unit** number, not
    a building number. Typing `512` finds Building 5 automatically.
  - `steps` — plain directions **from the gate**, in the order you'd say them out loud.
    "Turn LEFT at the loop" beats "proceed north on Palm Circle."
  - `aliases` — extra words that should match an amenity ("amazon" → Package Room).
- `x, y, w, h` — position on a 1000 × 700 grid. Gate at the bottom, property spreading
  up. Nudge the numbers, refresh the page, repeat — it's fast to eyeball.
- `roads` — SVG paths on the same grid, drawn under the buildings.

## Deploying

Any static host works. Drag the folder onto Vercel or Netlify, or point a subdomain at
it. Pick a short URL — it's printed on the sign as a fallback for anyone whose camera
won't scan.

## Regenerating the QR after you know the real URL

```bash
pip install segno
python3 tools/make-qr.py https://your-real-url.com "Community Name"
```

That rewrites `qr.svg` and `sign.html`. **Do not print anything until the URL is
final** — a laminated sign pointing at a dead URL is worse than no sign.

## Printing the sign

- Print `sign.html` at Letter, 100% scale, no margins/scaling.
- The QR is 4.6 inches. Rule of thumb: a phone scans a QR from about 10× its width, so
  that's reliable to roughly 4 feet — fine for a driver leaning out a window at a
  callbox, not enough for a sign set back off the road. Scale up for distance.
- Laminate it or put it behind acrylic. Error correction is set to H (30% of the code
  can be damaged and it still scans), which buys tolerance for sun fade and water spots.
- Mount at driver's-window height on the driver's side.

## Deliberately not included

- No tracking, analytics, or logging. Drivers scan and go.
- No gate codes or resident names in the file — it's a public URL by definition.
  Anything sensitive belongs behind the callbox, not on this page.
