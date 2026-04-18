# Napkin Runbook
## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-04-18] Prefer static-first pages for this repo**
   Do instead: implement landing-page changes in plain `index.html`, `style.css`, and `script.js`, then verify by loading the generated files directly or through a simple static server.

## Shell & Command Reliability
1. **[2026-04-18] PDF text tools are not installed locally**
   Do instead: use macOS Quick Look thumbnail generation (`qlmanage -t`) to inspect resume PDFs when extracting source content for the site.

## Domain Behavior Guardrails
1. **[2026-04-18] GitHub Pages asset links should be repo-local**
   Do instead: copy downloadable assets like the resume PDF into the repo and link them with relative paths so the published site works without external filesystem dependencies.

## User Directives
1. **[2026-04-18] Resume presentation should be minimal and text-first**
   Do instead: avoid portrait-led layouts and prioritize concise professional content, readable hierarchy, and clean contact actions.
