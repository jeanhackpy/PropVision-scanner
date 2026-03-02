## 2026-03-02 - Accessibility and Entry Point
**Learning:** The project's index.html was missing a script tag to index.tsx, causing the app to fail to mount in production builds despite the importmap. Additionally, custom interactive elements like SimulatedMap require explicit ARIA roles and keyboard listeners to be accessible.
**Action:** Always ensure index.tsx is explicitly linked in index.html for Vite projects using this structure, and verify that all interactive containers have appropriate tabIndex and ARIA labels.
