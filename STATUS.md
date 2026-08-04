# WHERE WE STAND

Current state only. Updated 2026-08-04. If this is stale, say so and it gets refreshed.
History lives in `CLAUDE.md` → ACTIVE CONTEXT. This file is the 30-second answer.

---

## 🔴 TWO LIVE REVENUE LEAKS — fix these before building anything else

Found 2026-08-04 in the Notion page *"Knowledge Asset, Research, Prompt,
Creator, and Cross-AI Continuity Loss — Recovery Inventory"* (Ike OS, dated
Jul 29). Both are finished work with a broken cash register.

**1. College product checkout is in TEST MODE.** A finished $49 product with a
complete sales page is wired to a Stripe `test_` URL. Nobody can pay. Nobody
has been able to pay. ~20 minutes to fix.

**2. Amazon affiliate links were never in the funnel.** Tracking ID
`tysonspicks-20` exists and Associates is likely already approved. Roughly 25
posts since Jul 25 have carried *"As an Amazon Associate I earn from
qualifying purchases"* and *"gear picks in bio"* — **with no tagged link
anywhere in the path.** Every qualifying purchase in that window earned $0 for
a fixable reason. It is also a live disclosure-accuracy problem: the posts
claim an affiliate relationship that has no links behind it. ~30 minutes.

**These outrank everything else in this file.** They are finished assets that
are already receiving traffic.

> **Note:** "Tyson's Picks" — raised 2026-08-04 as a new app idea — already
> exists as a named Amazon storefront concept with six planned Idea Lists,
> documented Jul 26. The idea was reinvented because the original was
> unreachable. That is the cross-AI continuity problem in one example.

---

## 🟢 Can move right now — nothing blocking

**Template pack** — `projects/template-pack-firstgen-financial/`
The active build and the revenue project. Niche locked (first-gen parent
financial planning toolkit). Pricing locked ($9.99 founders cohort of 100 →
$29.99 permanent). Content written: **none**. Six headings, five empty boxes.
Notion and Airtable are both live and either can host it.

---

## 🟡 Waiting on Isaac — small actions, big unblocks

| Action | Unblocks | Effort |
| --- | --- | --- |
| Authorize **Stripe** connector | Taking payment for the template pack | ~30 sec |
| Upload the Tyson video, **or** have Gemini post it | The acorn post | 1 command / 1 request |
| Rename repo — drop the leading dash | Terminal use on the Mac stops fighting you | ~1 min |
| Authorize **Canva** connector | Design work (optional) | ~30 sec |

---

## 🔵 Decision pending — no rush

**Blotato vs. Gemini for posting.** Isaac's read: Gemini is free and lower
friction, so drop the Blotato subscription. Probably right. The one capability
Blotato has that a browser agent doesn't is unattended posting — scheduling,
queueing, multi-platform in one shot.

Agreed sequence: have Gemini post one real video → run it a week → *then*
cancel Blotato. Don't cancel first and discover the replacement can't do it.

---

## ⛔ Known dead ends — don't re-litigate

- **Claude has no Computer Use here.** No Mac access, no browser control, no
  reach into Downloads. Sessions run in a cloud container. This has come up
  repeatedly; it will not change within a session.
- **Claude cannot upload media to Blotato.** `database.blotato.io` is blocked
  by session egress policy. See `shared/setup/social-posting-pipeline.md`.
- **Facebook posting** is unavailable until a Page is attached to the account.

---

## Connector status (verified 2026-08-04)

Working: **Notion** (read confirmed), **Airtable** (5 bases), **Blotato**
(auth + accounts + upload slots), **GitHub repo** (pushing clean).
Needs authorization: **Stripe**, **Canva**.
Untested — do not assume: Vercel, Gmail, Drive, Slack, Shopify.

---

## The observation that matters for planning

Only the *social posting* track is blocked. The template pack — the project
Isaac chose as the priority — has nothing in its way and hasn't been started.
The blocked thing is the loud thing; the unblocked thing is the one that makes
money.
