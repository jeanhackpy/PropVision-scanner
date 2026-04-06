# Palette's Journal - Critical UX/a11y Learnings

## 2026-04-06 - Accessible Map Interaction
**Learning:** Custom interactive elements like "Simulated Maps" (often implemented as a div with click handlers) are invisible to keyboard and screen reader users. Adding `tabIndex={0}`, `role="button"`, and `onKeyDown` handlers is essential for accessibility. For a "point-and-click" interface like a map, providing a center-point default (50, 50) for keyboard triggers is a good first-step fallback.
**Action:** Always check if custom div-based interactive components are focusable and triggerable via keyboard. Use `focus-visible:ring-4 focus-visible:ring-inset` for large elements at screen edges to ensure the focus indicator is visible and not clipped.
