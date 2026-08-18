# Adaptive Intelligence Funnel — Phase 1 audit

**Run 2026-08-18. No code written. No branches merged, moved, deleted, or deployed.**

Source briefs: three overlapping Notion pages under `IMagin Concierge` in the Ike OS
registry — "Opportunity Intelligence Funnel" (Aug 17), "IMagin Intelligence Funnel",
and "Adaptive Intelligence Funnel v0.1" (Aug 18, latest). **v0.1 supersedes the other
two** and is the one this audit answers.

---

## Part 1 — What the brief gets right, and what it does not know

### Right, and worth keeping verbatim

| Brief says | Why it holds up |
|---|---|
| Audit before building; do not create another disconnected prototype | This is the exact failure this workspace has been recovering from since 2026-08-14. The brief independently arrived at the repo's own hardest-won rule. |
| Never invent property facts, prices, reviews, credentials, imagery | Already the standing content rule in the root `CLAUDE.md` of the island repo. Consistent. |
| Apple-like restraint, mobile-first, iPhone is the canvas | Matches `DESIGN-DIRECTION.md` exactly, including the reason. |
| One front door, hidden branching, no self-classification menu | Correct product instinct, and it is the part that makes this different from every realtor lead form. |
| Do not end with "form submitted" | Correct. The existing lead-capture page ends with a confirmation line — that is the specific thing to replace. |
| v0.1 narrows to real-estate routes only | v0.1 fixed the biggest flaw in the two earlier drafts, which wanted Professional/Creator/Discovery pathways with no product behind any of them. |

### Wrong or missing — five corrections

**1. "The existing IMagin 24/7 Property Concierge" is a name, not a codebase.**
The brief repeatedly says to extend it. There is no code by that name in either repo.
What actually exists under the concierge umbrella: a static sales page
(`imagin-concierge/index.html`, live at `imagin-concierge.vercel.app`), a stdlib Python
CSV tool (`concierge-systems/concierge_tools.py`), a written but unbuilt tiered offer
(`concierge-systems/PRODUCT-PILOT.md`), and one mobile lead-capture page. Nothing is
"the product" yet. Plan for net-new build on top of good parts, not an extension.

**2. The Linda pilot framing conflicts with a standing instruction.**
The brief names "Linda Hoyt / South Florida real estate" as the first pilot environment.
`HANDOFF.md` carries Isaac's standing instruction of 2026-08-15: **do not ask Linda for
anything — give, don't request.** A funnel on her live listing needs her photos, her
verified specs, her authorization, and her open-house schedule. That is four asks.
Also: `111-pompano-beach-611` is **closed and must not be pitched again**; her live
listing is 1205 SW 4th Street, Sailboat Bend, $750,000.
**Correction:** build v0.1 against a clearly-labeled demo property with visible
placeholders, then hand her a finished, working thing with no reply required.

**3. There is no backend anywhere, so "AI reasoning underneath" has nowhere to run.**
Both repos are static HTML plus one unshipped Next.js app. Two `vercel.json` files
exist, both static. No serverless functions, no API keys, no database, no auth.
The brief's five-layer architecture (presentation / routing / reasoning / data / action)
is sound, but the reasoning layer cannot be an LLM call in v0.1 without standing up the
first backend this workspace has ever had. **Deterministic routing is not a downgrade
here** — it is testable, it cannot hallucinate a property fact, and a stranger cannot
tell the difference in a 60-second flow. Put the LLM in at the reasoning layer after the
interaction is validated.

**4. "Propose three visual directions" asks for a decision that is already made.**
`DESIGN-DIRECTION.md` was written on 2026-08-16 *because Isaac had to say it twice*:
Apple restraint, Miami palette (`#FFB78C` `#FF5787` `#A159FF` `#33C7EB`), deep
near-blacks, no full-spectrum rainbow, no generic-AI look. Presenting three novel visual
directions would make him choose again. **Do not.** Take the written standard as given
and vary only within it.

