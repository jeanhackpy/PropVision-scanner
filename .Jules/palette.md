## 2026-04-14 - Interactive Map Keyboard Accessibility
**Learning:** Simply adding a focus state and an 'Enter' fallback to an interactive map isn't enough for true accessibility. Keyboard users need a way to navigate spatial coordinates.
**Action:** When making map-like components keyboard-accessible, implement arrow key handlers to move markers in small increments (e.g., 2% steps) once a pin is dropped.
