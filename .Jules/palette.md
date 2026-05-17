## 2025-05-17 - Keyboard-accessible maps
**Learning:** For interactive map components that rely on coordinate-based clicks, providing a keyboard alternative (Space/Enter to drop, Arrows to move) significantly improves accessibility for motor-impaired users and power users.
**Action:** Always include a `tabIndex={0}` and `onKeyDown` handler on custom interactive containers to support standard keyboard interactions.
