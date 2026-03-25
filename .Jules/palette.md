## 2025-05-15 - Interactive Map Accessibility
**Learning:** Custom interactive components like maps often rely solely on click events, making them inaccessible to keyboard and screen reader users. Simply adding `role="button"` and `tabIndex={0}` is not enough; one must also handle keyboard events (Enter/Space) and provide visual focus indicators.
**Action:** Always wrap or decorate custom interactive 'div' elements with appropriate ARIA roles, tab indexing, and keyboard event handlers. Use `focus-visible:ring-inset` for large edge-to-edge components to keep the focus indicator visible.
