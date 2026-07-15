# Palette UX Journal

## 2025-05-14 - Interactive Map Accessibility
**Learning:** For application-like components (SimulatedMap), adding `role="application"` and `tabIndex={0}` is essential for keyboard discoverability. However, users need a clear instruction on how to interact (e.g., Space/Enter to drop pin) which can be provided via `aria-label`.
**Action:** Always provide `onKeyDown` handlers and descriptive ARIA labels when making non-standard interactive components keyboard-accessible.

## 2025-05-14 - Build-Time Script Injection
**Learning:** In projects using `importmap` and ESM resolution via Vite, the presence of the entry point script tag in `index.html` is critical not just for runtime but for the build process to identify and transform the module tree.
**Action:** Verify that `index.html` explicitly includes the application entry point to ensure production builds are complete.
