"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Car, Phone, User, Calendar } from "lucide-react"
import Image from "next/image"

const vehicles = [
  {
    id: 1,
    region: "العاصمة الإدارية",
    plateNumber: "ك ر و 8352",
    image: "/images/car-capital.jpeg",
    color: "رمادي",
    phone: "01100412308",
    schedule: [
      { day: "السبت", area: "القاهرة الجديدة" },
      { day: "الأحد", area: "العاصمة" },
      { day: "الاثنين", area: "التجمع الخامس" },
      { day: "الثلاثاء", area: "القاهرة الجديدة" },
      { day: "الأربعاء", area: "العاصمة" },
      { day: "الخميس", area: "التجمع الخامس" }
    ]
  },
  {
    id: 2,
    region: "القاهرة الجديدة",
    plateNumber: "ز ق ذ 7522",
    image: "/images/car-newcairo..jpeg",
    color: "خضراء",
    phone: "01114922438",
    schedule: [
      { day: "السبت", area: "القاهرة الجديدة" },
      { day: "الأحد", area: "العاصمة" },
      { day: "الاثنين", area: "التجمع الخامس" },
      { day: "الثلاثاء", area: "القاهرة الجديدة" },
      { day: "الأربعاء", area: "العاصمة" },
      { day: "الخميس", area: "التجمع الخامس" }
    ]
  },
  {
    id: 3,
    region: "التجمع الخامس",
    plateNumber: "ز ج ع 5130",
    image: "/images/car-tagamoa.jpeg",
    color: "بيضاء 2024",
    phone: "01114922576",
    schedule: [
      { day: "السبت", area: "القاهرة الجديدة" },
      { day: "الأحد", area: "العاصمة" },
      { day: "الاثنين", area: "التجمع الخامس" },
      { day: "الثلاثاء", area: "القاهرة الجديدة" },
      { day: "الأربعاء", area: "العاصمة" },
      { day: "الخميس", area: "التجمع الخامس" }
    ]
  },
  {
    id: 4,
    region: "وسط",
    plateNumber: "أ ك ر و 8259",
    image: "/images/car-downtow.jpeg",
    color: "بيضاء 2024",
    phone: "01114922576",
    schedule: [
      { day: "السبت", area: "السبت" },
      { day: "الأحد", area: "الأحد" },
      { day: "الاثنين", area: "الاثنين" },
      { day: "الثلاثاء", area: "الثلاثاء" },
      { day: "الأربعاء", area: "الأربعاء" },
      { day: "الخميس", area: "الخميس" }
    ]
  },
  {
    id: 5,
    region: "أكتوبر",
    plateNumber: "ز ع أ 2751",
    image: "/images/car-october.jpeg",
    color: "حمراء",
    phone: "01154422084",
    schedule: [
      { day: "السبت", area: "أقاليم" },
      { day: "الأحد", area: "أكتوبر" },
      { day: "الاثنين", area: "وسط" },
      { day: "الثلاثاء", area: "أقاليم" },
      { day: "الأربعاء", area: "أكتوبر" },
      { day: "الخميس", area: "وسط" }
    ]
  },
  {
    id: 6,
    region: "الأقاليم",
    plateNumber: "ز ق ذ 2516",
    image: "/images/car-regions.jpeg",
    color: "بيضاء",
    phone: "01272705524",
    schedule: [
      { day: "السبت", area: "أقاليم" },
      { day: "الأحد", area: "أكتوبر" },
      { day: "الاثنين", area: "وسط" },
      { day: "الثلاثاء", area: "أقاليم" },
      { day: "الأربعاء", area: "أكتوبر" },
      { day: "الخميس", area: "وسط" }
    ]
  }
]

const getDayColor = (area: string) => {
  const colors: Record<string, string> = {
    "القاهرة الجديدة": "bg-yellow-500",
    "العاصمة": "bg-orange-400",
    "التجمع الخامس": "bg-blue-400",
    "السبت": "bg-gray-300",
    "الأحد": "bg-gray-300",
    "الاثنين": "bg-green-400",
    "الثلاثاء": "bg-gray-300",
    "الأربعاء": "bg-blue-400",
    "الخميس": "bg-green-400",
    "أقاليم": "bg-blue-300",
    "أكتوبر": "bg-cyan-400",
    "وسط": "bg-green-400"
  }
  return colors[area] || "bg-gray-400"
}

export function VehiclesInfo() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Manager Card */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 p-6">
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-40 rounded-lg overflow-hidden border-4 border-gold/30">
              <Image
                src="/images/azzam.jpeg"
                alt="عزام"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-zinc-400 mb-1">مدير حركة السوقين</p>
              <p className="text-2xl font-bold text-gold mb-2">م/ عزام علي</p>
              <div className="flex items-center gap-2 text-zinc-300 mb-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">01111108751</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">01145339900</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Vehicles Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-white border-2 border-zinc-300 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-black text-white">{vehicle.region}</h3>
                  </div>
                  <Badge className="bg-gold text-black font-bold">
                    {vehicle.color}
                  </Badge>
                </div>
                
                {/* Plate Number */}
                <div className="bg-white rounded-lg px-4 py-2 text-center border-2 border-zinc-800">
                  <p className="text-xs text-zinc-600 font-medium mb-1">رقم اللوحة</p>
                  <p className="text-xl font-black text-zinc-900 tracking-wider" dir="ltr">
                    {vehicle.plateNumber}
                  </p>
                </div>
                
                {/* Phone */}
                <div className="flex items-center justify-center gap-2 text-white mt-3">
                  <Phone className="w-4 h-4" />
                  <span className="font-bold">{vehicle.phone}</span>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-zinc-700" />
                  <h4 className="text-lg font-bold text-zinc-900">جدول خط السير</h4>
                </div>
                
                <div className="space-y-2">
                  {vehicle.schedule.map((day, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-24 bg-zinc-100 border-2 border-zinc-300 rounded-lg px-3 py-2 text-center">
                        <p className="text-sm font-bold text-zinc-900">{day.day}</p>
                      </div>
                      <div className={`flex-1 ${getDayColor(day.area)} border-2 border-zinc-300 rounded-lg px-4 py-2 text-center`}>
                        <p className="text-sm font-black text-zinc-900">{day.area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-red-600 to-red-700 border-red-800 p-6">
          <div className="text-center text-white">
            <p className="text-xl font-black mb-2">للمرتجعات + الطوارئ</p>
            <p className="text-lg font-bold">يرجى التواصل مع مدير حركة السوقين</p>
          </div>
        </Card>

        {/* Info Note */}
        <Card className="bg-zinc-900/50 border-zinc-800 p-6">
          <p className="text-center text-zinc-400 text-sm">
            للتواصل مع السائقين أو الاستفسار عن خط السير، يرجى التواصل مع مدير القسم
          </p>
        </Card>
      </div>
    </section>
  )
}

