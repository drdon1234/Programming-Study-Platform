import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { getModule } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import QuizQuestion from '../components/QuizQuestion'
import ProgressRing from '../components/ProgressRing'
import { EXAM_DURATION_OPTIONS } from '../utils/constants'

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ExamMode() {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)
  const { saveQuizScore } = useProgress()

  const [phase, setPhase] = useState('setup')
  const [duration, setDuration] = useState(30)
  const [count, setCount] = useState(20)
  const [examQuizzes, setExamQuizzes] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const timerRef = useRef(null)

  if (!mod) return <Navigate to="/" replace />

  const allQuizzes = mod.quizzes

  const startExam = () => {
    const n = Math.min(count, allQuizzes.length)
    setExamQuizzes(shuffleArray(allQuizzes).slice(0, n))
    setTimeLeft(duration * 60)
    setCurrentIdx(0)
    setAnswers({})
    setPhase('exam')
  }

  useEffect(() => {
    if (phase !== 'exam') return
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          setPhase('result')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [phase])

  const finishExam = () => {
    clearInterval(timerRef.current)
    const correct = Object.values(answers).filter(a => a.isCorrect).length
    saveQuizScore(moduleId, `exam-${Date.now()}`, correct, examQuizzes.length)
    setPhase('result')
  }

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`

  if (phase === 'setup') {
    return (
      <div className="animate-fade-in max-w-md mx-auto py-12">
        <Link to={`/m/${moduleId}`} className="btn btn-ghost text-sm mb-6 inline-flex">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          返回
        </Link>
        <h1 className="text-2xl font-bold mb-6">{mod.name} — 模拟考试</h1>
        <div className="card p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">考试时长</label>
            <div className="flex gap-2 flex-wrap">
              {EXAM_DURATION_OPTIONS.map(opt => (
                <button key={opt.value}
                  className={`btn text-sm ${duration === opt.value ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => setDuration(opt.value)}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">题目数量 (共 {allQuizzes.length} 题可用)</label>
            <input type="number" className="input" value={count}
              onChange={e => setCount(Math.max(1, Math.min(allQuizzes.length, parseInt(e.target.value) || 1)))}
              min={1} max={allQuizzes.length} />
          </div>
          <button onClick={startExam} className="btn btn-primary w-full" disabled={allQuizzes.length === 0}>
            开始考试
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'result') {
    const correct = Object.values(answers).filter(a => a.isCorrect).length
    const pct = examQuizzes.length ? Math.round((correct / examQuizzes.length) * 100) : 0
    return (
      <div className="animate-fade-in max-w-lg mx-auto text-center py-12">
        <ProgressRing value={pct} size={120} strokeWidth={8}
          colorClass={pct >= 80 ? 'text-green-500' : pct >= 60 ? 'text-yellow-500' : 'text-red-500'} />
        <h2 className="text-2xl font-bold mt-6 mb-2">考试结束</h2>
        <p className="text-surface-500 dark:text-surface-400 mb-8">
          {correct} / {examQuizzes.length} 题正确 ({pct}%)
        </p>
        <div className="flex justify-center gap-3">
          <button onClick={() => setPhase('setup')} className="btn btn-ghost">再考一次</button>
          <Link to={`/m/${moduleId}`} className="btn btn-primary">返回模块</Link>
        </div>
      </div>
    )
  }

  const currentQuiz = examQuizzes[currentIdx]
  const hasAnswered = answers[currentIdx] !== undefined

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-lg font-bold text-primary-600 dark:text-primary-400">
          {formatTime(timeLeft)}
        </span>
        <button onClick={finishExam} className="btn btn-ghost text-sm text-red-500">结束考试</button>
      </div>
      <div className="max-w-2xl mx-auto">
        <QuizQuestion
          key={currentIdx}
          quiz={currentQuiz}
          index={currentIdx}
          total={examQuizzes.length}
          onAnswer={(selected, isCorrect) => setAnswers(prev => ({ ...prev, [currentIdx]: { selected, isCorrect } }))}
        />
        {hasAnswered && (
          <button onClick={() => {
            if (currentIdx < examQuizzes.length - 1) setCurrentIdx(prev => prev + 1)
            else finishExam()
          }} className="btn btn-primary w-full mt-6">
            {currentIdx < examQuizzes.length - 1 ? '下一题' : '完成考试'}
          </button>
        )}
      </div>
    </div>
  )
}
