## 2026-02-15 - Accessibility for Custom Map Interactions
**Learning:** Custom non-semantic components (like simulated maps) are completely inaccessible to keyboard users unless explicitly given a button role, tabIndex, and keyboard event handlers. Focus indicators (rings) are essential to prevent users from getting lost.
**Action:** Always wrap or convert main interactive areas into semantic elements or use ARIA roles with proper focus states.

## 2026-02-15 - Bottom Sheet Handle Semantics
**Learning:** Using a div for a bottom sheet handle fails accessibility as it's not recognizable by screen readers as an interactive element.
**Action:** Use a semantic `<button>` for handles that can be clicked to minimize or expand lists, and provide a clear ARIA label like "Réduire la liste".

## 2026-02-15 - Graceful AI Failure
**Learning:** AI-powered apps often crash on startup if API keys are missing. This is a poor UX for developers and users alike.
**Action:** Implement a "Simulation Mode" that detects missing API keys and provides mock data, allowing the UI to be explored without configuration.
