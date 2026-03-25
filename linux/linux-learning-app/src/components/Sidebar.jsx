import { NavLink } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { useProgress } from '../hooks/useProgress'
import './Sidebar.css'

const NAV_ITEMS = [
  { to: '/', label: '学习概览', icon: '📊' },
  { to: '/chapters', label: '课程章节', icon: '📖' },
  { to: '/quiz', label: '题库练习', icon: '✏️' },
]

export default function Sidebar({ open, onClose }) {
  const { getModuleProgress } = useProgress()

  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-logo">🐧</span>
        <div>
          <div className="sidebar-brand">Linux 学习平台</div>
          <div className="sidebar-sub">从零开始掌握 Linux 编程</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
            onClick={onClose}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-section-title">学习模块</div>
      <div className="sidebar-modules">
        {chapters.map((ch, i) => {
          const progress = getModuleProgress(ch.id)
          return (
            <NavLink
              key={ch.id}
              to={`/chapters/${ch.id}`}
              className={({ isActive }) => `sidebar-module ${isActive ? 'sidebar-module--active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar-module-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sidebar-module-title">{ch.title}</span>
              {progress > 0 && (
                <span className="sidebar-module-badge">
                  {progress === 100 ? '✓' : `${progress}%`}
                </span>
              )}
            </NavLink>
          )
        })}
      </div>
    </aside>
  )
}
