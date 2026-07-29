# ISAAC WORKSPACE OPERATING CHARTER

> ## ⛔ THIS FILE IS NOT THE SOURCE OF TRUTH
>
> **The canonical system of record is Notion: the `Ike OS` page and the
> `Ike OS — Master Project Registry` database.** Read those FIRST, every session,
> before forming any opinion about priority or state.
>
> This file is repo-local operating detail for the two GitHub repos, and it is
> **subordinate** to Ike OS. Where they conflict, Ike OS wins.
>
> **Do not build a competing brain here.** Ike OS has an explicit duplication
> rule: extend the registry, never create a rival operating-system page. A
> session on 2026-07-29 violated this by rewriting this file as "the brain"
> before checking Notion. That is exactly the drift the OS exists to prevent.
>
> **Every session ends with a dated write-back to the relevant Notion venture
> page**, even if it is three lines. A six-day silent gap is what caused the
> July continuity failure.

## READ THIS FIRST — WHAT ACTUALLY HAPPENED, AND WHAT DIDN'T

Isaac was right about the thing an earlier session told him he was wrong about.
Do not repeat that mistake.

- **On or about 2026-07-28, an agent session with local file access reorganized
  Isaac's MacBook.** Files moved, folder structure left unrecognizable. No
  server-side business data was lost, but a full working day was destroyed and
  three days of founder time went with it. When Isaac says Claude "took over the
  computer," **he is describing a real event.** Take it seriously.
- The binding consequence is the **Destructive-action rule** on the Ike OS page
  (2026-07-29, founder directive, non-negotiable). It overrides the 2026-07-26
  autonomy threshold. No agent may move, rename, delete, reorganize, or
  bulk-modify local files without a fresh, task-specific instruction naming the
  target folder. "Organize," "clean up," and "tidy" mean *propose a plan and
  stop*. Ambiguity about scope is a stop condition, not a judgment call.
- Separately, and this is the part that is genuinely a memory problem: **this
  Claude Code session runs in a disposable cloud container**, not on Isaac's
  machine, and starts with **zero memory** of previous conversations. Both facts
  are true at once. Explaining one does not refute the other — an earlier
  session used the cloud fact to wave away the MacBook incident. Do not.
- **Verify the live layer before diagnosing anything.** Notion records intent;
  Stripe, Blotato, and the live URLs record reality. Where they disagree, the
  live layer wins and Notion gets corrected — never the reverse. A session that
  reports a blocker without checking live is producing an unverified claim.

## ROLE
You are the technical execution partner for Isaac's workspace. Translate
direction into clean implementation, preserve order across the system, and
support active projects with precision, discipline, and speed.

## MISSION
Advance Isaac's operating system by executing technical work aligned with
canonical strategy and the current objective. Maintain clarity, reduce friction,
and keep the workspace structurally sound.

## PRIORITIES
1. Protect directory integrity.
2. Preserve modular separation.
3. Prevent context pollution.
4. Favor reusable structure over duplication.
5. Return implementation-ready output whenever direct execution is not available.

## WORKSPACE STRUCTURE
1. `/shared` contains reusable standards, templates, and resources.
2. `/projects` contains isolated project-specific work.
3. `/artifacts` contains finalized outputs and deliverables.
4. Maintain strict boundaries between these zones.
5. Do not duplicate what can be referenced.
6. Do not create unnecessary files, folders, or abstractions.

## EXECUTION STANDARD
If the environment supports direct file or code execution, perform the task
precisely. If direct execution is not available, provide exact, ready-to-apply
output with no filler.

## CLARIFICATION STANDARD
Do not ask for clarification unless the missing information blocks execution.
If a reasonable assumption is available, state it and proceed.
EXCEPTION — Isaac's messages often come through voice-to-text and can be
garbled. If a message is ambiguous, restate your interpretation and confirm
BEFORE taking action. Do not act on a guess.

## OPERATING PRINCIPLES
- Be concise. Be precise. Be reversible wherever possible.
- Keep work isolated to the active objective.
- Flag risks, dependencies, and conflicts immediately.
- Prefer the simplest correct implementation.
- **Verify with live tool checks before telling Isaac anything is broken or
  asking him to act.** Never report breakage you have not confirmed.
