---
title: NextJS 15 Custom Hooks - Building Reusable Logic for Modern Applications
date: 2026-08-05
author: Alvison Hunter
slug: nextjs-15-custom-hooks
description: Master NextJS 15 custom hooks for state management, data fetching, and UI interactions with TypeScript and performance optimization techniques.
image: /images/nextjs-hooks-thumb.png
---

# Advanced Custom Hooks for NextJS 15 Applications
NextJS 15 combined with React's latest features enables developers to create powerful custom hooks that streamline complex logic, improve code reuse, and enhance application performance. This guide explores sophisticated hook patterns used in production applications.

## 1. Server-Side Data Fetching Hooks
Create hooks that leverage NextJS 15's server components and caching mechanisms:

```typescript
// hooks/use-server-data.ts
'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface UseServerDataOptions<T> {
  initialData?: T
  revalidateOnFocus?: boolean
  dedupingInterval?: number
}

export function useServerData<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: UseServerDataOptions<T> = {}
) {
  const [data, setData] = useState<T | undefined>(options.initialData)
  const [isLoading, setIsLoading] = useState(!options.initialData)
  const [error, setError] = useState<Error | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Use NextJS's fetch with caching
      const result = await fetcher()
      setData(result)

      // Revalidate cache if needed
      if (options.revalidateOnFocus) {
        window.addEventListener('focus', fetchData)
      }
    } catch (err) {
      setError(err as Error)
      console.error(`Error fetching data for key ${key}:`, err)
    } finally {
      setIsLoading(false)
    }
  }, [key, fetcher, options.revalidateOnFocus])

  // Auto-refetch when search params change
  useEffect(() => {
    fetchData()
  }, [fetchData, searchParams.toString()])

  const mutate = useCallback(async (newData: T | ((prev: T | undefined) => T)) => {
    if (typeof newData === 'function') {
      setData(prev => (newData as Function)(prev))
    } else {
      setData(newData)
    }

    // Optionally revalidate
    await fetchData()
  }, [fetchData])

  const revalidate = useCallback(() => {
    return fetchData()
  }, [fetchData])

  return {
    data,
    isLoading,
    error,
    mutate,
    revalidate,
    refetch: fetchData,
  }
}

// Usage example
export function useProducts(category?: string) {
  return useServerData(
    `products-${category || 'all'}`,
    async () => {
      const url = category
        ? `/api/products?category=${category}`
        : '/api/products'

      const response = await fetch(url, {
        next: { revalidate: 3600 } // Revalidate every hour
      })

      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }

      return response.json()
    }
  )
}
```

## 2. Real-Time Data Synchronization Hook
Implement hooks for WebSocket connections and real-time updates:

```typescript
// hooks/use-websocket.ts
'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

interface UseWebSocketOptions {
  onMessage?: (data: any) => void
  onOpen?: () => void
  onClose?: () => void
  onError?: (error: Event) => void
  reconnectAttempts?: number
  reconnectInterval?: number
}

export function useWebSocket(
  url: string,
  options: UseWebSocketOptions = {}
) {
  const ws = useRef<WebSocket | null>(null)
  const reconnectCount = useRef(0)
  const [isConnected, setIsConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState<any>(null)

  const connect = useCallback(() => {
    try {
      ws.current = new WebSocket(url)

      ws.current.onopen = () => {
        setIsConnected(true)
        reconnectCount.current = 0
        options.onOpen?.()
      }

      ws.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          setLastMessage(data)
          options.onMessage?.(data)
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error)
        }
      }

      ws.current.onclose = () => {
        setIsConnected(false)
        options.onClose?.()

        // Attempt reconnection
        if (reconnectCount.current < (options.reconnectAttempts || 5)) {
          reconnectCount.current += 1
          setTimeout(
            connect,
            (options.reconnectInterval || 3000) * reconnectCount.current
          )
        }
      }

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error)
        options.onError?.(error)
      }
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error)
    }
  }, [url, options])

  const send = useCallback((data: any) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(data))
      return true
    }
    return false
  }, [])

  const disconnect = useCallback(() => {
    if (ws.current) {
      ws.current.close()
      ws.current = null
    }
  }, [])

  useEffect(() => {
    connect()

    return () => {
      disconnect()
    }
  }, [connect, disconnect])

  return {
    isConnected,
    lastMessage,
    send,
    disconnect,
    reconnect: connect,
  }
}
```

