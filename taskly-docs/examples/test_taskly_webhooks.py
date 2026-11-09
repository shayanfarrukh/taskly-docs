import hashlib
import hmac
import unittest

from taskly_webhooks import verify_signature

SECRET = "whsec_example123"
BODY = b'{"id":"evt_7c20ab","type":"task.completed"}'
NOW = 1731000000


def sign(body: bytes, timestamp: int = NOW, secret: str = SECRET) -> str:
    digest = hmac.new(secret.encode(), f"{timestamp}.".encode() + body, hashlib.sha256).hexdigest()
    return f"t={timestamp},v1={digest}"


class VerifySignatureTests(unittest.TestCase):
    def test_valid_signature(self):
        self.assertTrue(verify_signature(SECRET, sign(BODY), BODY, now=NOW))

    def test_tampered_body(self):
        self.assertFalse(verify_signature(SECRET, sign(BODY), BODY + b" ", now=NOW))

    def test_wrong_secret(self):
        self.assertFalse(verify_signature("whsec_other", sign(BODY), BODY, now=NOW))

    def test_old_timestamp_is_rejected(self):
        self.assertFalse(verify_signature(SECRET, sign(BODY), BODY, now=NOW + 301))

    def test_malformed_header(self):
        for bad in ["", "garbage", "t=abc,v1=123", "v1=123"]:
            self.assertFalse(verify_signature(SECRET, bad, BODY, now=NOW))


if __name__ == "__main__":
    unittest.main()
