## 2025-05-14 - Accessible Map Interactions
**Learning:** Custom interactive areas like maps are often implemented as generic `div` elements, making them invisible to keyboard users. Simply adding `onClick` isn't enough for accessibility.
**Action:** Always add `tabIndex={0}`, `role="button"`, and `onKeyDown` (handling Enter/Space) to non-semantic interactive containers. Use `focus-visible:ring-inset` for maps to ensure the focus indicator is visible inside the container's bounds without shifting layout.

## 2025-05-14 - Bottom Sheet Handle Semantics
**Learning:** Using a `div` for a bottom sheet drag handle prevents screen readers from identifying it as an actionable element and blocks keyboard access.
**Action:** Use a semantic `<button>` for the entire handle area. Apply the 'group' class to the button and use `group-focus-visible` on the child visual bar to provide clean focus states while maintaining a minimal aesthetic.
