"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Section {
  id: string
  title: string
  description: string
  image: string
  href: string
}

interface SectionCardProps {
  section: Section
}

export function SectionCard({ section }: SectionCardProps) {
  return (
    <Link href={section.href}>
      <Card className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 h-36 xs:h-40 sm:h-48 md:h-56 lg:h-64 cursor-pointer hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src={section.image || "/placeholder.svg"} 
            alt={section.title}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-500"
            priority={section.id === "contacts" || section.id === "packages"}
            sizes="(max-width: 375px) 50vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        {/* Content Overlay for Mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 sm:opacity-0 transition-opacity duration-300" />
        
        {/* Title for Mobile (visible on hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 sm:translate-y-full transition-transform duration-300">
          <h3 className="text-white text-xs sm:text-sm font-bold text-center leading-tight">
            {section.title}
          </h3>
        </div>

        {/* Content - Empty for hover effect only */}
        <div className="relative h-full" />
      </Card>
    </Link>
  )
}
