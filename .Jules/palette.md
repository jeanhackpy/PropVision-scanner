## 2025-05-22 - [Keyboard Map Accessibility]
**Learning:** Interactive maps implemented as `div` elements are invisible to keyboard users. Adding `tabIndex={0}`, `role="button"`, and `onKeyDown` handlers allows them to participate in the application flow.
**Action:** Always wrap or augment non-semantic interactive elements with appropriate ARIA roles and keyboard listeners.

## 2025-05-22 - [Service Initialization Safety]
**Learning:** External services like Google AI can crash the entire React application if initialized with a missing API key.
**Action:** Always handle missing environment variables or API keys gracefully to allow the application to mount and provide a degraded but functional experience.
