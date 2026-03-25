import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { questions } from '../data/questions'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import './Home.css'

const DIFFICULTY_COLORS = {
  '入门': '#22c55e',
  '基础': '#3b82f6',
  '中级': '#f59e0b',
  '高级': '#ef4444',
}

export default function Home() {
  const { getModuleProgress, getOverallProgress, isRead, getQuizScore } = useProgress()
  const moduleIds = chapters.map(c => c.id)
  const overall = getOverallProgress(moduleIds)
  const totalQuestions = Object.values(questions).reduce((s, q) => s + q.length, 0)
  const readCount = moduleIds.filter(id => isRead(id)).length
  const quizDone = moduleIds.filter(id => getQuizScore(id)).length

  return (
    <div className="home">
      <section className="home-hero">
        <h2 className="home-hero-title">Linux 程序设计学习平台</h2>
        <p className="home-hero-desc">
          基于《Linux程序设计（第4版）》与《Linux高级程序设计（第三版）》，从零开始系统掌握 Linux 编程
        </p>
        <div className="home-stats">
          <div className="home-stat">
            <div className="home-stat-value">{chapters.length}</div>
            <div className="home-stat-label">学习模块</div>
          </div>
          <div className="home-stat">
            <div className="home-stat-value">{totalQuestions}</div>
            <div className="home-stat-label">练习题目</div>
          </div>
          <div className="home-stat">
            <div className="home-stat-value">{readCount}/{chapters.length}</div>
            <div className="home-stat-label">已学章节</div>
          </div>
          <div className="home-stat">
            <div className="home-stat-value">{quizDone}/{chapters.length}</div>
            <div className="home-stat-label">已测模块</div>
          </div>
        </div>
        <div className="home-progress-section">
          <div className="home-progress-header">
            <span>总体学习进度</span>
            <span className="home-progress-pct">{overall}%</span>
          </div>
          <ProgressBar value={overall} height={12} />
        </div>
      </section>

      <section className="home-modules">
        <h3 className="home-section-title">学习模块</h3>
        <div className="home-grid">
          {chapters.map((ch, i) => {
            const progress = getModuleProgress(ch.id)
            const qcount = (questions[ch.id] || []).length
            return (
              <Link key={ch.id} to={`/chapters/${ch.id}`} className="module-card">
                <div className="module-card-top">
                  <span className="module-card-icon">{ch.icon}</span>
                  <span
                    className="module-card-diff"
                    style={{ color: DIFFICULTY_COLORS[ch.difficulty] || '#888' }}
                  >
                    {ch.difficulty}
                  </span>
                </div>
                <div className="module-card-num">模块 {String(i + 1).padStart(2, '0')}</div>
                <h4 className="module-card-title">{ch.title}</h4>
                <p className="module-card-desc">{ch.description}</p>
                <div className="module-card-meta">
                  <span>{ch.sections.length} 节</span>
                  <span>{qcount} 题</span>
                </div>
                <div className="module-card-progress">
                  <ProgressBar value={progress} height={4} />
                  <span className="module-card-pct">{progress}%</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="home-quick">
        <h3 className="home-section-title">快速入口</h3>
        <div className="home-quick-grid">
          <Link to="/chapters" className="quick-card">
            <span className="quick-card-icon">📖</span>
            <span className="quick-card-text">开始学习</span>
          </Link>
          <Link to="/quiz" className="quick-card">
            <span className="quick-card-icon">✏️</span>
            <span className="quick-card-text">题库练习</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
