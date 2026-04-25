## 2026-04-25 - Keyboard Accessible Interactive Maps
**Learning:** For custom-built interactive maps (like `SimulatedMap`), simply adding a click handler is insufficient for accessibility. Adding `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler that supports both "dropping" a pin (Enter/Space) and fine-grained movement (Arrow keys with coordinate clamping) provides a much better experience for keyboard users.
**Action:** Always implement `onKeyDown` with Arrow key support for coordinate-based interactive components.

## 2026-04-25 - Semantic Bottom Sheet Handles
**Learning:** Decorative drag handles in bottom sheets should be implemented as semantic `<button>` elements. This allows keyboard users to focus the handle and provides a clear interaction point (e.g., to reset the state or close the sheet) that is announced by screen readers.
**Action:** Use a `<button>` with `aria-label` and `group` focus styling for bottom sheet handles.
