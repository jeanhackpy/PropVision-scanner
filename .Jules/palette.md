## 2026-07-08 - Accessibility of Custom Interactive Elements
**Learning:** Custom interactive elements like map containers and bottom sheet handles require explicit role="button" or role="application", tabIndex={0}, and onKeyDown handlers to be accessible to keyboard and screen reader users. Visual focus indicators (focus-visible) are essential for navigation clarity.
**Action:** Always verify custom interactive containers for keyboard accessibility and provide descriptive aria-labels for icon-only buttons.
