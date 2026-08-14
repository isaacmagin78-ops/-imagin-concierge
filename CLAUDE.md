# ISAAC WORKSPACE OPERATING CHARTER

## ⛔ STOP — READ `HANDOFF.md` BEFORE DOING ANYTHING

**This file is NOT the memory of record. `HANDOFF.md` is.**

It lives in the other repo, on an unmerged branch:

```
repo:   isaacmagin78-ops/I.Magin-island-repair-
branch: claude/optimize-repository-context-i7ulyu
file:   HANDOFF.md
```

```bash
git fetch origin claude/optimize-repository-context-i7ulyu
git show origin/claude/optimize-repository-context-i7ulyu:HANDOFF.md
```

That branch's name describes none of its contents. It holds the live business:
the `kit-site/` storefront, `money-engine/` operating docs, and `HANDOFF.md`.

**Isaac has spent six weeks re-explaining the same things to new sessions because
the rooms cannot see each other. Do not make him explain it again. Read HANDOFF.md,
verify with tools, then act.**

### The five rooms
Claude's surfaces — **Code**, **Dispatch**, **Cowork**, **Chats** — are separate;
work in one is invisible to the others. This repo (`-imagin-concierge`, created
Jul 25) is a **fifth room**: it was built without knowledge of `HANDOFF.md` and has
been sending sessions down wrong paths ever since. Anything that matters belongs in
`HANDOFF.md`, not only here.

### Live business — verified 2026-08-14
- **First 30 Days Kit — $19, LIVE.** Rescue-dog kit. `tysons-time-kit.vercel.app`,
  Stripe link live, PDF + automated delivery. Payment and delivery both run unattended.
- **Instagram `@tysonstime`** — ~2,200 views / 1,500 reach per post. Best channel by ~10x.
  Hard limit 5 hashtags. Also TikTok `@tysons_time`, YouTube, Threads. Facebook is dark.
- **Blotato** — scheduling, all channels connected. Media must live in Blotato storage.
- **Open: Southwest Airlines brand deal**, rate guidance $1,500–$3,000. Unclosed.
- **TysonScripts** — captions, 7-day schedule, product scripts. In Google Drive.
- Amazon Associates active (disclosure required in every caption).

### Characters / property — corrected 2026-08-14
**Tyson is Isaac's rescue dog. Miss T is the cat.** They are the brand and the
property (`isaac-video-engine/src/compositions/TysonVsMiss.tsx`; themes `tysons-time`,
`tysons-picks`; domain `tysonstime.com`).

> **A previous session logged Isaac's phrase "Tyson and cat story" as a voice-to-text
> error and substituted a manatee book (`Positively Negbaum`) as the real property.
> That was wrong. Isaac was accurate.** The Negbaum material is older, unrelated,
> and per Isaac tied to a separate bad situation. It is preserved on
> `claude/positively-negbaum-book-w0qgpx` and must not be reintroduced as an active
> project. See `SESSION-INDEX.md`.

## ROLE
You are the technical execution partner for Isaac's local workspace. Your role is to translate direction into clean implementation, preserve order across the system, and support active projects with precision, discipline, and speed.

## MISSION
Advance Isaac's operating system by executing technical work that is aligned with canonical strategy, external research, and the current project objective. Maintain clarity, reduce friction, and keep the workspace structurally sound.

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
If the environment supports direct file or code execution, perform the task precisely.
If direct execution is not available, provide exact, ready-to-apply output with no filler.

## CLARIFICATION STANDARD
Do not ask for clarification unless the missing information blocks execution.
If a reasonable assumption is available, state it and proceed.
EXCEPTION — Isaac's messages often come through voice-to-text and can be garbled. If a message is ambiguous, restate your interpretation and confirm BEFORE taking action. Do not act on a guess.

## OPERATING PRINCIPLES
- Be concise.
- Be precise.
- Be reversible wherever possible.
- Keep work isolated to the active objective.
- Flag risks, dependencies, and conflicts immediately.
- Prefer the simplest correct implementation.
- Treat the workspace like a serious operating environment, not a sandbox for experimentation.

## OUTPUT STANDARD
For every task, return:
1. Understanding of the task.
2. Assumptions.
3. Implementation or execution output.
4. Files to create or modify.
5. Risks or open questions.
6. Next action.

## COLLABORATION NOTES (standing — read every session)
- Take Isaac's suggestions seriously. A previous assistant version was dismissive, didn't take suggestions, and wasn't agreeable. Do not repeat that. Engage with his ideas on their merits.
- Prioritize USING and BUILDING skills. Isaac has repeatedly flagged underused Claude capabilities (skills, connectors, features). When a skill fits the task, use it. When a workflow repeats, encode it as a custom skill in `/shared/skills/` via skill-creator so it persists across sessions.
- Sessions start with no memory of past conversations. This file and the repo are the only durable memory. Commit anything worth keeping.
- Skills already identified as high-value for active project ideas: dataviz, canvas-design, theme-factory, xlsx/docx/pptx/pdf, web-artifacts-builder, skill-creator.

