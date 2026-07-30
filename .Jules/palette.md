# Palette Journal

## 2025-07-30 - Semantic Telephone Links and Accessible Native Dialers
**Learning:** Using generic click action buttons for calling or contacting agents prevents mobile users from utilizing their device's native dialing system, while also confusing screen readers due to a lack of explicit, descriptive context. Conversion to a semantic HTML anchor tag `<a>` with the `tel:` protocol dramatically improves functional micro-UX on mobile and table devices.
**Action:** Always wrap phone number buttons or contacts in a semantic `<a>` tag with `href="tel:..."` and provide a clear `aria-label` specifying the action and the recipient.
