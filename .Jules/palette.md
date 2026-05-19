
## 2025-05-14 - Keyboard-Accessible Map Interactions
**Learning:** Interactive map elements that rely solely on click events exclude keyboard users. Using 'role="button"' and 'tabIndex={0}' on the map container, combined with an 'onKeyDown' handler for Space/Enter (to drop) and Arrow keys (to move), provides a semantic and functional alternative for navigation.
**Action:** Always verify if coordinate-based interactive components (maps, canvases, sliders) have keyboard-driven fallbacks for selection and precise adjustment.
