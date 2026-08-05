## 2026-08-05 - Semantic Phone Dialers for Agent Contact
**Learning:** Replacing static contact buttons with semantic anchor links wrapping the `tel:` protocol dramatically improves micro-UX and accessibility. It allows mobile and desktop operating systems to immediately invoke their native dialer, while providing clear, structured context for screen readers via appropriate ARIA labels.
**Action:** Always prefer semantic anchor links (`<a href="tel:...">` or `<a href="mailto:...">`) over generic buttons for communication actions to leverage native device capabilities.
