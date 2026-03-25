import { useMemo, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import { chapters1to7 } from '../data/chapters_1_7'
import { chapters8to14 } from '../data/chapters_8_14'
import QuizCard, { quizAnswersMatch } from '../components/QuizCard'
import { useProgress } from '../hooks/useProgress'

export default function QuizPage() {
  const { id } = useParams()
  const chapterId = Number(id)
  const { saveQuizScore } = useProgress()

  const allChapters = useMemo(
    () => [...chapters1to7, ...chapters8to14],
    []
  )
  const chapter = allChapters.find((c) => c.id === chapterId)

  const questions = useMemo(
    () => quizzes.filter((q) => q.chapterId === chapterId),
    [chapterId]
  )

  const [index, setIndex] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [userAnswers, setUserAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const currentQuestion = questions[index]
  const total = questions.length
  const progressLabel = total > 0 ? `${index + 1} / ${total}` : '0 / 0'

  const handleAnswer = useCallback((questionId, selected) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: selected }))
    setShowResult(true)
  }, [])

  const score = useMemo(() => {
    if (!finished || total === 0) return 0
    return questions.reduce(
      (acc, q) => acc + (quizAnswersMatch(q, userAnswers[q.id]) ? 1 : 0),
      0
    )
  }, [finished, questions, total, userAnswers])

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0

  const handleNext = () => {
    if (!showResult || total === 0) return
    if (index < total - 1) {
      setIndex((i) => i + 1)
      setShowResult(false)
    } else {
      const finalScore = questions.reduce(
        (acc, q) => acc + (quizAnswersMatch(q, userAnswers[q.id]) ? 1 : 0),
        0
      )
      saveQuizScore(chapterId, finalScore, total)
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setIndex(0)
    setShowResult(false)
    setUserAnswers({})
    setFinished(false)
  }

  const title =
    chapter?.title ??
    (Number.isFinite(chapterId) ? `第 ${chapterId} 章` : '章节测验')

  if (!Number.isFinite(chapterId)) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          无效的章节链接。
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-emerald-600 hover:underline dark:text-emerald-400"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  if (total === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          本章暂无测验题目。
        </p>
        <div className="mt-8">
          <Link
            to={`/chapter/${chapterId}`}
            className="inline-flex rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            返回章节
          </Link>
        </div>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="mb-2 text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            测验完成
          </h1>
          <p className="mb-1 text-center text-lg text-zinc-700 dark:text-zinc-300">
            {title}
          </p>
          <p className="mb-6 text-center text-3xl font-bold text-emerald-600 dark:text-emerald-400">
            {score} / {total}
          </p>
          <p className="mb-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            正确率 {percentage}%
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={`/chapter/${chapterId}`}
              className="inline-flex rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              返回章节
            </Link>
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
              重新测试
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          章节测验 · 第 {progressLabel} 题
        </p>
      </div>

      <QuizCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        showResult={showResult}
        userAnswer={userAnswers[currentQuestion.id]}
      />

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={!showResult}
          className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          {index >= total - 1 ? '完成' : '下一题'}
        </button>
      </div>
    </div>
  )
}
