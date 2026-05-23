## 2025-05-15 - [Consistency Principle for ARIA Labels]
**Learning:** ARIA labels must align with the visible UI language (French in this project) even if the source code (variable names, comments) is in English, to ensure a coherent experience for screen reader users.
**Action:** Always check `lang` attribute in `index.html` and existing UI strings before adding ARIA labels.

## 2025-05-15 - [Strict Boundary Adherence]
**Learning:** As "Palette", even critical repository-level bug fixes (like missing entry scripts in `index.html`) should be avoided if they deviate from the single micro-UX improvement mandate, as they can lead to PR rejection for scope creep.
**Action:** Focus exclusively on the chosen micro-UX improvement and report other issues separately if possible, or ensure they are strictly necessary for the UX change to function.
