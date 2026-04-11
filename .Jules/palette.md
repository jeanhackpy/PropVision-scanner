## 2025-05-15 - Interactive Maps Accessibility
**Learning:** Interactive maps implemented as `div` elements often lack keyboard accessibility, missing roles, tab indices, and keyboard event handlers, which makes them unusable for screen reader and keyboard-only users.
**Action:** Always add `role="button"`, `tabIndex={0}`, a descriptive `aria-label`, and `onKeyDown` handlers to interactive map containers.
