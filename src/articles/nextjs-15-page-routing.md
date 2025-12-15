---
title: NextJS 15 Page Routing - Advanced Patterns and Dynamic Routing
date: 2025-08-03
author: Alvison Hunter
slug: nextjs-15-page-routing
description: Master NextJS 15's page routing system with advanced patterns, dynamic routing techniques, and performance optimization strategies for enterprise applications.
image: /images/nextjs-routing-thumb.png
---

## Advanced Routing Patterns in NextJS 15
NextJS 15 enhances its routing system with more intuitive patterns and better performance. The App Router's file-based routing provides a powerful foundation for building complex applications with optimal loading strategies.

## 1. Dynamic Routing with Type Safety
Dynamic segments in NextJS 15 offer improved type safety and validation. Use square brackets [] to create dynamic routes with built-in parameter extraction:

```typescript
// app/products/[id]/page.tsx
interface ProductPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  // Await params and searchParams
  const { id } = await params
  const { category } = await searchParams

  // Type-safe dynamic routing
  const product = await db.product.findUnique({
    where: {
      id: parseInt(id),
      category: category as string || undefined
    }
  })

  if (!product) {
    notFound()
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}
```

## 2. Parallel and Intercepted Routes
NextJS 15 introduces powerful routing patterns for complex UI flows. Parallel routes allow rendering multiple pages simultaneously, while intercepted routes enable modal-like experiences:

```typescript
// app/@modal/(.)products/[id]/page.tsx - Intercepted Route
export default async function ProductModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <div className="modal">
      <h2>{product.name}</h2>
      <p>Modal view of product</p>
    </div>
  )
}

// app/products/[id]/page.tsx - Default Route
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <div className="full-page">
      <h1>{product.name}</h1>
      <p>Full page view</p>
    </div>
  )
}
```

## 3. Route Groups for Organization
Organize routes without affecting the URL structure using parentheses ():
```text
app/
  (auth)/
    login/
      page.tsx
    register/
      page.tsx
  (dashboard)/
    analytics/
      page.tsx
    settings/
      page.tsx
```

## 4. Advanced Loading Patterns
Implement sophisticated loading strategies with route-specific loading states:

```typescript
// app/products/[id]/loading.tsx
export default function ProductLoading() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
      <div className="skeleton-price"></div>
    </div>
  )
}

// app/products/[id]/error.tsx
'use client'

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-container">
      <h2>Product Not Found</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  )
}
```

## 5. Dynamic Metadata Generation
Generate SEO-optimized metadata dynamically based on route parameters:

```typescript
// app/products/[id]/page.tsx
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)

  return {
    title: `${product.name} | Our Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.shortDescription,
      images: [product.imageUrl],
    },
  }
}
```

## 6. Route Handlers for API Endpoints
Create custom API endpoints alongside your pages with enhanced type safety:

```typescript
// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const product = await db.product.findUnique({
      where: { id: parseInt(id) }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const updates = await request.json()

  const updatedProduct = await db.product.update({
    where: { id: parseInt(id) },
    data: updates
  })

  return NextResponse.json(updatedProduct)
}
```

NextJS 15's routing system, as implemented by modern web developers, provides a robust foundation for building scalable applications with excellent developer experience and performance characteristics.

---

### About the Author

**[Alvison Hunter](https://alvisonhunter.com/)** is a **Full-Stack Software Engineer** with strong specialization in **frontend engineering** and **modern JavaScript ecosystems**. He builds fast, scalable, and SEO-optimized web applications using **React, Next.js, Vue, Node.js**, and cloud-native architectures.

With a deep focus on **clean UI design**, **performance**, and **maintainable code**, **[Alvison](https://alvisonhunter.com/)** helps businesses and creators turn ideas into reliable digital products.

👉 Explore **custom React & Vue web development**, **frontend architecture**, and **full-stack solutions** at
**[https://www.codecrafterslabs.com](https://www.codecrafterslabs.com)**

**Find Alvison Hunter online:**
- Medium: https://medium.com/@alvisonhunter
- Dev.to: https://dev.to/alvisonhunter
- Hashnode: https://hashnode.com/@alvisonhunter
- Behance: https://www.behance.net/alvisonhunter
- Pexels: https://www.pexels.com/@alvisonhunter/