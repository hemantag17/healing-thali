"""Render the Healing Thali fridge sheet (/sheet view) to one-page A4 PDFs.

Generates one PDF per delivery mode (C-section + normal/vaginal delivery)
using Playwright (chromium headless) with print media emulation so the result
matches exactly what a user gets via the browser Print dialog.

Output:
  /home/z/my-project/public/cheatsheet.pdf                     (C-section)
  /home/z/my-project/download/healing-thali-fridge-sheet.pdf   (C-section)
  /home/z/my-project/public/cheatsheet-normal-delivery.pdf     (normal delivery)
  /home/z/my-project/download/healing-thali-fridge-sheet-normal-delivery.pdf
"""
import shutil
from playwright.sync_api import sync_playwright

URL = "http://localhost:3000/#sheet"

JOBS = [
    {
        "mode": "csection",
        "out": "/home/z/my-project/public/cheatsheet.pdf",
        "download": "/home/z/my-project/download/healing-thali-fridge-sheet.pdf",
    },
    {
        "mode": "vaginal",
        "out": "/home/z/my-project/public/cheatsheet-normal-delivery.pdf",
        "download": "/home/z/my-project/download/healing-thali-fridge-sheet-normal-delivery.pdf",
    },
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for job in JOBS:
        page = browser.new_page(viewport={"width": 900, "height": 1400})
        # Set the delivery mode before the app boots so the sheet renders
        # the right content variant.
        page.add_init_script(
            "window.localStorage.setItem('healing-thali-delivery-mode', '%s')"
            % job["mode"]
        )
        page.goto(URL, wait_until="networkidle", timeout=60000)
        page.wait_for_selector("#fridge-sheet", timeout=30000)
        # Give fonts a moment to settle
        page.wait_for_timeout(1500)
        page.emulate_media(media="print")
        page.pdf(
            path=job["out"],
            format="A4",
            print_background=True,
            margin={"top": "8mm", "bottom": "8mm", "left": "8mm", "right": "8mm"},
        )
        shutil.copyfile(job["out"], job["download"])
        print(f"[{job['mode']}] PDF written: {job['out']}")

        # Verify page count
        try:
            from pypdf import PdfReader
            n = len(PdfReader(job["out"]).pages)
            print(f"[{job['mode']}] Page count: {n}")
            if n != 1:
                raise SystemExit(f"WARNING: expected 1 page, got {n}")
        except ImportError:
            print("pypdf not available - skipped page count check")
        page.close()
    browser.close()

print("Done.")
