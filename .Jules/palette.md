## 2026-05-13 - Keyboard Accessible Custom Map
**Learning:** Custom interactive components like the `SimulatedMap` often default to mouse-only interaction, excluding keyboard users. Implementing a keyboard handler with Space/Enter for primary action and Arrow keys for fine-grained movement (clamped to coordinate bounds) provides an inclusive and intuitive experience.
**Action:** Always ensure custom visual containers that handle clicks also have `role="button"`, `tabIndex={0}`, a descriptive `aria-label`, and a comprehensive `onKeyDown` handler for common interaction keys.

## 2026-05-13 - Entry Point Script Tag
**Learning:** The application failed to mount during verification because `index.html` was missing the `<script type="module" src="/index.tsx"></script>` entry point tag. This was a critical blocker for rendering.
**Action:** When troubleshooting a blank screen or "0 buttons found" in automated tests, verify that the entry point script is correctly referenced in the HTML body.
