## 2025-05-15 - Improving Accessibility for Interactive Map and Bottom Sheets

**Learning:** Interactive maps implemented as `div` elements are completely invisible to screen readers and keyboard users unless explicitly given a role, tab index, and keyboard handlers. Additionally, custom bottom sheet handles should be semantic buttons to ensure they are discoverable and usable.

**Action:** Always apply `role="button"`, `tabIndex={0}`, and `aria-label` to custom interactive areas. For maps, use `focus-visible:ring-inset` to ensure the focus indicator is visible even when the element is at the screen edge. Ensure drag handles are `<button>` elements that can be disabled when their action is redundant.
