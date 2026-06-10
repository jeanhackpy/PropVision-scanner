## 2025-06-10 - [Keyboard-Accessible Custom Map]
**Learning:** Custom interactive components that use coordinate-based mouse events (like our SimulatedMap) must be explicitly retrofitted for keyboard users. Simple ARIA labels are insufficient; a functional navigation model (e.g., Arrow keys for movement) is required for true parity.
**Action:** Always implement Arrow key support for coordinate-based UI and use clamping to keep markers within bounds.

## 2025-06-10 - [Semantic Bottom Sheet Handles]
**Learning:** Decorative "handle" bars in mobile-style bottom sheets are often implemented as divs with click listeners, which are inaccessible. Converting them to semantic buttons with clear ARIA labels improves both touch and keyboard accessibility.
**Action:** Wrap bottom sheet handles in <button> and provide descriptive aria-labels like "Réinitialiser la zone".
