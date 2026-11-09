"""Verify Taskly webhook signatures (sample code for the fictional Taskly API)."""
import hashlib
import hmac
import time

TOLERANCE_SECONDS = 300  # reject events older than 5 minutes to block replay attacks


def verify_signature(secret: str, header: str, body: bytes, now: float | None = None) -> bool:
    """Return True if the Taskly-Signature header matches the raw request body.

    header: value of the Taskly-Signature header, for example "t=1731000000,v1=ab12..."
    body:   the raw request body as bytes, exactly as received (do not re-serialise JSON)
    """
    try:
        parts = dict(item.split("=", 1) for item in header.split(","))
        timestamp = int(parts["t"])
        received = parts["v1"]
    except (KeyError, ValueError):
        return False

    current = time.time() if now is None else now
    if abs(current - timestamp) > TOLERANCE_SECONDS:
        return False

    signed_payload = f"{timestamp}.".encode() + body
    expected = hmac.new(secret.encode(), signed_payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, received)
