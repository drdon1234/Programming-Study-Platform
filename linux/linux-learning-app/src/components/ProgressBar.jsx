import './ProgressBar.css'

export default function ProgressBar({ value = 0, height = 8, color }) {
  const style = {
    '--progress': `${Math.min(100, Math.max(0, value))}%`,
    '--bar-height': `${height}px`,
  }
  if (color) style['--bar-color'] = color

  return (
    <div className="progress-bar" style={style}>
      <div className="progress-bar-fill" />
    </div>
  )
}
