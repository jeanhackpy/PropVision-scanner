## 2025-05-22 - [Keyboard Map Interaction]
**Learning:** Maps without keyboard support are a significant accessibility barrier. Providing a logical default (e.g., center point 50, 50) for keyboard triggers allows all users to explore sector listings even without a pointing device.
**Action:** Always implement `tabIndex={0}`, `role="button"`, and `onKeyDown` on interactive custom map containers with `focus-visible` indicators.

## 2025-05-22 - [Semantic Bottom Sheet Handles]
**Learning:** Visual 'drag' handles in bottom sheets should be semantic `<button>` elements to be discoverable by screen readers and reachable via keyboard. They should be disabled when the sheet is already minimized to avoid redundant actions.
**Action:** Use a `<button>` with `aria-label` and `disabled={!isExpanded}` for bottom sheet handles.
