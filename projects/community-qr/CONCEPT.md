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

---

# The version that's actually a business — sell it to other communities

Added 2026-08-15, ~04:00, Isaac's reframe. **This is the better idea and it changes the
economics, not just the scale.**

One community is a side project with a hard ceiling. A **repeatable system deployed per
community** is a product.

It is also the **same architecture as the Listing Content System** — one brief in, a full
package out, sold per unit. Same machine, different vertical. That system is already
built and already proven on a real client, which means the hard part is done twice over.

## The buyer is the property manager, not the HOA

| | HOA / condo board | Property management company |
|---|---|---|
| Decision speed | Board meetings, votes, seasons | A manager can decide |
| Deployments per sale | One | **Twenty to fifty** |
| Budget | Exists, contested | Operating budget, routine |

**Property managers run portfolios.** Sell once, deploy across every community they hold.
That is the multiplier, and it is the difference between a neighbourhood project and a
business. South Florida is unusually dense with them.

Secondary buyers: developers of new communities (wants a differentiator at handover),
and large single associations where the manager is effectively the decision-maker.

## Lead with the gate map, not the directory

**The wedge is delivery access.** Drivers who cannot get into a gated community is a
concrete, daily, universally hated problem — angry residents, overwhelmed guards, packages
abandoned at the gate. It is a pain someone will pay to fix this month.

**The services directory is an upsell after installation, not the opening offer.** It
requires provider density and resident habit, neither of which exists on day one. The gate
map works on day one, for every community, with no network effect required.

This reframes today's `claude/qr-code-gate-map-5sbszh` session: **it was not a side errand.
It was the product.**

## Why the pieces fit

- **Tracked QR is the reporting story.** Each code carries its own tag, so a manager gets
  "the north gate produced 340 scans this month." Managers have to report to boards.
  Handing them a number they can put in a board packet is most of the sale.
- **Madison Moves** already covers South Florida home services — the directory's supply
  side, partially solved.
- **Linda** works South Florida real estate at ONE Sotheby's and knows building people and
  property managers. A warm introduction, same as with Fish and Hunt USA.
- The delivery of each community's package is generated, not hand-built — which is exactly
  what makes per-unit pricing work.

## Honest constraints

- **Recurring revenue requires the codes to keep being useful.** A printed sign is a
  one-time sale; the tracking dashboard is what justifies a monthly fee. Decide which is
  being sold before quoting.
- **Signage permissions vary by community.** `VERIFY` per deployment.
- **Provider density gates the directory upsell**, not the gate map. Do not bundle them.
- Nothing here is validated. The cheapest test below still comes first.

## Test order

1. **One code, on the route Isaac already walks.** Does anything get scanned at all?
2. **The full gate map in his own community** — makes it real, and it becomes the
   reference deployment.
3. **One property manager**, shown a working install and a scan report from step 2.

Do not build for other communities before step 1 returns a number. The reference
deployment is also the demo, so the order is not a delay — it is the sales asset.

## Relationship to other tracks

Sits under the **I.Magin Concierge** umbrella alongside `madison-moves/` and the newer
`concierge-site/` (I. Magin Executive Concierge — a distinct, higher-end offer, not this).

Founder override of 2026-07-22 stands: **Tyson's Brand primary.** This changes nothing.
