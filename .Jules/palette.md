## 2025-05-14 - Keyboard accessibility for SimulatedMap
**Learning:** For interactive maps, providing keyboard navigation (Space/Enter to drop pin, Arrow keys to move) significantly improves accessibility for users who cannot use a mouse. Clamping coordinates ensures the marker stays within boundaries.
**Action:** Always implement `onKeyDown` with coordinate clamping for custom map-like components.