**5. Three briefs is the fifth-room bug, now in Notion.**
Three pages, two days, contradicting each other on the core routing model (three
behavioral pathways vs. four branches vs. real-estate-only). That is the same disease as
two memory files in two repos. **Collapse to v0.1 and archive the other two**, or the
next session reads the wrong one.

### One thing worth saying plainly

Verified state, unchanged: **$1.29 lifetime third-party revenue.** Publishing stopped
2026-08-10 and the queue is empty. The College Checklist $49 buy button still points at a
Stripe **test** link. A second, undocumented Stripe link sits in both link-in-bio pages
and may be taking money without delivering.

This funnel is a genuinely good idea and the audit below treats it as the real task. But
it is net-new build while paid, live surfaces are broken. Those are hours, not days.
Isaac's call — flagging it once, then proceeding.

---

## Part 2 — Inventory

Every row verified by reading the file or the tree, not the branch name.

### `-imagin-concierge` (this repo — retiring per `MERGE-PLAN.md`)

| Component | Location | Status | Reusable? | Risk / caveat |
|---|---|---|---|---|
| **Open-house lead page** | `projects/open-house-2756-ne-35th/index.html` — branch `claude/mobile-open-house-poc-y70dtp` | **Working.** 40 KB, self-contained, zero dependencies | **Yes — the strongest asset in either repo** | Single-scroll page, not a step machine. Navy/brass palette, not the Miami palette. Property is Linda's, from Aug 1. |
| ↳ what's inside it | same | design tokens · `clamp()` type scale · intent buttons (`data-intent`) · validated form + live phone mask · `localStorage` lead store · optional `FORM_ENDPOINT` POST · agent view at `#leads` · CSV copy/download · `.tbd` gold-dotted placeholder system · 16px inputs (no iOS zoom) · safe-area insets · `prefers-reduced-motion` | **≈70% lifts directly** | — |
| **Gate Map + QR tooling** | `projects/gate-map/` — branch `claude/qr-code-gate-map-5sbszh` | Working, placeholder data | **Yes** — `tools/make-qr.py`, print-ready `sign.html`, `qr.svg` | Community data is invented on purpose; irrelevant to funnel, the QR tooling is the value |
| **Executive Concierge sales page** | `projects/concierge-site/index.html` — same branch | Working, 104 KB | Partially — copy and tone only | Marketing page, not a funnel |
| **I.MAGIN brand marks** | `projects/investor-brief/brand/` — same branch | Present | **Yes** — `im-lockup-full.png`, `im-monogram.png` | — |
| **Adaptive/quiz/branching code** | — | **Does not exist** | — | `grep -rilE 'quiz\|assessment\|wizard\|multi-?step\|branching'` across both repos: **zero hits.** The question engine is genuinely net-new. |

### `I.Magin-island-repair-` (canonical repo)

| Component | Location | Status | Reusable? | Risk / caveat |
|---|---|---|---|---|
| **Concierge sales page** | `imagin-concierge/index.html` | **Live** at `imagin-concierge.vercel.app` | Yes — as the funnel's destination and for brand tokens | Was orphaned (deployed with no source) until rebuilt 2026-08-15. Redeploy needed to replace the orphan. |
| **Listing Content System** | `Listing-Content-System/` | **Working** Node generator | **Yes — this is the verified-facts data layer** | `listings/*.json` is already the schema for real listing data. `scripts/generate-package.mjs` produces per-sign tracked QR codes. Exactly what the funnel's data layer needs. |
| **Madison Moves app** | `madison-moves/` | Built, unshipped | Yes — the only real app framework in either repo | Next.js 14 + TS + Tailwind. `BookingForm.tsx` has validation, `formEndpoint`, and an `isPlaceholder()` helper worth copying wholesale. |
| **Concierge systems** | `concierge-systems/` | Working Python | Yes — as the agent-side pattern | `concierge_tools.py` derives a next action per CSV row, reads-only, never writes back. `PRODUCT-PILOT.md` is the tiered offer the result screen should route into — already written, never built. |
| **Design standard** | `DESIGN-DIRECTION.md` | Binding | **Yes — read before designing** | Not code. Ignoring it means Isaac repeats himself a third time. |
| **Memory of record** | `HANDOFF.md` (81 KB) | Current | Yes | The only trustworthy status source. |
| **Backend / serverless** | — | **Does not exist** | — | No functions, no DB, no keys. First one is a real decision, not a detail. |

