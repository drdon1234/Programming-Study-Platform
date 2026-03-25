import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { questions } from '../data/questions'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import './QuizCenter.css'

export default function QuizCenter() {
  const { getQuizScore } = useProgress()

  const totalQuestions = Object.values(questions).reduce((s, q) => s + q.length, 0)
  const totalCorrect = chapters.reduce((sum, ch) => {
    const score = getQuizScore(ch.id)
    return sum + (score ? score.score : 0)
  }, 0)
  const testedCount = chapters.filter(ch => getQuizScore(ch.id)).length

  return (
    <div className="qc">
      <h2 className="qc-title">题库练习</h2>
      <p className="qc-desc">
        选择一个模块开始练习，检验你的 Linux 编程知识
      </p>

      <div className="qc-overview">
        <div className="qc-stat">
          <div className="qc-stat-value">{totalQuestions}</div>
          <div className="qc-stat-label">总题数</div>
        </div>
        <div className="qc-stat">
          <div className="qc-stat-value">{testedCount}/{chapters.length}</div>
          <div className="qc-stat-label">已测模块</div>
        </div>
        <div className="qc-stat">
          <div className="qc-stat-value">{totalCorrect}</div>
          <div className="qc-stat-label">答对题数</div>
        </div>
      </div>

      <div className="qc-list">
        {chapters.map((ch, i) => {
          const qs = questions[ch.id] || []
          const score = getQuizScore(ch.id)

          if (qs.length === 0) return null

          return (
            <div key={ch.id} className="qc-card">
              <div className="qc-card-header">
                <span className="qc-card-icon">{ch.icon}</span>
                <div className="qc-card-info">
                  <div className="qc-card-module">模块 {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="qc-card-title">{ch.title}</h3>
                </div>
              </div>
              <div className="qc-card-meta">
                <span>{qs.length} 道题</span>
                <span>
                  选择题 {qs.filter(q => q.type === 'choice').length} 题 /
                  判断题 {qs.filter(q => q.type === 'truefalse').length} 题 /
                  代码分析 {qs.filter(q => q.type === 'code').length} 题
                </span>
              </div>
              {score && (
                <div className="qc-card-score">
                  <div className="qc-card-score-header">
                    <span>上次成绩：{score.score}/{score.total}</span>
                    <span>{Math.round(score.score / score.total * 100)}%</span>
                  </div>
                  <ProgressBar
                    value={Math.round(score.score / score.total * 100)}
                    height={6}
                    color={score.score / score.total >= 0.6 ? '#22c55e' : '#ef4444'}
                  />
                </div>
              )}
              <Link to={`/quiz/${ch.id}`} className="qc-card-btn">
                {score ? '重新练习' : '开始练习'}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
