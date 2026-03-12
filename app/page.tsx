import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { SectionsGrid } from "@/components/sections-grid"
import { WelcomeAvatar } from "@/components/welcome-avatar"
import { GlobalSearch } from "@/components/global-search"
import { PartnersMarquee } from "@/components/partners-marquee"
import { AssistantBot } from "@/components/assistant-bot"
import { PageBackgroundSlideshow } from "@/components/page-background-slideshow"
import { AutoLoginCheck } from "@/components/auto-login-check"
import Link from "next/link"
import { Settings } from "lucide-react"
import { redirect } from "next/navigation"

// التحقق من الدخول التلقائي
async function checkAutoLogin() {
  // هذا سيتم التحقق منه على جانب العميل
  return null
}

function PageContent() {
  return (
    <main className="relative min-h-screen" dir="rtl">
      {/* Auto Login Check */}
      <AutoLoginCheck />
      
      {/* Background Slideshow */}
      <PageBackgroundSlideshow />
      
      {/* شريط رمضاني متحرك احترافي */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 shadow-2xl overflow-hidden">
        <div className="relative h-16 sm:h-20 md:h-24 flex items-center">
          {/* الزينة الجانبية */}
          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl opacity-90 animate-pulse">
            🌙
          </div>
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl opacity-90 animate-pulse">
            🌙
          </div>
          
          {/* النص المتحرك */}
          <div className="w-full overflow-hidden">
            <div className="animate-scroll whitespace-nowrap">
              <span className="inline-block text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-4 sm:px-6 md:px-8 drop-shadow-lg">
                🏮 يسرّ أحمد شوقي، رئيس مجلس الإدارة، أن يتقدّم بأصدق التهاني وأطيب الأمنيات إلى جميع الزميلات والزملاء في شوقي جروب بمناسبة حلول شهر رمضان المبارك 🌙 نسأل الله أن يكون هذا الشهر الفضيل شهر خيرٍ وبركة، وسكينةٍ وطمأنينة، وتجديدٍ للنية والطاقة، وأن يحمل لكم ولعائلاتكم الكريمة أيامًا عامرة بالصحة والعافية والاستقرار ✨ أودّ أن أعبّر عن بالغ تقديري لما تبذلونه من جهود مهنية والتزام صادق وروح فريق عالية، والتي كان لها أثر مباشر في استمرارية الأعمال وتحقيق مستهدفات شوقي جروب خلال الفترة الماضية 🏮 إن ما تحقّق من إنجازات هو نتاج عملكم اليومي وانضباطكم المهني وحرصكم على الجودة وتحقيق القيمة المضافة للشركة وعملائها وشركائها 🌙 نؤكد التزام مجلس الإدارة بدعمكم وتوفير بيئة عمل داعمة ومرنة خلال شهر رمضان، بما يوازن بين متطلبات العمل والاعتبارات الأسرية والإنسانية ✨ نسأل الله أن يكون شهر رمضان محطةً لتعزيز القيم المؤسسية الإيجابية، وترسيخ ثقافة الاحترام والتكافل والتعاون داخل بيئة العمل 🏮 كل عام وأنتم بخير، ورمضان مبارك عليكم وعلى أسركم الكريمة، مع خالص تمنياتي لكم بدوام الصحة والتوفيق والنجاح المستمر 🌙 أحمد شوقي - رئيس مجلس الإدارة - شوقي جروب ✨
              </span>
            </div>
          </div>
        </div>
        
        {/* خط زخرفي سفلي */}
        <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
      </div>
      
      <div className="pt-16 sm:pt-20 md:pt-24">
        {/* زر لوحة التحكم - ثابت في الزاوية */}
        <Link href="/admin">
          <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-50 group">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black p-3 sm:p-4 rounded-full shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Settings className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-spin-slow" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-yellow-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap border-2 border-yellow-500">
              لوحة التحكم
            </div>
          </div>
        </Link>

        <WelcomeAvatar />
        <HeroSection />

        <section className="py-4 sm:py-6 md:py-8 px-3 sm:px-4 bg-background">
          <GlobalSearch />
        </section>

        <SectionsGrid />

        <PartnersMarquee />
        
        <AssistantBot />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <PageContent />
    </Suspense>
  )
}
