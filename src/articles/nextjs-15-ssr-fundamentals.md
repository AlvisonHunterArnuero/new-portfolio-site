---
title: NextJS 15 SSR Fundamentals—Streaming, Server Components, and the App Router
date: 2025-08-01
author: Alvison Hunter
slug: nextjs-15-ssr-fundamentals
description: Master the modern Next.js approach to Server-Side Rendering (SSR) using React Server Components to maximize performance and SEO.
image: /images/nextjs-ssr-thumb.png
---

## SSR in Next.js: No Longer Just `getServerSideProps`

The App Router architecture in **NextJS 15** fundamentally changes how **Server-Side Rendering (SSR)** works, replacing the older `getServerSideProps` function with **React Server Components (RSC)**.

### 1. The Core Principle: Rendering on Demand

SSR is the process of generating the full HTML for a page on the server *for every user request*. The browser receives the complete, crawlable HTML instantly, which is vital for SEO and for achieving rapid First Contentful Paint (FCP).

### 2. Streaming with Suspense

Modern SSR in Next.js leverages **React's streaming capabilities**. Instead of waiting for *all* data to load, the server sends the HTML shell immediately and then streams content in as it becomes available (using the `<Suspense>` boundary). This vastly improves perceived performance.

### 3. RSC as the New Data Layer

In Next.js 15, the default behavior for components is to be Server Components. Data fetching is performed directly inside these components using native `fetch` (or database ORMs). This eliminates the need for separate data-fetching functions and simplifies the **Full-Stack Developer** workflow.

### 4. Mixing and Matching Rendering

Next.js's strength is its hybrid nature. You can choose to use Static Site Generation (SSG), SSR, or client-side rendering *per component*. This selective rendering allows a developer to tailor performance for every part of a complex application, ensuring maximum efficiency across all **Web Services**.