## 3. Form Management Hook with Validation
Create a comprehensive form handling hook with validation and submission:

```typescript
// hooks/use-form.ts
'use client'

import { useState, useCallback, ChangeEvent, FormEvent } from 'react'

interface ValidationRule<T = any> {
  validator: (value: T, formData?: Record<string, any>) => boolean | string
  message: string
}

interface UseFormOptions<T> {
  initialValues: T
  onSubmit: (values: T) => Promise<void> | void
  validate?: (values: T) => Partial<Record<keyof T, string>>
  validationRules?: Partial<Record<keyof T, ValidationRule[]>>
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate,
  validationRules,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})

  const validateField = useCallback((name: keyof T, value: any) => {
    let error = ''

    // Custom validation function
    if (validate) {
      const validationErrors = validate({ ...values, [name]: value } as T)
      if (validationErrors[name]) {
        error = validationErrors[name]!
      }
    }

    // Validation rules
    if (!error && validationRules?.[name]) {
      for (const rule of validationRules[name]!) {
        const isValid = rule.validator(value, values)
        if (isValid !== true) {
          error = typeof isValid === 'string' ? isValid : rule.message
          break
        }
      }
    }

    return error
  }, [values, validate, validationRules])

  const handleChange = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const fieldName = name as keyof T

    let finalValue: any = value

    if (type === 'checkbox') {
      finalValue = (e.target as HTMLInputElement).checked
    } else if (type === 'number') {
      finalValue = value === '' ? '' : Number(value)
    }

    setValues(prev => ({ ...prev, [fieldName]: finalValue }))

    // Validate on change if touched
    if (touched[fieldName]) {
      const error = validateField(fieldName, finalValue)
      setErrors(prev => ({
        ...prev,
        [fieldName]: error,
      }))
    }
  }, [touched, validateField])

  const handleBlur = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof T
    setTouched(prev => ({ ...prev, [name]: true }))

    const error = validateField(name, values[name])
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }))
  }, [values, validateField])

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(values).forEach((key) => {
      const fieldName = key as keyof T
      const error = validateField(fieldName, values[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(values).reduce((acc, key) => ({
      ...acc,
      [key]: true,
    }), {}))

    if (!isValid) {
      return
    }

    try {
      setIsSubmitting(true)
      await onSubmit(values)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [values, onSubmit, validateField])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  const setFieldValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }))
    }
  }, [touched, validateField])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setValues,
    isValid: Object.keys(errors).length === 0,
  }
}
```

