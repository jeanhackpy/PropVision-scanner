## 2025-05-14 - Accessibility for Custom Interactive Components
**Learning:** Interactive maps implemented with `div` elements require explicit `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for Space/Enter to be accessible to keyboard users. Additionally, supporting Arrow keys for fine-grained movement of dropped pins significantly enhances the experience for users who cannot use a mouse.
**Action:** Always implement keyboard listeners for custom coordinate-based components to allow placement and adjustment of markers via arrow keys and confirmation keys.

## 2025-05-14 - Semantic Bottom Sheet Handles
**Learning:** A bottom sheet drag handle should be a semantic `<button>` instead of a `div` to ensure it's in the tab order. It should be `disabled` when the sheet is already minimized to avoid redundant focus/interactions, and use `group-focus-visible` on the inner visual bar to provide clear focus indication without compromising the "drag handle" aesthetic.
**Action:** Use a `<button type="button" aria-label="..." disabled={!active}>` with an inner decorative `div` for bottom sheet handles.