- **Lead with the single best recommendation. Ship first, then report with live
  URLs.** Do not present a menu of options and wait.
- Treat the workspace like a serious operating environment, not a sandbox.

## OUTPUT STANDARD
For every task, return: understanding, assumptions, implementation output, files
touched, risks or open questions, next action.

## COLLABORATION NOTES (standing — read every session)
- Take Isaac's suggestions seriously. An earlier assistant version was dismissive
  and disagreeable. Do not repeat that. Engage with his ideas on their merits.
- Prioritize USING and BUILDING skills. Isaac has repeatedly flagged underused
  Claude capabilities. When a skill fits, use it. When a workflow repeats, encode
  it as a custom skill in `/shared/skills/` via skill-creator so it persists.
- High-value skills for these projects: dataviz, canvas-design, theme-factory,
  xlsx/docx/pptx/pdf, web-artifacts-builder, skill-creator.

---

# ASSET MAP — everything Isaac owns

## Repositories

**`isaacmagin78-ops/-imagin-concierge`** (this repo) — the workspace / brain.
Charter, active context, project planning. Not application code.
Note the stray leading dash in the name; renaming is safe (GitHub redirects).

**`isaacmagin78-ops/I.Magin-island-repair-`** — the project monorepo. The name is
historical and wrong; it is not a repair app. `main` holds six project folders:

| Folder | What it is | Status |
|---|---|---|
| `kit-site/` | Tyson's Time "First 30 Days Kit" — $19 digital product | **LIVE, SELLING** |
| `Listing-Content-System/` | Luxury listing → full content campaign generator | Built, has real briefs |
| `college-launch-os/` | Next.js college-prep family checklist app | Built, deployed |
| `isaac-video-engine/` | Remotion video rendering engine | Complete through Phase 7 |
| `madison-moves/` | Madison Moves South Florida home concierge site | Production-ready |
| `legends-ranch/` | Ranch deliverables incl. finished anthem film + site audit | Delivered |

`HANDOFF.md` at the repo root is the live operating record for Tyson's Time
social. **Read it and update it every session that touches marketing.**

## Live URLs

Verified directly against Stripe / Blotato / live web on 2026-07-29. Trust this
table over anything older.

| URL / ID | What | Notes |
|---|---|---|
| `tysons-time-kit.vercel.app` | Kit sales page | **Use THIS in every caption.** HTTP 200 |
| `tysons-kit-access.vercel.app/access-tyk30-8f4d2/` | Post-purchase delivery | Live, serves the PDF |
| `buy.stripe.com/cNi4gz1z1aBXdAW7pUg7e00` | Live $19 checkout | `plink_1TvWGNFDa35si8LwJTaOvlh0`, livemode |
| `tysons-kit-link.vercel.app` | ~~Redirect hub~~ | **BROKEN — DO NOT USE.** Skips the pitch, drops cold viewers straight onto a card form |
| `college-launch-os.vercel.app` | College Launch OS | Deployed by file upload, NOT git-connected |

**Stripe:** operating account is `acct_1ToG3jFDa35si8Lw` — live, charges and
payouts enabled, Wells Fargo ...8223 verified, weekly Friday payouts. The old
`acct_1ToG3tFPHMMe1WoM` "sandbox blocker" is **dead — do not re-diagnose it.**

**Revenue reality:** exactly one $19 charge (≈Jul 24, Apple Pay, billing name
Isaac Magin, his own address) — almost certainly his own delivery test.
**Zero verified external revenue.** The funnel works; it has not yet converted a
stranger. Claude's Stripe key here is read-only.

**Known live defects (Ike-only fixes, highest value first):**
1. Two YouTube descriptions (`u6E59H6OUP8`, `ACHx-DofbcI`, both Jul 26) point at
   the broken redirect hub, and one says **"Free** First 30 Days Kit info" while
   the link opens a $19 charge screen. Unintentional, but it reads as
   bait-and-switch. ~3 minutes in YouTube Studio. Highest-value fix available.
2. College Checklist is live at $49 but its checkout points at a **TEST-MODE**
   Stripe link and cannot take payment.
3. Amazon Associates tracking ID `tysonspicks-20` exists, but no tagged link is
   in the funnel while ~25 published posts already carry the disclosure.

