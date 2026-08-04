# Balcony Buddies — Live Stream Build

**Concept:** A building full of rescue animals and the people who found them.
Tyson, the Miami orphan kitten, Neil and his wife's rescue, Emilio's cat who
sits on the balcony watching the pool. The through-line is Isaac's: *we rescue
each other.*

Not a pet cam. An ensemble with a setting, recurring characters, and neighbors
as cast. The balcony is the signature shot — it's where the idea came from.

**Status:** Scoping. Nothing built yet. Created 2026-08-04.

---

## The cast and the setting

**The geometry is the concept.** Emilio and his wife live in the *same
condominium, same stack*, seven or eight floors below Isaac. The balconies line
up vertically. That is the literal premise — neighbors on stacked balconies,
each with a rescue.

| Who | Animal | What exists already |
| --- | --- | --- |
| Isaac | Tyson (pit bull) | Established audience across TikTok, IG, Threads, YouTube |
| Emilio + wife | The rescue cat, now 7–8 months | **Complete photo timeline** — from the day it couldn't open its eyes through today. Photos already in hand. |
| Others in the building | "A whole inventory of dogs" | Cute in a different register than Tyson. Not yet catalogued. |

> ⚠️ **Name check:** an earlier voice message transcribed this neighbor as
> "Neil," a later one as "Emilio," both attached to the same eyes-closed rescue
> story. Treated as one household (Emilio) until Isaac confirms. If there are
> two separate neighbors, split this row.

## The archive is the launch — it does not wait on the stream

The kitten timeline is finished content sitting on a phone right now. Eyes
closed → today, eight months compressed into a reel. It needs no cameras, no
OBS, and no 24-hour activation clock.

**Post the origin story while the stream is still being built.** It seeds the
audience that the live feed will need, and it is the single strongest piece of
content identified so far. The dog inventory is the follow-up series.

Storylines, not just cameras: each animal has an arrival story, and the
building keeps producing them.

---

## ⛔ Read this first: the Ring cameras cannot be used

Isaac owns a new Ring doorbell and a new movable indoor Ring camera. Both are
excellent — and **neither can feed a live stream.**

Ring is a closed ecosystem. No RTSP, no RTMP, no ONVIF, no supported way to
pull the feed into streaming software. Workarounds exist, but they break on
firmware updates and violate the terms.

**Keep the Rings for watching the animals. They are not broadcast cameras.**
Do not buy more Ring gear for this project.

---

## What can actually stream

| Hardware | Role | Notes |
| --- | --- | --- |
| **MacBook Pro** | The hub — runs OBS Studio | Free software. This is the whole system. |
| **iPad Pro** | Wireless camera into OBS | Needs a camera app (Camo or similar) |
| **iPad Air 2** | Possible second angle | ⚠️ Caps at iPadOS 15 — verify current apps still support it before counting on it |
| **Two mini cameras** | Unknown — need identification | **USB webcam →** plugs straight into the Mac, ideal. **Wi-Fi/IP cam with RTSP →** OBS can pull it. **Closed app-only cam →** unusable, same problem as Ring |
| Ring doorbell + indoor Ring | Isaac's own monitoring only | Cannot broadcast |

**Open question:** what are the two mini cameras? That answer decides whether
anything needs to be bought.

---

## Architecture

```
iPad Pro ─┐
USB cam  ─┼─→  OBS Studio (MacBook Pro)  ──RTMP──→  YouTube Live 24/7
mini cam ─┘         │
                    └─ scene switching, overlays, "be right back" card
```

One machine, multiple angles, one stream. OBS is free and is the standard tool
for exactly this.

---

## Platform: YouTube, not TikTok

**YouTube** is built for always-on streams. TikTok is built around a person
going live from the app and restricts third-party encoders — it fights this
format rather than supporting it.

**The strategic reason:** Isaac wants to reach YouTube monetization. That needs
4,000 watch hours. A 24/7 ambient stream accumulates watch hours continuously,
including overnight. This is the fastest legitimate path to that threshold, and
the channel already exists — *Tyson's Time Pit Bull Rescue*, confirmed live.

TikTok stays useful for **clips cut from the stream** — the funny 30 seconds
where the kitten ambushes Tyson. That's where TikTok is strong.

---

## ⏱ Do this tonight — there's a waiting period

Enabling live streaming on a YouTube channel requires verification, and the
first activation has a **24-hour delay**. Nothing else can start until this
clock is running.

1. YouTube Studio → **Create** → **Go Live**
2. Verify the channel if prompted
3. Wait 24 hours

Do it before anything else, even before identifying the mini cameras.

---

## Format

**Both, and this matches how Isaac already lives.**

- **Always-on:** the ambient feed runs unattended. Builds watch hours, gets
  discovered, costs nothing once running.
- **Hosted drop-ins:** Isaac appears at set times and interacts. He explicitly
  wants to be more than a passive watcher, and he's home with the animals
  anyway. This is where the audience bonds.

The always-on feed is the engine. The hosted sessions are the show.

---

## Subscription idea — parked, not dismissed

Isaac raised paid time-slot access. Real model, worth returning to — but it
needs an audience first. **Get the free stream running and growing before
putting anything behind a paywall.**

---

## Next actions

- [ ] **Isaac:** enable YouTube live streaming (starts the 24-hour clock)
- [ ] **Isaac:** identify the two mini cameras — brand and model
- [ ] Install OBS Studio on the MacBook Pro
- [ ] Build the first scene, test a private stream
- [ ] Decide the permanent camera position for the balcony shot
- [ ] Go live

---

## Open questions

- What are the two mini cameras?
- Does the balcony shot need weather protection or a dedicated outdoor camera?
- Do Neil, his wife, and Emilio consent to appearing on a public stream?
  **Neighbors and their apartments on camera is a real consent question —
  settle it before going live, not after.**
