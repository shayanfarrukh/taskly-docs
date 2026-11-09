"""Minimal Flask receiver for Taskly webhooks. Run: pip install flask && flask --app webhook_receiver run"""
import os

from flask import Flask, abort, request

from taskly_webhooks import verify_signature

app = Flask(__name__)
SECRET = os.environ["TASKLY_WEBHOOK_SECRET"]


@app.post("/hooks/taskly")
def taskly_hook():
    header = request.headers.get("Taskly-Signature", "")
    if not verify_signature(SECRET, header, request.get_data()):
        abort(401)

    event = request.get_json()
    if event["type"] == "task.completed":
        print("Task completed:", event["data"]["task"]["id"])
    return "", 200
