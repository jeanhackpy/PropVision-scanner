## 2026-04-22 - Keyboard Map Navigation
**Learning:** Custom interactive components like maps must be explicitly made keyboard-accessible by adding `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers. Users should be able to trigger the primary action (drop pin) with Space/Enter and perform fine-grained adjustments (move pin) with Arrow keys.
**Action:** Use `role="button"` and `tabIndex={0}` on interactive `div` containers, and implement Arrow key handlers with coordinate clamping for map-like interfaces.

## 2026-04-22 - Semantic Bottom Sheet Handles
**Learning:** Bottom sheet handles are often implemented as decorative `div`s, which makes them inaccessible to keyboard users. Converting them to semantic `<button>` elements with `aria-label` and `disabled` states (when the sheet is already at the target position) improves both accessibility and UX clarity.
**Action:** Always use `<button type="button">` for interactive handles and manage `disabled` state based on the sheet's current position to avoid redundant interactions.
