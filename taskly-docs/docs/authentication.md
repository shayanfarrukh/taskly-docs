---
id: authentication
sidebar_position: 3
title: Authentication
---

Every Taskly request must include an API key. Requests without a valid key return `401 Unauthorized`.

## API key types

| Key prefix | Environment | Notes |
|---|---|---|
| `tk_test_` | Test | Safe for development. Data is separate from live data. |
| `tk_live_` | Live | Use only in production. Treat like a password. |

## Send your key

Send the key as a Bearer token in the `Authorization` header:

```bash
curl https://api.taskly.example/v1/tasks \
  -H "Authorization: Bearer $TASKLY_API_KEY"
```

## Keep your key safe

- Store keys in environment variables or a secrets manager, never in source code.
- Never commit keys to Git, even in a private repository.
- Never put a key in client-side code, such as a browser app or mobile app. Call Taskly from your server instead.
- If a key is exposed, revoke it and create a new one immediately.

## Troubleshooting a 401 response

| Cause | Fix |
|---|---|
| The `Authorization` header is missing | Add `Authorization: Bearer YOUR_API_KEY` |
| The word `Bearer` is missing or misspelled | Use the exact format `Bearer <key>` |
| You used a test key against live data (or the reverse) | Use the key that matches the environment |
| The key was revoked | Create a new key |
