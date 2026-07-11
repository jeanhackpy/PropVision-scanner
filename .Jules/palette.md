## 2025-05-14 - Keyboard Accessibility for Map Interactions
**Learning:** For simulated map interfaces, adding `role="application"` and `tabIndex={0}` is necessary but not sufficient; providing a center-point action (like dropping a pin at 50/50) via `Enter`/`Space` keys provides an immediate "keyboard-first" way to interact with spatial data without complex cursor emulation.
**Action:** Always implement a default keyboard action for map-like components that allows users to trigger the primary interaction (e.g., pin drop) at the current focus center.

## 2025-05-14 - Production Build Mounting Requirement
**Learning:** In this Vite setup, the React application failed to bundle correctly (transforming only 2 modules) because the `<script type="module" src="/index.tsx"></script>` entry point was missing from `index.html`.
**Action:** Ensure the entry point script is explicitly defined in `index.html` to enable Vite to correctly crawl the dependency graph during production builds.
