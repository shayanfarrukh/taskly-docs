---
id: changelog
sidebar_position: 7
title: Changelog
---

All notable changes to the Taskly sample API are listed here, newest first.

## 1.0.0 (2026-11-07)

**Added**
- Tasks: create, list, retrieve and complete.
- Cursor-based pagination on `GET /tasks`.
- Webhook endpoints and the `task.created` and `task.completed` events, signed with HMAC-SHA256.
- Rate limiting of 100 requests per minute per API key.
