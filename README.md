# Enhanced Version 2026 – Project Overview

Welcome to the Enhanced Version 2026 project! This document serves as a mini-wiki to help you understand the structure, purpose, and tooling of this application.

---

## 📁 Project Structure

```
├── README.md
├── bun.lockb
├── components.json
├── dist
│   ├── alvison-hunter old.png
│   ├── alvison-hunter-profile.png
│   ├── alvison-hunter.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── assets
│   │   ├── index-BGzmCjA7.js
│   │   └── index-BJqrqkvG.css
│   ├── cv
│   │   └── ahunter2026CV.pdf
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── images
│   │   ├── data-model-thumb.png
│   │   ├── golang-thumb.png
│   │   ├── headless-thumb.png
│   │   ├── hiring-nica-thumb.png
│   │   ├── img-not-found.png
│   │   ├── managua-thumb.png
│   │   ├── next-gatsby-thumb.png
│   │   ├── nextjs-cache-thumb.png
│   │   ├── nextjs-contentful-thumb.png
│   │   ├── nextjs-hooks-thumb.png
│   │   ├── nextjs-middleware-thumb.png
│   │   ├── nextjs-routing-thumb.png
│   │   ├── nextjs-ssr-thumb.png
│   │   ├── nica-agency-thumb.png
│   │   ├── node-python-thumb.png
│   │   ├── python-trends-thumb.png
│   │   ├── react-19-thumb.png
│   │   ├── react-speed-thumb.png
│   │   ├── server-actions-thumb.png
│   │   ├── ts-node-react-thumb.png
│   │   └── typescript-thumb.png
│   ├── index.html
│   ├── placeholder.svg
│   └── robots.txt
├── eslint.config.js
├── index.html
├── llms.txt
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── alvison-hunter old.png
│   ├── alvison-hunter-profile.png
│   ├── alvison-hunter.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── cv
│   │   └── ahunter2026CV.pdf
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── images
│   │   ├── data-model-thumb.png
│   │   ├── golang-thumb.png
│   │   ├── headless-thumb.png
│   │   ├── hiring-nica-thumb.png
│   │   ├── img-not-found.png
│   │   ├── managua-thumb.png
│   │   ├── next-gatsby-thumb.png
│   │   ├── nextjs-cache-thumb.png
│   │   ├── nextjs-contentful-thumb.png
│   │   ├── nextjs-hooks-thumb.png
│   │   ├── nextjs-middleware-thumb.png
│   │   ├── nextjs-routing-thumb.png
│   │   ├── nextjs-ssr-thumb.png
│   │   ├── nica-agency-thumb.png
│   │   ├── node-python-thumb.png
│   │   ├── python-trends-thumb.png
│   │   ├── react-19-thumb.png
│   │   ├── react-speed-thumb.png
│   │   ├── server-actions-thumb.png
│   │   ├── ts-node-react-thumb.png
│   │   └── typescript-thumb.png
│   ├── placeholder.svg
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── articles
│   │   ├── backend-data-modeling.md
│   │   ├── golang-125-performance-features.md
│   │   ├── headless-cms-jamstack-guide.md
│   │   ├── hiring-nica-web-developers.md
│   │   ├── nextjs-15-caching-deep-dive.md
│   │   ├── nextjs-15-contentful-integration.md
│   │   ├── nextjs-15-custom-hooks.md
│   │   ├── nextjs-15-middleware-cross-origin-fixes.md
│   │   ├── nextjs-15-page-routing.md
│   │   ├── nextjs-15-server-actions-deep-dive.md
│   │   ├── nextjs-15-ssr-fundamentals.md
│   │   ├── nextjs-vs-gatsby-ssr.md
│   │   ├── nica-developer-global-impact.md
│   │   ├── nica-web-agency-comparison.md
│   │   ├── node-vs-python-backend.md
│   │   ├── python-2025-development-trends.md
│   │   ├── react-19-developer-game-changers.md
│   │   ├── react-performance-typescript.md
│   │   ├── typescript-future-of-js.md
│   │   └── typescript-node-react-stack.md.md
│   ├── components
│   │   ├── AboutSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingAnchor.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NavLink.tsx
│   │   ├── Navbar.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── TechSection.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── global.d.ts
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Article.tsx
│   │   ├── BlogIndex.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── utils
│   │   ├── convertToLocaleDate.ts
│   │   └── hooks
│   │       └── useArticleQuery.ts
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 📝 Purpose

This project is a modern, performant web application template designed for rapid development and easy customization. It leverages the latest frontend technologies to ensure scalability, maintainability, and a great developer experience.

---

## 🛠️ Tools & Technologies

- **Vite** – Lightning-fast build tool and dev server
- **TypeScript** – Type-safe JavaScript for robust code
- **React** – Component-based UI library
- **shadcn-ui** – Accessible, customizable UI components
- **Tailwind CSS** – Utility-first CSS framework
- **pnpm** – Fast, disk space-efficient package manager

---

## 📦 Key Dependencies

- `react`, `react-dom`
- `@types/react`, `@types/react-dom`
- `shadcn-ui`
- `tailwindcss`, `postcss`, `autoprefixer`
- `vite`
- `typescript`

---

## 🚀 How to Build & Deploy

1. **Install dependencies:**
    ```sh
    pnpm install
    ```

2. **Run the development server:**
    ```sh
    pnpm dev
    ```

3. **Build for production:**
    ```sh
    pnpm run build
    ```

4. **Deploy:**
    Copy the contents of the `dist` folder to your deployment target or main repository folder.

---

## 📚 Additional Notes

- Keep this README updated as the project evolves.
- For any questions or contributions, refer to the repository guidelines.

---
