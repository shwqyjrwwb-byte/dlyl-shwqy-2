"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Trash2, RefreshCw } from "lucide-react"

interface SavedFile {
  id: string
  clientId: string
  name: string
  url: string
  size: string
  type: string
  uploadedAt: string
}

interface SavedFilesListProps {
  clientId?: string
  onFileDeleted?: (fileId: string) => void
}

export function SavedFilesList({ clientId, onFileDeleted }: SavedFilesListProps) {
  const [files, setFiles] = useState<SavedFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFiles = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const url = clientId ? `/api/files?clientId=${clientId}` : '/api/files'
      const response = await fetch(url)
      
      if (response.ok) {
        const data = await response.json()
        setFiles(data)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'فشل في جلب الملفات')
      }
    } catch (err) {
      setError('حدث خطأ في الاتصال بالخادم')
      console.error('خطأ في جلب الملفات:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (fileId: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا الملف؟')) {
      return
    }

    try {
      const response = await fetch(`/api/files?id=${fileId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setFiles(prev => prev.filter(file => file.id !== fileId))
        onFileDeleted?.(fileId)
        alert('تم حذف الملف بنجاح')
      } else {
        const errorData = await response.json()
        alert('فشل في حذف الملف: ' + (errorData.error || 'خطأ غير معروف'))
      }
    } catch (err) {
      alert('حدث خطأ أثناء حذف الملف')
      console.error('خطأ في حذف الملف:', err)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ar-EG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  useEffect(() => {
    fetchFiles()
  }, [clientId])

  if (loading) {
    return (
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
          <span className="mr-2 text-muted-foreground">جاري تحميل الملفات...</span>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="p-6 bg-card border-border">
        <div className="text-center py-8">
          <p className="text-destructive mb-4">{error}</p>
          <Button onClick={fetchFiles} variant="outline">
            <RefreshCw className="w-4 h-4 ml-2" />
            إعادة المحاولة
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">الملفات المحفوظة</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{files.length} ملف</span>
            <Button onClick={fetchFiles} variant="ghost" size="sm">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {files.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>لا توجد ملفات محفوظة</p>
          </div>
        ) : (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{file.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.type}</span>
                      <span>•</span>
                      <span>{formatDate(file.uploadedAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <a href={file.url} download={file.name}>
                      <Download className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(file.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}