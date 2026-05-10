## 2025-05-14 - Keyboard-Accessible Map Markers
**Learning:** Interactive maps using `div` elements must be explicitly made keyboard-accessible by adding `role="button"`, `tabIndex={0}`, a descriptive `aria-label`, and `onKeyDown` handlers. Arrow keys should provide fine-grained movement (e.g., 2% steps) with boundary clamping to maintain marker visibility.
**Action:** Always implement `onKeyDown` with clamping and `focus-visible` styles when creating coordinate-based interactive components.
