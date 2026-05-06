## 2024-05-06 - Interactive Map Accessibility
**Learning:** Interactive maps implemented as decorative SVGs or canvas-like divs are completely invisible to keyboard and screen reader users unless explicitly handled with roles, tab indices, and keyboard listeners.
**Action:** Always add `role="button"`, `tabIndex={0}`, and `onKeyDown` (handling Space/Enter) to custom map components. Use high-contrast `focus-visible:ring-inset` to ensure the focus indicator is visible even at the screen edge.
