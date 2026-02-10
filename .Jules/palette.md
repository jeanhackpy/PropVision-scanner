## 2026-02-10 - [Enhanced Keyboard Accessibility for Custom Interactive Elements]
**Learning:** For custom UI components like maps or drag handles that aren't native HTML interactive elements, standard 'onClick' handlers are insufficient for accessibility. Adding 'tabIndex={0}', an appropriate ARIA role, and 'onKeyDown' support for 'Enter'/'Space' is critical for a complete UX.
**Action:** Always check for non-native interactive elements and apply the keyboard interaction pattern (tabIndex + role + onKeyDown).

## 2026-02-10 - [Resilient Service Initialization]
**Learning:** Initializing third-party services (like Gemini AI) directly at the module level can cause the entire application to crash if required environment variables (like API keys) are missing, even if the service isn't used immediately.
**Action:** Use a null-check or a factory pattern for service initialization to ensure the UI can still mount and provide a graceful fallback for users.
