import { useParams, Link, Navigate } from 'react-router-dom'
import { getModule, getModuleQuizzes } from '../modules/registry'
import { useProgress } from '../hooks/useProgress'
import { MODULE_COLORS } from '../modules/types'

export default function QuizCenter() {
  const { moduleId } = useParams()
  const mod = getModule(moduleId)
  const { getBestQuizScore } = useProgress()

  if (!mod) return <Navigate to="/" replace />

  const colors = MODULE_COLORS[mod.color] || MODULE_COLORS['mod-ccpp']

  const chapterGroups = mod.chapters.map(ch => {
    const quizzes = getModuleQuizzes(mod.id, ch.id)
    const bestScore = getBestQuizScore(mod.id, ch.id)
    return { chapter: ch, quizCount: quizzes.length, bestScore }
  }).filter(g => g.quizCount > 0)

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-3">
        <Link to={`/m/${moduleId}`} className="btn btn-ghost text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          返回
        </Link>
        <h1 className="text-2xl font-bold">{mod.name} — 题库练习</h1>
      </div>

      <div className="flex gap-3">
        <Link to={`/m/${moduleId}/exam`} className="btn btn-primary text-sm">
          模拟考试
        </Link>
      </div>

      <div className="grid gap-3">
        {chapterGroups.map(({ chapter, quizCount, bestScore }) => (
          <Link
            key={chapter.id}
            to={`/m/${moduleId}/quiz/${chapter.id}`}
            className="card p-4 flex items-center gap-4 group hover:scale-[1.005] transition-all"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg} ${colors.text}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                {chapter.title}
              </h4>
              <p className="text-xs text-surface-400 mt-0.5">{quizCount} 道题</p>
            </div>
            {bestScore && (
              <span className={`badge ${
                bestScore.score / bestScore.total >= 0.8
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : bestScore.score / bestScore.total >= 0.6
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                最佳 {Math.round((bestScore.score / bestScore.total) * 100)}%
              </span>
            )}
            <svg className="w-4 h-4 text-surface-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ))}

        {chapterGroups.length === 0 && (
          <div className="text-center py-12 text-surface-400">
            <p>该模块暂无题库</p>
          </div>
        )}
      </div>
    </div>
  )
}
