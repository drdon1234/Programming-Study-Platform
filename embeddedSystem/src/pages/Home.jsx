import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { chapters1to7 } from '../data/chapters_1_7'
import { chapters8to14 } from '../data/chapters_8_14'
import { useProgress } from '../hooks/useProgress'
import ChapterCard from '../components/ChapterCard'
import ProgressRing from '../components/ProgressRing'

const allChapters = [...chapters1to7, ...chapters8to14]

export default function Home() {
  const {
    progress,
    getChapterProgress,
    getBestQuizScore,
    getOverallProgress,
  } = useProgress()

  const overallPct = getOverallProgress()

  const completedChapterCount = useMemo(() => {
    return allChapters.filter((c) => getChapterProgress(c.id) >= 100).length
  }, [getChapterProgress])

  const totalQuizAttempts = useMemo(() => {
    const scores = progress.quizScores || {}
    return Object.values(scores).reduce(
      (sum, entries) => sum + (Array.isArray(entries) ? entries.length : 0),
      0,
    )
  }, [progress.quizScores])

  const continueChapterPath = useMemo(() => {
    const incomplete = allChapters.find((c) => getChapterProgress(c.id) < 100)
    if (incomplete) return `/chapter/${incomplete.id}`
    return `/chapter/${allChapters[allChapters.length - 1].id}`
  }, [getChapterProgress])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          嵌入式系统学习平台
        </h1>
        <p className="text-lg text-accent-600 dark:text-accent-400 font-medium">
          基于《Making Embedded Systems》第二版
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          系统化学习嵌入式软硬件设计：从微控制器基础到系统集成与调试。按章节阅读、记录进度，并通过章节测验与模拟考试巩固知识。
        </p>
      </header>

      <section
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        aria-label="学习统计"
      >
        <div className="card flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ProgressRing value={overallPct} size={96}>
            <span className="text-lg font-bold tabular-nums text-gray-900 dark:text-gray-100">
              {overallPct}%
            </span>
          </ProgressRing>
          <div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              总体学习进度
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
              以已完成章节占比计算（共 14 章）
            </p>
          </div>
        </div>

        <div className="card flex flex-col justify-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            已完成章节
          </h2>
          <p className="mt-2 text-3xl font-bold tabular-nums text-gray-900 dark:text-gray-50">
            {completedChapterCount}
            <span className="text-lg font-semibold text-gray-400 dark:text-gray-500">
              {' '}
              / 14
            </span>
          </p>
        </div>

        <div className="card flex flex-col justify-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            题库答题次数
          </h2>
          <p className="mt-2 text-3xl font-bold tabular-nums text-gray-900 dark:text-gray-50">
            {totalQuizAttempts}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            各章节测验累计提交次数
          </p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row flex-wrap gap-3" aria-label="快捷操作">
        <Link to={continueChapterPath} className="btn-primary inline-flex justify-center">
          继续学习
        </Link>
        <Link
          to="/quiz-bank"
          className="btn-secondary inline-flex justify-center"
        >
          题库练习
        </Link>
        <Link to="/exam" className="btn-secondary inline-flex justify-center">
          模拟考试
        </Link>
      </section>

      <section aria-labelledby="chapters-heading">
        <h2
          id="chapters-heading"
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4"
        >
          全部章节
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allChapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={{
                id: chapter.id,
                title: chapter.title,
                summary: chapter.summary,
              }}
              progress={getChapterProgress(chapter.id)}
              bestScore={getBestQuizScore(chapter.id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
