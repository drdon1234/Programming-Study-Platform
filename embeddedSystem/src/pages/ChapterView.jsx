import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { chapters1to7 } from '../data/chapters_1_7'
import { chapters8to14 } from '../data/chapters_8_14'
import CodeBlock from '../components/CodeBlock'
import ProgressBar from '../components/ProgressBar'
import { useProgress } from '../hooks/useProgress'

const allChapters = [...chapters1to7, ...chapters8to14]

function SectionBlock({ chapterId, sectionIndex, section, progress, markChapterRead }) {
  const articleRef = useRef(null)
  const autoMarkedRef = useRef(false)
  const readSections = progress.chaptersRead[String(chapterId)] || []
  const isRead = readSections.includes(sectionIndex)

  useEffect(() => {
    const el = articleRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || entry.intersectionRatio < 0.35) return
        if (autoMarkedRef.current) return
        autoMarkedRef.current = true
        markChapterRead(chapterId, sectionIndex)
      },
      { threshold: [0, 0.35, 0.5], rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [chapterId, sectionIndex, markChapterRead])

  const paragraphs = useMemo(
    () => section.content.split(/\n\n+/).filter((p) => p.trim().length > 0),
    [section.content]
  )

  const handleMarkRead = useCallback(() => {
    markChapterRead(chapterId, sectionIndex)
  }, [chapterId, sectionIndex, markChapterRead])

  return (
    <article
      ref={articleRef}
      id={`section-${sectionIndex}`}
      className="scroll-mt-24 border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0 last:pb-0"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
        {section.title}
      </h2>

      <div className="max-w-none text-[1.05rem] leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
        {paragraphs.map((para, i) => (
          <p key={i} className="whitespace-pre-wrap">
            {para.trim()}
          </p>
        ))}
      </div>

      {section.keyPoints?.length > 0 && (
        <div className="concept-box mt-8">
          <p className="text-sm font-medium text-accent-800 dark:text-accent-200 mb-3">要点</p>
          <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700 dark:text-gray-300 text-[0.95rem] leading-relaxed">
            {section.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
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

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleMarkRead}
          disabled={isRead}
          className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 disabled:cursor-default disabled:opacity-60 disabled:hover:bg-white dark:disabled:hover:bg-gray-900"
        >
          {isRead ? '已读' : '标记已读'}
        </button>
      </div>
    </article>
  )
}

export default function ChapterView() {
  const { id: idParam } = useParams()
  const chapterId = Number(idParam)
  const {
    progress,
    markChapterRead,
    markChapterComplete,
    getChapterProgressExact,
  } = useProgress()

  const chapter = useMemo(
    () => allChapters.find((c) => c.id === chapterId),
    [chapterId]
  )

  const totalSections = chapter?.sections?.length ?? 0
  const progressValue = chapter
    ? getChapterProgressExact(chapter.id, totalSections)
    : 0

  const [completeSuccess, setCompleteSuccess] = useState(false)

  useEffect(() => {
    setCompleteSuccess(false)
  }, [chapterId])

  const handleMarkChapterComplete = useCallback(() => {
    if (!chapter || totalSections === 0) return
    markChapterComplete(chapter.id, totalSections)
    setCompleteSuccess(true)
  }, [chapter, totalSections, markChapterComplete])

  if (!idParam || Number.isNaN(chapterId) || !chapter) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16">
        <p className="text-lg text-gray-600 dark:text-gray-400">未找到该章节</p>
        <Link
          to="/"
          className="mt-6 text-accent-600 dark:text-accent-400 font-medium hover:underline"
        >
          返回首页
        </Link>
      </div>
    )
  }

  const showCompleteBanner = completeSuccess || progressValue >= 100

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <header className="space-y-4 mb-10 md:mb-12">
          <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
            第 {chapter.id} 章
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            {chapter.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-normal italic">
            {chapter.englishTitle}
          </p>
          <p className="text-base sm:text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
            {chapter.summary}
          </p>
        </header>

        <section
          className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5 sm:p-6 mb-12 shadow-sm"
          aria-label="章节进度"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              学习进度
            </span>
            <span className="text-sm tabular-nums text-gray-500 dark:text-gray-400">
              {progressValue}%
            </span>
          </div>
          <ProgressBar value={progressValue} size="md" className="mb-5" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="button"
              onClick={handleMarkChapterComplete}
              className="inline-flex justify-center rounded-lg bg-primary-900 dark:bg-accent-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-primary-800 dark:hover:bg-accent-500 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
            >
              标记为已完成
            </button>
            {showCompleteBanner && (
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                已完成本章节
              </span>
            )}
          </div>
        </section>

        <div className="space-y-14">
          {chapter.sections.map((section, index) => (
            <SectionBlock
              key={index}
              chapterId={chapter.id}
              sectionIndex={index}
              section={section}
              progress={progress}
              markChapterRead={markChapterRead}
            />
          ))}
        </div>

        <footer className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
          <Link
            to={`/chapter/${chapter.id}/quiz`}
            className="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium text-lg hover:underline"
          >
            前往章节测验 →
          </Link>
        </footer>
      </div>
    </div>
  )
}
