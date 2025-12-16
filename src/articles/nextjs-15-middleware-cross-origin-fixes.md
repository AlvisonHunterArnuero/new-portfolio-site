---
title: NextJS 15 Middleware - Solving Cross-Origin Errors and Security Headers
date: 2025-08-04
author: Alvison Hunter
slug: nextjs-15-middleware-cross-origin-fixes
description: Comprehensive guide to fixing Cross-Origin errors in NextJS 15 using middleware, with security best practices and real-world implementation examples.
image: /images/nextjs-middleware-thumb.png
---

# Mastering Cross-Origin Security in NextJS 15 Middleware
NextJS 15 enhances middleware capabilities with better CORS handling, security headers, and request processing. This guide explores how to effectively manage cross-origin requests while maintaining robust security.

## 1. Comprehensive CORS Middleware Implementation
Handle Cross-Origin Resource Sharing (CORS) effectively with a centralized middleware configuration:
```typescript
// middleware.ts
import { NextResponse, type NextRequest } from 'next/server'
import type { NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = async (request: NextRequest) => {
  const response = NextResponse.next()

  // CORS Headers Configuration
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || []
  const origin = request.headers.get('origin')

  // Validate Origin
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  } else {
    // For production, you might want to restrict this
    response.headers.set('Access-Control-Allow-Origin', '*')
  }

  // Essential CORS Headers
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, ' +
    'Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  )
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Max-Age', '86400')

  // Handle Preflight Requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: response.headers,
    })
  }

  return response
}

export const config = {
  matcher: '/api/:path*',
}
```
## 2. Advanced Security Headers Configuration
Implement comprehensive security headers to protect against common vulnerabilities:

```typescript
// middleware.ts - Security Headers Extension
export const securityHeadersMiddleware: NextMiddleware = async (request) => {
  const response = NextResponse.next()

  // Security Headers
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  response.headers.set(
    'X-Content-Type-Options',
    'nosniff'
  )
  response.headers.set(
    'X-Frame-Options',
    'DENY'
  )
  response.headers.set(
    'X-XSS-Protection',
    '1; mode=block'
  )
  response.headers.set(
    'Referrer-Policy',
    'strict-origin-when-cross-origin'
  )
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://api.example.com; " +
    "frame-ancestors 'none';"
  )
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  return response
}
```
## 3. Dynamic CORS Configuration Based on Environment
Implement environment-specific CORS policies for development, staging, and production:

```typescript
// lib/cors-config.ts
export interface CorsConfig {
  allowedOrigins: string[]
  allowedMethods: string[]
  allowedHeaders: string[]
  allowCredentials: boolean
  maxAge: number
}

export function getCorsConfig(env: string): CorsConfig {
  const baseConfig: CorsConfig = {
    allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-CSRF-Token',
      'X-Requested-With',
      'Accept',
      'Accept-Version',
      'Content-Length',
      'Content-MD5',
      'Date',
      'X-Api-Version',
    ],
    allowCredentials: true,
    maxAge: 86400,
  }

  switch (env) {
    case 'development':
      return {
        ...baseConfig,
        allowedOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
      }
    case 'staging':
      return {
        ...baseConfig,
        allowedOrigins: ['https://staging.example.com'],
      }
    case 'production':
      return {
        ...baseConfig,
        allowedOrigins: ['https://example.com', 'https://www.example.com'],
      }
    default:
      return baseConfig
  }
}

// middleware.ts - Environment-aware CORS
import { getCorsConfig } from '@/lib/cors-config'

export const dynamicCorsMiddleware: NextMiddleware = async (request) => {
  const response = NextResponse.next()
  const env = process.env.NODE_ENV || 'development'
  const config = getCorsConfig(env)

  const origin = request.headers.get('origin')

  if (origin && config.allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  response.headers.set(
    'Access-Control-Allow-Methods',
    config.allowedMethods.join(', ')
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    config.allowedHeaders.join(', ')
  )
  response.headers.set(
    'Access-Control-Allow-Credentials',
    config.allowCredentials.toString()
  )
  response.headers.set(
    'Access-Control-Max-Age',
    config.maxAge.toString()
  )

  return response
}
```

## 4. Rate Limiting and Abuse Prevention
Protect your API endpoints from abuse with rate limiting in middleware:

```typescript
// lib/rate-limiter.ts
import { LRUCache } from 'lru-cache'

interface RateLimitOptions {
  uniqueTokenPerInterval: number
  interval: number
}

export function rateLimit(options: RateLimitOptions) {
  const tokenCache = new LRUCache<string, number[]>({
    max: options.uniqueTokenPerInterval,
    ttl: options.interval,
  })

  return {
    check: (limit: number, token: string) => {
      const tokenCount = tokenCache.get(token) || [0]

      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount)
      }

      tokenCount[0] += 1

      const currentUsage = tokenCount[0]
      const isRateLimited = currentUsage > limit

      return {
        isRateLimited,
        limit,
        remaining: isRateLimited ? 0 : limit - currentUsage,
      }
    },
  }
}

// middleware.ts - Rate Limiting Integration
import { rateLimit } from '@/lib/rate-limiter'

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

export const rateLimitMiddleware: NextMiddleware = async (request) => {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'

  const rateLimitResult = limiter.check(10, ip) // 10 requests per minute

  if (rateLimitResult.isRateLimited) {
    return new NextResponse(
      JSON.stringify({
        error: 'Rate limit exceeded',
        retryAfter: '60 seconds',
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
        },
      }
    )
  }

  const response = NextResponse.next()
  response.headers.set('X-RateLimit-Limit', rateLimitResult.limit.toString())
  response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString())

  return response
}

5. Combining Middleware Functions
Create a composed middleware that handles multiple concerns:

// middleware.ts - Composed Middleware
import { chain } from 'next/dist/server/web/spec-extension/chain'
import { NextMiddleware } from 'next/server'

const middlewares: NextMiddleware[] = [
  dynamicCorsMiddleware,
  securityHeadersMiddleware,
  rateLimitMiddleware,
]

export const middleware = chain(...middlewares)

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
```
By implementing these middleware strategies, developers can ensure their NextJS 15 applications are secure, performant, and resilient against cross-origin issues while providing excellent developer and user experiences.

---

### About the Author

**[Alvison Hunter](https://alvisonhunter.com/)** is a **Full-Stack Software Engineer** with strong specialization in **frontend engineering** and **modern JavaScript ecosystems**. He builds fast, scalable, and SEO-optimized web applications using **React, Next.js, Vue, Node.js**, and cloud-native architectures.

With a deep focus on **clean UI design**, **performance**, and **maintainable code**, **[Alvison](https://alvisonhunter.com/)** helps businesses and creators turn ideas into reliable digital products.

👉 Explore **custom React, NextJS & Vue web development**, **frontend architecture**, and **full-stack solutions** at **[https://www.codecrafterslabs.com](https://www.codecrafterslabs.com)**

**Find Alvison Hunter online:**
- **Medium:** https://medium.com/@alvisonhunter
- **Dev.to:** https://dev.to/alvisonhunter
- **Hashnode:** https://hashnode.com/@alvisonhunter
- **Behance:** https://www.behance.net/alvisonhunter
- **Pexels:** https://www.pexels.com/@alvisonhunter/