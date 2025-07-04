# Solomon-Ai-Dashboard

This repository contains a small prototype of the Solomon reasoning engine.

## Symbolic Logging

The dashboard includes a symbolic logging system with a real-time log view.
Logs can be exported as JSON or shared via a webhook endpoint.
See `SymbolicLogView` for the UI and `api/share-symbolic-logs.ts` for the share handler.

## Wisdom Thread Preview ![Preview](https://img.shields.io/badge/preview-available-green)

A multilingual wisdom visualization is available alongside the symbolic log. Use `ReasoningTabs` to toggle between the log view and the animated `WisdomThread` with language selector (English, Dutch, Papiamento).
