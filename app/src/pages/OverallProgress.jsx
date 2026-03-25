import { getModules } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import { MODULE_COLORS } from '../modules/types'
import ProgressRing from '../components/ProgressRing'
import ProgressBar from '../components/ProgressBar'

export default function OverallProgress() {
  const modules = getModules()
  const { getModuleOverallProgress, getChapterProgress, getBestQuizScore, resetModule, resetAll } = useProgress()

  const totalChapters = modules.reduce((sum, m) => sum + m.chapters.length, 0)
  const completedChapters = modules.reduce((sum, m) =>
    sum + m.chapters.filter(ch => {
      const t = ch.sections?.length || (ch.htmlContent ? 1 : 0)
      return getChapterProgress(m.id, ch.id, t) >= 100
    }).length, 0)
  const overallPct = totalChapters ? Math.round((completedChapters / totalChapters) * 100) : 0

  return (
    <div className="animate-fade-in space-y-8">
      <h1 className="text-2xl font-bold">学习进度总览</h1>

      <div className="card p-6 flex flex-col sm:flex-row items-center gap-6">
        <ProgressRing value={overallPct} size={100} strokeWidth={7} />
        <div>
          <h2 className="text-xl font-semibold">总体完成度</h2>
          <p className="text-surface-500 dark:text-surface-400">
            {completedChapters} / {totalChapters} 章节完成
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {modules.map(mod => {
          const colors = MODULE_COLORS[mod.color] || MODULE_COLORS['mod-ccpp']
          const progress = getModuleOverallProgress(mod.id, mod.chapters)
          const modCompleted = mod.chapters.filter(ch => {
            const t = ch.sections?.length || (ch.htmlContent ? 1 : 0)
            return getChapterProgress(mod.id, ch.id, t) >= 100
          }).length

          return (
            <div key={mod.id} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{mod.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{mod.name}</h3>
                  <p className="text-sm text-surface-400">{modCompleted} / {mod.chapters.length} 章节完成</p>
                </div>
                <ProgressRing value={progress} size={56} strokeWidth={4} colorClass={colors.text} />
              </div>

              <div className="space-y-2">
                {mod.chapters.map(ch => {
                  const t = ch.sections?.length || (ch.htmlContent ? 1 : 0)
                  const p = getChapterProgress(mod.id, ch.id, t)
                  const best = getBestQuizScore(mod.id, ch.id)
                  return (
                    <div key={ch.id} className="flex items-center gap-3 text-sm">
                      <span className="w-48 truncate text-surface-600 dark:text-surface-400">{ch.title}</span>
                      <div className="flex-1">
                        <ProgressBar value={p} colorClass={p >= 100 ? 'bg-green-500' : colors.accent} size="sm" />
                      </div>
                      <span className="w-10 text-right text-xs text-surface-400">{p}%</span>
                      {best && (
                        <span className="text-xs text-amber-500 w-16 text-right">
                          {Math.round((best.score / best.total) * 100)}分
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-surface-100 dark:border-surface-800">
                <button onClick={() => { if (confirm(`确认重置「${mod.name}」的所有进度？`)) resetModule(mod.id) }}
                        className="text-xs text-red-500 hover:text-red-600">
                  重置该模块进度
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center pt-4">
        <button onClick={() => { if (confirm('确认重置所有模块的学习进度？此操作不可恢复。')) resetAll() }}
                className="btn btn-danger text-sm">
          重置所有进度
        </button>
      </div>
    </div>
  )
}
