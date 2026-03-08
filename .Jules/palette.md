## 2025-05-14 - Initial Project Context
**Learning:** The application uses a French UI ('ImmoScan', 'Compris !'). For accessibility, ARIA labels and screen reader announcements must match this language to ensure a consistent experience for French-speaking users.
**Action:** Ensure all added ARIA labels and UI text are in French.

**Learning:** The project uses a custom import map in `index.html` which can be fragile if the main entry point (`index.tsx`) is not explicitly included as a module script, especially when using Vite.
**Action:** Explicitly include `<script type="module" src="/index.tsx"></script>` in `index.html` to ensure stable mounting.
