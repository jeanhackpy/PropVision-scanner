## 2026-05-30 - Keyboard Accessibility for Simulated Map
**Learning:** Simulated maps using coordinate-based interaction (0-100 range) are often inaccessible. Adding `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler with arrow key support (2% increments) significantly improves accessibility for keyboard users. Clamping coordinates between 0 and 100 is essential to prevent the pin from leaving the viewport.
**Action:** Always implement keyboard navigation for custom coordinate-based interactive components, using `e.preventDefault()` to suppress default browser scrolling.
