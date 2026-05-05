## 2025-05-22 - Keyboard navigation for coordinate-based interactive elements
**Learning:** Interactive maps or coordinate-based interfaces often lack basic keyboard accessibility. When using a `div` as a map, it must be explicitly made a `role="button"` with `tabIndex={0}`. Movement logic using Arrow keys (e.g., 2% steps) with coordinate clamping (0-100) provides a usable alternative to mouse clicks.
**Action:** Always implement `onKeyDown` with Arrow key support and coordinate clamping for map-like components to ensure they are navigable for keyboard users.
