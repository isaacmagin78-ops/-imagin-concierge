# IMagin Concierge — Investor Side

The research arm of IMagin Concierge. Produces branded company briefs: one page,
premium design, a defensible judgment instead of a data dump.

Proven once, on Lucid Group (LCID), 2026-08-15. Two recipients. One replied
"Name a company" — unprompted — which is the reason this folder exists.

| File | What it is |
|---|---|
| `TEMPLATE.md` | The format. Three acts, four watch items, conditional bottom line, design tokens. |
| `RESEARCH-PROMPT.md` | Prompt for a search-grounded tool that returns the slots already sourced. |

---

## Who actually buys this

Not investors. **People who need to look like they produced good thinking.**

Financial advisors, wealth managers, realtors, anyone who owes clients regular
contact and has nothing intelligent to send. They cannot produce this. We can,
repeatably, and their name goes at the top.

Why this beats selling research directly:

- **Recurring by nature.** An advisor needs one a month, forever. An investor buys
  one report once.
- **Higher willingness to pay.** It's a marketing budget, not a hobby budget.
- **Cleaner ground to stand on.** They're buying client collateral, not investment
  advice. The content still has to be impersonal and disclaimed, but the transaction
  isn't "pay me and I'll tell you what to buy."

**Expect compliance friction.** Advisors at real firms must run client-facing material
through internal review. That is not a blocker — it is the reason the as-of date, the
disclaimer line, and the sourcing are product requirements rather than polish. A brief
that clears compliance easily is worth more than a prettier one that doesn't.

---

## Production stack

| Stage | Tool | Why |
|---|---|---|
| Sourced facts | Perplexity or similar | Cites sources; that's the whole point |
| Format + voice | A Gem/custom assistant with `TEMPLATE.md` as its instructions | Holds the format steady across runs — solves repeatability |
| Visual | Canva, or built here | Where the premium look gets made |

Putting `TEMPLATE.md` into the assistant's instructions is what turns this from
"a thing Isaac made once" into a process.

---

## Open questions

- What produced the original Lucid visual? Determines whether we extend that file or
  rebuild the format cleanly.
- Pricing. Untested. Nobody has been quoted anything yet.
- Does the same format hold for private companies, where there are no filings?
  SpaceX is the first test of that.

---

## Log

- **2026-08-15** — Lucid Group (LCID) brief produced and sent to two people. First run
  of the investor side. Recipient asked for a second company (SpaceX) unprompted.
  Format captured as `TEMPLATE.md`; research prompt captured as `RESEARCH-PROMPT.md`.
  White-label positioning identified: clients pay to put their own name on the brief.
