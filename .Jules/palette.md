## 2025-05-22 - Keyboard Navigation for Simulated Map
**Learning:** Adding keyboard navigation to a simulated map component significantly enhances accessibility for users who cannot use a mouse. Using `role="button"` and `tabIndex={0}` on the map container makes it interactive for screen readers, while arrow key support with clamping allows precise pin positioning.
**Action:** Always implement `onKeyDown` with arrow keys for coordinate-based interactive components and provide dynamic `aria-label`s based on the component's state.
