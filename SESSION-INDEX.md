# Session Index — every Claude session and where its work went

**Built 2026-08-14** from the Claude Code Remote session list (45 sessions) checked
against the actual remote branches of both repos. Every branch below was verified to
exist unless marked **GONE**.

Repos: `I.Magin-island-repair-` (island) · `-imagin-concierge` (this one)

---

## ⭐ START HERE — the branch that holds the business

```
claude/optimize-repository-context-i7ulyu     [island]     updated 2026-08-14
```

The branch name is meaningless — it was created Jul 14 for a context-optimization task
and then became the main working line. **This is why nobody could find any of it.**

It contains:

| Path | What it is |
|---|---|
| `HANDOFF.md` | **The real memory of record.** Read before anything else. |
| `kit-site/` | Live $19 First 30 Days Kit storefront — PDF, buy page, gated delivery, launch videos, Tyson & Miss covers |
| `money-engine/INSTRUCTIONS.md` | 12-Hour Money Engine operating rules, real distribution figures |
| `money-engine/REFILL-QUEUE.md` | Posting queue refill runbook |
| `Listing-Content-System/` | Real-estate listing content system |

```bash
git fetch origin claude/optimize-repository-context-i7ulyu
git show origin/claude/optimize-repository-context-i7ulyu:HANDOFF.md
```

---

## The nights Isaac has been trying to find

### July 14 — the start
Four sessions. **Nothing was lost**, though one branch is gone:

| UTC | Session | Where it went |
|---|---|---|
| 03:51 | Remotion video engine setup | `claude/remotion-video-engine-setup-88cegt` → **merged to main as PR #4, Jul 15** ✅ |
| 05:39 | Remotion video engine continuation | `claude/remotion-engine-resume-1zna7u` ✅ |
| 19:14 | Tyson Content Engine vertical video | **branch GONE** — but the work landed anyway: `TysonVsMiss.tsx` + audio mix + final master committed to main Jul 21 ✅ |
| 19:17 | Autonomous engineering agent setup | `claude/autonomous-agent-setup-bprzw4` ✅ (stale — College Launch restructuring) |
| 21:49 | Repository optimization and context system | `claude/optimize-repository-context-i7ulyu` ✅ **← became the business branch** |
| 22:36 | Audit Isaac OS venture repos (**read-only**) | **No artifact.** No repo attached; output was conversation only. Not retrievable — Claude Code Remote exposes session metadata and branches, but no message API. **Stop looking for this one.** |

### July 22–23 — "the night Claude Code took over the computer"
A *different* night from July 14. Per `HANDOFF.md`, **Dispatch already recovered it**
and its findings are written into that file: the $19 Kit going live, TysonScripts, the
Southwest Airlines package, UGC outreach templates, Amazon storefront guide.
The transcripts themselves live in Dispatch and are not reachable from Code.

---

## Tyson's Time — the live brand

| Date | Session | Branch |
|---|---|---|
| 07-14 | Tyson Content Engine vertical video | **GONE** (work survived on main) |
| 07-24 | Tyson's curated gear page | `claude/tyson-gear-page-d15ud7` ✅ |
| 07-25 | Tyson's time standoff voiceover video | **GONE** |
| 07-26 | Tyson session | **GONE** |
| 07-28 | Rescue Dog Kit competitive positioning | **GONE** — advisory, likely no commits |
| 07-28 | DNS/domain routing for tysonstime.com | **GONE** — config work, no commits |
| 08-05 | Miss T meme: Tyson eating area | `claude/miss-t-tyson-meme-lsj43p` ✅ |
| 08-03 | 12-Hour Money Engine instructions | `claude/money-engine-instructions-6pknex` ✅ |

Also on main: `isaac-video-engine/` with `TysonVsMiss.tsx`, themes `tysons-time` and
`tysons-picks` (logos, palettes, watermarks), and an archived final mixed master.

## Concierge / real estate
| Date | Session | Branch |
|---|---|---|
| 07-15 | Home care template (Madison Moves) | `claude/madison-moves-production-xfljqf` ✅ |
| 07-25 | Premium real estate marketing package | `claude/luxury-listing-content-system-gbptg5` ✅ |
| 07-25 | Sea Monarch Unit 611 sales script | `claude/sea-monarch-sales-script-fd28zd` ✅ |
| 07-31 | Mobile open-house proof of concept | `claude/mobile-open-house-poc-y70dtp` ✅ *(concierge repo)* |
| 08-01 | UHNW concierge: collection, renovation, product | `claude/uhnw-concierge-systems-anl09p` ✅ |

