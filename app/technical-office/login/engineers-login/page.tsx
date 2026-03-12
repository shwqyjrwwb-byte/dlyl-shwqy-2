"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Briefcase, LogIn, Eye, EyeOff, AlertCircle } from "lucide-react"
import { authenticateTechnicalOffice, saveTechnicalUser } from "@/lib/technical-office-auth"

export default function EngineersLoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const areaId = searchParams.get('area')
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const user = authenticateTechnicalOffice(username, password)
      
      if (!user) {
        setError("اسم المستخدم أو كلمة المرور غير صحيحة")
        setLoading(false)
        return
      }

      // التحقق من صلاحية الوصول للمنطقة إذا كان هناك areaId
      if (areaId) {
        const hasAccess = user.areas.includes(parseInt(areaId))
        if (!hasAccess) {
          setError("ليس لديك صلاحية الوصول إلى هذه المنطقة")
          setLoading(false)
          return
        }
      }

      // حفظ معلومات المستخدم
      saveTechnicalUser(user)
      
      setSuccess(`مرحباً ${user.name}! تم تسجيل الدخول بنجاح`)
      
      // الانتقال إلى صفحة المكتب الفني بعد 2 ثانية
      setTimeout(() => {
        if (areaId) {
          router.replace(`/technical-office/area/${areaId}`)
        } else {
          router.replace('/technical-office')
        }
      }, 2000)

    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول")
    } finally {
      setLoading(false)
    }
  }

  const handleAreaLogin = () => {
    if (areaId) {
      router.replace(`/technical-office/login?area=${areaId}`)
    } else {
      router.replace('/technical-office/login')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">تسجيل دخول المكتب الفني</h1>
          <p className="text-gray-400">
            {areaId ? `الدخول إلى المنطقة ${areaId}` : "الدخول إلى لوحة التحكم"}
          </p>
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-300">
                اسم المستخدم
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="أدخل اسم المستخدم"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                كلمة المرور
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 pr-10"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="bg-red-900/20 border-red-800">
                <AlertCircle className="w-4 h-4" />
                <AlertDescription className="text-red-300">{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="bg-green-900/20 border-green-800">
                <AlertCircle className="w-4 h-4 text-green-400" />
                <AlertDescription className="text-green-300">{success}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  جاري تسجيل الدخول...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" />
                  تسجيل الدخول
                </div>
              )}
            </Button>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">أو</p>
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={handleAreaLogin}
                disabled={loading}
              >
                الدخول كمسؤول منطقة
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-medium text-gray-400 mb-2">معلومات تسجيل الدخول:</h3>
            <div className="space-y-1 text-xs text-gray-500 max-h-48 overflow-y-auto">
              <p>مدير المكتب الفني: eslam.khaled / tech2026</p>
              <p>مهندس التسويق: mostafa.shawky / media2026</p>
              <p>مهندس المالية: wael.raafat / finance2026</p>
              <p>مهندس الموارد البشرية: hagar.abdelaziz / hr2026</p>
              <p>مهندس التشغيل: mohammad.saeed / operations2026</p>
              <p>المهندسة أسماء علي: asmaa.ali / asmaa2026</p>
              <p>المهندس عمر: omar / omar2026</p>
              <p>المهندسة يارا يسري: yara.yousry / yara2026</p>
              <p>المهندسة سارة أحمد: sara.ahmed / sara2026</p>
              <p>المهندس كيرلس زكريا: kyrillos.zakaria / kyrillos2026</p>
              <p>المهندسة آية نعيم: aya.naeem / aya2026</p>
              <p>المهندسة هنفرح تامر: hanafrah.tamer / hanafrah2026</p>
              <p>المهندس عبد الله رضا: abdullah.reda / abdullah2026</p>
              <p>المهندسة مريم يوسف: mariam.youssef / mariam2026</p>
              <p>المهندسة آية البيه: aya.elbieh / ayaelbieh2026</p>
              <p>المهندس علاء فارس: alaa.fares / alaa2026</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}