## 2025-05-15 - Keyboard-accessible coordinate selection
**Learning:** For interactive components that rely on coordinate-based input (like maps or canvas areas), providing keyboard navigation via arrow keys and a default center-drop (Space/Enter) significantly improves accessibility for screen reader and keyboard-only users.
**Action:** Always include `tabIndex`, `role="button"`, and `onKeyDown` handlers with arrow key support for custom coordinate-based interactive elements.
