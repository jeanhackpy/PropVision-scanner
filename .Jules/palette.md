## 2025-05-15 - Interactive Map Accessibility
**Learning:** Custom interactive components like maps built with `div` or `svg` are often overlooked for keyboard accessibility. They require explicit `role="button"`, `tabIndex={0}`, and `aria-label` to be discoverable by screen readers, plus `onKeyDown` handlers for Space/Enter and Arrow keys to provide a comparable experience to mouse users.
**Action:** Always check custom visual containers for interactivity and ensure they follow the `tabIndex={0}` and `onKeyDown` pattern for basic interaction parity.
