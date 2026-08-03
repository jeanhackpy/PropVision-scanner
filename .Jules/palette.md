## 2025-03-05 - Semantic Call Buttons
**Learning:** Replacing generic `<button>` elements with semantic `<a>` tags utilizing the `tel:` protocol dramatically improves UX on mobile and tablet devices by triggering native dialers, while simultaneously providing robust accessibility for assistive technologies.
**Action:** Always wrap phone contact actions in an anchor link with `href="tel:..."` instead of a custom button with no click handler or logic.
