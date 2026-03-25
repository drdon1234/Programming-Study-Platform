import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE } from '../utils/constants'

export default function PdfLibrary() {
  const [pdfs, setPdfs] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const fetchPdfs = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/pdfs`)
      if (res.ok) setPdfs(await res.json())
    } catch { /* server offline */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchPdfs() }, [fetchPdfs])

  const handleUpload = async (files) => {
    if (!files?.length) return
    setUploading(true)
    for (const file of files) {
      if (!file.name.endsWith('.pdf')) continue
      const form = new FormData()
      form.append('pdf', file)
      try {
        await fetch(`${API_BASE}/pdfs/upload`, { method: 'POST', body: form })
      } catch { /* ignore */ }
    }
    setUploading(false)
    fetchPdfs()
  }

  const handleDelete = async (filename) => {
    if (!confirm(`确认删除 ${filename}？`)) return
    try {
      await fetch(`${API_BASE}/pdfs/${encodeURIComponent(filename)}`, { method: 'DELETE' })
      fetchPdfs()
    } catch { /* ignore */ }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    handleUpload(e.dataTransfer.files)
  }

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / 1048576).toFixed(1) + ' MB'
  }

  return (
    <div className="animate-fade-in space-y-6">
      <h1 className="text-2xl font-bold">PDF 文档库</h1>

      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragOver
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10'
            : 'border-surface-300 dark:border-surface-600 hover:border-surface-400'
        }`}
        onDragOver={e => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <svg className="w-10 h-10 mx-auto text-surface-300 dark:text-surface-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-surface-500 dark:text-surface-400 mb-3">拖拽 PDF 文件到此处上传</p>
        <label className="btn btn-primary text-sm cursor-pointer">
          选择文件
          <input type="file" accept=".pdf" multiple className="hidden"
            onChange={e => handleUpload(e.target.files)} />
        </label>
        {uploading && <p className="text-sm text-primary-500 mt-2">上传中...</p>}
      </div>

      {loading ? (
        <div className="text-center py-12 text-surface-400">加载中...</div>
      ) : pdfs.length === 0 ? (
        <div className="text-center py-12 text-surface-400">
          <p>暂无 PDF 文档</p>
          <p className="text-sm mt-1">上传 PDF 文件或启动后端服务</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {pdfs.map(pdf => (
            <div key={pdf.filename} className="card p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{pdf.filename}</p>
                <p className="text-xs text-surface-400">
                  {formatSize(pdf.size)}
                  {pdf.uploadedAt && ` · ${new Date(pdf.uploadedAt).toLocaleDateString('zh-CN')}`}
                </p>
              </div>
              <Link
                to={`/library/${encodeURIComponent(pdf.filename)}`}
                className="btn btn-ghost text-sm"
              >
                查看
              </Link>
              <button onClick={() => handleDelete(pdf.filename)}
                      className="btn btn-ghost text-sm text-red-500 hover:text-red-600">
                删除
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
