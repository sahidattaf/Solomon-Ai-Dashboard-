# Solomon Reasoning Engine

A visual AI dashboard inspired by Solomon's wisdom. This project provides an interactive interface for exploring reasoning laws, wisdom modules, memory caching, visual logic and documentation.

## Symbolic Log Utilities

The `src/lib/symbolicLogger.ts` file implements a lightweight logger used throughout the dashboard. The `SymbolicLogView` component displays these logs with filters and options to export or share them via `/api/share-symbolic-logs`.

## Wisdom Thread and Tabs

`WisdomThread` visualizes reasoning steps with framer-motion animations and supports English, Dutch and Papiamento via `i18n.ts`. Use `ReasoningTabs` to switch between the log view and the wisdom thread.
