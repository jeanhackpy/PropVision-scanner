## 2025-05-15 - Interactive Map Keyboard Navigation
**Learning:** For coordinate-based interactive components like a simulated map, adding role="button", tabIndex={0}, and an onKeyDown handler for Arrow keys and Space/Enter dramatically improves accessibility for non-mouse users. Clamping coordinates between 0-100 ensures the marker stays within bounds.
**Action:** Always implement keyboard movement (Arrow keys) and action triggers (Space/Enter) for custom interactive visualizations.

## 2025-05-15 - Missing Entry Point in index.html
**Learning:** Vite projects may sometimes have an index.html that lacks the script tag pointing to the entry point (e.g., index.tsx), leading to a blank page even if the build succeeds.
**Action:** Always verify that the entry point script is present in index.html and correctly positioned after the root div.
