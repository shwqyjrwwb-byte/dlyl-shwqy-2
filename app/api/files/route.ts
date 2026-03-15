import { NextRequest, NextResponse } from 'next/server'

// مصفوفة مؤقتة لحفظ الملفات (في التطبيق الحقيقي يجب استخدام قاعدة بيانات)
let filesDatabase: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { clientId, name, url, size, type } = body

    // التحقق من البيانات المطلوبة
    if (!clientId || !name || !url) {
      return NextResponse.json(
        { error: 'البيانات المطلوبة مفقودة' },
        { status: 400 }
      )
    }

    // إنشاء ملف جديد
    const newFile = {
      id: Math.random().toString(36).substr(2, 9),
      clientId,
      name,
      url,
      size: size || '0 KB',
      type: type || 'تأسيسات',
      uploadedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }

    // إضافة الملف إلى قاعدة البيانات المؤقتة
    filesDatabase.push(newFile)

    return NextResponse.json(newFile, { status: 201 })
  } catch (error) {
    console.error('خطأ في حفظ الملف:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const clientId = searchParams.get('clientId')

    if (clientId) {
      // إرجاع ملفات عميل محدد
      const clientFiles = filesDatabase.filter(file => file.clientId === clientId)
      return NextResponse.json(clientFiles)
    }

    // إرجاع جميع الملفات
    return NextResponse.json(filesDatabase)
  } catch (error) {
    console.error('خطأ في جلب الملفات:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fileId = searchParams.get('id')

    if (!fileId) {
      return NextResponse.json(
        { error: 'معرف الملف مطلوب' },
        { status: 400 }
      )
    }

    // العثور على الملف وحذفه
    const fileIndex = filesDatabase.findIndex(file => file.id === fileId)
    
    if (fileIndex === -1) {
      return NextResponse.json(
        { error: 'الملف غير موجود' },
        { status: 404 }
      )
    }

    const deletedFile = filesDatabase.splice(fileIndex, 1)[0]

    return NextResponse.json({ 
      message: 'تم حذف الملف بنجاح',
      file: deletedFile 
    })
  } catch (error) {
    console.error('خطأ في حذف الملف:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}