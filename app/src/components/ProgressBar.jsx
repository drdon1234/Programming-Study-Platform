export default function ProgressBar({ value = 0, max = 100, colorClass = 'bg-primary-500', size = 'md', showLabel = false }) {
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)))
  const h = size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2'

  return (
    <div className="w-full">
      <div className={`w-full ${h} bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden`}>
        <div
          className={`${h} ${colorClass} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-surface-500 dark:text-surface-400 mt-1 block">{pct}%</span>
      )}
    </div>
  )
}
