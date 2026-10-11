## 2026-02-05 - Native Phone Dialing Protocol & Accessible Focus
**Learning:** In agent card components with contact buttons, replacing non-functional `<button>` elements with native `<a href="tel:...">` anchors allows users on mobile and supported desktop environments to initiate phone calls directly.
**Action:** Always wrap agent or contact numbers in semantic `tel:` anchor tags, providing accessible `aria-label` context and explicit `focus-visible:ring-2` focus indicators.
