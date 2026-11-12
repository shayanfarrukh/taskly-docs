---
id: errors
sidebar_position: 4
title: Errors and rate limits
---

Taskly uses standard HTTP status codes. Error responses return a JSON body with a machine-readable `code` and a human-readable `message`:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "title is required"
  }
}
```

## Status codes

| Status | Meaning | What to do |
|---|---|---|
| `400` | The request is malformed or missing a required field. | Read `error.message`, fix the request, and try again. |
| `401` | The API key is missing or invalid. | See [Authentication](/authentication). |
| `404` | The resource does not exist. | Check the ID. |
| `409` | The action conflicts with the current state, for example completing an already completed task. | No retry needed. Fetch the task to see its current state. |
| `429` | You sent too many requests. | Wait for the number of seconds in the `Retry-After` header, then retry. |
| `5xx` | A server error occurred. | Retry with exponential backoff. |

## Rate limits

In this sample API, each key may send **100 requests per minute**. When you exceed the limit, the API returns `429` and a `Retry-After` header.

## Retry with backoff

```python
import time
import requests

def get_with_retry(url, headers, max_attempts=5):
    for attempt in range(max_attempts):
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 429:
            wait = int(response.headers.get("Retry-After", 2 ** attempt))
            time.sleep(wait)
            continue
        if response.status_code >= 500:
            time.sleep(2 ** attempt)
            continue
        return response
    raise RuntimeError("Request failed after retries")
```

Only retry `429` and `5xx` responses. Retrying a `400` or `404` returns the same error.
