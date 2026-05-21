## 2025-05-15 - Map Keyboard Accessibility
**Learning:** For interactive maps that use coordinate-based positioning (0-100%), adding `role="button"` and `tabIndex={0}` to the container allows keyboard users to interact. Using Arrow keys with a small percentage step (e.g., 2%) and clamping provides a smooth navigation experience comparable to mouse clicks.
**Action:** Always implement `onKeyDown` for custom interactive canvas or map-like components to ensure they are accessible to keyboard-only and screen reader users.