### Safest working surface

**The island repo (`I.Magin-island-repair-`), new branch off `main`.** Not this repo:
it is being retired, and the `MERGE-PLAN.md` consolidation is still unexecuted, so
anything built here has to be moved later.

⚠️ **Blocker for Phase 2:** this session has **read-only** access to the island repo.
Building there needs it attached with push access — Isaac's approval. This audit doc is
committed here because this branch is the only writable surface; it should travel with
the merge.

---

## Part 3 — Three implementation options

### Option A — Adaptive fork of the open-house page
Copy `open-house-2756-ne-35th/index.html`, convert the single scroll into a step
machine. Keep the tokens, the validation, the phone mask, the lead store, the agent view,
the CSV export, the placeholder system. Add three new things: a question stack, a routing
table, a result screen. Still one self-contained HTML file. Drop-on-Vercel deploy.

| | |
|---|---|
| **Time** | One session |
| **Reuse** | ~70% |
| **Risk** | **Low.** New file; the original is untouched. Nothing live is affected. Fully reversible. |
| **Visitor sees** | Premium step-through, 6–9 taps, one short optional text box near the end, a value screen before any contact ask, then a result that quotes their own answers back |
| **Preserves expansion?** | Partly. The routing table and question set are inline, but structured as data — liftable into Option B without a rewrite. A second vertical means copying the file. |
| **Honest weakness** | Deterministic routing only. No LLM, because there is no backend. |

### Option B — Clean vertical slice in the canonical repo
Small Next.js app (or a route in the `madison-moves` shell) in the island repo. Question
set as JSON, routing engine as a pure testable module, result renderer, verified facts
read from `Listing-Content-System/listings/*.json`. One serverless route for lead
delivery — the first real backend. Vercel deploy, shareable result URLs.

| | |
|---|---|
| **Time** | Two to three sessions |
| **Reuse** | ~40% — `BookingForm` validation, design tokens, listing JSON schema, QR tooling |
| **Risk** | **Medium.** New app, new deploy target, first backend. Isolated, but more surface. |
| **Visitor sees** | Same experience as A, plus real URL routing and a result they can send to someone |
| **Preserves expansion?** | **Yes.** Questions and routes are data, so vertical two is a second JSON file. |
| **Honest weakness** | Two to three sessions before a stranger touches it. |

### Option C — Extensible intelligence engine
A standalone `intelligence-engine/`: schema-driven question graph, pluggable routing
(deterministic rules with optional LLM scoring), a verified-facts adapter interface,
result composer, attribution/event log, agent dashboard. Real estate is adapter #1.

| | |
|---|---|
| **Time** | Five-plus sessions before anything is testable |
| **Reuse** | ~25% |
| **Risk** | **High.** This is the "another operating system" all three briefs explicitly forbid, built before a single stranger has completed the flow. |
| **Visitor sees** | Nothing, for weeks |
| **Preserves expansion?** | Maximally — for a thing not yet proven worth expanding |

### Recommendation — **A now, B on the strength of what A shows.**

A puts a real thing on a phone this week, built on the best code in either repo, risking
nothing that is live. It answers the only question that matters in v0.1: *does a stranger
finish it, and does the result make them feel understood?* That question is not
architectural, and no amount of engine gets you closer to it.

