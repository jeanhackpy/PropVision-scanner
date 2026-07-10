## 2026-07-10 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** When adding keyboard navigation to non-semantic interactive elements (like a simulated map or a bottom sheet handle), it is crucial to use `role="application"` or `role="button"`, provide a `tabIndex={0}`, and implement an `onKeyDown` handler that supports both `Space` and `Enter`. For visual feedback, `focus-visible:ring-inset` is preferred over standard rings when the container has `overflow-hidden`.

**Action:** Always pair `onClick` with `onKeyDown` and appropriate ARIA roles/labels for any custom interactive component to ensure full accessibility for keyboard and screen reader users.
