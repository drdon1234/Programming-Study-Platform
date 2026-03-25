import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { questions } from '../data/questions'
import { useProgress } from '../hooks/useProgress'
import QuizQuestion from '../components/QuizQuestion'
import ProgressBar from '../components/ProgressBar'
import './QuizSession.css'

export default function QuizSession() {
  const { moduleId } = useParams()
  const { saveQuizScore, getQuizScore } = useProgress()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const chapter = chapters.find(c => c.id === moduleId)
  const qs = useMemo(() => questions[moduleId] || [], [moduleId])

  if (!chapter || qs.length === 0) {
    return (
      <div className="qs-empty">
        <h2>题目未找到</h2>
        <Link to="/quiz">返回题库</Link>
      </div>
    )
  }

  const handleAnswer = (qIdx, optIdx) => {
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }))
  }

  const handleNext = () => {
    if (current < qs.length - 1) {
      setCurrent(c => c + 1)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(c => c - 1)
    }
  }

  const handleFinish = () => {
    const score = qs.reduce((sum, q, i) => {
      return sum + (answers[i] === q.answer ? 1 : 0)
    }, 0)
    saveQuizScore(moduleId, score, qs.length)
    setFinished(true)
  }

  const handleRetry = () => {
    setAnswers({})
    setCurrent(0)
    setFinished(false)
  }

  const answeredCount = Object.keys(answers).length
  const progressPct = Math.round((answeredCount / qs.length) * 100)

  if (finished) {
    const scoreData = getQuizScore(moduleId)
    const score = scoreData ? scoreData.score : 0
    const pct = Math.round((score / qs.length) * 100)
    const passed = pct >= 60

    return (
      <div className="qs-result">
        <div className="qs-result-card">
          <div className="qs-result-emoji">{passed ? '🎉' : '📚'}</div>
          <h2 className="qs-result-title">
            {passed ? '恭喜通过!' : '继续努力!'}
          </h2>
          <div className="qs-result-score">
            <span className="qs-result-num">{score}</span>
            <span className="qs-result-sep">/</span>
            <span className="qs-result-total">{qs.length}</span>
          </div>
          <div className="qs-result-pct">{pct}%</div>
          <ProgressBar
            value={pct}
            height={10}
            color={passed ? '#22c55e' : '#ef4444'}
          />
          <div className="qs-result-details">
            <div>正确：{score} 题</div>
            <div>错误：{qs.length - score} 题</div>
          </div>
          <div className="qs-result-actions">
            <button className="qs-btn qs-btn--primary" onClick={handleRetry}>
              重新练习
            </button>
            <Link to="/quiz" className="qs-btn qs-btn--outline">
              返回题库
            </Link>
            <Link to={`/chapters/${moduleId}`} className="qs-btn qs-btn--outline">
              复习章节
            </Link>
          </div>
        </div>

        <h3 className="qs-review-title">题目回顾</h3>
        {qs.map((q, i) => (
          <QuizQuestion
            key={i}
            question={q}
            index={i}
            onAnswer={() => {}}
            showResult={true}
          />
        ))}
      </div>
    )
  }

  const q = qs[current]

  return (
    <div className="qs">
      <div className="qs-breadcrumb">
        <Link to="/quiz">题库练习</Link>
        <span className="qs-breadcrumb-sep">/</span>
        <span>{chapter.title}</span>
      </div>

      <div className="qs-header">
        <div className="qs-header-info">
          <span className="qs-header-icon">{chapter.icon}</span>
          <h2 className="qs-header-title">{chapter.title}</h2>
        </div>
        <div className="qs-progress-info">
          <span>{answeredCount}/{qs.length} 已作答</span>
          <span>{progressPct}%</span>
        </div>
        <ProgressBar value={progressPct} height={6} />
      </div>

      <div className="qs-nav-dots">
        {qs.map((_, i) => (
          <button
            key={i}
            className={`qs-dot ${i === current ? 'qs-dot--current' : ''} ${answers[i] !== undefined ? 'qs-dot--answered' : ''}`}
            onClick={() => setCurrent(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <QuizQuestion
        key={`${moduleId}-${current}`}
        question={q}
        index={current}
        onAnswer={(optIdx) => handleAnswer(current, optIdx)}
        showResult={true}
      />

      <div className="qs-controls">
        <button
          className="qs-btn qs-btn--outline"
          onClick={handlePrev}
          disabled={current === 0}
        >
          上一题
        </button>
        <span className="qs-page">{current + 1} / {qs.length}</span>
        {current < qs.length - 1 ? (
          <button className="qs-btn qs-btn--primary" onClick={handleNext}>
            下一题
          </button>
        ) : (
          <button
            className="qs-btn qs-btn--primary"
            onClick={handleFinish}
            disabled={answeredCount < qs.length}
          >
            {answeredCount < qs.length
              ? `还有 ${qs.length - answeredCount} 题未答`
              : '提交答案'}
          </button>
        )}
      </div>
    </div>
  )
}
