import { NavLink, useParams, useLocation } from 'react-router-dom'
import { getModules, getModuleChapters } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import { MODULE_COLORS } from '../modules/types'
import { useState } from 'react'

export default function Sidebar({ open, onClose }) {
  const modules = getModules()
  const { moduleId } = useParams()
  const location = useLocation()
  const { getChapterProgress } = useProgress()
  const [expandedModule, setExpandedModule] = useState(moduleId || null)

  const activeModule = modules.find(m =>
    location.pathname.startsWith(`/m/${m.id}`)
  )

  const handleModuleClick = (id) => {
    setExpandedModule(prev => prev === id ? null : id)
  }

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
      isActive
        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium'
        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
    }`

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onClose} />
      )}
      <aside className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-surface-200 dark:border-surface-700">
            <NavLink to="/" className="flex items-center gap-2" onClick={onClose}>
              <span className="text-xl">📚</span>
              <span className="font-bold text-lg">
                编程学习<span className="text-primary-500">平台</span>
              </span>
            </NavLink>
          </div>

          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            <NavLink to="/" end className={navLinkClass} onClick={onClose}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              首页
            </NavLink>

            <div className="pt-2">
              <div className="text-xs font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wider px-3 py-2">
                学习模块
              </div>
              {modules.map(mod => {
                const colors = MODULE_COLORS[mod.color] || MODULE_COLORS['mod-ccpp']
                const isExpanded = expandedModule === mod.id
                const chapters = mod.chapters

                return (
                  <div key={mod.id} className="mb-1">
                    <button
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeModule?.id === mod.id
                          ? `${colors.bg} ${colors.text} font-medium`
                          : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
                      }`}
                      onClick={() => handleModuleClick(mod.id)}
                    >
                      <span>{mod.icon}</span>
                      <span className="flex-1 text-left">{mod.name}</span>
                      <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="ml-4 mt-1 space-y-0.5 animate-fade-in">
                        <NavLink
                          to={`/m/${mod.id}`}
                          end
                          className={navLinkClass}
                          onClick={onClose}
                        >
                          概览
                        </NavLink>
                        {mod.subModules.length > 0 ? (
                          mod.subModules.map(sub => (
                            <div key={sub.id}>
                              <div className="flex items-center gap-2 px-3 pt-2.5 pb-1 mt-1 select-none">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-surface-400 dark:text-surface-500">{sub.name}</span>
                                <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700/60" />
                              </div>
                              {getModuleChapters(mod.id, sub.id).map(ch => {
                                const total = ch.sections?.length || (ch.htmlContent ? 1 : 0)
                                const prog = getChapterProgress(mod.id, ch.id, total)
                                return (
                                  <NavLink
                                    key={ch.id}
                                    to={`/m/${mod.id}/chapter/${ch.id}`}
                                    className={navLinkClass}
                                    onClick={onClose}
                                  >
                                    <span className="flex-1 truncate text-xs">{ch.title}</span>
                                    {prog >= 100 && <span className="text-green-500 text-xs">✓</span>}
                                    {prog > 0 && prog < 100 && <span className="text-xs text-surface-400">{prog}%</span>}
                                  </NavLink>
                                )
                              })}
                            </div>
                          ))
                        ) : (
                          chapters.slice(0, 20).map(ch => {
                            const total = ch.sections?.length || (ch.htmlContent ? 1 : 0)
                            const prog = getChapterProgress(mod.id, ch.id, total)
                            return (
                              <NavLink
                                key={ch.id}
                                to={`/m/${mod.id}/chapter/${ch.id}`}
                                className={navLinkClass}
                                onClick={onClose}
                              >
                                <span className="flex-1 truncate text-xs">{ch.title}</span>
                                {prog >= 100 && <span className="text-green-500 text-xs">✓</span>}
                                {prog > 0 && prog < 100 && <span className="text-xs text-surface-400">{prog}%</span>}
                              </NavLink>
                            )
                          })
                        )}
                        <NavLink
                          to={`/m/${mod.id}/quiz`}
                          className={navLinkClass}
                          onClick={onClose}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                          题库练习
                        </NavLink>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="pt-2 border-t border-surface-200 dark:border-surface-700 mt-2">
              <NavLink to="/library" className={navLinkClass} onClick={onClose}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                PDF 文档库
              </NavLink>
              <NavLink to="/progress" className={navLinkClass} onClick={onClose}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
                学习进度
              </NavLink>
              <NavLink to="/help" className={navLinkClass} onClick={onClose}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                帮助
              </NavLink>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}
