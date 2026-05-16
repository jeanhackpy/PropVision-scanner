## 2025-05-22 - [Keyboard Navigation for Maps]
**Learning:** For interactive map simulations, keyboard accessibility can be achieved by making the container focusable and using Arrow keys for fine-grained movement of markers. Clamping coordinates between 0-100 ensures markers stay within the visible area.
**Action:** Always include `tabIndex={0}`, a descriptive `aria-label`, and `onKeyDown` handlers for map-like components.
