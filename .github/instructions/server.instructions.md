---
description: Rules for Next.js Server Components and Actions
applyTo: "app/**/page.tsx, app/**/layout.tsx, app/**/actions.ts"
---
# Next.js Server Standards
- **Server Components:** Default to async Server Components. Do NOT use hooks here.
- **Data Fetching:** Fetch data directly in the component using `await`.
- **Server Actions:** Place mutations in `actions.ts` files with 'use server' at the top.
- **Security:** Always validate inputs using `zod` before processing in a Server Action.
- **Errors:** Use `try/catch` blocks and return a structured object `{ success: boolean, error?: string }`.