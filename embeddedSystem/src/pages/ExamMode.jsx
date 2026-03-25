import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import { Link } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import { useProgress } from '../hooks/useProgress'
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

function formatMmSs(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`
}

function formatDurationCn(seconds) {
  const s = Math.max(0, Math.floor(seconds))
  const m = Math.floor(s / 60)
  const r = s % 60
  if (m === 0) return `${r} 秒`
  if (r === 0) return `${m} 分钟`
  return `${m} 分 ${r} 秒`
}

function pickExamQuestions(count) {
  const pool = quizzes.map(normalizeQuestionForQuizCard)
  const shuffled = shuffleArray(pool)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function scoreRating(pct) {
  if (pct >= 90) return '优秀'
  if (pct >= 70) return '良好'
  if (pct >= 60) return '及格'
  return '需要加强'
}

function isAnswered(userAnswer) {
  if (userAnswer === undefined || userAnswer === null) return false
  if (Array.isArray(userAnswer)) return userAnswer.length > 0
  return true
}

export default function ExamMode() {
  const { saveExamScore } = useProgress()

  const [examState, setExamState] = useState('setup')
  const [durationMinutes, setDurationMinutes] = useState(60)
  const [questionCount, setQuestionCount] = useState(30)

  const [examQuestions, setExamQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [usedSeconds, setUsedSeconds] = useState(0)
  const [finalScore, setFinalScore] = useState(0)

  const startedAtRef = useRef(null)
  const finishOnceRef = useRef(false)
  const answersRef = useRef({})

  const total = examQuestions.length

  const handleAnswer = useCallback((questionId, selectedAnswer) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: selectedAnswer }
      answersRef.current = next
      return next
    })
  }, [])

  useEffect(() => {
    answersRef.current = answers
  }, [answers])

  const completeExam = useCallback(() => {
    if (finishOnceRef.current) return
    finishOnceRef.current = true

    const prev = answersRef.current
    let score = 0
    for (const q of examQuestions) {
      if (isAnswerCorrect(q, prev[q.id])) score += 1
    }
    setFinalScore(score)

    let elapsed = 0
    if (startedAtRef.current) {
      elapsed = Math.floor((Date.now() - startedAtRef.current) / 1000)
    }
    const cap = durationMinutes * 60
    elapsed = Math.min(Math.max(0, elapsed), cap)
    setUsedSeconds(elapsed)

    setExamState('result')
    saveExamScore(score, examQuestions.length, durationMinutes)
  }, [durationMinutes, examQuestions, saveExamScore])

  const completeExamRef = useRef(completeExam)
  completeExamRef.current = completeExam

  useEffect(() => {
    if (examState !== 'running') return
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setTimeout(() => completeExamRef.current(), 0)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [examState])

  const startExam = () => {
    finishOnceRef.current = false
    const qs = pickExamQuestions(questionCount)
    setExamQuestions(qs)
    const empty = {}
    setAnswers(empty)
    answersRef.current = empty
    setCurrentIdx(0)
    setFinalScore(0)
    const secs = durationMinutes * 60
    setTimeLeft(secs)
    startedAtRef.current = Date.now()
    setExamState('running')
  }

  const submitManual = () => {
    completeExam()
  }

  const restartExam = () => {
    finishOnceRef.current = false
    setExamState('setup')
    setExamQuestions([])
    setAnswers({})
    setCurrentIdx(0)
    startedAtRef.current = null
  }

  const pct = useMemo(() => {
    if (total === 0) return 0
    return Math.round((finalScore / total) * 100)
  }, [finalScore, total])

  const wrongItems = useMemo(() => {
    if (examState !== 'result') return []
    return examQuestions.filter((q) => !isAnswerCorrect(q, answers[q.id]))
  }, [examState, examQuestions, answers])

  const currentQuestion = examQuestions[currentIdx]
  const lowTime = timeLeft <= 300 && examState === 'running'

  if (examState === 'setup') {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/80 p-8 shadow-lg">
          <h1 className="mb-8 text-center text-2xl font-semibold text-zinc-50">
            模拟考试
          </h1>

          <div className="mb-8 space-y-6">
            <div>
              <p className="mb-3 text-sm font-medium text-zinc-400">考试时长</p>
              <div className="flex flex-wrap gap-4">
                {[30, 60, 90].map((m) => (
                  <label
                    key={m}
                    className="flex cursor-pointer items-center gap-2 text-zinc-200"
                  >
                    <input
                      type="radio"
                      name="duration"
                      checked={durationMinutes === m}
                      onChange={() => setDurationMinutes(m)}
                      className="h-4 w-4 border-zinc-500 text-emerald-600 focus:ring-emerald-500"
                    />
                    {m} 分钟
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-zinc-400">题目数量</p>
              <div className="flex flex-wrap gap-4">
                {[20, 30, 50].map((n) => (
                  <label
                    key={n}
                    className="flex cursor-pointer items-center gap-2 text-zinc-200"
                  >
                    <input
                      type="radio"
                      name="count"
                      checked={questionCount === n}
                      onChange={() => setQuestionCount(n)}
                      className="h-4 w-4 border-zinc-500 text-emerald-600 focus:ring-emerald-500"
                    />
                    {n} 题
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={startExam}
              className="rounded-xl bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
              开始考试
            </button>
            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-700"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (examState === 'running') {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-700 pb-4">
          <h1 className="text-lg font-semibold text-zinc-100">模拟考试</h1>
          <div
            className={`font-mono text-xl font-bold tabular-nums ${
              lowTime ? 'text-red-400' : 'text-emerald-400'
            }`}
          >
            {formatMmSs(timeLeft)}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {examQuestions.map((q, i) => {
            const done = isAnswered(answers[q.id])
            const active = i === currentIdx
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIdx(i)}
                className={`min-w-[2.5rem] rounded-lg border px-2 py-1.5 text-sm font-medium transition ${
                  active
                    ? 'border-emerald-500 bg-emerald-950/50 text-emerald-200'
                    : done
                      ? 'border-emerald-700/80 bg-zinc-800 text-emerald-300/90'
                      : 'border-zinc-600 bg-zinc-900 text-zinc-400 hover:border-zinc-500'
                }`}
              >
                {i + 1}
              </button>
            )
          })}
        </div>

        <p className="mb-4 text-sm text-zinc-500">
          第 {currentIdx + 1} / {total} 题
        </p>

        {currentQuestion ? (
          <QuizCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            showResult={false}
            userAnswer={answers[currentQuestion.id]}
          />
        ) : null}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-700 pt-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              上一题
            </button>
            <button
              type="button"
              disabled={currentIdx >= total - 1}
              onClick={() =>
                setCurrentIdx((i) => Math.min(total - 1, i + 1))
              }
              className="rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              下一题
            </button>
          </div>
          <button
            type="button"
            onClick={submitManual}
            className="rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-700"
          >
            交卷
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-2xl border border-zinc-700 bg-zinc-900/80 p-8 shadow-lg">
        <h1 className="mb-2 text-center text-2xl font-semibold text-zinc-50">
          考试结果
        </h1>
        <p className="mb-1 text-center text-4xl font-bold text-emerald-400">
          {finalScore} / {total}
        </p>
        <p className="mb-2 text-center text-lg text-zinc-300">{pct}%</p>
        <p className="mb-6 text-center text-sm text-zinc-500">
          用时 {formatDurationCn(usedSeconds)} · 评级：{scoreRating(pct)}
        </p>

        {wrongItems.length > 0 ? (
          <div className="mb-8 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              错题回顾
            </h2>
            <ul className="space-y-4">
              {wrongItems.map((q) => (
                <li
                  key={q.id}
                  className="rounded-xl border border-zinc-700 bg-zinc-950/50 p-4 text-sm text-zinc-300"
                >
                  <p className="mb-2 font-medium text-zinc-100">
                    第 {examQuestions.findIndex((x) => x.id === q.id) + 1} 题
                  </p>
                  <p className="mb-2 whitespace-pre-wrap text-zinc-400">
                    {q.code && typeof q.question === 'string'
                      ? q.question.split('```')[0]?.trim() || q.question
                      : q.question}
                  </p>
                  <p className="mb-1 text-red-400/90">
                    你的答案：
                    {Array.isArray(answers[q.id])
                      ? answers[q.id].join('、') || '（未作答）'
                      : answers[q.id] !== undefined
                        ? String(answers[q.id])
                        : '（未作答）'}
                  </p>
                  <p className="mb-2 text-emerald-400/90">
                    正确答案：
                    {Array.isArray(q.answer)
                      ? q.answer.join('、')
                      : String(q.answer)}
                  </p>
                  <p className="text-zinc-500">
                    <span className="font-medium text-zinc-400">解析：</span>
                    {q.explanation}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mb-8 text-center text-emerald-400/90">
            全部正确，太棒了！
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={restartExam}
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            重新考试
          </button>
          <Link
            to="/"
            className="inline-flex items-center rounded-xl border border-zinc-600 bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-700"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
