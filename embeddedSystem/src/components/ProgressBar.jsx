export default function ProgressBar({ value, className = '', size = 'md' }) {
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3.5' }
  const h = heights[size] || heights.md

  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${h} ${className}`}>
      <div
        className={`${h} rounded-full transition-all duration-500 ease-out ${
          value >= 100
            ? 'bg-green-500'
            : value > 0
              ? 'bg-accent-500'
              : 'bg-transparent'
        }`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
