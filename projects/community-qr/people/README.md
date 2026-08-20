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

---

## Upgraded 2026-08-15 — photo + one true sentence

Isaac's note: *"we should be able to do something very good for these people, not just
generic basic stuff. Impressive."*

He's right, and two things carry that:

1. **Their face.** A flyer with a real photograph is a different object than one without.
   Drop the image file in the person's folder and name it in `people.json` as `photo`.
   Until then the flyer prints a dashed placeholder saying so.
2. **One true sentence.** Not marketing — a fact only a neighbour would know. Rich's
   reads: *"Rich has lived in this building for years. He's retired now — spent his
   working life in the courts — and he does this because he likes doing it well, not
   because he has to."* That sentence is the whole difference between a template and
   something a person is proud to hang up.

Both are now tracked as unresolved, so a flyer cannot silently ship without them.

**Isaac has Rich's photo and details already** — they're in a ChatGPT conversation. They
need to come across; nothing here can reach them.

## ⚠️ Unresolved: which service is Rich's

Isaac first described **Rich as "the driving guy"** and separately mentioned "some car
wash guy" who'd take over since **Emilio** isn't interested. Later he said **"Rich, the
car wash guy is retired."**

Rich's flyer is currently built as **car wash**, reusing Emilio's proven $25 weekend
format. **Confirm with Isaac before printing.** If Rich drives instead, it's a one-line
change in `people.json` — the earlier driver copy is in git history.

## The wider roster — not yet built

| Person | Note |
|---|---|
| **Chloe** | Called excited. Isaac describes her and Madison as potential **partners with their own projects**, not customers — that is a different conversation from a flyer |
| **Madison** | Travel; could work a travel convention |
| **Mark** | Handyman in the building, grandpa of Ruca |
| **Ivan** + wife | Car sales; wants "bigger things" |
| **Fernando** | Via Jared |
| **Paco** | Jared's employee — **interested in the punchlist tool**, which is the one thing anyone has actually used |
| Finance guy with the dog | Owns a home in Colombia |

**Chloe and Madison are the standout note here.** Everyone else on this list is someone
to make a flyer for. Those two were described as people who could *run* something. That
is worth separating before it gets flattened into the same pile.
