import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getModules } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import { MODULE_COLORS } from '../modules/types'
import ProgressRing from '../components/ProgressRing'

export default function Dashboard() {
  const modules = getModules()
  const { getModuleOverallProgress, getChapterProgress, state, resetAll } = useProgress()
  const [showResetModal, setShowResetModal] = useState(false)

  const totalChapters = modules.reduce((sum, m) => sum + m.chapters.length, 0)
  const completedChapters = modules.reduce((sum, m) =>
    sum + m.chapters.filter(ch => {
      const t = ch.sections?.length || (ch.htmlContent ? 1 : 0)
      return getChapterProgress(m.id, ch.id, t) >= 100
    }).length, 0)
  const hasAnyProgress = completedChapters > 0 || Object.keys(state.modules).length > 0

  const lastVisited = state.lastVisited

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          编程学习<span className="text-primary-500">平台</span>
        </h1>
        <p className="text-surface-500 dark:text-surface-400 text-lg max-w-xl mx-auto">
          系统学习 C/C++、嵌入式系统和 Linux 程序设计，统一管理学习进度
        </p>
      </div>

      {lastVisited && (
        <div className="card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📖</span>
            <div>
              <p className="text-sm text-surface-500 dark:text-surface-400">继续学习</p>
              <p className="font-medium">{lastVisited.moduleId}</p>
            </div>
          </div>
          <Link
            to={lastVisited.chapterId
              ? `/m/${lastVisited.moduleId}/chapter/${lastVisited.chapterId}`
              : `/m/${lastVisited.moduleId}`}
            className="btn btn-primary text-sm"
          >
            继续
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(mod => {
          const colors = MODULE_COLORS[mod.color] || MODULE_COLORS['mod-ccpp']
          const progress = getModuleOverallProgress(mod.id, mod.chapters)
          const totalChapters = mod.chapters.length
          const totalQuizzes = mod.quizzes.length

          return (
            <Link
              key={mod.id}
              to={`/m/${mod.id}`}
              className="card p-6 group hover:scale-[1.02] transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colors.bg}`}>
                  {mod.icon}
                </div>
                <ProgressRing
                  value={progress}
                  size={52}
                  strokeWidth={4}
                  colorClass={colors.text}
                />
              </div>

              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {mod.name}
              </h3>
              <p className="text-sm text-surface-500 dark:text-surface-400 mb-4 line-clamp-2">
                {mod.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-surface-400 dark:text-surface-500">
                <span>{totalChapters} 章节</span>
                <span>{totalQuizzes} 题目</span>
                {mod.subModules.length > 0 && (
                  <span>{mod.subModules.map(s => s.name).join(' · ')}</span>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/library" className="card p-5 flex items-center gap-4 hover:scale-[1.01] transition-all">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-sm">PDF 文档库</p>
            <p className="text-xs text-surface-400">查看和管理参考文档</p>
          </div>
        </Link>
        <Link to="/progress" className="card p-5 flex items-center gap-4 hover:scale-[1.01] transition-all">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-sm">学习进度</p>
            <p className="text-xs text-surface-400">查看总体学习情况</p>
          </div>
        </Link>
        <Link to="/help" className="card p-5 flex items-center gap-4 hover:scale-[1.01] transition-all">
          <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-sm">帮助与扩展</p>
            <p className="text-xs text-surface-400">添加新模块指南</p>
          </div>
        </Link>
      </div>

      {hasAnyProgress && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowResetModal(true)}
            className="btn btn-ghost text-xs text-red-400 hover:text-red-500"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            一键重置所有学习进度
          </button>
        </div>
      )}

      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setShowResetModal(false)}>
          <div className="card p-6 max-w-sm mx-4 animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">确认重置</h3>
            </div>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
              即将清除所有模块的学习进度，包括：
            </p>
            <ul className="text-sm text-surface-500 dark:text-surface-400 mb-6 space-y-1 pl-4">
              <li>• 已完成 {completedChapters} / {totalChapters} 章节的阅读记录</li>
              <li>• 所有测验和考试成绩</li>
              <li>• 上次学习位置记录</li>
            </ul>
            <p className="text-xs text-red-500 mb-4">此操作不可恢复。</p>
            <div className="flex gap-3 justify-end">
              <button className="btn btn-ghost text-sm" onClick={() => setShowResetModal(false)}>取消</button>
              <button className="btn btn-danger text-sm" onClick={() => { resetAll(); setShowResetModal(false) }}>
                确认重置
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
