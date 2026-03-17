
## 2025-05-14 - Accessible Bottom Sheet Interaction
**Learning:** Interactive drag handles in bottom sheets should be semantic <button> elements with clear ARIA labels in the UI's language. To maintain visual design while ensuring accessibility, use a 'group' on the large hit-area button and 'group-focus-visible:ring' on the decorative inner bar.
**Action:** Always replace <div> onClick handles with <button> elements, and ensure they are 'disabled' when the action they perform (e.g., minimizing) is already the active state to reduce screen reader noise.