If the answer is yes, B is a port, not a rebuild — A's questions and routes are already
structured as data. C is justified only when a real second vertical asks for it.

---

## Part 4 — Proposed flow for Option A

Twelve screens maximum, six for a low-intent visitor. Entry context (`?src=yardsign`,
`openhouse`, `flyer`, `social`) is captured from the URL and never asked for.

| # | Screen | Detail |
|---|---|---|
| 1 | **Front door** | Property name, one verified photo, one line: *"Before you walk in — sixty seconds, and I'll tell you whether this house actually fits."* One button: **Start.** |
| 2 | **Why you're here** | Four cards: looking for a home · thinking about selling · investment · curious about the neighborhood. Sets the primary route. |
| 3 | **Timing** | This month · 1–3 months · 3–6 months · later / not sure. |
| 4 | **Branch question** | buyer → cash / pre-approved / talking to a lender / haven't started. seller → own it or rent it out, and have you spoken to an agent. investor → cash flow / appreciation / 1031 / short-term rental. curious → **short-circuits to screen 10.** |
| 5 | **Representation** | Working with an agent already? Yes · No · Was, not anymore. Represented buyers get a courtesy route, never a pitch. |
| 6 | **Fit** | *"What matters most in your next place?"* Multi-select drawn **only** from the listing JSON's verified feature list. Nothing invented. |
| 7 | **Range** | Buyers and investors only, and only if unrepresented. Bands, never a text box, straddling the real asking price so "can't afford this one" is detectable without embarrassing anyone. |
| 8 | **One optional sentence** | *"Anything you want me to know?"* The first typing in the flow, after six taps. Skippable. |
| 9 | **Value, before any ask** | Verified facts only: what this house is, what it is not, and one honest read against their stated priorities. This is the give-before-you-ask screen. |
| 10 | **Result** | *"Here's where you actually stand."* Strongest next step and why, citing their own answers · a realistic alternative · one thing they probably haven't considered. Route-specific. |
| 11 | **Next action** | One button: request a showing · get the seller report · send me comparables · see the neighborhood. **No dead ends on any route.** |
| 12 | **Contact** | Only here, only for routes that need it. Reuses the existing validated form and phone mask. |

### Branching, in plain English

- **Curious / neighbor** → skips 5, 6, 7, 8, 12 → neighborhood result, never asked for contact.
- **Represented buyer** → skips 7 → result routes to *"send this to your agent"*, no showing request, no capture.
- **Financing not started, and range below asking** → *future buyer* → the next step is lender prep, not a showing. This is the route most lead forms get wrong.
- **Cash or pre-approved, range at or above asking, timing ≤ 3 months** → *hot buyer* → showing request is the first action.
- **Seller** → skips 6, 7 → seller report offer, which is the asset that wins listing appointments.
- **Investor** → skips 6 → returns-oriented result built from verified facts only. **No projected returns.**

### What the agent sees

The existing `#leads` view, extended: route · timing · financing state · representation ·
priorities · full answer trail · entry source. Linda opens one page and sees *why* each
lead is what it is, and exports CSV exactly as she does now.

---

## Open questions for Isaac — Phase 2 does not start until these are answered

1. **Approve Option A?** Or a different one.
2. **Which property?** Recommend a clearly-labeled demo with visible `.tbd` placeholders —
   not the live Sailboat Bend cottage, which would mean asking Linda for things.
3. **Push access to the island repo?** Building in a retiring repo means moving it later.
4. **Collapse the three Notion briefs to v0.1?** Two contradicting drafts are still live in
   the registry.
5. **Miami palette or the existing navy/brass?** `DESIGN-DIRECTION.md` says Miami; the
   page being forked is navy/brass. One of them has to give.

---

# Addendum — travel is the destination (Isaac, 2026-08-18)

**Restating the direction so it is on record:** bespoke travel is the ultimate goal for
IMagin Concierge in the long run. Travel has to be a first-class route in the engine,
not something bolted on after real estate.

