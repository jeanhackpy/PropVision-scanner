## 2026-05-26 - Accessible Simulated Map Navigation
**Learning:** For simulated map components that lack native interaction, implementing a keyboard-driven pin placement (Space/Enter) and directional movement (Arrow keys) significantly improves accessibility for non-mouse users without requiring a full GIS library.
**Action:** Use role="button", tabIndex={0}, and dynamic aria-labels alongside an onKeyDown handler for any custom interactive canvas or coordinate-based UI.