## Legends Ranch
| Date | Session | Branch |
|---|---|---|
| 07-24 | Legends Ranch commercial repositioning | `claude/legends-ranch-repositioning-cgc447` ✅ |
| 08-02 | Clip licensing constraints | `claude/clip-licensing-constraints-w43zf4` ✅ |

On main: `legends-ranch/deliverables/` — finished anthem film, wildlife center film, archives.

## College Launch OS
| Date | Session | Branch |
|---|---|---|
| 07-09 | TODO implementation | `claude/todo-implementation-yheb82` ✅ |
| 07-09 | Adam's Island Fixes UI | **GONE** |
| 07-12 | College Launch OS application | `claude/college-launch-os-tcdpg3` ✅ |

Live at `college-launch-os.vercel.app` (deployed by upload, not from git).

## Video engine
| Date | Session | Branch |
|---|---|---|
| 07-14 | Remotion video engine setup | `claude/remotion-video-engine-setup-88cegt` ✅ merged |
| 07-14 | Remotion video engine continuation | `claude/remotion-engine-resume-1zna7u` ✅ |
| 07-21 | Fable video prompt refinement | `claude/fable-video-prompt-refine-b21x3t` ✅ |
| 07-21 | Portable Remotion video engine | `claude/remotion-video-engine-6nrljg` ✅ |

## Infrastructure / memory / audits
| Date | Session | Branch |
|---|---|---|
| 07-13 | CLAUDE.md documentation | `claude/claude-md-docs-if24f6` ✅ |
| 07-14 | Repository optimization and context system | `claude/optimize-repository-context-i7ulyu` ✅ **← the one** |
| 07-25 | Isaac workspace operating charter | `claude/isaac-workspace-charter-htet5g` ✅ *(this repo — the fifth room)* |
| 07-25 | GitHub account inventory and status | `claude/github-inventory-status-1mm8qa` ✅ |
| 07-26 | Context from previous chat | `claude/previous-chat-context-8gar07` ✅ *(an earlier recovery attempt)* |
| 07-28 | AI leverage ideas analysis | **GONE** |
| 07-29 | System issue troubleshooting | `claude/system-issue-troubleshooting-ym3wb5` ✅ |
| 08-01 | MacBook Pro setup | `claude/macbook-pro-setup-oqe3tm` ✅ |
| 08-04 | Project status update | `claude/project-status-update-xbolj2` ✅ |
| 08-05 | iPad dashboard for Scott | `claude/scott-ipad-dashboard-cett89` ✅ |
| 08-05 | Test coverage analysis | `claude/test-coverage-analysis-97p337` ✅ |
| 08-07 | CLAUDE.md documentation | `claude/claude-md-docs-4usf84` ✅ |
| 08-07 | Understanding current situation | `claude/understand-current-situation-13c37d` ✅ |

## Not active — do not reopen as a project
| Date | Session | Branch |
|---|---|---|
| 07-29 | Positively Negbaum manuscript | `claude/positively-negbaum-book-w0qgpx` ✅ |

Older, unrelated material (per Isaac: "the Friedman's book… a bad thing"). Preserved on
its own branch and in this repo's git history. **Not** the Tyson & Miss T property.
A session on 2026-08-14 mistakenly rebuilt it as an active project; that was removed.

## Sessions that produced no branch
`Dispatch background conversation` (06-22) · `Audit Isaac OS venture repos` (07-14) ·
`Debug and fix Notion issues` (07-20) · `Claude Op. 5 desktop app update` (07-29) ·
`Debug app repeatedly resetting` (08-03)

Conversation-only. No artifact exists and no transcript API is available. Not recoverable.

## Unattributed branches (no session record)
`claude/workspace-cleanup` · `export/isaac-video-engine` · `export/madison-moves` ·
`export/send-off` — the `export/*` set looks like prepared repo splits.

---

## Why 9 branches are GONE

A session records an *intended* output branch. If the session ended without committing
— advisory work, config changes, DMs, DNS, pure analysis — nothing was ever pushed.
Most of the missing nine are that kind. **The one real loss is
`tyson-vertical-video-engine-fw5jks` (Jul 14), and its work survived anyway** through
the `TysonVsMiss` commits on main.

## Rule going forward
Anything that matters goes in **`HANDOFF.md`**, not in a branch name and not only here.
This file is the map; `HANDOFF.md` is the memory.