## This is the third time it is on record, and the brief dropped it

| When | Where | What it says |
|---|---|---|
| 2026-07-29 | Notion, **the canonical `IMagin Concierge` page itself**, "Future expansion" | *"AI-driven voice concierge for HNW households, paired with a **hybrid travel model** — post-transaction retention tool sold through elite brokers."* Revenue: *"bypass low-margin consumer affiliate programs; use **host-agency partnerships to capture commissions on luxury travel, aviation, yachting**."* Distribution: B2B2C through ONE Sotheby's-tier networks. |
| 2026-08-16 | `HANDOFF.md`, "The concierge differentiator" | *"anywhere in the world, wants to change their travel or do anything they want — that needs to be built in."* Filed as **a product requirement, not a passing remark.** Ends: **"Nobody has scoped this."** |
| 2026-08-18 | This session | Bespoke travel is the long-run goal. |

**ChatGPT's three briefs mention travel zero times.** All three were written off the
IMagin Concierge Notion page — the same page that carries the travel thesis in its own
"Future expansion" section. The endgame was on the page and did not survive into the
brief. That is the single largest gap in it, and it is why the brief optimizes for a
real-estate lead form rather than an engine.

## The finding that changes the architecture

**The travel product splits into two halves with opposite data problems.**

**Half one — logistics.** Flights, hotels, availability, price, amenities.
**Verified live in this session, not assumed:** a Booking.com query for 5-star Fort
Lauderdale properties, 12–14 Sep, returned real inventory — Four Seasons at $1,275.50,
Ritz-Carlton at $839.06, Pier Sixty-Six at $718.20 — with review counts, coordinates,
full facility lists and live booking URLs. Expedia, Trivago and lastminute.com are
attached alongside it.

This matters because of the hard rule: **never invent a fact.** Real estate has no
verified data source in this workspace — no MLS access, so every listing fact must be
hand-entered or requested from Linda, which is an ask Isaac has said he will not make.
**Travel's data layer is already solved and real estate's is not.** That is the opposite
of what the brief assumes.

⚠️ **But the moat is zero here, and one caveat is load-bearing:** those booking URLs carry
`aid=8132308` — the connector's affiliate ID, **not Isaac's**. The connector proves the
*data layer*, not the *revenue*. Commission requires his own host-agency relationship,
exactly as the 2026-07-29 note already said. Do not confuse the two.

**Half two — situational intelligence.** What to wear to this specific evening. What gets
you turned away at that door. What is current this season versus dated. How the event
actually runs, and who is in the room. **There is no data source for this anywhere** —
not in an API, not in a repo, not scrapeable. It exists only in Isaac's thirty years in
those rooms, and `HANDOFF.md` already identifies it as the moat.

**So the scarce asset is not code and not inventory. It is elicitation from Isaac.**
It has the longest lead time of anything in this plan and it needs zero engineering.

## What changes — and what does not

**The recommendation stands: Option A, then B.** Travel does not justify jumping to
Option C. Building a general engine before one stranger has completed one flow is the
same mistake in a more expensive costume. What travel changes is small and cheap:

1. **A's verified-facts blob becomes an adapter with a declared shape** — `facts`,
   `constraints`, `routes`, `resultTemplates` — so a travel payload can replace the
   real-estate payload without touching the presentation layer. Roughly thirty extra
   minutes in Option A, and it is what makes B a port instead of a rewrite.
2. **v0.2 becomes the travel front door**, not vertical three. Real estate proves the
   interaction; travel is what the interaction is ultimately for.
3. **Do not merge travel routes into the open-house flow.** Two front doors, one engine.
   A yard-sign QR that asks about travel is incoherent, and incoherence is what kills
   completion rates.

## The recommendation this actually produces

**Start the situational-intelligence capture now, in parallel with Option A. It needs no
code and nothing else can start it.**

