## 2024-05-24 - Semantic Interaction Handles
**Learning:** Decorative handles (like bottom sheet drag bars) are often implemented as static divs, making them inaccessible to keyboard and screen reader users.
**Action:** Always wrap interaction handles in a semantic `<button>` with descriptive `aria-label` (e.g., 'Réduire la liste') and ensure they have visible focus states using `group-focus-visible` or similar patterns.

## 2024-05-24 - Interactive Maps Keyboard Access
**Learning:** Custom map implementations often rely solely on click events, excluding keyboard-only users.
**Action:** Provide a fallback keyboard interaction (e.g., dropping a pin at the center) by adding `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler to the map container.
