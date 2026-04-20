## 2026-04-20 - Keyboard-Accessible Interactive Map
**Learning:** For interactive map simulations using divs, adding `role="button"`, `tabIndex={0}`, and a descriptive `aria-label` (in the app's primary language, e.g., French) is essential for screen reader and keyboard-only users.
**Action:** Implement `onKeyDown` handlers that support `Enter`/`Space` for primary actions and `ArrowKeys` for fine-grained coordinate manipulation, ensuring markers remain within bounds (0-100%).