Concretely: structured interview passes with Isaac, one room at a time — an art opening,
a members' club dinner, a boat-show week, a charity gala, a first meeting at someone's
home. For each: what to wear and what specifically fails, what time people actually
arrive, what gets said and not said, what the host is judging, what a newcomer gets
wrong. Captured as structured records against a controlled vocabulary, the same shape
`concierge_tools.py` already uses for the collection inventory — derived recommendations,
never stored ones.

That corpus is the thing a competitor cannot buy, and every month it does not exist is a
month of the moat not compounding.

## Open commercial question

The 2026-07-29 note says explicitly: **bypass low-margin consumer affiliate programs.**
"Bespoke" points the same way — fee or retainer, relationship-driven, low volume, high
ticket, sold B2B2C through brokers — not affiliate commissions on hotel bookings. Worth
confirming, because it decides whether the travel front door optimizes for booking volume
or for qualifying a very small number of people.

## Contradiction found — three pilot properties across three canonical records

| Record | Property |
|---|---|
| Notion `IMagin Concierge`, "Pilot" | **400 SE 5th Terrace, Pompano Beach** — $500 for one listing |
| `HANDOFF.md`, verified 2026-08-15 | **1205 SW 4th Street, Sailboat Bend** — her actual live listing |
| Open-house POC code | **2756 NE 35th Street** — the page that would be forked |

Three records, three addresses, all current. Pick one and write it down, or the next
session picks a different one.

## Revised open questions

1. **Approve Option A with the adapter shape**, then B, with travel as v0.2?
2. **Start the situational-intelligence capture in parallel?** This is the one with the
   longest lead time and it is not blocked by anything.
3. **Bespoke fee model or booking commissions?** Decides what the travel front door optimizes for.
4. **Which property** for the real-estate v0.1 — and see the contradiction above.
5. **Push access to the island repo.**
6. **Collapse the three Notion briefs to v0.1** and add the travel thesis back into it.
7. **Miami palette or the existing navy/brass?**

---

# Addendum 2 — how it has to feel (Isaac, 2026-08-18)

A product requirement, not a mood. In his own words:

> *"The more people feel like they're living in the moment, like it's almost like sci-fi,
> people will enjoy how they can interact with it once they get used to it. So we have to
> make it like me. I'm having fun and making things — that has to be fun for the people
> using it, yet beautiful and something that they need."*

Five tests anything built under IMagin Concierge has to pass:

1. **Alive, not static.** It responds in the moment. A page that sits there fails.
2. **Sci-fi in feel, never in language.** The wonder comes from behaviour. Saying "AI" at
   someone is the opposite of this — and the AI-fear audience is the one he reaches.
3. **Fun first.** If it isn't enjoyable, nobody stays long enough to get used to it.
4. **Beautiful.** Apple restraint, Miami palette — already fixed in `DESIGN-DIRECTION.md`.
5. **Needed.** Fun and beautiful *on top of* something people actually need, not instead.

**This raises the bar on Option A.** A merely clean questionnaire passes the brief and
fails this. The deterministic routing still holds — but the *feel* has to be alive:
motion that responds, questions that visibly react to what came before, a result that
arrives rather than loads.

## Also recorded — he cannot ask questions while reading

He said reading these pages is hard, and he wants to talk about them instead. That is a
real constraint on every deliverable, not a preference:

- **Checked 2026-08-18:** no artifact runtime capability lets a published page hold a
  conversation. The roster is `artifact`, `downloads`, `mcp`, `self` — state, files, and
  connector calls. No model access. **A talking page cannot be built today.** Do not
  promise one.
- **The working route is Notion**, where Notion AI can discuss the page in place and he
  can paste it into Perplexity or Gemini. Every substantial deliverable from here gets a
  Notion twin written so another assistant can pick up the conversation cold.
- First one: `The Bucket With A Hole — talk to me about this one`, under `IMagin Concierge`
  in the Ike OS registry.
