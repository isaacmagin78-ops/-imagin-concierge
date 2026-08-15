#!/usr/bin/env python3
"""
Generate the gate QR code and a print-ready gate sign.

    pip install segno
    python3 tools/make-qr.py https://your-map-url.example.com "Palm Grove Villas"

Writes, next to the project:
    qr.svg      the bare QR code (vector, scales to any sign size)
    sign.html   8.5x11 print-ready gate sign — open it and Print to PDF

Error correction is set to H (30% recoverable) because gate signs get sun,
rain, sprinkler spots, and the occasional bumper.
"""
import sys
import html
from pathlib import Path

try:
    import segno
except ImportError:
    sys.exit("segno is not installed. Run:  pip install segno")

ROOT = Path(__file__).resolve().parent.parent


def make(url: str, community: str) -> None:
    qr = segno.make(url, error="h")
    qr.save(ROOT / "qr.svg", scale=10, border=0, dark="#000000", light=None)

    # Inline the QR so the sign is one self-contained file.
    import io
    buf = io.BytesIO()
    qr.save(buf, kind="svg", scale=10, border=0, dark="#000000", light=None, xmldecl=False, svgns=True)
    qr_svg = buf.getvalue().decode("utf-8")

    pretty = url.replace("https://", "").replace("http://", "").rstrip("/")

    (ROOT / "sign.html").write_text(SIGN.format(
        community=html.escape(community),
        url_pretty=html.escape(pretty),
        qr=qr_svg,
    ), encoding="utf-8")

    card = CARD.format(
        community=html.escape(community),
        url_pretty=html.escape(pretty),
        qr=qr_svg,
    )
    (ROOT / "cards.html").write_text(CARDS_SHEET.format(cards=card * 4), encoding="utf-8")

    print(f"wrote {ROOT/'qr.svg'}")
    print(f"wrote {ROOT/'sign.html'}   ->  gate sign, Letter, Print to PDF")
    print(f"wrote {ROOT/'cards.html'}  ->  4 hand-out cards per sheet, cut in quarters")


SIGN = """<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>Gate sign — {community}</title>
<style>
  @page {{ size: letter portrait; margin: 0; }}
  html,body {{ margin:0; padding:0; background:#fff; color:#000;
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; }}
  .sheet {{ width:8.5in; height:11in; padding:0.6in 0.5in; box-sizing:border-box;
    display:flex; flex-direction:column; align-items:center; text-align:center; }}
  .eyebrow {{ font-size:26pt; font-weight:800; letter-spacing:.02em; }}
  .rule {{ width:100%; height:6px; background:#000; margin:.18in 0 .28in; }}
  h1 {{ font-size:52pt; line-height:.98; margin:0 0 .12in; font-weight:900; letter-spacing:-.02em; }}
  .lead {{ font-size:21pt; line-height:1.2; margin:0 0 .3in; }}
  .qr {{ width:4.6in; height:4.6in; }}
  .qr svg {{ width:100%; height:100%; display:block; }}
  .url {{ font-size:17pt; font-weight:700; margin-top:.22in; word-break:break-all; }}
  .url span {{ font-weight:400; font-size:13pt; display:block; margin-top:2pt; }}
  .foot {{ margin-top:auto; font-size:15pt; line-height:1.35; }}
  .foot b {{ display:block; font-size:19pt; }}
  @media screen {{ body {{ background:#555; padding:24px 0; }}
    .sheet {{ background:#fff; margin:0 auto; box-shadow:0 8px 40px rgba(0,0,0,.5); }} }}
</style></head>
<body><div class="sheet">
  <div class="eyebrow">DELIVERIES &amp; VISITORS</div>
  <div class="rule"></div>
  <h1>Scan for the<br>building map</h1>
  <div class="lead">Find any unit or building<br>before you drive in.</div>
  <div class="qr">{qr}</div>
  <div class="url">{url_pretty}<span>or type this into your phone</span></div>
  <div class="foot"><b>{community}</b>10 mph &middot; one car per gate cycle</div>
</div></body></html>
"""


CARDS_SHEET = """<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>Hand-out cards</title>
<style>
  @page {{ size: letter portrait; margin: 0; }}
  html,body {{ margin:0; padding:0; background:#fff; color:#000;
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; }}
  .sheet {{ width:8.5in; height:11in; display:grid;
    grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; }}
  .card {{ border:1px dashed #bbb; padding:.3in; display:flex; flex-direction:column;
    align-items:center; justify-content:center; text-align:center; }}
  .card .k {{ font-size:15pt; font-weight:800; letter-spacing:.03em; }}
  .card h2 {{ font-size:25pt; line-height:1; margin:.06in 0 .12in; font-weight:900; letter-spacing:-.02em; }}
  .card .q {{ width:2.6in; height:2.6in; }}
  .card .q svg {{ width:100%; height:100%; display:block; }}
  .card .u {{ font-size:11pt; font-weight:700; margin-top:.12in; word-break:break-all; }}
  .card .c {{ font-size:10pt; margin-top:.05in; }}
  @media screen {{ body {{ background:#555; padding:24px 0; }}
    .sheet {{ background:#fff; margin:0 auto; box-shadow:0 8px 40px rgba(0,0,0,.5); }} }}
</style></head>
<body><div class="sheet">{cards}</div></body></html>
"""

CARD = """<div class="card">
    <div class="k">LOST? DON'T GUESS.</div>
    <h2>Scan for the<br>building map</h2>
    <div class="q">{qr}</div>
    <div class="u">{url_pretty}</div>
    <div class="c">{community}</div>
  </div>"""


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("usage: make-qr.py <url> [community name]")
    make(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "")
