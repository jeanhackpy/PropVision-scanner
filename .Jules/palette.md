## 2026-09-07 - Semantic Telephone Links for Contact Actions
**Learning:** Using generic placeholder `<button>` elements for telephone contacts limits native device capabilities and leaves screen readers with insufficient context.
**Action:** Replace agent contact buttons with semantic `<a>` tags containing clean `tel:` URIs, full name-specific `aria-label` attributes, and `focus-visible` ring indicators.
