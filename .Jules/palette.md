## 2025-05-15 - Interactive Map Accessibility
**Learning:** Custom interactive components like maps can be made keyboard-accessible by using `role="button"` and `tabIndex={0}`, combined with an `onKeyDown` handler that triggers a logical default action (e.g., dropping a pin at the center).
**Action:** Always implement `onKeyDown` and focus states for custom interactive elements to ensure parity for keyboard users.

## 2025-05-15 - Bottom Sheet Handle Semantics
**Learning:** Using a `div` with a click handler for a bottom sheet handle is an anti-pattern. Converting it to a semantic `button` improves screen reader discoverability and provides native keyboard support.
**Action:** Use `<button>` for all interactive "drag" or "toggle" handles, and use Tailwind `group` utilities to style internal decorative elements based on button focus.

## 2025-05-15 - AI Service Robustness
**Learning:** Browser-based AI services (like @google/genai) can crash the entire application if initialized with an `undefined` API key string (often injected by build tools).
**Action:** Implement explicit checks for both `undefined` (value) and `"undefined"` (string) before initializing AI clients, and provide graceful fallbacks or error logging.
