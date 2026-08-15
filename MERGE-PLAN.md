# Decision: fold this repo into the island repo

**Decided by Isaac, 2026-08-15, ~03:45.** Execute in daylight, not the same night.

## The decision

`-imagin-concierge` gets folded into `isaacmagin78-ops/I.Magin-island-repair-` as project
folders, then **archived** (not deleted). One repo, one memory.

## Why

This repo was created **2026-07-25**, eleven days after the work actually started, and it
was born not knowing `HANDOFF.md` existed. It has been contradicting the real memory of
record ever since — that is the "fifth room." On 2026-08-14/15 a session spent roughly
four hours building a manuscript, illustration plan and KDP spec for the wrong book
because it read this repo's `CLAUDE.md` instead of `HANDOFF.md`.

The current fix — a STOP block at the top of `CLAUDE.md` pointing at `HANDOFF.md` — stops
the bleeding but is a patch. Two memory files is the bug.

Rejected alternatives: keeping this as a "memory layer" (that is roughly what exists now,
and it is what failed), and leaving both with a pointer (cheapest, most fragile).

## ⚠️ Do this first — gather the branches before folding

This repo's content is spread across branches, same failure as the island repo. **Folding
`main` alone would lose most of it.**

| Branch | Unique content |
|---|---|
| `claude/isaac-workspace-charter-htet5g` | `SESSION-INDEX.md`, corrected `CLAUDE.md`, `projects/outdoors-content/`, `projects/multifamily-acquisition/`, this file |
| `claude/qr-code-gate-map-5sbszh` | `projects/concierge-site/` (+ samples), `projects/investor-brief/` (research prompt, SpaceX 2026 brief) |
| `claude/mobile-open-house-poc-y70dtp` | `projects/open-house-2756-ne-35th/` |
| `claude/macbook-pro-setup-oqe3tm` | `projects/template-pack-firstgen-financial/` — real content, not the stub that was deleted |
| `claude/system-issue-troubleshooting-ym3wb5` | check before archiving |

**`claude/qr-code-gate-map-5sbszh` was active on 2026-08-15.** Confirm that session is
finished before folding, or its work will be stranded.

## Steps

1. **Verify the QR gate-map session is done.** Do not proceed while it is live.
2. **Gather every branch above onto one branch in this repo**, the same way
   `claude/consolidate-orphaned-assets` was built on the island side. Additive only.
3. **Diff each remaining branch against that** to confirm nothing unique is left behind.
   `git ls-tree` per branch, compare top-level entries.
4. **Copy into the island repo** on a new branch off `main`:
   - `projects/*` → `imagin-concierge/projects/*` *(note: an `imagin-concierge/` folder
     already exists on `claude/consolidate-orphaned-assets` holding
     `REFERRAL-MESSAGE.md` — merge into it, do not clobber it)*
   - `SESSION-INDEX.md` → root, or merge into `ASSET-INVENTORY.md`
   - `CLAUDE.md` → fold its still-true content into `HANDOFF.md`, then delete it.
     **Two memory files is the bug being fixed — do not carry a second one across.**
5. **Verify** every path resolves in the island repo before touching this one.
6. **Archive `-imagin-concierge` on GitHub** — Settings → Archive. **Isaac must do this;
   an agent cannot.** Archive, never delete: it preserves history and the old URLs.
7. **Update pointers** — the STOP block in the island repo's docs, `HANDOFF.md`, and the
   Ike OS record in Notion, so nothing still points here.

## Verification

- Every path listed in the branch table above resolves inside the island repo.
- `git ls-remote --heads` on this repo returns nothing unique against the island copy.
- Exactly **one** memory file exists across both repos: `HANDOFF.md`.
- A fresh session cloning the island repo finds the business without being told where.

## Notes

- The stray leading dash in `-imagin-concierge` becomes moot once archived. No rename needed.
- Archiving makes the repo read-only; GitHub keeps serving the old URLs.
- Founder override of 2026-07-22 still stands — **Tyson's Brand primary.** This is
  housekeeping and does not reprioritize anything.
