## 2025-05-15 - Accessible Map Interaction Pattern
**Learning:** For custom map components that lack native interactivity, adding 'role="button"', 'tabIndex={0}', and an 'onKeyDown' handler provides a baseline for keyboard accessibility. Defaulting the action (e.g., dropping a pin) to the center of the viewport ensures the app remains functional for users who cannot use a pointer device.
**Action:** Always implement keyboard fallbacks and ARIA roles for custom canvas or SVG-based interactive elements.
