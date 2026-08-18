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
