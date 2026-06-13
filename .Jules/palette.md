## 2025-05-22 - Interactive Map Accessibility
**Learning:** Simulated maps using coordinate-based overlays (like pins) are often invisible to keyboard and screen reader users. Adding role="button", tabIndex={0}, and Arrow key navigation with 2% increments allows for precise, accessible location selection without a mouse.
**Action:** Always provide keyboard alternatives for coordinate-based interactions using focusable containers and preventDefault for arrow keys to avoid page scroll.
