## 2025-05-22 - Accessibility of Custom Interaction Handles
**Learning:** Custom UI elements like "drag handles" for bottom sheets are often implemented as divs, making them invisible to screen readers and inaccessible via keyboard. Converting them to semantic buttons with appropriate ARIA labels (e.g., 'Réduire la liste') significantly improves the UX for all users.
**Action:** Always use `<button>` for any element that the user can click to change the state of the UI, even if it's just a visual handle.

## 2025-05-22 - Keyboard Navigation for Spatial Interfaces
**Learning:** Interactive maps or spatial search areas are often mouse-only. Adding `role="button"` and `tabIndex={0}` along with a keyboard handler (Space/Enter) to drop a pin at a default location (e.g., center) makes these core features accessible to keyboard-only users.
**Action:** Ensure custom spatial components have a keyboard fallback for their primary interaction.
