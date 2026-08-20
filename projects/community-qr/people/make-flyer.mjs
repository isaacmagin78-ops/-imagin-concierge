#!/usr/bin/env node
/**
 * make-flyer.mjs — one print-ready flyer per person, QR opens a pre-filled SMS.
 *
 * No website, no hosting, no deploy. The code encodes an sms: link, so scanning
 * it opens the phone's messaging app with the text already written. This is why
 * these can be printed and handed out today.
 *
 * Trade-off, stated honestly: sms: codes cannot be scan-counted. You learn it
 * worked when the person tells you they got a customer. Tracked codes need a
 * hosted page — that comes later, and the flyer layout does not change.
 *
 *   node make-flyer.mjs people.json
 */
import QRCode from "qrcode";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const people = JSON.parse(readFileSync(process.argv[2] ?? "people.json", "utf8"));
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const digits = (p) => String(p).replace(/[^\d+]/g, "");

const page = (p, qr, unresolved) => `<!DOCTYPE html><html><head><meta charset="utf-8">
<title>${esc(p.name)} — flyer</title><style>
@page{size:8.5in 11in;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:${p.serif ? '"Iowan Old Style",Palatino,Georgia,serif' : '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif'};color:#14140f;background:#fff}
.sheet{width:8.5in;height:11in;padding:.55in .6in .5in;display:flex;flex-direction:column;background:${p.bg}}
.eyebrow{font-size:11.5pt;letter-spacing:.18em;text-transform:uppercase;color:${p.accent};font-weight:700}
h1{font-size:${p.headlineSize ?? "58pt"};line-height:.9;margin:.08in 0 0;font-weight:800;letter-spacing:-.03em}
.sub{font-size:16pt;line-height:1.35;margin-top:.22in;max-width:6in;color:#3c3c33}
.priceRow{display:flex;align-items:flex-end;gap:.32in;margin-top:.34in;padding-top:.3in;border-top:3px solid ${p.accent}}
.price{font-size:${p.priceSize ?? "44pt"};font-weight:800;line-height:.85;letter-spacing:-.02em}
.priceNote{font-size:13pt;color:#55554a;padding-bottom:.06in}
.facts{margin-top:.34in;display:flex;flex-direction:column;gap:.13in}
.fact{display:flex;gap:.28in;font-size:14pt}
.fact b{min-width:1.5in;color:${p.accent};font-weight:700}
.scan{margin-top:auto;background:#fff;border:3px solid #14140f;border-radius:6px;padding:.34in .38in;display:flex;align-items:center;gap:.4in}
.scan svg{width:1.85in;height:1.85in;display:block}
.scanText{flex:1}
.scanText h2{font-size:22pt;font-weight:800;letter-spacing:-.02em}
.scanText p{font-size:13pt;color:#4a4a40;margin-top:.08in;line-height:1.4}
.phone{font-size:19pt;font-weight:800;margin-top:.14in;font-variant-numeric:tabular-nums;letter-spacing:.01em}
.who{margin-top:.2in;font-size:13pt;color:#55554a}
.portrait{width:100%;height:2.9in;object-fit:cover;object-position:${p.photoPos ?? "center 30%"};border-radius:5px;margin-top:.3in;border:1px solid rgba(0,0,0,.10)}
.photoslot{width:100%;height:2.9in;margin-top:.3in;border:3px dashed ${p.accent};border-radius:5px;display:flex;align-items:center;justify-content:center;text-align:center;padding:.3in}
.photoslot span{font-size:13pt;color:${p.accent};font-weight:700;max-width:4.2in;line-height:1.4}
.story{margin-top:.28in;font-size:14.5pt;line-height:1.5;color:#3c3c33;border-left:4px solid ${p.accent};padding-left:.26in;max-width:6in}
.story b{color:#14140f}
.warn{background:#b3261e;color:#fff;padding:.16in .28in;font-size:11.5pt;font-weight:700;line-height:1.4}
@media print{.warn{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style></head><body>
${unresolved.length ? `<div class="warn">PROOF ONLY — DO NOT PRINT OR HAND OUT. Placeholder values still in this flyer: ${esc(unresolved.join(", "))}. Fill them in people.json and re-run, or the QR code sends people nowhere.</div>` : ""}
<div class="sheet">
  <div class="eyebrow">${esc(p.eyebrow)}</div>
  <h1>${p.headline}</h1>
  <p class="sub">${p.sub}</p>
  ${p.photo ? `<img class="portrait" src="${esc(p.photo)}" alt="${esc(p.name)}">`
            : `<div class="photoslot"><span>PHOTO OF ${esc(p.name.toUpperCase())} GOES HERE — drop the file in this folder and put its filename in people.json. A flyer with a real face on it is a different object than one without.</span></div>`}
  ${p.story ? `<p class="story">${p.story}</p>` : ""}
  <div class="priceRow"><div class="price">${p.price}</div><div class="priceNote">${p.priceNote}</div></div>
  <div class="facts">${p.facts.map(([k,v])=>`<div class="fact"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("")}</div>
  <div class="scan">
    ${qr}
    <div class="scanText">
      <h2>${esc(p.scanTitle)}</h2>
      <p>${esc(p.scanNote)}</p>
      <div class="phone">${esc(p.phoneDisplay)}</div>
      <div class="who">${esc(p.who)}</div>
    </div>
  </div>
</div></body></html>`;

for (const p of people) {
  const unresolved = [];
  if (String(p.phone).includes("555")) unresolved.push("phone number");
  if (p.link && p.link.includes("PLACEHOLDER")) unresolved.push("payment link");
  if (!p.photo) unresolved.push("photo");
  if (!p.story) unresolved.push("the one true sentence about them");

  const target = p.link && !p.link.includes("PLACEHOLDER")
    ? p.link
    : `sms:${digits(p.phone)}${p.smsBody ? `?&body=${encodeURIComponent(p.smsBody)}` : ""}`;

  const qr = await QRCode.toString(target, { type: "svg", errorCorrectionLevel: "H", margin: 0 });
  mkdirSync(p.slug, { recursive: true });
  writeFileSync(`${p.slug}/flyer.html`, page(p, qr, unresolved));
  writeFileSync(`${p.slug}/qr.svg`, qr);
  writeFileSync(`${p.slug}/TARGET.txt`, target + "\n");
  console.log(`${p.slug.padEnd(10)} ${unresolved.length ? "PROOF — needs: " + unresolved.join(", ") : "READY"}  →  ${target.slice(0,60)}`);
}
