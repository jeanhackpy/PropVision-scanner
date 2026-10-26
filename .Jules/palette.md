## 2025-05-18 - Semantic Phone Contact Links
**Learning:** Placeholders or `<button>` elements used for telephone contacts lack native device dialer integration and screen reader context when missing explicit ARIA labels.
**Action:** Always render telephone contact controls as semantic `<a>` tags with `href="tel:..."`, descriptive `aria-label` values containing the person's name and phone number, and `focus-visible` focus rings.
