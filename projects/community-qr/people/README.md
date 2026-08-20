# Per-person QR flyers

Eight people asked to be part of this. These are the first three.

## Why these need no website

The QR code encodes an **`sms:` link**, not a URL. Scanning it opens the phone's
messaging app with the text already written. **No hosting, no Vercel account, no
deployment** — print it and hand it over.

This came straight from Emilio's car wash flyer, which already worked that way:
*"Scan to text me. Send your spot number and a time."*

**The trade-off, stated plainly:** `sms:` codes cannot be scan-counted. You find out it
worked when Becky tells you she got a customer. Tracked codes need a hosted page; that
comes later and the flyer layout does not change when it does.

## Status

| Person | State | Still needed |
|---|---|---|
| **Becky** — nail tech, Victoria's Nails | PROOF | Her phone number |
| **Rich** — driver | PROOF | His phone number |
| **Dolores** — building neighbour, tip jar | PROOF | Her tip link **and her consent** |

Every flyer currently prints a red **PROOF ONLY — DO NOT PRINT** banner. It disappears
by itself once the placeholder is replaced. The placeholder number is `555-0100`, which
is deliberately unreachable — a flyer with a plausible wrong number is worse than none.

## To finish one

Edit `people.json`, then:

```
npm install qrcode        # once
node make-flyer.mjs people.json
```

Open `<name>/flyer.html`, print to PDF at 8.5×11.

## Before Dolores gets printed

She is a **private individual, not a business.** Do not put her name, face or a tip link
on a wall until she has said yes to it in her own words. Ask her first. If she says no,
that is the end of it.

## Adding the others

Madison (travel) · Mark (handyman) · the car wash guy · Ivan (car sales). Add an entry to
`people.json` and re-run — the generator handles any number.

Ivan wants "bigger things" — that's a separate conversation, not a flyer.

## Test before you hand any of these out

Print one, then scan it **from the distance someone would actually stand.** Confirm the
text opens with the right number and the right message. A QR that opens a blank message
to a wrong number costs you the relationship, not just the scan.
