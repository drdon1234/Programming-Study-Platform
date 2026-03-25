import { NavLink, useLocation } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'

const chapterList = [
  { id: 1, title: '嵌入式系统导论' },
  { id: 2, title: '系统架构设计' },
  { id: 3, title: '硬件基础入门' },
  { id: 4, title: '输入输出与定时器' },
  { id: 5, title: '中断机制' },
  { id: 6, title: '活动流管理' },
  { id: 7, title: '外设通信' },
  { id: 8, title: '系统集成' },
  { id: 9, title: '调试技术' },
  { id: 10, title: '互联设备开发' },
  { id: 11, title: '资源优化' },
  { id: 12, title: '嵌入式数学' },
  { id: 13, title: '功耗管理' },
  { id: 14, title: '电机与运动控制' },
]

const navItems = [
  { path: '/', label: '学习总览', icon: HomeIcon },
  { path: '/quiz-bank', label: '题库练习', icon: QuizIcon },
  { path: '/exam', label: '模拟考试', icon: ExamIcon },
]

function HomeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function QuizIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  )
}

function ExamIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const { getChapterProgress } = useProgress()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={onClose} />
      )}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-72
        bg-primary-950 text-gray-200
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center font-mono font-bold text-white text-sm">
              ES
            </div>
            <div>
              <h1 className="font-semibold text-white text-base leading-tight">嵌入式系统</h1>
              <p className="text-xs text-gray-400">学习平台</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${isActive
                  ? 'bg-accent-600/20 text-accent-400'
                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}
              `}
            >
              <Icon />
              {label}
            </NavLink>
          ))}

          <div className="pt-4 pb-2 px-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">学习章节</p>
          </div>

          {chapterList.map(({ id, title }) => {
            const progress = getChapterProgress(id)
            const isActive = location.pathname === `/chapter/${id}`
            return (
              <NavLink
                key={id}
                to={`/chapter/${id}`}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors group
                  ${isActive
                    ? 'bg-accent-600/20 text-accent-400'
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}
                `}
              >
                <span className={`
                  w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-medium flex-shrink-0
                  ${progress >= 100
                    ? 'bg-green-600/30 text-green-400'
                    : progress > 0
                      ? 'bg-accent-600/30 text-accent-400'
                      : 'bg-white/10 text-gray-500 group-hover:text-gray-400'}
                `}>
                  {progress >= 100 ? '✓' : id}
                </span>
                <span className="truncate">{title}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10 text-xs text-gray-500">
          基于《Making Embedded Systems》第二版
        </div>
      </aside>
    </>
  )
}
