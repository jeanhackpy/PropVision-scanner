## 2026-05-15 - [Keyboard Navigation for Interactive Maps]
**Learning:** Interactive maps that rely on click/tap interactions are inaccessible to keyboard users. Adding a `tabIndex`, `role="button"`, and an `onKeyDown` handler that supports `Space`/`Enter` for placement and `Arrow` keys for fine-grained movement significantly improves the accessibility and UX for power users.
**Action:** Always include keyboard support for coordinate-based interactive components by implementing clamping logic and consistent step increments.
