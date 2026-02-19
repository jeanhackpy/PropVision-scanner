# Palette's Journal

## 2025-02-19 - [Accessible Map & Bottom Sheet Interactions]
**Learning:** In highly interactive apps with custom map elements and bottom sheets, keyboard accessibility is often overlooked. Standardizing on semantic buttons for handles and adding keyboard handlers to "click-only" map areas significantly improves the UX for power users and those with accessibility needs. Also, handling missing API keys in AI services is a critical "robustness UX" pattern.
**Action:** Always check if custom handles are semantic `<button>` elements and ensure maps have `tabIndex`, `role="button"`, and `onKeyDown` handlers.
