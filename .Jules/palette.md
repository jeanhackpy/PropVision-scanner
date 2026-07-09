# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-22 - Interactive Map Keyboard Accessibility
**Learning:** Custom interactive components like simulated maps often rely exclusively on mouse events (onClick), rendering them unusable for keyboard users. Adding a default keyboard action (e.g., dropping a pin at center on Space/Enter) combined with proper ARIA roles and focus rings significantly improves accessibility for non-mouse users.
**Action:** For every custom interactive area, implement a keyboard-driven "fallback" for the primary interaction and ensure focus visibility is not clipped by parent containers.
