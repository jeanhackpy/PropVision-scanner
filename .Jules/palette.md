## 2026-04-29 - Accessibility and Keyboard Interaction for Maps
**Learning:** Interactive map visualizations using `div` elements are often opaque to screen readers and keyboard users. Adding `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for Enter/Space provides a baseline, but supporting Arrow keys for movement significantly improves usability for power users.
**Action:** When making a map interactive, always implement `role="button"`, `tabIndex={0}`, a descriptive `aria-label`, and support for both activation (Space/Enter) and navigation (Arrows).

## 2026-04-29 - Bottom Sheet Handle Semantics
**Learning:** Decorative "drag handles" in bottom sheets should be semantic `<button>` elements to be discoverable by keyboard users. Adding a `disabled` state when the sheet is already minimized prevents redundant focus and improves clarity.
**Action:** Convert purely visual drag handles into `<button type="button">` with appropriate `aria-label` and `disabled` logic.

## 2026-04-29 - Critical Entry Point in Vite Projects
**Learning:** In some Vite project structures, `index.html` might be missing the entry point script tag (e.g., `<script type="module" src="/index.tsx"></script>`), causing the app to render a blank screen despite the dev server running.
**Action:** Always verify the presence of the entry point script tag in `index.html` during initial exploration.
