## 2025-08-01 - Semantic Elements and Native Focus over Click Handlers

**Learning:** Replacing non-semantic div elements having mouse click listeners with semantic interactive components like `<button>` and `<a>` natively resolves critical keyboard accessibility and screen-reader usability gaps. Using `tel:` protocols on contact buttons ensures seamless native dialer integration on mobile environments. Applying `focus-visible:ring-inset` on rounded overflow-hidden containers prevents visual clipping of focus indicators.

**Action:** Always prefer native `<button>` or anchor tags over interactive `div` click handlers to provide robust tab navigation and aria landmarks automatically. Ensure contact elements are represented semantically to leverage mobile/device-native features.
