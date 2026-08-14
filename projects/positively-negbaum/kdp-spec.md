# KDP Publishing Spec — Positively Negbaum, Book #1

Everything here is the container the art drops into. Build this now; when illustrations
land, the book assembles in a day.

---

## THE THREE CONSTRAINTS THAT DECIDE THE FORMAT

**1. KDP hardcover requires 75+ pages.** A 32-page picture book cannot be hardcover on
KDP. Launch paperback. If you want hardcover later, that's a different printer
(IngramSpark or a short-run press) — not a launch blocker.

**2. Spine text requires ~79+ pages.** At 32 pages the spine is roughly 0.08" — too thin
for lettering. Design the cover with **no spine text**. Plan a solid color spine that
matches the cover art.

**3. Page count must be even, minimum 24.** 32 is the standard picture-book count and
your 27 panels fit it exactly. Don't fight this number.

> Verify current KDP minimums at upload — Amazon changes them. But design to these.

---

## FORMAT DECISION

| Spec | Value |
|---|---|
| Binding | Paperback |
| Trim size | **8.5" × 8.5"** (square) |
| Page count | **32** |
| Interior | Premium Color |
| Paper | White |
| Bleed | Yes — full-bleed art on every page |
| Cover finish | Matte (recommended for children's) |
| Language | English |
| Age range | 3–7 |
| Grade range | Preschool – 2 |

**Why 8.5×8.5 square:** it's the classic picture-book shape, it suits your single-image-
per-page storyboard layout, and it's a KDP paperback size. (Square is paperback-only —
another reason hardcover waits.)

---

## INTERIOR FILE SPEC

**Document size with bleed:** 8.625" × 8.75"
- Width: 8.5" trim + 0.125" bleed on the outside edge
- Height: 8.5" trim + 0.125" top + 0.125" bottom

**Safe area for text:** keep all type at least **0.375" from the trim edge**, and
**0.5" from the gutter (inside) edge**. Nothing important — no faces, no words — inside
those bands.

**Image resolution:** 300 DPI minimum at final print size. For 8.625" × 8.75" that's
**2588 × 2625 pixels minimum**. Generate art at or above this. Upscaling a small
generation will look soft in print — generate large the first time.

**Color:** RGB is accepted; KDP converts. Expect print to come out slightly darker and
less saturated than screen. Compensate by keeping the art a touch brighter than looks
right on your monitor.

**File format:** single print-ready PDF, all fonts embedded, all images flattened.

---

## 32-PAGE MAP

Page 1 is always a right-hand page.

| Page | Content |
|---|---|
| 1 | Half title — "Positively Negbaum" on reef art |
| 2 | Copyright, ISBN, printing line |
| 3 | Full title page — title, subtitle, author, illustrator |
| 4 | Dedication |
| **5–31** | **Story — the 27 storyboard panels, one per page, in order** |
| 32 | Closing moral + "Coming next from Briny Barnacle Way" teaser |

27 panels into pages 5–31 is an exact fit. No padding, no cutting.

**Page 32 teaser** — use the cameo roster to sell the series:
> *Coming soon from Briny Barnacle Way: Negative Nancy · Negative Nelly and the Lazy
> River of Nope · The Yeah-Yeahs and the Bad Idea Parade · Barry the Bitter Barracuda ·
> Crabby the Crab and the Bottom of the Bucket*

---

## COVER FILE SPEC

KDP takes the cover as **one wraparound PDF**: back cover + spine + front cover.

**Spine width** = page count × paper thickness. At 32 pages on white premium-color paper
this lands near **0.08"**. Use KDP's cover template generator (enter trim size, page
count, paper type) — it outputs an exact-size PNG template with the fold lines marked.
Build on that template rather than calculating by hand.

**Front cover:** Wesley, warm and inviting, big title. The title should read at
thumbnail size — that's how people will actually first see it on Amazon. Test it at
200px wide before committing.

**Spine:** solid color, no text.

**Back cover:** the back-cover copy from `back-matter.md`, plus a small Wesley, plus
space for the barcode. **Leave the bottom-right ~2" × 1.2" clear** — KDP places the
barcode there automatically.

---

## LISTING SETUP

**ISBN:** take the free KDP-assigned ISBN. It lists Amazon as publisher and can't be
reused on other platforms — neither matters for launch. Buying your own ISBN only makes
sense once you're distributing beyond Amazon.

**Categories (pick 2):** Children's Books → Growing Up & Facts of Life → Friendship,
Social Skills & School · Children's Books → Growing Up & Facts of Life → Difficult
Discussions · Children's Books → Literature & Fiction → Animals → Marine Life

**Keywords (7 slots) — draft:**
1. children's book about self esteem
2. picture book about bullying and name calling
3. positive thinking book for kids
4. children's book about negative self talk
5. manatee picture book
6. social emotional learning picture book
7. read aloud picture book ages 4-8

**Pricing:** printing cost on a 32-page 8.5×8.5 premium-color paperback runs roughly
$4–6 per copy — run KDP's printing-cost calculator for the exact figure before setting
price. Royalty is 60% of list minus print cost. A $14.99–$16.99 list is standard for
this format and leaves real margin. Don't underprice a color picture book; the print
cost eats it.

---

## WHAT ISAAC HAS TO DO (nobody else can)

1. **Confirm the 27-panel version is the book.** (see illustration-production.md)
2. **Final line lock** — read the 27 pages of text and mark any word you want changed.
3. **Author credit line** — how your name appears on the cover.
4. **Dedication** — page 4.

Everything else — layout, cover build, listing copy, keyword research, upload prep —
I can do.

---

## PHASE 2 (after paperback is live, not before)

- **Kindle ebook:** picture books need fixed-layout EPUB, built separately from the
  print PDF. Worth doing, but it's a second production pass — don't let it hold the
  paperback.
- **Hardcover:** requires a printer other than KDP at this page count.
- **Read-aloud video / audio:** the 52-page master manuscript is the natural script for
  this. That's what the long version is *for*.
