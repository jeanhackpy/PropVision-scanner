## 2025-05-15 - [Language Consistency in Accessibility]
**Learning:** ARIA labels must align with the visible UI language (French in this project) even if the codebase variables are in English, to ensure a coherent experience for screen reader users.
**Action:** Always check `lang` attribute in `index.html` and existing UI strings before adding accessibility labels.

## 2025-05-15 - [Vite Entry Point Constraint]
**Learning:** `pnpm build` may pass even if `index.html` is missing the entry point script tag, but the app will render a blank screen.
**Action:** Verify visual rendering during development and ensure `<script type="module" src="/index.tsx"></script>` is present if the app fails to mount.
