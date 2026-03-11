## 2025-05-15 - [Accessibility & Semantic HTML in Bottom Sheets]
**Learning:** Using a semantic `<button>` instead of a `div` for bottom sheet handles improves keyboard accessibility (Tab index, Enter/Space support) for free and allows for clearer ARIA labeling. Disabling the button when the sheet is already minimized prevents redundant interactions and improves screen reader focus management.
**Action:** Always wrap interactive "drag handles" or "minimize bars" in semantic `<button>` elements and use `aria-label` like "Réduire la liste" for clarity.

## 2025-05-15 - [API Key Safety in Browser-based AI Services]
**Learning:** Browser-injected environment variables (like those from Vite) can sometimes be literal "undefined" strings. Initializing AI SDKs with these values can cause hard-to-debug startup crashes.
**Action:** Implement explicit checks for `undefined` or the string `"undefined"` before initializing services like `GoogleGenAI` to allow the app to boot gracefully even without a key.
