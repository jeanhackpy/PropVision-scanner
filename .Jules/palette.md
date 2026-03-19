## 2025-05-15 - [Keyboard Navigation for Interactive Maps]
**Learning:** For large interactive elements like maps that use coordinate-based clicking, adding keyboard support (Enter/Space) with a sensible default action (e.g., center-point drop) significantly improves accessibility for non-mouse users.
**Action:** Always add `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers to custom interactive map containers, ensuring focus is visually indicated with `focus-visible:ring-inset`.
