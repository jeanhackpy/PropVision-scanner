## 2025-05-23 - Keyboard Accessibility for Custom Map & Bottom Sheets
**Learning:** For interactive map components and bottom sheets that rely on click events, accessibility is often overlooked. Providing a central "fallback" pin drop for keyboard users (Enter/Space) and making visual handles focusable allows these features to be used without a mouse.
**Action:** Always provide `role="button"`, `tabIndex={0}`, and `onKeyDown` (with `e.preventDefault()`) for custom interactive zones, and use `focus-visible` with `ring-inset` for containers with `overflow-hidden`.
