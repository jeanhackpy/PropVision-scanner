## 2026-05-20 - Keyboard-Accessible Simulated Map
**Learning:** Simulated map components (using DIVs or SVGs instead of interactive libraries) often lack keyboard support. Adding a `role="button"` and `tabIndex={0}` is a baseline, but true accessibility for a "pin drop" feature requires directional control.
**Action:** When implementing coordinate-based interactions (like a map pin), always include an `onKeyDown` handler that supports both "dropping" (Space/Enter) and "moving" (Arrow keys with increments) to ensure motor-impaired and keyboard-only users can precisely define their search area.
