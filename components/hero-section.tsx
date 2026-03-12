import Image from "next/image"
import { RamadanMarquee } from "./ramadan-marquee"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="w-full">
        <Image
          src="/images/دليل شوقي.png"
          alt="دليل عائلة شوقي جروب - Eng. Ahmed Shawky - Founder"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      <div className="relative bg-background/80 backdrop-blur-sm py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 px-3 sm:px-4 md:px-6">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 xs:w-40 sm:w-48 md:w-72 lg:w-96 h-32 xs:h-40 sm:h-48 md:h-72 lg:h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-32 xs:w-40 sm:w-48 md:w-72 lg:w-96 h-32 xs:h-40 sm:h-48 md:h-72 lg:h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Welcome Message */}
          <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-3 sm:mb-4 md:mb-6 leading-tight sm:leading-relaxed px-2">
            مرحبا بكم في اكبر عائلة في مصر... عائلة شوقي جروب
          </h1>

          <div className="space-y-2 sm:space-y-3 md:space-y-4 text-muted-foreground text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            <p className="text-primary/90 font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
              هنا النجاح مش صدفة... النجاح نظام، والتزام، وروح شغل واحدة.
            </p>

            <p className="text-xs xs:text-sm sm:text-base">المنصة دي اتعملت مخصوص علشانكم... علشان اي موظف جديد او قديم يلاقي كل اللي محتاجه في مكان واحد:</p>

            <p className="text-muted-foreground/80 text-xs xs:text-sm sm:text-base">
              من اول القواعد العامة... للمواصفات الفنية... للجودة... لحد خطط التنفيذ المرحلية.
            </p>
          </div>

          {/* Features */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"></div>

          <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-primary text-sm xs:text-base sm:text-lg md:text-xl font-bold">يلا نشتغل... ونكبر سوا</p>
          
          {/* Ramadan Greeting Marquee */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <RamadanMarquee />
          </div>
        </div>
      </div>
    </section>
  )
}
