# Palette Journal 🎨

## 2025-03-24 - Interactive Maps Keyboard Accessibility
**Learning:** Interactive map components often rely purely on click events, making them inaccessible to keyboard-only users. Using `role="button"`, `tabIndex={0}`, and handling `onKeyDown` for both selection (Enter/Space) and fine-grained movement (Arrows) is essential for a parity experience.
**Action:** Always ensure large interactive canvas-like areas have a focus indicator and keyboard shortcuts for primary actions.
