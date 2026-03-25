export default function ProgressRing({ value = 0, size = 80, strokeWidth = 6, colorClass = 'text-primary-500' }) {
  const pct = Math.min(100, Math.max(0, value))
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (pct / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          strokeWidth={strokeWidth}
          className="stroke-surface-200 dark:stroke-surface-700 fill-none"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={`fill-none stroke-current ${colorClass} transition-all duration-700 ease-out`}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <span className="absolute text-sm font-semibold">{pct}%</span>
    </div>
  )
}
