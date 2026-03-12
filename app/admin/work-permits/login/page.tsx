"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, User, ArrowRight, FileCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WorkPermitAdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // التحقق من بيانات الدخول
    if (username === "admin" && password === "admin2025") {
      // حفظ حالة تسجيل الدخول للتصاريح فقط
      localStorage.setItem("workPermitAdminLoggedIn", "true")
      localStorage.setItem("workPermitAdminLoginTime", new Date().toISOString())
      
      // الانتقال إلى لوحة تحكم التصاريح
      setTimeout(() => {
        router.replace("/admin/work-permits")
      }, 500)
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <Link href="/">
          <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
            <ArrowRight className="w-5 h-5" />
            رجوع للصفحة الرئيسية
          </Button>
        </Link>

        <Card className="p-8 bg-black/50 backdrop-blur-xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/تصريح اعمال.png"
                alt="تصريح أعمال"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-blue-500 mb-2">لوحة تحكم التصاريح</h1>
            <p className="text-gray-400">تسجيل الدخول لإدارة تصاريح الأعمال</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div>
              <Label htmlFor="username" className="text-blue-500 font-bold mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                اسم المستخدم
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="أدخل اسم المستخدم"
                required
                className="h-12 bg-white/5 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-blue-500 font-bold mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                كلمة المرور
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                required
                className="h-12 bg-white/5 border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-500"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/30"
            >
              {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>للدخول إلى لوحة تحكم التصاريح، يرجى استخدام بيانات الإدارة</p>
          </div>
        </Card>

        {/* Security Note */}
        <div className="mt-6 text-center text-xs text-gray-600">
          <p>🔒 جميع البيانات محمية ومشفرة</p>
        </div>
      </div>
    </div>
  )
}
