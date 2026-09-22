## 2025-05-20 - Phone Contact Actions Accessibility and Usability
**Learning:** In real-estate and agent contact components, replacing generic unhandled `<button>` components with semantic `<a href="tel:...">` links allows mobile and desktop users to natively dial or initiate calls while providing clear `aria-label` screen reader announcements (`Contacter [Agent Name]`).
**Action:** When converting placeholder buttons for communication actions (phone, email), use semantic anchors with `tel:` or `mailto:` protocols along with explicit `aria-label` context and focus-visible indicators.
