## 2025-05-22 - [Keyboard Accessibility for Maps]
**Learning:** Interactive maps often rely solely on mouse/touch events, excluding keyboard users. Using `role="button"` and `tabIndex={0}` on the container allows focus, while `onKeyDown` handlers for Space/Enter and Arrow keys enable intuitive marker placement and adjustment. Clamping coordinates within [0, 100] is essential to prevent markers from escaping the visible area.
**Action:** Always include keyboard movement logic for custom coordinate-based interactive components.
