"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import { authenticateTechnicalOffice, saveTechnicalUser } from "@/lib/technical-office-auth"
import { saveAutoLoginSession } from "@/lib/auto-login"

export default function AutoLoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState("جاري التحقق من البيانات...")

  useEffect(() => {
    const performAutoLogin = async () => {
      try {
        // الحصول على بيانات المستخدم من URL
        const username = searchParams.get('u')
        const password = searchParams.get('p')
        const redirect = searchParams.get('r') || '/technical-office'

        if (!username || !password) {
          setStatus("بيانات غير صحيحة")
          setTimeout(() => router.replace('/'), 2000)
          return
        }

        setStatus("جاري التحقق من بيانات الدخول...")

        // التحقق من بيانات الدخول
        const user = authenticateTechnicalOffice(username, password)

        if (!user) {
          setStatus("فشل التحقق من البيانات")
          setTimeout(() => router.replace('/'), 2000)
          return
        }

        setStatus(`مرحباً ${user.name}! جاري الدخول...`)

        // حفظ معلومات المستخدم
        saveTechnicalUser(user)
        saveAutoLoginSession(username)

        // الانتقال للصفحة المطلوبة
        setTimeout(() => {
          router.replace(redirect)
        }, 1500)

      } catch (error) {
        setStatus("حدث خطأ أثناء الدخول")
        setTimeout(() => router.replace('/'), 2000)
      }
    }

    performAutoLogin()
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">دليل شوقي جروب</h1>
        <p className="text-gray-400 text-lg">{status}</p>
      </div>
    </div>
  )
}
