---
description: Rules for React Components and UI
applyTo: "app/**/components/**/*.tsx, components/**/*.tsx"
---
# React UI Standards
- Use 'use client' only if hooks (useState/useEffect) or interactivity is required.
- **Tailwind CSS:** Use mobile-first utilities. Combine classes using the `cn()` utility.
- **Icons:** Default to `lucide-react`.
- **Naming:** Components must be PascalCase. Props must use an interface named `[Component]Props`.
- **Accessibility:** Always include `aria-label` on buttons and `alt` text on images.