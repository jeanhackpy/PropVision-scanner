
## 2025-05-14 - Keyboard Navigation for Interactive Maps
**Learning:** Custom interactive elements like simulated maps are often invisible to keyboard-only and screen reader users unless explicitly made focusable and given semantic roles and key listeners.
**Action:** Always add `tabIndex={0}`, `role="button"`, and `onKeyDown` handlers to decorative but interactive containers, and ensure `focus-visible` styles provide clear feedback.
