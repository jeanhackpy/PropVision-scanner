## 2026-07-07 - Interactive Map and Sheet Accessibility
**Learning:** Custom interactive components like simulated maps and drag handles often lack basic keyboard and screen reader support (tabIndex, roles, aria-labels, and onKeyDown handlers), making core features inaccessible to some users.
**Action:** Always verify that custom UI elements that respond to clicks also have appropriate ARIA roles, are focusable, and can be activated via Space or Enter keys.
