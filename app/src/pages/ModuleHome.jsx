import { useParams, Link, Navigate } from 'react-router-dom'
import { getModule, getModuleChapters } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import { MODULE_COLORS } from '../modules/types'
import ProgressBar from '../components/ProgressBar'
import ProgressRing from '../components/ProgressRing'

export default function ModuleHome() {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)
  const { getChapterProgress, getModuleOverallProgress, getBestQuizScore } = useProgress()

  if (!mod) return <Navigate to="/" replace />

  const colors = MODULE_COLORS[mod.color] || MODULE_COLORS['mod-ccpp']
  const overallProgress = getModuleOverallProgress(mod.id, mod.chapters)
  const hasSubModules = mod.subModules.length > 0

  const renderChapterList = (chapters) => (
    <div className="grid gap-3">
      {chapters.map(ch => {
        const totalSections = ch.sections?.length || (ch.htmlContent ? 1 : 0)
        const progress = getChapterProgress(mod.id, ch.id, totalSections)
        const bestScore = getBestQuizScore(mod.id, ch.id)

        return (
          <Link
            key={ch.id}
            to={`/m/${mod.id}/chapter/${ch.id}`}
            className="card p-4 flex items-center gap-4 group hover:scale-[1.005] transition-all"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
              progress >= 100
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                : `${colors.bg} ${colors.text}`
            }`}>
              {progress >= 100 ? '✓' : ch.icon || ch.id.split('-').pop()?.replace('ch', '')}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                {ch.title}
              </h4>
              <div className="mt-1.5">
                <ProgressBar value={progress} colorClass={progress >= 100 ? 'bg-green-500' : colors.accent} size="sm" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs text-surface-400 shrink-0">
              <span>{progress}%</span>
              {bestScore && (
                <span className="text-amber-500">
                  最佳 {Math.round((bestScore.score / bestScore.total) * 100)}%
                </span>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${colors.bg}`}>
          {mod.icon}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{mod.name}</h1>
          <p className="text-surface-500 dark:text-surface-400 text-sm mt-1">{mod.description}</p>
        </div>
        <ProgressRing value={overallProgress} size={72} strokeWidth={5} colorClass={colors.text} />
      </div>

      <div className="flex gap-3 flex-wrap">
        <Link to={`/m/${mod.id}/quiz`} className="btn btn-primary text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          题库练习
        </Link>
        <Link to={`/m/${mod.id}/exam`} className="btn btn-ghost text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          模拟考试
        </Link>
      </div>

      {hasSubModules ? (
        mod.subModules.map(sub => {
          const subChapters = getModuleChapters(mod.id, sub.id)
          return (
            <div key={sub.id} className="space-y-3">
              <div className="flex items-center gap-3 pt-2">
                <div className={`w-1 h-6 rounded-full ${colors.accent}`} />
                <h2 className="text-base font-bold tracking-wide select-none">
                  {sub.name}
                </h2>
                <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700" />
                <span className="text-xs text-surface-400 select-none">{subChapters.length} 章节</span>
              </div>
              {renderChapterList(subChapters)}
            </div>
          )
        })
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3 pt-2">
            <div className={`w-1 h-6 rounded-full ${colors.accent}`} />
            <h2 className="text-base font-bold tracking-wide select-none">章节列表</h2>
            <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700" />
            <span className="text-xs text-surface-400 select-none">{mod.chapters.length} 章节</span>
          </div>
          {renderChapterList(mod.chapters)}
        </div>
      )}
    </div>
  )
}
