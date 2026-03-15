// نظام صلاحيات المكتب الفني
export interface TechnicalOfficeUser {
  id: string
  name: string
  username: string
  password: string
  phone: string
  email: string
  role: 'manager' | 'engineer' | 'area_engineer'
  areas: number[] // المناطق المسموح له بالوصول إليها
}

// قائمة جميع مهندسي الشركة المخولين للوصول للمناطق
export const technicalOfficeUsers: TechnicalOfficeUser[] = [
  // مهندسين المناطق - منطقة أكتوبر
  {
    id: 'area-001',
    name: 'احمد حامد',
    username: 'ahmed.hamed',
    password: '426815',
    phone: '01113426815',
    email: 'ahmed.hamed@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },
  {
    id: 'area-002',
    name: 'احمد رجب',
    username: 'ahmed.ragab',
    password: '912261',
    phone: '01118912261',
    email: 'ahmed.ragab@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },
  {
    id: 'area-003',
    name: 'محمد عبيده',
    username: 'mohamed.obaida',
    password: '690947',
    phone: '01115690947',
    email: 'mohamed.obaida@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },
  {
    id: 'area-004',
    name: 'احمد اشرف',
    username: 'ahmed.ashraf',
    password: '500188',
    phone: '01113500188',
    email: 'ahmed.ashraf@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },
  {
    id: 'area-005',
    name: 'محمد امين',
    username: 'mohamed.amin',
    password: '860050',
    phone: '01093860050',
    email: 'mohamed.amin@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },
  {
    id: 'area-006',
    name: 'اسلام عادل',
    username: 'islam.adel',
    password: '44029',
    phone: '01090044029',
    email: 'islam.adel@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },
  {
    id: 'area-007',
    name: 'علي',
    username: 'ali.mohamed',
    password: '997103',
    phone: '01003997103',
    email: 'ali.mohamed@shawkygroup.com',
    role: 'area_engineer',
    areas: [5] // أكتوبر فقط
  },

  // منطقة القاهرة الجديدة
  {
    id: 'area-008',
    name: 'مصطفي كمال',
    username: 'mostafa.kamal',
    password: '589130',
    phone: '01065589130',
    email: 'mostafa.kamal@shawkygroup.com',
    role: 'area_engineer',
    areas: [2] // القاهرة الجديدة فقط
  },
  {
    id: 'area-009',
    name: 'مصطفي عيد',
    username: 'mostafa.eid',
    password: '498820',
    phone: '01044498820',
    email: 'mostafa.eid@shawkygroup.com',
    role: 'area_engineer',
    areas: [2] // القاهرة الجديدة فقط
  },
  {
    id: 'area-010',
    name: 'محمد جمال',
    username: 'mohamed.gamal',
    password: '864455',
    phone: '01118864455',
    email: 'mohamed.gamal@shawkygroup.com',
    role: 'area_engineer',
    areas: [2] // القاهرة الجديدة فقط
  },
  {
    id: 'area-011',
    name: 'عبدالرحمن محمد',
    username: 'abdelrahman.mohamed',
    password: '159043',
    phone: '01090159043',
    email: 'abdelrahman.mohamed@shawkygroup.com',
    role: 'area_engineer',
    areas: [2] // القاهرة الجديدة فقط
  },

  // منطقة العاصمة الإدارية
  {
    id: 'area-012',
    name: 'حسين فيض الله',
    username: 'hussein.faid',
    password: '322922',
    phone: '01157322922',
    email: 'hussein.faid@shawkygroup.com',
    role: 'area_engineer',
    areas: [1] // العاصمة الإدارية فقط
  },
  {
    id: 'area-013',
    name: 'محمد اشرف',
    username: 'mohamed.ashraf',
    password: '492117',
    phone: '01124492117',
    email: 'mohamed.ashraf@shawkygroup.com',
    role: 'area_engineer',
    areas: [1] // العاصمة الإدارية فقط
  },
  {
    id: 'area-014',
    name: 'محمود محسن',
    username: 'mahmoud.mohsen',
    password: '640037',
    phone: '01022640037',
    email: 'mahmoud.mohsen@shawkygroup.com',
    role: 'area_engineer',
    areas: [1] // العاصمة الإدارية فقط
  },
  {
    id: 'area-015',
    name: 'محمد ماهر',
    username: 'mohamed.maher',
    password: '629354',
    phone: '01147629354',
    email: 'mohamed.maher@shawkygroup.com',
    role: 'area_engineer',
    areas: [1] // العاصمة الإدارية فقط
  },

  // منطقة التجمع الخامس
  {
    id: 'area-016',
    name: 'محمد مدحت',
    username: 'mohamed.medhat',
    password: '593094',
    phone: '01554593094',
    email: 'mohamed.medhat@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },
  {
    id: 'area-017',
    name: 'حسام الغدور',
    username: 'hossam.ghandour',
    password: '244495',
    phone: '01224244495',
    email: 'hossam.ghandour@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },
  {
    id: 'area-018',
    name: 'كريم سامي',
    username: 'karim.samy',
    password: '183789',
    phone: '01011183789',
    email: 'karim.samy@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },
  {
    id: 'area-019',
    name: 'محسن عبدالرازق',
    username: 'mohsen.abdelrazek',
    password: '91234',
    phone: '01110091234',
    email: 'mohsen.abdelrazek@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },
  {
    id: 'area-020',
    name: 'عبدالنبي مرجان',
    username: 'abdelnaby.morgan',
    password: '334460',
    phone: '01001334460',
    email: 'abdelnaby.morgan@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },
  {
    id: 'area-021',
    name: 'عماد شلبي',
    username: 'emad.shalaby',
    password: '455556',
    phone: '01274455556',
    email: 'emad.shalaby@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },
  {
    id: 'area-022',
    name: 'محمد غنام',
    username: 'mohamed.ghannam',
    password: '3089',
    phone: '01200003089',
    email: 'mohamed.ghannam@shawkygroup.com',
    role: 'area_engineer',
    areas: [3] // التجمع الخامس فقط
  },

  // منطقة وسط
  {
    id: 'area-023',
    name: 'احمد بسيوني',
    username: 'ahmed.bassyouni',
    password: '221382',
    phone: '01126221382',
    email: 'ahmed.bassyouni@shawkygroup.com',
    role: 'area_engineer',
    areas: [4] // وسط فقط
  },
  {
    id: 'area-024',
    name: 'محمد محمود الجميل',
    username: 'mohamed.gameel',
    password: '264221',
    phone: '01126264221',
    email: 'mohamed.gameel@shawkygroup.com',
    role: 'area_engineer',
    areas: [4] // وسط فقط
  },
  {
    id: 'area-025',
    name: 'عمرو خالد',
    username: 'amr.khaled',
    password: '107025',
    phone: '01024107025',
    email: 'amr.khaled@shawkygroup.com',
    role: 'area_engineer',
    areas: [4] // وسط فقط
  },
  {
    id: 'area-026',
    name: 'عبدالرحمن العراقي',
    username: 'abdelrahman.iraqi',
    password: '74988',
    phone: '01148074988',
    email: 'abdelrahman.iraqi@shawkygroup.com',
    role: 'area_engineer',
    areas: [4] // وسط فقط
  },
  {
    id: 'area-027',
    name: 'بيشوي',
    username: 'bishoy',
    password: '948825',
    phone: '01147948825',
    email: 'bishoy@shawkygroup.com',
    role: 'area_engineer',
    areas: [4] // وسط فقط
  },

  // منطقة الأقاليم
  {
    id: 'area-028',
    name: 'محمد صلاح',
    username: 'mohamed.salah',
    password: '416769',
    phone: '01128416769',
    email: 'mohamed.salah@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-029',
    name: 'علي مختار',
    username: 'ali.mokhtar',
    password: '602018',
    phone: '01009602018',
    email: 'ali.mokhtar@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-030',
    name: 'احمد الشيخ (السادات)',
    username: 'ahmed.elsheikh',
    password: '277915',
    phone: '01229277915',
    email: 'ahmed.elsheikh@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-031',
    name: 'بيومي',
    username: 'bayoumy',
    password: '973235',
    phone: '01007973235',
    email: 'bayoumy@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-032',
    name: 'شنوده',
    username: 'shenouda',
    password: '285129',
    phone: '01270285129',
    email: 'shenouda@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-033',
    name: 'احمد عوض',
    username: 'ahmed.awad',
    password: '936377',
    phone: '01114936377',
    email: 'ahmed.awad@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-034',
    name: 'محمد عبدالعظيم',
    username: 'mohamed.abdelazeem',
    password: '20263',
    phone: '01009020263',
    email: 'mohamed.abdelazeem@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },
  {
    id: 'area-035',
    name: 'محمود ابو زيد',
    username: 'mahmoud.abouzeid',
    password: '479394',
    phone: '01140479394',
    email: 'mahmoud.abouzeid@shawkygroup.com',
    role: 'area_engineer',
    areas: [6] // الأقاليم فقط
  },

  // قسم الجودة - لديهم صلاحية الوصول لجميع المناطق
  {
    id: 'quality-001',
    name: 'محمود اسماعيل',
    username: 'mahmoud.ismail',
    password: '121549',
    phone: '01113121549',
    email: 'mahmoud.ismail@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'quality-002',
    name: 'شادي مظهر',
    username: 'shady.mazhar',
    password: '704637',
    phone: '01156704637',
    email: 'shady.mazhar@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },

  // المكتب الفني - لديهم صلاحية الوصول لجميع المناطق
  {
    id: 'tech-001',
    name: 'إسلام خالد',
    username: 'islam.khaled',
    password: 'tech2026',
    phone: '01156679887',
    email: 'islam.khaled@shawkygroup.com',
    role: 'manager',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-002',
    name: 'يارا يسري شعبان',
    username: 'yara.yousry',
    password: 'yara2026',
    phone: '01103997506',
    email: 'yara.yousry@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-003',
    name: 'سارة أحمد محمد أحمد',
    username: 'sara.ahmed',
    password: 'sara2026',
    phone: '01282101181',
    email: 'sara.ahmed@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-004',
    name: 'كيرلس زكريا غطاس عوض',
    username: 'kyrillos.zakaria',
    password: 'kyrillos2026',
    phone: '01100411913',
    email: 'kyrillos.zakaria@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-005',
    name: 'آيه نعيم أنور محمود',
    username: 'aya.naeem',
    password: 'aya2026',
    phone: '01110800548',
    email: 'aya.naeem@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-006',
    name: 'فرح تامر محمد',
    username: 'farah.tamer',
    password: 'farah2026',
    phone: '01115473346',
    email: 'farah.tamer@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-007',
    name: 'عبد الله رضا محمد عبد العزيز',
    username: 'abdullah.reda',
    password: 'abdullah2026',
    phone: '01200119496',
    email: 'abdullah.reda@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-008',
    name: 'مريم يوسف',
    username: 'maryam.youssef',
    password: 'mariam2026',
    phone: '01501593289',
    email: 'maryam.youssef@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'tech-009',
    name: 'علاء فارس',
    username: 'alaa.fares',
    password: 'alaa2026',
    phone: '01000000000',
    email: 'alaa.fares@shawkygroup.com',
    role: 'area_engineer',
    areas: [1, 2, 3, 4, 5, 6]
  }
]

// التحقق من بيانات تسجيل الدخول
export function authenticateTechnicalOffice(username: string, password: string): TechnicalOfficeUser | null {
  const user = technicalOfficeUsers.find(
    u => u.username === username && u.password === password
  )
  return user || null
}

// التحقق من صلاحية الوصول لمنطقة معينة
export function hasAreaAccess(userId: string, areaId: number): boolean {
  const user = technicalOfficeUsers.find(u => u.id === userId)
  if (!user) return false
  return user.areas.includes(areaId)
}

// الحصول على معلومات المستخدم من localStorage
export function getCurrentTechnicalUser(): TechnicalOfficeUser | null {
  if (typeof window === 'undefined') return null
  
  const userJson = localStorage.getItem('technical_office_user')
  if (!userJson) return null
  
  try {
    return JSON.parse(userJson)
  } catch {
    return null
  }
}

// حفظ معلومات المستخدم
export function saveTechnicalUser(user: TechnicalOfficeUser): void {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('technical_office_user', JSON.stringify(user))
  localStorage.setItem('technical_office_login_time', Date.now().toString())
}

// تسجيل الخروج
export function logoutTechnicalUser(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('technical_office_user')
  localStorage.removeItem('technical_office_login_time')
}

// التحقق من صلاحية الجلسة (24 ساعة)
export function isSessionValid(): boolean {
  if (typeof window === 'undefined') return false
  
  const loginTime = localStorage.getItem('technical_office_login_time')
  if (!loginTime) return false
  
  const hoursPassed = (Date.now() - parseInt(loginTime)) / (1000 * 60 * 60)
  return hoursPassed < 24
}