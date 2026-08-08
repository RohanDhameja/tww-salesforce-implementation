# TWW progress dashboard

The public progress landing page for the Together We Will Salesforce implementation.

## Published site

[https://rohandhameja.github.io/tww-salesforce-implementation/](https://rohandhameja.github.io/tww-salesforce-implementation/)

## What it communicates

- Current project phase and verified project facts
- Completed work
- Active work
- Phase 0–3 delivery roadmap
- Decisions required before Phase 1
- Latest verified Salesforce activity

The dashboard deliberately avoids invented completion percentages. Update its status only when the corresponding repository documentation or worklog provides evidence.

## Development

- `npm run dev` — local interactive development
- `npm run build` — generate and validate the static production site
- `npm run build:pages` — generate the static GitHub Pages output
- `node --test tests/rendered-html.test.mjs` — validate rendered dashboard content

GitHub Actions publishes the static export when dashboard changes reach `main` or the active progress-dashboard branch.
