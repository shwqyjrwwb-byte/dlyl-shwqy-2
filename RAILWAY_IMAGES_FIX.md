# إصلاح مشكلة الصور على Railway

## المشكلة
الصور لا تظهر على Railway بعد النشر، بينما تعمل محلياً.

## السبب
عند استخدام `output: 'standalone'` في Next.js، مجلد `public` لا يتم نسخه تلقائياً إلى build النهائي.

## الحل المطبق

### 1. تحديث next.config.mjs
```javascript
output: 'standalone',
experimental: {
  outputFileTracingIncludes: {
    '/*': ['./public/**/*'],
  },
}
```

### 2. إضافة سكريبت نسخ الصور
- ملف `scripts/copy-public.js` ينسخ مجلد public إلى .next/standalone/public
- يتم تشغيله تلقائياً بعد البناء

### 3. تحديث package.json
```json
"build": "next build && node scripts/copy-public.js"
```

### 4. تحديث railway.toml
```toml
[staticFiles]
path = "public"
```

## التحقق من الحل

### على Railway:
1. افتح Build Logs في Railway
2. ابحث عن رسالة: "✅ Public folder copied successfully!"
3. تأكد من عدد الملفات المنسوخة

### اختبار الصور:
- الدليل: `/home` - صور الموظفين
- الأقسام: `/contacts` - صور المديرين
- المكتب الفني: صور المناطق
- السيارات: `/vehicles` - صور السيارات

## إذا استمرت المشكلة

### الخطوة 1: تحقق من Build Logs
```bash
# في Railway Dashboard
Settings → Deployments → Latest → View Logs
```

### الخطوة 2: تحقق من وجود الملفات
أضف هذا الكود مؤقتاً في أي صفحة:
```javascript
console.log('Public dir exists:', fs.existsSync('./public'))
console.log('Images dir exists:', fs.existsSync('./public/images'))
```

### الخطوة 3: استخدم المسارات المطلقة
تأكد من أن جميع الصور تستخدم:
```javascript
src="/images/filename.jpeg"  // ✅ صحيح
src="images/filename.jpeg"   // ❌ خطأ
src="./images/filename.jpeg" // ❌ خطأ
```

## ملاحظات مهمة

1. **جميع الصور موجودة في Git**: 200+ صورة في `public/images/`
2. **الصور تعمل محلياً**: المشكلة فقط على Railway
3. **استخدم unoptimized: true**: لتجنب مشاكل تحسين الصور
4. **Railway يستخدم Nixpacks**: يبني المشروع تلقائياً

## الأوامر المفيدة

```bash
# بناء محلي للاختبار
npm run build

# التحقق من وجود الصور في standalone
ls -la .next/standalone/public/images/

# رفع على GitHub
git add .
git commit -m "Fix: Railway images deployment"
git push origin main
```

## الملفات المعدلة
- ✅ next.config.mjs
- ✅ railway.toml
- ✅ package.json
- ✅ scripts/copy-public.js (جديد)
- ✅ .railwayignore

## النتيجة المتوقعة
بعد النشر، جميع الصور يجب أن تظهر في:
- الصفحة الرئيسية
- الدليل
- الأقسام
- المكتب الفني
- السيارات
- جميع الصفحات الأخرى