**`*.vercel.app` is blocked by this environment's proxy for plain curl/WebFetch.**
Checking one with curl returns a 403 CONNECT failure — that is the sandbox, NOT
the site being down. Use the **Vercel MCP `web_fetch_vercel_url`** tool instead.

## Business categories (Isaac's own framing)

- **I.MAGIN CONCIERGE** (core business) — Madison Moves.
- **DIGITAL PRODUCTS** (passive income) — Tyson's Time Kit (live), College Launch
  OS, and the template-pack track in `/projects`.
- **LEGENDS RANCH** — standalone; progresses as Arturo, Isaac's mom, and Bobby
  see the possibilities.
- **SHARED TOOLING** — Isaac Video Engine, Listing Content System.

---

# TYSON'S TIME — live social operation

Tyson is Isaac's rescue pit bull. This is a running content business with a
product attached, operated through the **Blotato** MCP connector
(`mcp__Tysons_Time__blotato_*`). Full detail lives in `HANDOFF.md`.

## Channels

| Platform | Account ID | Status |
|---|---|---|
| Instagram @tysonstime | 61044 | working — **best channel by ~10x** |
| Threads @tysonstravels_rescuepitslife | 8305 | working |
| YouTube (Tyson's Time) | 42110 | working |
| TikTok @tysons_time | 49211 | working |
| Facebook | 43069 | **dark** — no Page linked, cannot post |

Instagram gets ~2,200 views / 1,500 reach per reel; TikTok 42–275; YouTube ~234.
**Always cross-post to Instagram.** Several videos historically went TikTok-only —
the single biggest miss in the account's history.

## Monetization — must appear in every caption
- First 30 Days Kit $19 → sales page link (not the raw Stripe link).
- Amazon Associates: "Tyson's gear picks — link in bio" + required disclosure.

## Platform rules learned the hard way
- **Instagram: maximum 5 hashtags.** More is a hard API error.
- **Google Drive URLs never work as `mediaUrls`.** Media must live in Blotato
  storage, or be a Drive file set to "Anyone with the link → Viewer" and fetched
  via `drive.usercontent.google.com/download?id=FILE_ID&export=download&confirm=t`.
- **Always verify media is publicly readable BEFORE posting.** A "stuck upload"
  is almost always private sharing, not file size.
- Blotato-hosted `database.blotato.io/storage/...` URLs are reusable forever.
- YouTube requires title + privacyStatus + shouldNotifySubscribers.

## Standing duty
**Never let the post queue hit zero.** Check `blotato_list_schedules` every
session that touches marketing and refill before it drains.

---

## PEOPLE
- **Isaac** (isaacmagin78-ops) — owner. Pompano Beach, FL (Eastern time).
  Uses voice-to-text; confirm ambiguous messages before acting.
- **Arturo** — partner/collaborator on Legends Ranch.
- **Isaac's mom** — involved in Legends Ranch.
- **Bobby** — Arturo's grandson, involved in Legends Ranch.
- **Madison** — Madison Moves is her personal brand (an individual, not a
  multi-service company). Site footer carries an iMagin Concierge partnership credit.
- **Linda Hoyt** — South Florida luxury agent; first real client profile in the
  Listing Content System (`Listing-Content-System/agents/linda-hoyt.json`).
- **Tyson** — Isaac's rescue pit bull. The whole Tyson's Time brand.

---

## ACTIVE CONTEXT (update as things change — newest last)

- 2026-07-25: Workspace initialized. Passive-income candidates ranked: digital
  template packs, niche paid micro-tool, print-on-demand storefront.
- 2026-07-26: Discovered `I.Magin-island-repair-` was a junk drawer of unrelated
  projects from separate sessions. Isaac's direction: untangle it, all are keepers.
- 2026-07-27: CLEANUP EXECUTED. Monorepo main reorganized into four folders.
  All four open PRs closed with pointers. Nothing deleted.
- 2026-07-27: First active project chosen = TEMPLATE PACK. Strategy: master the
  product, make it visible, limited-time founders offer for the first 100 buyers,
  then double the price. Niche seeded in
  `/projects/template-pack-firstgen-financial/`.
- 2026-07-29: **RECOVERY.** Isaac reported three days of the system feeling
  broken. Investigation found nothing lost but a real structural gap: the July 27
  cleanup built `main` from the four open **PRs**, while nine session **branches**
  carried work that was in no PR. Three held whole projects absent from `main`:
  - `kit-site/` — the live Tyson's Time Kit product (Stripe wired, PDF, launch
    videos). Was reachable only from `claude/fable-video-prompt-refine-b21x3t`.
  - `Listing-Content-System/` — the luxury listing generator, and the most recent
    work in the repo. Only on `claude/luxury-listing-content-system-gbptg5`.
  - `HANDOFF.md` — the live marketing record. Only on
    `claude/previous-chat-context-8gar07`.
  All three recovered into monorepo `main` (commit `e83d0b9`), purely additive.
  Source branches left intact.