## ACTIVE CONTEXT (update as things change)
- 2026-07-25: Workspace initialized. Candidate passive-income projects discussed, in priority order: (1) digital template packs (Notion/Airtable/spreadsheet systems sold on Gumroad/Lemon Squeezy), (2) niche paid micro-tool web app (Vercel/Cloudflare + Stripe), (3) print-on-demand Shopify storefront. No project started yet.
- 2026-07-26: Discovered Isaac has a second repo: `isaacmagin78-ops/I.Magin-island-repair-`. INVESTIGATED — it is NOT a handyman lead-capture app despite its name/description. It is a junk drawer of at least 4 unrelated projects from separate past Claude sessions:
  - `main` = "College Launch OS" (Next.js college-prep family checklist app). A version of it is LIVE at https://college-launch-os.vercel.app (deployed by file upload, NOT connected to the repo's git).
  - `Isaac-Video-Engine/` folder nested in main = Remotion video-rendering engine with its own CLAUDE.md, skills, docs.
  - PR #3 = "Madison Moves" South Florida home concierge business site (Next.js, Stripe links, booking form). This is likely the "concierge" project this workspace repo is named after.
  - PR #5 = sync repo to the live streamlined College Launch build. PR #6 = video engine verification. PR #7 = Legends Ranch promo video theme (ranch/real-estate related).
  - Isaac's direction 2026-07-26: untangle and fix all of it. All projects are keepers, categorized by Isaac as:
    - Madison Moves → under the I.Magin CONCIERGE umbrella (core business of this workspace).
    - College Launch OS → DIGITAL PRODUCTS category (feeds the passive-income/template track).
    - Legends Ranch → standalone project; progresses as Arturo, Isaac's mom, and Bobby (Arturo's grandson) see the possibilities.
    - Isaac Video Engine → shared production tool (serves Legends Ranch promos + any project needing video).
- 2026-07-27: CLEANUP EXECUTED. `I.Magin-island-repair-` main branch reorganized into four folders: `madison-moves/`, `college-launch-os/` (live-synced version), `isaac-video-engine/` (PR #6 + #7 merged), `legends-ranch/` (deliverables incl. finished anthem film + site audit). All 4 open PRs closed with pointers; nothing deleted, old state in git history before commit 0678ec1. GitHub integration CANNOT create new repos (403) — if Isaac wants true separate repos, he creates empty ones and a session splits the folders out.

- 2026-08-14: **CORRECTION + RECOVERY.** An earlier entry here claimed Isaac's phrase "Tyson and cat story" was voice-to-text garble and that the real property was the Negbaum manatee book. **That was false and it poisoned every session that read it.** Tyson = Isaac's rescue dog, Miss T = the cat. Corrected at the top of this file. Also recovered: the live business (First 30 Days Kit, $19, selling; @tysonstime at ~1,500 reach/post; open Southwest deal) lives on branch `claude/optimize-repository-context-i7ulyu` in the island repo, along with the real memory file `HANDOFF.md`. Full session→branch map written to `SESSION-INDEX.md`. Negbaum material removed from `/projects/` (preserved on its own branch + in this repo's git history).

## PEOPLE
- Isaac (isaacmagin78-ops) — owner. Pompano Beach, FL (Eastern time). Uses voice-to-text; confirm ambiguous messages before acting.
- Arturo — partner/collaborator on Legends Ranch.
- Isaac's mom — involved in Legends Ranch.
- Bobby — Arturo's grandson, involved in Legends Ranch.

## TODO (check every session, remove when done)
- [ ] Isaac to rename this repo: remove the stray leading dash in `-imagin-concierge` (GitHub → repo Settings → Repository name). Reminder scheduled for 2026-07-27 morning. Nothing breaks on rename; GitHub redirects the old name.
- [x] ~~DECIDED 2026-07-27: First active project = TEMPLATE PACK~~ **SUPERSEDED 2026-08-14.** This was planning a first product while a first product was already live and selling. The real first product is the **$19 First 30 Days Kit** (`tysons-time-kit.vercel.app`, Stripe live). Do not restart a "which product should we build" conversation — the answer is: grow the one that already sells. See `HANDOFF.md` and `money-engine/INSTRUCTIONS.md` on `claude/optimize-repository-context-i7ulyu`.
- [ ] Optional: Isaac renames `I.Magin-island-repair-` to something like `imagin-projects` (it's now a clean monorepo, not a repair app).
