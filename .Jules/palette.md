# Palette's Journal - Critical UX/Accessibility Learnings

This journal records non-routine, critical UX and accessibility learnings.

## 2025-02-11 - Semantic Native Mobile Dialer Integration
**Learning:** For contact buttons representing telephone numbers (such as in AgentCard), using generic `<button>` elements limits users to visual reading, while failing to integrate with native mobile dialers or browser-level protocol handlers. Refactoring these placeholders to semantic anchor (`<a>`) elements with a `tel:` protocol dramatically increases usability on mobile devices, allowing immediate native dial actions while maintaining standard keyboard focus rings and customized accessible labels.
**Action:** Always replace placeholder phone contact button elements with semantic `<a>` tags utilizing `tel:${phone}` protocols. Style them identically with hover/active transitions, ensure highly-visible keyboard focus indicators using `focus-visible:ring-2`, and supply explicit `aria-label` properties so screen readers announce the exact dial action and recipient details.
