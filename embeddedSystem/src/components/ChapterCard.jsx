import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const chapterIcons = [
  '🔌', '🏗️', '🔧', '⏱️', '⚡', '🔄', '📡', '🧩', '🐛', '🌐', '⚙️', '🔢', '🔋', '🏎️'
]

export default function ChapterCard({ chapter, progress, bestScore }) {
  return (
    <Link
      to={`/chapter/${chapter.id}`}
      className="card card-hover flex flex-col gap-3 group"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{chapterIcons[chapter.id - 1]}</span>
        <div className="min-w-0">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            第 {chapter.id} 章
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors truncate">
            {chapter.title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        {chapter.summary}
      </p>

      <div className="mt-auto pt-2 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">学习进度</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{progress}%</span>
        </div>
        <ProgressBar value={progress} size="sm" />
        {bestScore && (
          <p className="text-xs text-gray-500">
            最佳成绩: {bestScore.score}/{bestScore.total}
          </p>
        )}
      </div>
    </Link>
  )
}
