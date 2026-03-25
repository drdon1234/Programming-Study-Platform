import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { getModule, getChapterQuizzes, getChapter } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import QuizQuestion from '../components/QuizQuestion'
import ProgressRing from '../components/ProgressRing'

export default function QuizSession() {
  const { moduleId, chapterId } = useParams()
  const navigate = useNavigate()
  const mod = getModule(moduleId)
  const chapter = mod ? getChapter(moduleId, chapterId) : null
  const quizzes = useMemo(() => mod ? getChapterQuizzes(moduleId, chapterId) : [], [moduleId, chapterId, mod])
  const { saveQuizScore } = useProgress()

  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  if (!mod) return <Navigate to="/" replace />
  if (quizzes.length === 0) {
    return (
      <div className="animate-fade-in text-center py-20">
        <p className="text-surface-400 text-lg mb-4">该章节暂无题目</p>
        <Link to={`/m/${moduleId}/quiz`} className="btn btn-primary">返回题库</Link>
      </div>
    )
  }

  const handleAnswer = (selected, isCorrect) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: { selected, isCorrect } }))
  }

  const handleNext = () => {
    if (currentIdx < quizzes.length - 1) {
      setCurrentIdx(prev => prev + 1)
    } else {
      const correctCount = Object.values(answers).filter(a => a.isCorrect).length
      saveQuizScore(moduleId, chapterId, correctCount, quizzes.length)
      setFinished(true)
    }
  }

  if (finished) {
    const correctCount = Object.values(answers).filter(a => a.isCorrect).length
    const pct = Math.round((correctCount / quizzes.length) * 100)

    return (
      <div className="animate-fade-in max-w-lg mx-auto text-center py-12">
        <ProgressRing value={pct} size={120} strokeWidth={8}
          colorClass={pct >= 80 ? 'text-green-500' : pct >= 60 ? 'text-yellow-500' : 'text-red-500'} />
        <h2 className="text-2xl font-bold mt-6 mb-2">测验完成</h2>
        <p className="text-surface-500 dark:text-surface-400 mb-6">
          {correctCount} / {quizzes.length} 题正确 ({pct}%)
        </p>
        <p className="text-surface-400 mb-8">
          {pct >= 80 ? '表现优秀！' : pct >= 60 ? '还不错，继续加油！' : '需要再复习一下这部分内容。'}
        </p>
        <div className="flex justify-center gap-3">
          <button onClick={() => { setCurrentIdx(0); setAnswers({}); setFinished(false) }}
                  className="btn btn-ghost">
            重新测验
          </button>
          <Link to={`/m/${moduleId}/quiz`} className="btn btn-primary">返回题库</Link>
        </div>
      </div>
    )
  }

  const currentQuiz = quizzes[currentIdx]
  const hasAnswered = answers[currentIdx] !== undefined

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Link to={`/m/${moduleId}/quiz`} className="btn btn-ghost text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          返回题库
        </Link>
        {chapter && <span className="text-sm text-surface-400">{chapter.title}</span>}
      </div>

      <div className="max-w-2xl mx-auto">
        <QuizQuestion
          key={currentIdx}
          quiz={currentQuiz}
          index={currentIdx}
          total={quizzes.length}
          onAnswer={handleAnswer}
        />

        {hasAnswered && (
          <button onClick={handleNext} className="btn btn-primary w-full mt-6">
            {currentIdx < quizzes.length - 1 ? '下一题' : '查看结果'}
          </button>
        )}
      </div>
    </div>
  )
}
