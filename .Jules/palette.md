## 2025-05-14 - [Accessibility of Bottom Sheets and Interactive Maps]
**Learning:** In mobile-first interfaces, bottom sheet handles and interactive map areas are often implemented as `div`s with click handlers, which are inaccessible to keyboard and screen reader users.
**Action:** Always convert drag handles to semantic `<button>` elements and ensure custom interactive areas have `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler for Enter/Space.
