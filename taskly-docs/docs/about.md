---
id: about
sidebar_position: 8
title: About this project
---

:::info Sample project
Taskly is a **fictional** API. This site is a portfolio sample created by Shayan Farrukh to demonstrate developer documentation skills. It is not a real product and is not work produced for any employer.
:::

## Purpose

Developer documentation succeeds when a developer makes a first successful API call quickly. This project shows how I plan, write and publish documentation for a public REST API, using a docs-as-code workflow.

## What this site demonstrates

| Skill | Where to see it |
|---|---|
| Task-first guides with runnable examples | [Quickstart](/quickstart) |
| Authentication and security guidance | [Authentication](/authentication) |
| Error handling and troubleshooting tables | [Errors and rate limits](/errors) |
| Event-driven documentation with signature verification | [Webhooks](/webhooks) |
| OpenAPI 3.1 specification writing | [openapi.yaml](https://github.com/shayanfarrukh/taskly-docs/blob/main/openapi/openapi.yaml) |
| Generated API reference from the specification | [API Reference](/category/api) |
| Change communication | [Changelog](/changelog) |

## What I wrote and what is generated

- **Written by hand:** the OpenAPI specification (descriptions, examples, schemas), the guides, the code samples and the troubleshooting tables.
- **Generated:** the API Reference pages are produced from the OpenAPI file by the `docusaurus-plugin-openapi-docs` plugin. Fixing the specification fixes the reference, so there is one source of truth.
- **Tested:** the webhook signature verification code has unit tests in the repository's `examples` folder. The REST examples call a fictional server, so they were checked for syntax but not run against a live API.

## Documentation decisions

1. **Task-first structure.** The quickstart follows the order developers actually work in: authenticate, create, update, list.
2. **Two languages, one pattern.** Every example appears in cURL and Python, with a tab that remembers the reader's choice across pages.
3. **Errors that say what to do.** Every status code has a "what to do" column, not only a meaning.
4. **Security up front.** Key handling and webhook signature verification are documented in full, including replay protection.
5. **Docs as code.** Content lives in Git, the specification is linted on every change, and every push to `main` redeploys the site.

## Tools

Docusaurus, OpenAPI 3.1, Redocly CLI (linting), Python, GitHub Actions and GitHub Pages.
