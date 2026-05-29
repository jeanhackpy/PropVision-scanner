## 2025-05-15 - [Keyboard Navigation for Maps]
**Learning:** Adding keyboard support to coordinate-based interactions (like a map) significantly improves accessibility. Using Arrow keys with percentage-based increments and clamping ensures the pin stays within boundaries.
**Action:** Always implement `onKeyDown` with Arrow key support for coordinate-based components, using `focus-visible` for clear focus indication.

## 2025-05-15 - [Vite Entry Point in index.html]
**Learning:** Some Vite projects may be missing the entry point script tag in `index.html`, causing a blank screen despite a successful build.
**Action:** Verify the presence of `<script type="module" src="/index.tsx"></script>` if the application fails to mount during verification.
