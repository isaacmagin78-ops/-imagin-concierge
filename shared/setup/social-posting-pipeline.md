# Social Posting Pipeline — Tyson's Time

How video gets from Isaac's machine to TikTok / Instagram / Threads / YouTube.
Verified 2026-08-04.

---

## The stack

Isaac's Mac → Blotato storage → Blotato API → the platform.

"Tyson's Time" in the connector list **is Blotato** — a posting API, not a
Claude feature. Subscription: starter, active.

## Connected accounts (verified live)

| Platform | Handle | Account ID | Notes |
| --- | --- | --- | --- |
| TikTok | `@tysons_time` | 49211 | Supports true drafts (`isDraft`) |
| Instagram | `@tysonstime` | 61044 | Requires `mediaType`: reel or story |
| Threads | `@tysonstravels_rescuepitslife` | 8305 | Text-only posts OK |
| YouTube | Tyson's Time Pit Bull Rescue | 42110 | Playlists incl. "Tyson time" |
| Facebook | Isaac Magin | 43069 | ⚠️ No Page attached — cannot post until one is connected |

## ⚠️ Hard constraint: Claude sessions cannot upload media

`database.blotato.io` is **blocked by the session egress policy**. A Claude
session running in the cloud container gets a 403 at the CONNECT stage:

```
connect_rejected — gateway answered 403 to CONNECT
host: database.blotato.io:443
```

Consequences, and they are not obvious:

1. **Claude cannot upload the video.** The file must be PUT from Isaac's own
   machine, which is not behind this proxy.
2. **Claude cannot verify an upload landed.** Fetching the public URL from a
   session also returns 403 — *from the proxy*, not from Blotato. A 403 here
   means "I can't see it," NOT "the file isn't there." Do not report an
   unverified upload as a missing upload.
3. **The posting API still works.** `blotato_create_post` and friends run
   server-side over MCP, not through this container's network. Only direct
   storage access is blocked.

## Procedure

**Claude:** mint the upload slot.
`blotato_create_presigned_upload_url({filename})` → returns `presignedUrl`
(valid 2 hours) and `publicUrl`.

**Isaac, on the Mac:** one command.

```bash
curl -X PUT "<presignedUrl>" --data-binary "@$HOME/Downloads/<file>"
```

Success prints JSON containing `"Key"`. Confirmation is Isaac's to give —
Claude cannot check it. Opening `publicUrl` in Safari and seeing the video
play is the other way to confirm.

**Claude:** create the post with `mediaUrls: [publicUrl]`.

## Standing rules for this account

- **AI-generated video → always set `isAiGenerated: true`.** Under-disclosure
  gets reach throttled or the post pulled. Over-disclosure costs nothing.
- **TikTok has real drafts. Instagram does not.** A scheduled IG post publishes
  unattended at its scheduled time — it is not a review gate. To give Isaac a
  genuine review step: TikTok draft first, he watches it in the app, then
  Instagram goes out on his explicit go-ahead.
- **Never publish without explicit approval.** Draft and hold is the default.

## TikTok field defaults

`privacyLevel: SELF_ONLY` + `isDraft: true` for anything unreviewed.
`isBrandedContent: false` and `isYourBrand: false` for organic dog content —
these add promotional labels that organic posts don't want. All of it stays
editable in the TikTok app before Isaac posts.
