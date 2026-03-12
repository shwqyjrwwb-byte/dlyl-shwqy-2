"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Briefcase, MapPin, UserCircle, Upload, FolderOpen, Loader2, FileText, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getCurrentTechnicalUser, logoutTechnicalUser, isSessionValid } from "@/lib/technical-office-auth"

interface Client {
  id: string
  name: string
  code: string
  areaId: number
  filesCount: number
}

interface AreaData {
  id: number
  name: string
  clientsCount: number
  color: string
  image: string
  clients: Client[]
  driveLink?: string
}

const initialAreas: AreaData[] = [
  { 
    id: 1, 
    name: "العاصمة الإدارية", 
    clientsCount: 25, 
    color: "from-blue-500/10 to-blue-600/10",
    image: "/images/areas/العاصمه .png",
    clients: [],
    driveLink: "https://drive.google.com/drive/folders/1HbwL6NKJhIbPqONsczTWK7sXBl5l2qGv?usp=drive_link"
  },
  { 
    id: 2, 
    name: "القاهرة الجديدة", 
    clientsCount: 23, 
    color: "from-green-500/10 to-green-600/10",
    image: "/images/areas/القاهره الجديده.jpeg",
    clients: [],
    driveLink: "https://drive.google.com/drive/folders/1hk92APPjFUGfWbWv_FdPZ6SRLGW01cOz?usp=sharing"
  },
  { 
    id: 3, 
    name: "التجمع الخامس", 
    clientsCount: 17, 
    color: "from-purple-500/10 to-purple-600/10",
    image: "/images/areas/التجمع .jpeg",
    clients: [],
    driveLink: "https://drive.google.com/drive/folders/1szoma6_PqGnsMmWtZkxL7PT51rMIfbRF?usp=sharing"
  },
  { 
    id: 4, 
    name: "وسط", 
    clientsCount: 23, 
    color: "from-orange-500/10 to-orange-600/10",
    image: "/images/areas/وسط.png",
    clients: [],
    driveLink: "https://drive.google.com/drive/folders/161L8kXX93ZTVG9xHY0xuedQ1G01tB7Wp?usp=sharing"
  },
  { 
    id: 5, 
    name: "أكتوبر", 
    clientsCount: 16, 
    color: "from-pink-500/10 to-pink-600/10",
    image: "/images/areas/اكتوبر.jpeg",
    clients: [],
    driveLink: "https://drive.google.com/drive/folders/1wohvwk2TZMEhwoaXW9YeKVZumBJn3l8-?usp=sharing"
  },
  { 
    id: 6, 
    name: "الأقاليم", 
    clientsCount: 15, 
    color: "from-teal-500/10 to-teal-600/10",
    image: "/images/areas/اقاليم .jpeg",
    clients: [],
    driveLink: "https://drive.google.com/drive/folders/1gp2s_AyuGdj1vFgLyy2GW1F8r_IQ3Dh0?usp=sharing"
  },
]

export default function TechnicalOfficePage() {
  const router = useRouter()
  const [areas, setAreas] = useState<AreaData[]>(initialAreas)
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  // التحقق من تسجيل الدخول
  useEffect(() => {
    const user = getCurrentTechnicalUser()
    const sessionValid = isSessionValid()
    
    if (user && sessionValid) {
      setCurrentUser(user)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [router])

  const handleLogout = () => {
    logoutTechnicalUser()
    router.replace('/')
  }

  // إذا لم يتم التحقق بعد
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">جاري التحقق من الصلاحيات...</p>
        </div>
      </div>
    )
  }

  // إذا لم يكن مسجل دخول
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">المكتب الفني</h1>
            <p className="text-muted-foreground">يجب تسجيل الدخول للوصول إلى هذه الصفحة</p>
          </div>
          <div className="space-y-3">
            <Button
              onClick={() => router.replace('/technical-office/login/engineers-login')}
              className="w-full"
            >
              تسجيل الدخول كمهندس
            </Button>
            <Button
              onClick={() => router.replace('/')}
              variant="outline"
              className="w-full"
            >
              العودة للصفحة الرئيسية
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const totalClients = areas.reduce((sum, area) => sum + area.clientsCount, 0)
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="المكتب الفني" 
        description={loading ? "جاري التحميل..." : `${totalClients} عميل في ${areas.length} مناطق`}
        icon={Briefcase} 
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              المناطق
            </h2>
            {!loading && (
              <p className="text-base text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                إجمالي العملاء: <span className="font-bold text-primary">{totalClients}</span>
              </p>
            )}
          </div>
          
          {/* معلومات المستخدم وأزرار التحكم */}
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <Button
              onClick={() => router.replace('/')}
              variant="outline"
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="hidden sm:inline">الصفحة الرئيسية</span>
            </Button>
            
            <div className="text-right hidden md:block">
              <p className="text-sm text-muted-foreground">مرحباً</p>
              <p className="font-bold text-foreground">{currentUser?.name}</p>
            </div>
            
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2 hover:bg-destructive hover:text-destructive-foreground"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">تسجيل الخروج</span>
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">جاري تحميل المناطق...</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card key={area.id} className="group overflow-hidden bg-card border-2 border-border hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Area Image and Title */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={area.id <= 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full">
                          <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-2xl">{area.name}</h3>
                      </div>
                      <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-white/20">
                        <span className="text-xs sm:text-sm text-white font-bold">
                          {area.clientsCount} عميل
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clients Section */}
                <div className="p-4 sm:p-6 bg-gradient-to-b from-card to-card/80 space-y-2 sm:space-y-3">
                  {/* زر الدخول للمنطقة */}
                  <div className="space-y-2 sm:space-y-3">
                    <Button
                      onClick={() => router.replace(`/technical-office/login?area=${area.id}`)}
                      className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 duration-300 h-auto text-sm sm:text-base"
                    >
                      <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>الدخول كمسؤول منطقة</span>
                    </Button>
                    
                    <Button
                      onClick={() => router.replace(`/technical-office/login/engineers-login?area=${area.id}`)}
                      variant="outline"
                      className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 px-4 sm:px-6 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 duration-300 h-auto text-sm sm:text-base"
                    >
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>الدخول كمهندس مكتب فني</span>
                    </Button>
                  </div>
                </div>
              </Card>
          ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted));
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.8);
        }
      `}</style>
    </div>
  )
}
