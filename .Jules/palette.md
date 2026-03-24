## 2025-05-15 - [Critical Project Structure Fix]
**Learning:** In Vite-based projects with custom HTML templates (especially when using esm.sh import maps), the entry point script `<script type="module" src="/index.tsx"></script>` must be explicitly present in `index.html` for the application to mount correctly in both development and production.
**Action:** Always verify the presence of the entry point script in `index.html` before diagnosing blank screens or mounting failures.

## 2025-05-15 - [Accessible Bottom Sheet Handles]
**Learning:** Interactive drag handles for bottom sheets should be semantic `<button>` elements rather than `div` tags to ensure keyboard accessibility. They should be disabled when the sheet is already in its target state (e.g., minimized) to prevent redundant screen reader announcements.
**Action:** Use `<button>` for all interaction handles and pair with `focus-visible` rings on the inner decorative elements using Tailwind `group` logic.

## 2025-05-15 - [Keyboard-Accessible Maps]
**Learning:** Custom map implementations often lack keyboard support. Adding `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler (for Enter/Space) allows non-pointer users to interact with the map (e.g., dropping a pin at a default location like the center).
**Action:** Use `focus-visible:ring-inset` for maps at the screen edge to ensure focus indicators are not clipped by the viewport.
