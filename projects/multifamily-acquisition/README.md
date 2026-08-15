# Multi-family acquisition — DSCR track

Opened 2026-08-15. Isaac's stated intent: buy multi-family in South Florida, financed on
the property's income rather than his own. Researched independently by Perplexity and
Gemini before this file existed; this records the mechanics and the screening method.

## The product

**DSCR loan — Debt Service Coverage Ratio.** The lender underwrites *the property*, not
the borrower. No W-2s, no tax returns, no personal debt-to-income calculation. The only
question is whether the building's rent covers its own debt.

```
DSCR  =  gross rental income  ÷  PITIA
         (principal + interest + taxes + insurance + association dues)
```

- **1.0** = the property exactly covers its debt. Most lenders' floor.
- **1.20–1.25** = what most lenders actually prefer.
- Below 1.0 exists at some lenders with compensating factors, at worse terms.

## The tradeoff — the constraint moves, it doesn't disappear

| | FHA owner-occupied (2–4 unit) | DSCR |
|---|---|---|
| Down payment | ~3.5% | **20–25%** |
| Personal income underwritten | Yes | **No** |
| Must occupy a unit | Yes, ~1 year | No |
| Rate | Lower | Typically 1–2+ points higher |
| Property count limit | Conventional caps apply | Usually none |

**The gate is no longer "can I prove income." It is "do I have the down payment."** Both
products are real; they are different doors for different situations. Worth knowing FHA
owner-occupied exists as the low-cash path if living in a unit is acceptable.

**Standard features to ask about up front — normal, not red flags, but they change the
math:** prepayment penalties (commonly 3–5 years, step-down) and reserve requirements
(commonly 3–6 months of PITIA).

`VERIFY current rates, minimum DSCR, down payment and credit minimums with an actual
DSCR lender.` The structure above is stable; the numbers move.

## The South Florida landmine: insurance is in the denominator

Insurance sits **inside PITIA**. A South Florida insurance quote can single-handedly push
a property below the ratio and disqualify an otherwise good building — same rents, same
price, deal dies on one line.

**Therefore: get an insurance quote early in the screen, not late.** This is the single
most deal-relevant number in the region and the one most likely to be assumed rather
than checked.

## The two-minute screen

Anyone can run this per property before spending real attention on it:

```
monthly gross rent  ÷  (mortgage + taxes + insurance + HOA)
```

- **≥ 1.25** — worth a real conversation
- **1.00–1.25** — marginal; depends on the lender and the reserve position
- **< 1.00** — stop

## What we can pull ourselves, and from where

Isaac's point is correct: most of the screen is public data and does not require paying
anyone. Broward County specifics, since Pompano Beach:

| Input | Source | Automatable? |
|---|---|---|
| Assessed value, tax history, building details, sales history | **Broward County Property Appraiser** (bcpa.net) — public record | Yes |
| Deeds, liens, encumbrances | Broward County Records | Yes |
| Flood zone | **FEMA Flood Map Service Center** (msc.fema.gov) | Yes |
| Active listings and asking prices | Web search across listing sites | Partly |
| Market rent comps | Web search; rental listing sites | Partly — noisy, needs judgment |
| Permit history, code violations | Municipal records (Pompano Beach / Broward) | Usually |
| **Insurance quote** | **A broker, per property** | **No** |

**The honest boundary:** everything except insurance can be gathered without a human.
Insurance — the number most likely to kill the deal — requires a real quote on a real
address. Any screening tool should treat it as a required manual input rather than an
estimate, or the tool will confidently produce false positives.

**Environment note:** in this container, `WebFetch` was egress-blocked for both external
domains attempted on 2026-08-15, while `WebSearch` worked. Data access depends on the
network policy of whichever environment runs the screen. Check before assuming a source
is reachable.

## Isaac's existing advantages

- **Linda S. Hoyt — his sister — is a top-producing Broker-Associate at ONE Sotheby's
  (Fort Lauderdale).** She can supply the two hardest numbers: real market rents and real
  insurance figures for specific buildings. This is her actual job.
- **He already began.** Connecting Wells Fargo via Plaid on ~2026-08-13 to organize his
  finances is the prerequisite step for any lender conversation — done, and filed under
  housekeeping rather than recognized as progress.
- Existing real-estate marketing background and the Listing Content System, which is
  adjacent domain knowledge.

## Next actions

1. **Ask Linda** for market rents and insurance figures on 2–4 unit buildings in the
   target area. Separate conversation from the content arrangement — do not combine them
   in one call.
2. **Talk to one DSCR lender** to get today's real numbers: minimum DSCR, down payment,
   rate, prepay terms, reserve requirement, credit minimum.
3. **Decide the door.** DSCR (no income check, ~25% down) vs FHA owner-occupied
   (~3.5% down, must live there a year). The answer follows from available cash, not from
   which product sounds better.
4. **Build the screening sheet** once the lender's real thresholds are known — pulling
   tax, flood, and sales history automatically, with insurance as a required manual field.

## Not yet decided

Whether this is a near-term action or a direction. Founder override of 2026-07-22 puts
**Tyson's Brand primary**; nothing here supersedes that. Recorded so the intent survives
the session, not to reprioritize anything.
