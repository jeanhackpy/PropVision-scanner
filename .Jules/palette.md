# Palette's Journal 🎨

## 2025-05-14 - Initial Assessment of ImmoScan
**Learning:** The application uses a French UI (e.g., 'ImmoScan', 'Compris !'). For screen reader consistency, ARIA labels must be in French. Interactive elements like the custom map and bottom sheet handles lack keyboard navigation support and visible focus states, which is a common pattern in mobile-first web apps that needs correction for full accessibility.
**Action:** Always use French for ARIA labels in this project. Implement `focus-visible` rings on all custom interactive components to ensure keyboard users can navigate the interface.
