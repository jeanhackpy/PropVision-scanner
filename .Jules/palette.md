## 2026-10-27 - Native Dialer Integration for Agent Contact Cards
**Learning:** Contact buttons in card list views often use non-functional button tags rather than native dialer anchors. Replacing them with semantic `tel:` hrefs and custom ARIA labels enables screen reader clarity and direct dialing on mobile devices.
**Action:** Always check contact actions in card components to ensure they use semantic `<a>` tags with `tel:` protocols, descriptive ARIA labels, and `focus-visible` ring indicators.
