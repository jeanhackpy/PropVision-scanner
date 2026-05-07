## 2025-05-22 - [Keyboard-Accessible Interactive Maps]
**Learning:** For simulated map interfaces, using a standard `div` with `onClick` is insufficient for accessibility. Converting the map container to a semantic `role="button"` with `tabIndex={0}` and implementing `onKeyDown` allows keyboard users to interact with spatial data (dropping pins at center with Enter/Space) and refine coordinates (moving pins with Arrow keys).

**Action:** Always provide `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for map-like interactive surfaces. Use clamping (0-100) for coordinate-based keyboard movement to keep markers within bounds.

## 2025-05-22 - [Accessible Handle Patterns]
**Learning:** "Drag handles" or bottom sheet toggles are often implemented as decorative `div`s. Converting them to `<button type="button">` with `group` classes allows the focus indicator to be placed specifically on the visual "pill" via `group-focus-visible:ring` while maintaining a large, user-friendly interactive hit area on the parent button.

**Action:** Wrap decorative handles in semantic buttons and use Tailwind `group` utilities to manage focus styling on child elements for a polished, accessible experience.
