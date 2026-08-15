# Community QR layer — concept note

**Captured 2026-08-15, ~03:55, from Isaac brainstorming. Explicitly not urgent.**
Filed so it survives the session, not to schedule anything.

## The idea

A hyperlocal QR layer for Isaac's own community: residents finding trusted services —
dog walkers, housekeepers, handymen — and residents selling things to each other instead
of routing through eBay or Craigslist. QR codes as the entry point, physical placement
as the distribution.

## The asset nobody else has

**Isaac walks the same route through this community every day, with a dog people
recognise.** That is hyperlocal distribution with a face attached, and it cannot be
bought, cloned, or outspent. Every other part of this is replaceable. That part isn't.

He also has **drone footage of the community**, location currently unknown — worth
finding before it's needed.

## Pieces that already exist

| Piece | Where |
|---|---|
| QR gate map for delivery drivers | `claude/qr-code-gate-map-5sbszh` (concierge repo) |
| Tracked QR signage kit — print-ready, per-code analytics | `Listing-Content-System/out/111-pompano-beach-611/signage/` |
| `carwash-flyer.png` — a service flyer sample | `projects/concierge-site/samples/` |
| Madison Moves — South Florida home concierge site | island repo `madison-moves/` |
| Drone footage of the community | **location unknown — find it** |
| Distribution | Isaac's daily walk |

The tracked-QR pattern is the important precedent: each code carries its own tag, so
scans are attributable per placement. That is the whole measurement story, already built
and already proven on a real listing.

## Split the idea in half — the halves are not equally viable

**Resident-to-resident marketplace — hard, deprioritise.**
Classic chicken-and-egg: no buyers without sellers, no sellers without buyers. Facebook
Groups and Nextdoor already own neighbourhood resale with years of network effect. This
is the graveyard half.

**Service-provider directory — much easier, and it's the monetizable half.**
Service providers pay for leads. Residents never pay to browse. One side has money and
motivation; the other just needs to find a plumber on a Sunday. That asymmetry is what
makes a directory work where a marketplace doesn't.

**It is also close to what Madison Moves already is** — a South Florida home-concierge
site — pointed at one community instead of a whole region. Narrowing scope makes it
easier, not smaller.

## What would have to be true

- Enough providers in range that a resident's search actually resolves. A directory that
  returns nothing once is never opened twice.
- Whatever governs the community permits posted QR signage. `VERIFY` before printing.
- One placement that gets scanned. Everything else follows the first real scan; nothing
  follows a plan.

## Cheapest possible test

Pick **one** service category — dog walking is the obvious one, since Isaac is already
visible in that context daily. One QR code, one tracked destination, one placement on the
route he already walks.

If it gets scanned, the idea is real. If it doesn't, that answer cost one flyer and no
build. Do not build a directory before a single code has been scanned.

## Relationship to other tracks

Sits under the **I.Magin Concierge** umbrella alongside `madison-moves/` and the newer
`concierge-site/` (I. Magin Executive Concierge — a distinct, higher-end offer, not this).

Founder override of 2026-07-22 stands: **Tyson's Brand primary.** This changes nothing.