## 4. Performance-Optimized Hooks
Create hooks that optimize performance with memoization and debouncing:
```typescript
// hooks/use-debounce.ts
'use client'

import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

// hooks/use-memoized-callback.ts
'use client'

import { useCallback, useRef } from 'react'

export function useMemoizedCallback<T extends (...args: any[]) => any>(
  callback: T,
  dependencies: any[]
): T {
  const callbackRef = useRef(callback)
  const memoizedCallbackRef = useRef<T>()

  // Update callback ref if callback changes
  callbackRef.current = callback

  if (!memoizedCallbackRef.current) {
    memoizedCallbackRef.current = ((...args: any[]) => {
      return callbackRef.current(...args)
    }) as T
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(memoizedCallbackRef.current, dependencies)
}

// hooks/use-performance-metrics.ts
'use client'

import { useEffect, useCallback } from 'react'

interface PerformanceMetrics {
  fps: number
  memoryUsage?: number
  loadTime: number
}

export function usePerformanceMetrics(
  onMetricsChange?: (metrics: PerformanceMetrics) => void,
  sampleInterval: number = 1000
) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    loadTime: 0,
  })

  const calculateFPS = useCallback(() => {
    let frameCount = 0
    let lastTime = performance.now()

    const checkFPS = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime >= lastTime + sampleInterval) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))

        setMetrics(prev => {
          const newMetrics = {
            ...prev,
            fps,
            memoryUsage: (performance as any).memory?.usedJSHeapSize,
          }

          onMetricsChange?.(newMetrics)
          return newMetrics
        })

        frameCount = 0
        lastTime = currentTime
      }

      requestAnimationFrame(checkFPS)
    }

    return checkFPS
  }, [sampleInterval, onMetricsChange])

  useEffect(() => {
    const checkFPS = calculateFPS()
    const animationId = requestAnimationFrame(checkFPS)

    // Measure initial load time
    if (typeof window !== 'undefined') {
      const loadTime = window.performance.timing.domContentLoadedEventEnd -
                      window.performance.timing.navigationStart

      setMetrics(prev => ({ ...prev, loadTime }))
    }

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [calculateFPS])

  return metrics
}
```
## 5. Authentication and Authorization Hooks
Implement secure authentication hooks for NextJS 15 applications:

```typescript
// hooks/use-auth.ts
'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { signIn, signOut as nextAuthSignOut } from 'next-auth/react'

interface UseAuthOptions {
  required?: boolean
  redirectTo?: string
  redirectIfFound?: boolean
}

export function useAuth(options: UseAuthOptions = {}) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const checkAuth = useCallback(async () => {
    try {
      setLoading(true)

      // Fetch current user session
      const response = await fetch('/api/auth/session')

      if (response.ok) {
        const session = await response.json()

        if (session?.user) {
          setUser(session.user)

          // Redirect if user is found and redirectIfFound is true
          if (options.redirectIfFound && options.redirectTo) {
            router.push(options.redirectTo)
          }
        } else {
          setUser(null)

          // Redirect if authentication is required
          if (options.required && options.redirectTo) {
            router.push(`${options.redirectTo}?callbackUrl=${encodeURIComponent(pathname)}`)
          }
        }
      }
    } catch (err) {
      setError('Failed to check authentication')
      console.error('Auth check error:', err)
    } finally {
      setLoading(false)
    }
  }, [options.required, options.redirectTo, options.redirectIfFound, router, pathname])

  const login = useCallback(async (
    credentials: Record<string, string>,
    options?: { redirect?: boolean; callbackUrl?: string }
  ) => {
    try {
      setLoading(true)
      setError(null)

      const result = await signIn('credentials', {
        ...credentials,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
        return { success: false, error: result.error }
      }

      // Refresh auth state
      await checkAuth()

      if (options?.redirect !== false) {
        router.push(options?.callbackUrl || '/dashboard')
      }

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }, [checkAuth, router])

  const logout = useCallback(async () => {
    try {
      setLoading(true)
      await nextAuthSignOut({ redirect: false })
      setUser(null)
      router.push('/login')
    } catch (err) {
      setError('Logout failed')
    } finally {
      setLoading(false)
    }
  }, [router])

  const hasPermission = useCallback((permission: string) => {
    if (!user?.permissions) return false
    return user.permissions.includes(permission)
  }, [user])

  const hasRole = useCallback((role: string) => {
    if (!user?.roles) return false
    return user.roles.includes(role)
  }, [user])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return {
    user,
    loading,
    error,
    login,
    logout,
    checkAuth,
    hasPermission,
    hasRole,
    isAuthenticated: !!user,
  }
}

```
These custom hooks, as implemented by **[Alvison Hunter](https://alvisonhunter.com/)** in production applications, demonstrate the power of NextJS 15's React integration for creating reusable, maintainable, and performant application logic.



