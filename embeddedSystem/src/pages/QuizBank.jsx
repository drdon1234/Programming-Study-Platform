import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import { chapters1to7 } from '../data/chapters_1_7'
import { chapters8to14 } from '../data/chapters_8_14'
import QuizCard from '../components/QuizCard'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function normalizeQuestionForQuizCard(q) {
  const raw = q.options
  if (
    raw?.length &&
    typeof raw[0] === 'object' &&
    raw[0] != null &&
    'id' in raw[0] &&
    'text' in raw[0]
  ) {
    return { ...q }
  }
  const options = raw.map((text, i) => ({
    id: LETTERS[i],
    text: typeof text === 'string' ? text : text.text,
  }))
  let answer
  if (Array.isArray(q.answer)) {
    answer = q.answer.map((idx) => LETTERS[idx]).sort()
  } else {
    answer = LETTERS[q.answer]
  }
  return { ...q, options, answer }
}

function isAnswerCorrect(question, userAnswer) {
  if (userAnswer === undefined || userAnswer === null) return false
  const c = Array.isArray(question.answer)
    ? [...question.answer].sort()
    : [question.answer]
  const u = Array.isArray(userAnswer)
    ? [...userAnswer].sort()
    : [userAnswer]
  if (c.length !== u.length) return false
  return c.every((v, i) => v === u[i])
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizBank() {
  const allChapters = useMemo(
    () => [...chapters1to7, ...chapters8to14],
    []
  )

  const [chapter, setChapter] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [questionType, setQuestionType] = useState('all')
  const [randomOrder, setRandomOrder] = useState(false)

  const [currentIdx, setCurrentIdx] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [userAnswers, setUserAnswers] = useState({})
  const [correctCount, setCorrectCount] = useState(0)
  const [phase, setPhase] = useState('quiz')
  const scoredIdsRef = useRef(new Set())

  const filtered = useMemo(() => {
    return quizzes.filter((q) => {
      if (chapter !== 'all' && q.chapterId !== Number(chapter)) return false
      if (difficulty !== 'all' && q.difficulty !== difficulty) return false
      if (questionType !== 'all' && q.type !== questionType) return false
      return true
    })
  }, [chapter, difficulty, questionType])

  const [orderNonce, setOrderNonce] = useState(0)

  const orderedQuestions = useMemo(() => {
    const list = filtered.map(normalizeQuestionForQuizCard)
    if (randomOrder) return shuffleArray(list)
    return list
  }, [filtered, randomOrder, orderNonce])

  useEffect(() => {
    scoredIdsRef.current = new Set()
    setCurrentIdx(0)
    setShowResult(false)
    setUserAnswers({})
    setCorrectCount(0)
    setPhase('quiz')
  }, [chapter, difficulty, questionType, randomOrder])

  const total = orderedQuestions.length
  const currentQuestion = orderedQuestions[currentIdx]

  const handleAnswer = useCallback((questionId, selectedAnswer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: selectedAnswer }))
    setShowResult(true)
    const q = orderedQuestions.find((qq) => qq.id === questionId)
    if (
      q &&
      isAnswerCorrect(q, selectedAnswer) &&
      !scoredIdsRef.current.has(questionId)
    ) {
      scoredIdsRef.current.add(questionId)
      setCorrectCount((c) => c + 1)
    }
  }, [orderedQuestions])

  const handleNext = () => {
    if (!showResult || total === 0) return
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1)
      setShowResult(false)
    } else {
      setPhase('summary')
    }
  }

  const handleRestartSession = () => {
    scoredIdsRef.current = new Set()
    setCurrentIdx(0)
    setShowResult(false)
    setUserAnswers({})
    setCorrectCount(0)
    setPhase('quiz')
    setOrderNonce((n) => n + 1)
  }

  const toggleRandom = () => {
    setRandomOrder((r) => !r)
    setOrderNonce((n) => n + 1)
  }

  const pct =
    total > 0 ? Math.round((correctCount / total) * 100) : 0

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-900/40 p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold text-zinc-50">题库练习</h1>
          <Link
            to="/"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            返回首页
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-zinc-400">章节</span>
            <select
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              className="rounded-xl border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">全部章节</option>
              {allChapters.map((c) => (
                <option key={c.id} value={String(c.id)}>
                  第 {c.id} 章 {c.title}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-zinc-400">难度</span>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="rounded-xl border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">全部难度</option>
              <option value="basic">基础</option>
              <option value="intermediate">进阶</option>
              <option value="advanced">高级</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-zinc-400">题型</span>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="rounded-xl border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">全部题型</option>
              <option value="single">单选题</option>
              <option value="multiple">多选题</option>
              <option value="trueFalse">判断题</option>
              <option value="code">代码分析</option>
            </select>
          </label>

          <div className="flex flex-col gap-1.5 text-sm">
            <span className="text-zinc-400">顺序</span>
            <button
              type="button"
              onClick={toggleRandom}
              className={`rounded-xl border px-3 py-2 text-left font-medium transition ${
                randomOrder
                  ? 'border-emerald-500 bg-emerald-950/50 text-emerald-300'
                  : 'border-zinc-600 bg-zinc-800 text-zinc-200 hover:border-zinc-500'
              }`}
            >
              随机排序 {randomOrder ? '· 开' : '· 关'}
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-400">
          共 {filtered.length} 题
        </p>
      </div>

      {total === 0 ? (
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/50 p-10 text-center text-zinc-400">
          当前筛选条件下没有题目，请调整筛选条件。
        </div>
      ) : phase === 'summary' ? (
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/80 p-8 shadow-lg">
          <h2 className="mb-2 text-center text-xl font-semibold text-zinc-50">
            本轮练习完成
          </h2>
          <p className="mb-6 text-center text-zinc-400">
            共 {total} 题 · 答对 {correctCount} 题 · 正确率 {pct}%
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handleRestartSession}
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
              再练一轮
            </button>
            <Link
              to="/"
              className="inline-flex rounded-xl border border-zinc-600 bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-700"
            >
              返回首页
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm text-zinc-400">
            <span>
              第 {currentIdx + 1} / {total} 题 | 正确 {correctCount} 题
            </span>
          </div>

          {currentQuestion ? (
            <QuizCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              showResult={showResult}
              userAnswer={userAnswers[currentQuestion.id]}
            />
          ) : null}

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              disabled={!showResult}
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
              {currentIdx >= total - 1 ? '查看总结' : '下一题'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
