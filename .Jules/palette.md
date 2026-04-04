## 2025-05-22 - Accessibility for Bottom Sheet Handles
**Learning:** Bottom sheet handles implemented as `div`s with `onClick` handlers are invisible to screen readers and keyboard users. Using a semantic `<button>` with `group-focus-visible` styles on inner decorative elements provides accessible focus indicators without compromising the minimalist visual design of the drag handle.
**Action:** Always implement interactive bottom sheet handles as `<button>` elements and use `disabled` states to prevent redundant interactions when the sheet is already in its target state (e.g., minimized).
