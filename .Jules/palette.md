## 2026-02-23 - [Interactive Map & Bottom Sheet Accessibility]
**Learning:** Custom interactive elements (maps, handles) implemented as `div`s with `onClick` are completely inaccessible to keyboard users and screen readers. Using `focus-visible` with `ring-offset` provides clear feedback for keyboard users without affecting mouse users.
**Action:** Always use semantic `<button>` for interaction handles. For custom components like maps, add `tabIndex={0}`, `role="button"`, and `onKeyDown` listeners.

## 2026-02-23 - [Graceful Service Initialization]
**Learning:** Top-level initialization of AI services (like Gemini) can crash the entire application if environment variables (API keys) are missing.
**Action:** Wrap service initialization in checks and handle missing dependencies gracefully (e.g., return `null` or mock data) to allow the rest of the UI to function.
