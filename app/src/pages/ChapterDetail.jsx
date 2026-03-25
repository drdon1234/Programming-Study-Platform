import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useRef, useCallback } from 'react'
import { getModule, getChapter } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import CodeBlock from '../components/CodeBlock'

export default function ChapterDetail() {
  const { moduleId, chapterId } = useParams()
  const mod = getModule(moduleId)
  const chapter = mod ? getChapter(moduleId, chapterId) : null
  const { markSectionRead, markChapterComplete, setLastVisited, getChapterProgress } = useProgress()
  const observerRef = useRef(null)

  useEffect(() => {
    if (mod && chapter) {
      setLastVisited(moduleId, chapterId)
    }
  }, [moduleId, chapterId, mod, chapter, setLastVisited])

  const sectionRef = useCallback((node) => {
    if (!node) return
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const idx = parseInt(entry.target.dataset.sectionIndex, 10)
              if (!isNaN(idx)) markSectionRead(moduleId, chapterId, idx)
            }
          })
        },
        { threshold: 0.3 }
      )
    }
    observerRef.current.observe(node)
  }, [moduleId, chapterId, markSectionRead])

  useEffect(() => {
    return () => observerRef.current?.disconnect()
  }, [chapterId])

  if (!mod || !chapter) return <Navigate to={mod ? `/m/${moduleId}` : '/'} replace />

  const chapters = mod.chapters
  const currentIdx = chapters.findIndex(c => c.id === chapterId)
  const prevChapter = currentIdx > 0 ? chapters[currentIdx - 1] : null
  const nextChapter = currentIdx < chapters.length - 1 ? chapters[currentIdx + 1] : null
  const totalSections = chapter.sections?.length || (chapter.htmlContent ? 1 : 0)
  const progress = getChapterProgress(moduleId, chapterId, totalSections)

  const handleMarkComplete = () => {
    markChapterComplete(moduleId, chapterId, totalSections)
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <Link to={`/m/${moduleId}`} className="btn btn-ghost text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          返回
        </Link>
        <div className="flex-1" />
        {prevChapter && (
          <Link to={`/m/${moduleId}/chapter/${prevChapter.id}`} className="btn btn-ghost text-sm">
            上一章
          </Link>
        )}
        {nextChapter && (
          <Link to={`/m/${moduleId}/chapter/${nextChapter.id}`} className="btn btn-ghost text-sm">
            下一章
          </Link>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-2">{chapter.title}</h1>
      {chapter.description && (
        <p className="text-surface-500 dark:text-surface-400 mb-6">{chapter.description}</p>
      )}

      {chapter.htmlContent ? (
        <div ref={(node) => { if (node) { node.dataset.sectionIndex = '0'; sectionRef(node) } }}>
          <article
            className="prose max-w-none dark:text-surface-200"
            dangerouslySetInnerHTML={{ __html: chapter.htmlContent }}
          />
        </div>
      ) : (
        <div className="space-y-8">
          {chapter.sections.map((section, idx) => (
            <section
              key={idx}
              ref={sectionRef}
              data-section-index={idx}
              className="scroll-mt-20"
            >
              <h2 className="text-xl font-semibold mb-3 pb-2 border-b border-surface-200 dark:border-surface-700">
                {section.title}
              </h2>
              <div className="prose max-w-none dark:text-surface-200 whitespace-pre-line">
                {section.content}
              </div>
              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
                  <h4 className="font-medium text-amber-700 dark:text-amber-400 mb-2 text-sm">要点</h4>
                  <ul className="space-y-1">
                    {section.keyPoints.map((kp, i) => (
                      <li key={i} className="text-sm text-surface-600 dark:text-surface-400 flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">•</span>
                        {kp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.code && (
                <CodeBlock
                  code={section.code.code}
                  language={section.code.language}
                  title={section.code.title}
                />
              )}
            </section>
          ))}
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-surface-200 dark:border-surface-700 flex flex-wrap items-center gap-3">
        <button
          onClick={handleMarkComplete}
          className={`btn ${progress >= 100 ? 'btn-ghost text-green-600' : 'btn-primary'}`}
          disabled={progress >= 100}
        >
          {progress >= 100 ? '✓ 已完成' : '标记为已学完'}
        </button>
        <Link to={`/m/${moduleId}/quiz/${chapterId}`} className="btn btn-ghost text-sm">
          开始本章测验
        </Link>
        <div className="flex-1" />
        {nextChapter && (
          <Link to={`/m/${moduleId}/chapter/${nextChapter.id}`} className="btn btn-primary text-sm">
            下一章: {nextChapter.title}
          </Link>
        )}
      </div>
    </div>
  )
}
