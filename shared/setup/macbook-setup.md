# MacBook Pro Setup — I.Magin Workspace

Plain-English guide for working this workspace from the MacBook. Written 2026-08-01.

---

## Short version

**You don't have to install anything to keep working.** Talking to Claude in the
browser or the Claude app is enough — Claude gets its own copy of the repo, makes
the changes, and pushes them to GitHub. Everything below is optional, and only
matters if you want the files sitting on the MacBook itself.

---

## Option A — No install (start here)

1. Open `claude.ai/code` in Safari or Chrome, or open the Claude desktop app.
2. Pick the `-imagin-concierge` repo.
3. Talk. Claude edits and pushes; you review the result on GitHub.

Nothing to install, nothing to maintain, works from the iPhone too. This is how
the workspace has been run so far.

---

## Option B — Claude Code in the MacBook terminal

For when you want the files local and want to work fast.

**Requirements:** macOS 13 or newer. A Claude Pro or Max plan (Team/Enterprise
also work). Claude Code is not included on the free plan.

**1. Open Terminal**
Press `Cmd + Space`, type `Terminal`, press Enter.

**2. Install Claude Code**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

(If you already use Homebrew: `brew install --cask claude-code`)

**3. Check it worked**

```bash
claude --version
```

Should print a version number. If it says `command not found`, close Terminal,
open a new one, and try again. Still stuck: run `claude doctor`.

**4. Get the workspace onto the Mac**

Copy these three lines one at a time:

```bash
cd ~/Documents
git clone https://github.com/isaacmagin78-ops/-imagin-concierge.git imagin-concierge
cd imagin-concierge
```

⚠️ **Do not skip the `imagin-concierge` at the end of the clone line.** The repo
name starts with a dash. If you let git pick the folder name you end up with a
folder called `-imagin-concierge`, and then `cd -imagin-concierge` fails —
Terminal reads the `-i` as a command flag instead of a folder name. Cloning into
a folder named without the dash sidesteps it. Renaming the repo on GitHub fixes
it permanently.

**5. Start Claude**

```bash
claude
```

First run opens a browser window to log in. After that it just starts.

---

## Option C — Desktop app (graphical, no terminal)

Download from `claude.com/download`, install it, point it at a folder. Same
Claude, buttons instead of typing. Good middle ground if the terminal feels bad.

---

## Daily use, once Option B is set up

```bash
cd ~/Documents/imagin-concierge
git pull
claude
```

`git pull` grabs anything Claude pushed from a web session, so the Mac copy and
GitHub stay in agreement.

---

## When something breaks

| What you see | What to do |
| --- | --- |
| `claude: command not found` | Close Terminal, open a new one. Then `claude doctor` |
| `cd: bad option: -i` | You're fighting the dash in the repo name — see step 4 |
| Claude seems out of date on the Mac | `git pull` |
| Login loop or auth error | Run `claude` and complete the browser login |

---

## What this repo actually is

The command post, not the product. It holds the operating charter (`CLAUDE.md`),
shared resources (`/shared`), active project work (`/projects`), and finished
deliverables (`/artifacts`). The built projects — Madison Moves, College Launch
OS, Legends Ranch, the video engine — live in the `I.Magin-island-repair-` repo.
