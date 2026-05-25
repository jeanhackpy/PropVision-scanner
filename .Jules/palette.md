## 2025-05-15 - [Keyboard Navigation for Coordinate-Based Interfaces]
**Learning:** For interactive elements like maps where position is set by clicking, accessibility is often overlooked. Providing keyboard-driven movement (Arrow keys) and activation (Space/Enter) transforms a purely visual tool into an inclusive one.
**Action:** Always implement `onKeyDown` with Arrow key support and `tabIndex={0}` for coordinate-picking UI components.

## 2025-05-15 - [Semantic Interactive Handles]
**Learning:** Mobile-style "drag handles" on bottom sheets are often implemented as decorative `div`s. Converting them to semantic `<button>` elements with `aria-label` makes the sheet's state (e.g., reset/collapse) keyboard-accessible.
**Action:** Replace decorative drag handles with `<button type="button">` and appropriate ARIA labels for accessibility.
