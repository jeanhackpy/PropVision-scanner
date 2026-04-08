## 2025-05-14 - Interactive Map & Bottom Sheet Accessibility

**Learning:** Interactive maps implemented as `div` containers require explicit `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers to be accessible to keyboard users. Similarly, decorative bottom sheet handles should be semantic `<button>` elements with `aria-label` and `disabled` states when the sheet is already minimized to avoid confusing screen reader users.

**Action:** Always verify that custom interactive components (maps, drag handles, overlays) are keyboard-reachable and provide appropriate semantic roles and ARIA labels. Use `focus-visible:ring-inset` for large edge-to-edge elements like maps to ensure focus indicators are fully visible.
