## 2025-03-08 - Semantic Phone Contact Links
**Learning:** Presenting agent contact buttons as non-interactive `<button>` tags without `onClick` handlers creates broken user expectations on mobile devices and screen readers.
**Action:** Replace placeholder contact buttons with semantic `<a>` tags utilizing `tel:` protocol, explicit `aria-label`s, and `focus-visible` ring indicators.
