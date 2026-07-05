## 2026-07-05 - Accessibility of Simulated Map and Bottom Sheets

**Learning:** In applications using custom "simulated" interactive elements like SVG maps or decorative bottom sheet handles, accessibility is often completely overlooked. Adding `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers is essential to make these features usable for keyboard and screen reader users. Furthermore, using `focus-visible:ring-inset` is a reliable way to ensure focus indicators are visible even when the container has `overflow: hidden`.

**Action:** Always check for non-semantic interactive elements (divs/svgs with onClick) and ensure they have proper ARIA roles, tab accessibility, and keyboard event listeners. Use French ARIA labels if the UI is localized in French.
