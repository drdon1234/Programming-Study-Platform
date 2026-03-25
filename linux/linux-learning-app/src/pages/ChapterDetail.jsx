import { useParams, Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { questions } from '../data/questions'
import { useProgress } from '../hooks/useProgress'
import CodeBlock from '../components/CodeBlock'
import './ChapterDetail.css'

export default function ChapterDetail() {
  const { id } = useParams()
  const { markRead, isRead } = useProgress()

  const chapter = chapters.find(c => c.id === id)
  const chapterIndex = chapters.findIndex(c => c.id === id)

  if (!chapter) {
    return (
      <div className="cd-empty">
        <h2>章节未找到</h2>
        <Link to="/chapters">返回章节列表</Link>
      </div>
    )
  }

  const read = isRead(id)
  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null
  const qcount = (questions[id] || []).length

  return (
    <div className="cd">
      <div className="cd-breadcrumb">
        <Link to="/chapters">课程章节</Link>
        <span className="cd-breadcrumb-sep">/</span>
        <span>{chapter.title}</span>
      </div>

      <div className="cd-header">
        <div className="cd-header-top">
          <span className="cd-icon">{chapter.icon}</span>
          <div>
            <div className="cd-module-num">模块 {String(chapterIndex + 1).padStart(2, '0')}</div>
            <h1 className="cd-title">{chapter.title}</h1>
          </div>
        </div>
        <p className="cd-desc">{chapter.description}</p>
        <div className="cd-meta">
          <span>{chapter.sections.length} 个小节</span>
          <span>难度：{chapter.difficulty}</span>
          {qcount > 0 && <span>{qcount} 道练习题</span>}
        </div>
      </div>

      <nav className="cd-toc">
        <div className="cd-toc-title">目录</div>
        {chapter.sections.map((sec, i) => (
          <a key={i} href={`#section-${i}`} className="cd-toc-item">
            {i + 1}. {sec.title}
          </a>
        ))}
      </nav>

      <div className="cd-content">
        {chapter.sections.map((sec, i) => (
          <section key={i} id={`section-${i}`} className="cd-section">
            <h2 className="cd-section-title">
              <span className="cd-section-num">{i + 1}</span>
              {sec.title}
            </h2>
            <div className="cd-section-text">
              {sec.content.split('\n').map((para, j) => {
                const trimmed = para.trim()
                if (!trimmed) return null
                if (trimmed.startsWith('•')) {
                  return <div key={j} className="cd-bullet">{renderInlineCode(trimmed)}</div>
                }
                return <p key={j}>{renderInlineCode(trimmed)}</p>
              })}
            </div>
            {sec.code && (
              <CodeBlock
                code={sec.code.code}
                language={sec.code.language}
                title={sec.code.title}
              />
            )}
          </section>
        ))}
      </div>

      <div className="cd-actions">
        {!read ? (
          <button className="cd-btn cd-btn--primary" onClick={() => markRead(id)}>
            标记为已学习
          </button>
        ) : (
          <span className="cd-read-badge">已学习 ✓</span>
        )}
        {qcount > 0 && (
          <Link to={`/quiz/${id}`} className="cd-btn cd-btn--outline">
            开始练习（{qcount} 题）
          </Link>
        )}
      </div>

      <div className="cd-nav">
        {prevChapter ? (
          <Link to={`/chapters/${prevChapter.id}`} className="cd-nav-link cd-nav-link--prev">
            <span className="cd-nav-arrow">&larr;</span>
            <div>
              <div className="cd-nav-label">上一章</div>
              <div className="cd-nav-title">{prevChapter.title}</div>
            </div>
          </Link>
        ) : <div />}
        {nextChapter ? (
          <Link to={`/chapters/${nextChapter.id}`} className="cd-nav-link cd-nav-link--next">
            <div>
              <div className="cd-nav-label">下一章</div>
              <div className="cd-nav-title">{nextChapter.title}</div>
            </div>
            <span className="cd-nav-arrow">&rarr;</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}

function renderInlineCode(text) {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="cd-inline-code">{part.slice(1, -1)}</code>
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g)
    if (boldParts.length > 1) {
      return boldParts.map((bp, j) => {
        if (bp.startsWith('**') && bp.endsWith('**')) {
          return <strong key={`${i}-${j}`}>{bp.slice(2, -2)}</strong>
        }
        return bp
      })
    }
    return part
  })
}
