# Taskly API Docs (Sample)

A portfolio sample of developer documentation for a **fictional** REST API called Taskly. Taskly does not exist, and this project is not work produced for any employer.

**Live site:** https://shayanfarrukh.github.io/taskly-docs/

## What this project demonstrates

- A task-first quickstart with cURL and Python examples
- Authentication, error handling and rate-limit guidance
- Webhook documentation with HMAC signature verification (code has unit tests)
- An OpenAPI 3.1 specification (`openapi/openapi.yaml`) as the single source of truth
- API reference pages generated from the specification
- A docs-as-code workflow: Git, a linted specification, and automatic deployment to GitHub Pages

## Stack

Docusaurus 3, `docusaurus-plugin-openapi-docs`, OpenAPI 3.1, Redocly CLI, Python, GitHub Actions, GitHub Pages.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm start          # generates the API pages, then serves http://localhost:3000/taskly-docs/
```

Other commands:

```bash
npm run lint:spec        # validate the OpenAPI file
npm run test:examples    # run the webhook example tests (Python 3.10+)
npm run build            # production build into ./build
```

## Project structure

```text
openapi/openapi.yaml   OpenAPI 3.1 specification (hand-written)
docs/                  Guides (hand-written) and docs/api (generated from the spec)
examples/              Python webhook verification code and tests
.github/workflows/     Lint, test, build and deploy to GitHub Pages
```

Do not edit files in `docs/api` by hand. Change `openapi/openapi.yaml` and run `npm run gen-api-docs`.

## Publish your own copy

1. Replace `shayanfarrukh` everywhere (README, `docs/intro.md`, `docs/about.md`, `docs/webhooks.mdx`).
2. Push the repository to GitHub as `taskly-docs` (a public repo).
3. In **Settings > Pages**, set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow builds and deploys the site.

If you name the repository something else, the site reads the name from GitHub automatically in the workflow. For local previews, update `repo` in `docusaurus.config.js`.
