// نظام صلاحيات المكتب الفني
export interface TechnicalOfficeUser {
  id: string
  name: string
  username: string
  password: string
  phone: string
  email: string
  role: 'manager' | 'engineer'
  areas: number[] // المناطق المسموح له بالوصول إليها
}

// قائمة مهندسي المكتب الفني
export const technicalOfficeUsers: TechnicalOfficeUser[] = [
  {
    id: 'tech-001',
    name: 'إسلام خالد',
    username: 'eslam.khaled',
    password: 'tech2026',
    phone: '01156679887',
    email: 'eslam.khaled@shawkygroup.com',
    role: 'manager',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-002',
    name: 'مصطفى شوقي',
    username: 'mostafa.shawky',
    password: 'media2026',
    phone: '01002776674',
    email: 'mostafa.shawky@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3] // العاصمة، القاهرة الجديدة، التجمع
  },
  {
    id: 'tech-003',
    name: 'وائل رأفت أمين',
    username: 'wael.raafat',
    password: 'finance2026',
    phone: '01288938070',
    email: 'wael.raafat@shawkygroup.com',
    role: 'engineer',
    areas: [4, 5, 6] // وسط، أكتوبر، الأقاليم
  },
  {
    id: 'tech-004',
    name: 'هاجر عبد العزيز',
    username: 'hagar.abdelaziz',
    password: 'hr2026',
    phone: '01110800543',
    email: 'hagar.abdelaziz@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-005',
    name: 'محمد سعيد محمد',
    username: 'mohammad.saeed',
    password: 'operations2026',
    phone: '01278865930',
    email: 'mohammad.saeed@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-007',
    name: 'أسماء علي',
    username: 'asmaa.ali',
    password: 'asmaa2026',
    phone: '01000000002',
    email: 'asmaa.ali@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-008',
    name: 'عمر',
    username: 'omar',
    password: 'omar2026',
    phone: '01000000003',
    email: 'omar@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-009',
    name: 'يارا يسري شعبان',
    username: 'yara.yousry',
    password: 'yara2026',
    phone: '01103997506',
    email: 'yara.yousry@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-010',
    name: 'سارة أحمد محمد أحمد',
    username: 'sara.ahmed',
    password: 'sara2026',
    phone: '01282101181',
    email: 'sara.ahmed@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-011',
    name: 'كيرلس زكريا غطاس عوض',
    username: 'kyrillos.zakaria',
    password: 'kyrillos2026',
    phone: '01000000004',
    email: 'kyrillos.zakaria@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-012',
    name: 'آية نعيم أنور محمود',
    username: 'aya.naeem',
    password: 'aya2026',
    phone: '01000000005',
    email: 'aya.naeem@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-013',
    name: 'هنفرح تامر',
    username: 'hanafrah.tamer',
    password: 'hanafrah2026',
    phone: '01000000006',
    email: 'hanafrah.tamer@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-014',
    name: 'عبد الله رضا محمد عبد العزيز',
    username: 'abdullah.reda',
    password: 'abdullah2026',
    phone: '01200119496',
    email: 'abdullah.reda@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-015',
    name: 'مريم يوسف',
    username: 'mariam.youssef',
    password: 'mariam2026',
    phone: '01501593289',
    email: 'mariam.youssef@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-016',
    name: 'آية البيه',
    username: 'aya.elbieh',
    password: 'ayaelbieh2026',
    phone: '01000000007',
    email: 'aya.elbieh@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
  },
  {
    id: 'tech-017',
    name: 'علاء فارس',
    username: 'alaa.fares',
    password: 'alaa2026',
    phone: '01000000008',
    email: 'alaa.fares@shawkygroup.com',
    role: 'engineer',
    areas: [1, 2, 3, 4, 5, 6] // جميع المناطق
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