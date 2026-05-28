## 2025-05-14 - [Vite App Mounting Fix]
**Learning:** In some Vite-based AI Studio applications, the `index.html` may be missing the `<script type="module" src="/index.tsx"></script>` entry point, causing the app to render a blank screen despite a successful build.
**Action:** Always verify the existence of the entry point script tag in `index.html` and add it if missing to ensure the React application mounts correctly.

## 2025-05-14 - [Keyboard Accessible Simulated Maps]
**Learning:** Interactive map components that rely on coordinate-based clicks are completely inaccessible to keyboard users.
**Action:** Implement `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler that supports `Space`/`Enter` for initial pin dropping and `Arrow` keys for fine-tuned movement with coordinate clamping.
