## 2025-05-15 - Interactive Custom Components Keyboard Accessibility
**Learning:** Custom interactive elements like simulated maps often lack semantic roles and keyboard handlers, making them invisible to non-mouse users. Adding `role="button"`, `tabIndex={0}`, and `onKeyDown` with a logical default action (like center-point interaction) significantly improves inclusivity.
**Action:** Always check custom `div`-based interactive components for missing ARIA roles and keyboard interaction logic.

## 2025-05-15 - Bottom Sheet Handle Semantics
**Learning:** Drag handles in bottom sheets are often implemented as decorative `div`s. Converting them to `<button>` elements and providing clear `aria-label`s makes the sheet state management (expand/collapse) accessible to screen readers.
**Action:** Use semantic `<button>` elements for any part of a component that triggers a state change on click.
