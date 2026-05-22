## 2025-05-14 - Keyboard Accessible Maps
**Learning:** Keyboard-accessible maps require state-based ARIA labels (e.g., "Placer un marqueur" vs "Ajuster la position") and precise movement logic (2% steps) to provide a comparable experience to mouse interactions. Using `preventDefault` on arrow keys is essential to prevent page scrolling while interacting with the map.
**Action:** When making map components interactive, always include `tabIndex={0}`, `role="button"` (or `application`), and a keydown handler that supports both dropping a pin (Enter/Space) and moving it (Arrows).
