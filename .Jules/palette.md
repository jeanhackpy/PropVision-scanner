## 2026-02-27 - [Keyboard Accessibility for Interactive Canvas/Map]
**Learning:** For custom interactive elements like a simulated map (using a `div` or `canvas`), adding `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler is essential for keyboard-only users to interact with the core functionality. Using a default action (like centering the pin) provides a sensible fallback for keyboard triggers.
**Action:** Always ensure custom interactive containers have appropriate ARIA roles and keyboard listeners to maintain accessibility parity with mouse interactions.
