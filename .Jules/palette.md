## 2025-05-18 - Semantic Dialer Links for Agent Contact Controls
**Learning:** Contact buttons representing phone numbers should be rendered as semantic anchor tags (`<a>`) with `tel:` protocols rather than generic `<button>` elements, ensuring native device dialer integration and clear accessibility context.
**Action:** Always wrap phone contact triggers in semantic `<a>` tags with `tel:${phone}` and a descriptive `aria-label` including the person's name and phone number.
