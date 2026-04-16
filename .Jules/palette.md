## 2025-05-14 - Interactive Map Accessibility
**Learning:** Interactive maps implemented as `div` elements are invisible to screen readers and keyboard users. Adding `role="button"`, `tabIndex={0}`, and `aria-label` makes them discoverable, and `onKeyDown` allows keyboard triggers. Large interactive elements benefit from `focus-visible:ring-inset` to keep the focus indicator within boundaries.
**Action:** Always wrap or convert interactive map containers into semantic/accessible elements with explicit keyboard handlers and inset focus rings.

## 2025-05-14 - Semantic Bottom Sheet Handles
**Learning:** Using `div` for bottom sheet handles makes them difficult to navigate via keyboard. Converting them to `<button>` with `type="button"` and `aria-label` provides a better experience. Using `group` on the parent button allows styling a visible handle bar inside it on focus.
**Action:** Implement bottom sheet handles as semantic buttons and use group-focus styles for inner decorative elements.
