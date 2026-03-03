## 2025-05-15 - Interactive Map Accessibility
**Learning:** For custom interactive components like maps, relying solely on mouse events excludes keyboard and screen reader users. Adding tabIndex, ARIA roles, and keyboard event handlers is essential for a complete UX.
**Action:** Always include keyboard triggers (Enter/Space) and focus indicators for non-standard interactive elements.

## 2025-05-15 - Safe AI Service Initialization
**Learning:** AI services (like Gemini) can cause application-wide crashes if initialized with missing or invalid environment variables (e.g., 'undefined' string injected by Vite).
**Action:** Implement graceful initialization checks and use early returns or warnings in service layers to prevent UI blocking or crashes.
