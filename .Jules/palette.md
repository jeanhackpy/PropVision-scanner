## 2025-05-14 - Interactive Map & Bottom Sheet Accessibility

**Learning:** Interactive components built with non-semantic elements (like `div` for maps or drag handles) are invisible to keyboard users and screen readers. They require explicit ARIA roles, tab indexing, and keyboard event listeners to be truly accessible. In this app, the bottom sheet handle was a static `div` and the map was only interactive via mouse clicks.

**Action:** Always implement interactive map containers with `role="button"` and `tabIndex={0}`. Use semantic `<button>` elements for bottom sheet handles and interactive UI controls. Ensure icon-only buttons have descriptive `aria-label` attributes in the application's primary language (French).
