## 2026-02-22 - [Accessibility: Interactive Map and Bottom Sheet]
**Learning:** Custom interactive elements like simulated maps and drag handles are often overlooked in standard accessibility checks. Using semantic buttons for handles and adding explicit ARIA roles/labels to non-interactive containers (with keyboard support) significantly improves the experience for screen reader and keyboard users.
**Action:** Always verify that every custom interaction has a corresponding keyboard event and ARIA role, especially when using 'div' for layout-heavy interactive elements.
