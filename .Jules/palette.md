## 2025-05-18 - Native Dialer Anchors for Contact Actions
**Learning:** Replacing non-functional or placeholder contact `<button>` elements with semantic `<a>` tags using `tel:${phone}` enables native phone dialer integration across mobile and desktop devices. Adding detailed `aria-label`s prevents screen readers from losing context when visual text only states "Contacter".
**Action:** Always wrap phone contact triggers in semantic `<a>` anchors with explicit `tel:` protocols and full `aria-label` context.
