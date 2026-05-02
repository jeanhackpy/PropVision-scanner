## 2025-05-15 - Accessible Keyboard Navigation for Coordinate-Based Components
**Learning:** Interactive maps or canvas-like components using `div` elements must be explicitly made keyboard-accessible. Adding `role="application"` or `role="button"` along with `tabIndex={0}` and mapping Arrow keys to coordinate changes (with clamping) allows keyboard users to interact with spatial data.
**Action:** Always provide keyboard-based movement (Arrow keys) and action (Space/Enter) triggers when implementing custom coordinate-based interactive elements.
