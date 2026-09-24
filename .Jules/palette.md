## 2025-05-18 - Native Telephony Integration in Contact Components
**Learning:** Replacing placeholder `<button>` elements representing contact phone actions with semantic `<a>` tags configured with `tel:` URIs leverages device native dialers while improving keyboard accessibility when paired with explicit `focus-visible` styles.
**Action:** Always prefer semantic `<a href="tel:...">` for telephone contacts with explicit ARIA labels specifying the target recipient and phone number.
