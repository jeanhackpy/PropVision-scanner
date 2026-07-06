## 2025-05-15 - Accessibility for Map and Bottom Sheet Handles
**Learning:** For traditionally mouse-heavy interactions like maps or sliding bottom sheets, adding keyboard support (Space/Enter to drop pin at center, and accessible handles) significantly improves inclusivity. Using `focus-visible:ring-inset` is essential when the container has `overflow-hidden`.
**Action:** Always ensure interactive `div` elements have `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler for Space/Enter, along with visible focus states.