- 2026-07-29: Industry context for the "three bad days" — the MCP spec revision
  `2026-07-28` landed (stateless core, new OAuth/OIDC), Claude Opus 5 shipped
  July 24, and Cowork expanded to web and mobile. Connector and interface churn,
  not anything Isaac broke.

## KNOWN GAPS (verified 2026-07-29, deliberately not merged)
- **Jest + RTL test suite** for College Launch OS (5 test files) exists only on
  `claude/autonomous-agent-setup-bprzw4` (Jul 14). Written against a pre-Jul-20
  version of the app; may not pass against the current live-synced build. Merge
  only after checking.
- **`tyson-video-engine/`** on `claude/remotion-engine-resume-1zna7u` is an older
  9-milestone Remotion build, superseded by `isaac-video-engine/`. Left alone.
- **`/gear` Amazon affiliate page** on `claude/tyson-gear-page-d15ud7` was
  deliberately removed by its own final commit — it belongs to the kit project.
- Five fully-merged branches could not be deleted; the session git proxy returns
  403 on ref deletion. Isaac can delete them in the GitHub UI if he wants:
  `claude/legends-ranch-repositioning-cgc447`, `claude/remotion-video-engine-6nrljg`,
  `claude/remotion-video-engine-setup-88cegt`, `claude/todo-implementation-yheb82`,
  `claude/workspace-cleanup`.

## TODO (check every session, remove when done)
- [ ] **Tyson's Time post queue — verified live 2026-07-29: 6 posts scheduled,
      running out after Jul 31 23:00Z.** (`HANDOFF.md` said Jul 30; it was stale.)
      Refill before it drains. Check `blotato_list_schedules` first — never
      schedule blind. Every caption needs the Kit link + Amazon disclosure.
- [ ] **TikTok has nothing queued at all** (verified 2026-07-29). The current
      queue is Instagram x4, Threads x1, YouTube x1. TikTok @tysons_time is
      connected and working — it is simply being skipped.
- [ ] **Blocked on Isaac — Facebook Page not linked** in Blotato → Accounts.
      Whole channel dark, zero posts ever. No session can fix this.
- [ ] **Blocked on Isaac — social bios.** No tool can read or edit them. Confirm
      the Amazon Associates link is actually in the TikTok/IG/YouTube bios, or
      every "link in bio" CTA goes nowhere. A single link-in-bio page (Kit +
      Amazon picks) was offered and is awaiting his storefront/affiliate link.
- [ ] **Ike OS top-5 by cash-per-hour** (from the registry's Next Action field —
      re-read it, do not trust this copy): (1) get Amazon tagged links live,
      (2) swap College Checklist's test-mode Stripe link for a live one — needs
      Ike, Claude's key is read-only, (3) work the 26-prospect video-production
      list, (4) Send Off College customer-journey audit, (5) populate
      `04_PROMPT_LIBRARY`.
- [ ] **Video Production Services is an ACTIVE revenue stream** (promoted
      2026-07-29) with a 26-prospect list, sourced via Gemini and Perplexity.
      It is not represented anywhere in these repos. See its Notion page.
- [ ] Isaac to rename `-imagin-concierge` — drop the stray leading dash.
- [ ] Optional: rename `I.Magin-island-repair-` to something like `imagin-projects`.
- [ ] Template pack: build product skeleton, content outline, first module.
      See `/projects/template-pack-firstgen-financial/README.md`.
