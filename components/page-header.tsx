import Link from "next/link"
import Image from "next/image"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  description: string
  icon: LucideIcon
}

export function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <header className="bg-gradient-to-b from-background to-card py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        {/* Top bar with logo and back button */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary gap-2 text-xs sm:text-sm px-2 sm:px-3">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">الصفحة الرئيسية</span>
              <span className="xs:hidden">الرئيسية</span>
            </Button>
          </Link>
          <Link href="/">
            <Image
              src="/images/asset-2014.png"
              alt="Shawky Group Logo"
              width={100}
              height={42}
              className="object-contain sm:w-[120px] sm:h-[50px] md:w-[140px] md:h-[60px]"
            />
          </Link>
        </div>

        {/* Page title */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex-shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight">{title}</h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
