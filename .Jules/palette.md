## 2025-05-14 - Interactive Map Keyboard Accessibility
**Learning:** Interactive maps implemented as decorative divs are invisible to keyboard users. Simply adding `tabIndex={0}` is not enough; they require `role="button"` (or a more specific map role) and explicit `onKeyDown` handlers to simulate click actions (Space/Enter) and provide granular control (Arrow keys for movement).
**Action:** Always wrap or supplement custom interactive visualizations with semantic roles and keyboard event listeners to ensure parity between mouse and keyboard experiences.
