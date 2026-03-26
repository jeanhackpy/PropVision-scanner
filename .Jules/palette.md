# Palette Journal - Property Scanner Investment

## 2025-05-15 - Interactive Map Accessibility
**Learning:** Interactive maps without keyboard support exclude users who rely on non-pointer inputs. Providing a `tabIndex={0}`, `role="button"`, and a default action (like dropping a pin at the center) via Space/Enter keys significantly improves accessibility.
**Action:** Implement keyboard navigation and ARIA roles on the `SimulatedMap` component.

## 2025-05-15 - French Language Consistency
**Learning:** For apps with a French UI, ARIA labels must also be in French to ensure a consistent experience for screen reader users.
**Action:** Use "Menu principal", "Fermer le scan", and "Réduire la liste" for ARIA labels.
