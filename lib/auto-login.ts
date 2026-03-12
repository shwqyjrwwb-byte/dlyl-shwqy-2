// نظام الدخول التلقائي للمهندسين
export interface AutoLoginConfig {
  username: string
  password: string
  redirectTo: string // المسار المراد الذهاب إليه بعد الدخول
}

// قائمة المهندسين الذين لديهم دخول تلقائي
export const autoLoginUsers: Record<string, AutoLoginConfig> = {
  'eslam.khaled': {
    username: 'eslam.khaled',
    password: 'tech2026',
    redirectTo: '/technical-office'
  },
  'yara.yousry': {
    username: 'yara.yousry',
    password: 'yara2026',
    redirectTo: '/technical-office'
  },
  'sara.ahmed': {
    username: 'sara.ahmed',
    password: 'sara2026',
    redirectTo: '/technical-office'
  },
  'kyrillos.zakaria': {
    username: 'kyrillos.zakaria',
    password: 'kyrillos2026',
    redirectTo: '/technical-office'
  },
  'aya.naeem': {
    username: 'aya.naeem',
    password: 'aya2026',
    redirectTo: '/technical-office'
  },
  'farah.tamer': {
    username: 'farah.tamer',
    password: 'farah2026',
    redirectTo: '/technical-office'
  },
  'abdullah.reda': {
    username: 'abdullah.reda',
    password: 'abdullah2026',
    redirectTo: '/technical-office'
  },
  'mariam.youssef': {
    username: 'mariam.youssef',
    password: 'mariam2026',
    redirectTo: '/technical-office'
  }
}

// التحقق من وجود مستخدم في قائمة الدخول التلقائي
export function isAutoLoginUser(username: string): boolean {
  return username in autoLoginUsers
}

// الحصول على إعدادات الدخول التلقائي
export function getAutoLoginConfig(username: string): AutoLoginConfig | null {
  return autoLoginUsers[username] || null
}

// حفظ حالة الدخول التلقائي
export function saveAutoLoginSession(username: string): void {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('auto_login_user', username)
  localStorage.setItem('auto_login_time', Date.now().toString())
}

// الحصول على حالة الدخول التلقائي
export function getAutoLoginSession(): string | null {
  if (typeof window === 'undefined') return null
  
  const username = localStorage.getItem('auto_login_user')
  const loginTime = localStorage.getItem('auto_login_time')
  
  if (!username || !loginTime) return null
  
  // التحقق من أن الجلسة لم تنتهِ (24 ساعة)
  const hoursPassed = (Date.now() - parseInt(loginTime)) / (1000 * 60 * 60)
  if (hoursPassed > 24) {
    clearAutoLoginSession()
    return null
  }
  
  return username
}

// مسح حالة الدخول التلقائي
export function clearAutoLoginSession(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('auto_login_user')
  localStorage.removeItem('auto_login_time')
}

// التحقق من وجود جلسة دخول تلقائي نشطة
export function hasActiveAutoLoginSession(): boolean {
  return getAutoLoginSession() !== null
}
