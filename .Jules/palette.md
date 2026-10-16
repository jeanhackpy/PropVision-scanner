## 2025-10-16 - Semantic Direct Contact Links for Agent Cards
**Learning:** Generic `<button>` elements for telephone actions lack mobile device integration (native phone dialers) and clear ARIA descriptions for assistive technologies.
**Action:** Replace dummy action buttons for phone contacts with semantic `<a>` tags using `tel:${phone}`, explicit context-rich `aria-label` attributes, and `focus-visible` ring indicators.
