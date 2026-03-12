"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { hasActiveAutoLoginSession, getAutoLoginSession } from "@/lib/auto-login"

export function AutoLoginCheck() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // التحقق من وجود معاملات الدخول التلقائي في URL
    const username = searchParams.get('u')
    const password = searchParams.get('p')
    const redirect_path = searchParams.get('r')

    if (username && password) {
      // إعادة التوجيه إلى صفحة الدخول التلقائي
      const params = new URLSearchParams({
        u: username,
        p: password,
        r: redirect_path || '/technical-office'
      })
      router.replace(`/auto-login?${params.toString()}`)
      return
    }

    // التحقق من وجود جلسة دخول تلقائي نشطة
    const activeSession = getAutoLoginSession()
    if (activeSession) {
      // إذا كان هناك جلسة نشطة، يمكن إعادة التوجيه تلقائياً
      // لكن نتركها للمستخدم ليختار
    }
  }, [router, searchParams])

  return null
}
