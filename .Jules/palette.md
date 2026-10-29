## 2025-05-20 - Semantic Dial Links for Contact Buttons
**Learning:** Replacing generic `<button>` elements that display contact phone numbers with semantic `<a href="tel:...">` anchors enables native device dialing, right-click copy menu options, and improved assistive technology semantics.
**Action:** When converting placeholder contact buttons, wrap them in semantic `<a>` tags with `tel:` protocols and explicit `aria-label` context.
