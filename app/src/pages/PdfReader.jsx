import { useParams, Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { API_BASE } from '../utils/constants'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function PdfReader() {
  const { pdfId } = useParams()
  const filename = decodeURIComponent(pdfId)
  const [numPages, setNumPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [error, setError] = useState(false)

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages)
    setCurrentPage(1)
  }, [])

  const goToPage = (p) => setCurrentPage(Math.max(1, Math.min(numPages || 1, p)))

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <Link to="/library" className="btn btn-ghost text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          返回文档库
        </Link>
        <h1 className="text-lg font-medium truncate flex-1">{filename}</h1>
      </div>

      <div className="flex items-center gap-3 mb-4 p-3 card">
        <button className="btn btn-ghost text-sm" onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>
          上一页
        </button>
        <div className="flex items-center gap-1 text-sm">
          <input type="number" className="input w-16 text-center text-sm py-1" value={currentPage}
            onChange={e => goToPage(parseInt(e.target.value) || 1)}
            min={1} max={numPages || 1} />
          <span className="text-surface-400">/ {numPages || '...'}</span>
        </div>
        <button className="btn btn-ghost text-sm" onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= numPages}>
          下一页
        </button>
        <div className="flex-1" />
        <button className="btn btn-ghost text-sm" onClick={() => setScale(s => Math.max(0.5, s - 0.2))}>-</button>
        <span className="text-sm text-surface-400 w-12 text-center">{Math.round(scale * 100)}%</span>
        <button className="btn btn-ghost text-sm" onClick={() => setScale(s => Math.min(3, s + 0.2))}>+</button>
      </div>

      <div className="flex justify-center overflow-auto bg-surface-100 dark:bg-surface-800 rounded-lg p-4 min-h-[60vh]">
        {error ? (
          <div className="text-center py-20 text-surface-400">
            <p>无法加载 PDF</p>
            <p className="text-sm mt-1">请确保后端服务已启动</p>
          </div>
        ) : (
          <Document
            file={`${API_BASE}/pdfs/${encodeURIComponent(filename)}/file`}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={() => setError(true)}
            loading={<div className="py-20 text-surface-400">加载中...</div>}
          >
            <Page
              pageNumber={currentPage}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        )}
      </div>
    </div>
  )
}
