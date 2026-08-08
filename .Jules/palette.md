## 2025-03-05 - Keyboard-Accessible Visual Maps and Native Mobile Calling Integrations

**Learning:** Visual map containers utilizing `overflow: hidden` clip standard element focus rings, rendering them visually invisible to keyboard users even if tab index is correctly supplied. Utilizing `focus-visible:ring-inset` ensures the visual outline remains inside the bounding box and thus perfectly visible. Furthermore, standard button placeholders represent dead-ends for contact forms on mobile; semantic `tel:` anchor tags allow direct click-to-dial interactions.

**Action:** When implementing keyboard navigation on map/canvas elements, always combine custom `onKeyDown` hooks with `focus-visible:ring-inset` to guarantee outline visibility. For any human contact buttons containing phone strings, replace placeholders with native `tel:` link elements.
