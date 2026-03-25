import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { questions } from '../data/questions'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import './ChapterList.css'

export default function ChapterList() {
  const { getModuleProgress, isRead, getQuizScore } = useProgress()

  return (
    <div className="chapter-list">
      <h2 className="chapter-list-title">课程章节</h2>
      <p className="chapter-list-desc">
        系统学习 Linux 程序设计的核心知识，从基础命令到网络编程
      </p>

      <div className="chapter-list-grid">
        {chapters.map((ch, i) => {
          const progress = getModuleProgress(ch.id)
          const read = isRead(ch.id)
          const quiz = getQuizScore(ch.id)
          const qcount = (questions[ch.id] || []).length

          return (
            <Link key={ch.id} to={`/chapters/${ch.id}`} className="cl-card">
              <div className="cl-card-left">
                <span className="cl-card-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="cl-card-body">
                <div className="cl-card-header">
                  <span className="cl-card-icon">{ch.icon}</span>
                  <h3 className="cl-card-title">{ch.title}</h3>
                  {read && <span className="cl-card-badge cl-card-badge--read">已学</span>}
                  {quiz && <span className="cl-card-badge cl-card-badge--quiz">{quiz.score}/{quiz.total}</span>}
                </div>
                <p className="cl-card-desc">{ch.description}</p>
                <div className="cl-card-footer">
                  <span className="cl-card-meta">{ch.sections.length} 个小节</span>
                  <span className="cl-card-meta">{qcount} 道练习题</span>
                  <span className="cl-card-meta">难度：{ch.difficulty}</span>
                </div>
                <div className="cl-card-progress">
                  <ProgressBar value={progress} height={4} />
                  <span className="cl-card-pct">{progress}%</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
