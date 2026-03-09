## 2025-05-14 - Interactive Map Accessibility
**Learning:** Custom interactive elements like maps built with `div` containers are completely invisible to keyboard and screen reader users unless explicitly given a `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler. Focus visibility must be explicitly managed with `focus-visible` classes to avoid cluttering the UI for mouse users.
**Action:** Always wrap interactive map areas in a semantic button or apply ARIA button roles with keyboard handlers. Use `focus-visible:ring-inset` for elements with complex backgrounds to ensure the focus indicator is always visible.

## 2025-05-14 - Service Initialization Safety
**Learning:** Browser environments can inject 'undefined' as a literal string for missing environment variables. AI services (like Gemini) that expect a valid API key will crash if passed this string.
**Action:** Implement defensive checks for both `undefined` and the string `'undefined'` when initializing external services to ensure the app remains functional in unconfigured environments.
