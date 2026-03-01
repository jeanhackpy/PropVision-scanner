## 2025-05-15 - [Accessibility & Localization in French UI]
**Learning:** In a specialized application like ImmoScan Elite, consistent localization and keyboard accessibility are crucial for "Elite" branding. Users expect high-quality interactions, including clear ARIA labels in their language and visible focus states for navigation.
**Action:** Always apply `focus-visible` styles with clear contrast (e.g., indigo rings) and ensure all icon-only buttons have descriptive French `aria-label` attributes.

## 2025-05-15 - [AI Service Resilience]
**Learning:** Missing API keys in a browser environment can crash the app if not handled gracefully. Vite may inject the string "undefined" if the environment variable is missing.
**Action:** Implement mock fallback data in AI services and check for both `null/undefined` and the literal string "undefined" when initializing AI clients.
