## 2025-05-15 - Interactive Map Accessibility
**Learning:** For coordinate-based interactive elements like maps, adding keyboard navigation (Arrow keys for movement, Space/Enter for action) significantly improves accessibility for non-mouse users. Using `focus-visible:ring-inset` ensures the focus indicator remains visible even at the screen edges.
**Action:** Always implement `onKeyDown` handlers and semantic roles (`role="button"`, `tabIndex={0}`) when creating custom interactive spatial components.
