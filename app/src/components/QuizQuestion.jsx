import { useState } from 'react'

export default function QuizQuestion({ quiz, index, total, onAnswer, showResult = false, userAnswer = null }) {
  const [selected, setSelected] = useState(userAnswer)
  const [confirmed, setConfirmed] = useState(showResult)

  const isCorrect = confirmed && selected === quiz.answer
  const isWrong = confirmed && selected !== quiz.answer

  const handleConfirm = () => {
    if (selected === null) return
    setConfirmed(true)
    onAnswer?.(selected, selected === quiz.answer)
  }

  const optionLetter = (i) => String.fromCharCode(65 + i)

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="badge bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
          {index + 1} / {total}
        </span>
        <span className="badge bg-surface-100 text-surface-600 dark:bg-surface-800 dark:text-surface-400 capitalize">
          {quiz.type === 'single' || quiz.type === 'choice' ? '单选' : quiz.type === 'truefalse' ? '判断' : quiz.type === 'multiple' ? '多选' : quiz.type}
        </span>
      </div>

      <h3 className="text-lg font-medium mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: quiz.question }} />

      <div className="space-y-3 mb-6">
        {quiz.options.map((opt, i) => {
          let cls = 'card px-4 py-3 cursor-pointer flex items-start gap-3 transition-all duration-200'
          if (confirmed) {
            if (i === quiz.answer) {
              cls += ' !border-green-500 !bg-green-50 dark:!bg-green-900/20'
            } else if (i === selected && i !== quiz.answer) {
              cls += ' !border-red-500 !bg-red-50 dark:!bg-red-900/20'
            }
          } else if (i === selected) {
            cls += ' !border-primary-500 !bg-primary-50 dark:!bg-primary-900/20'
          } else {
            cls += ' hover:border-surface-300 dark:hover:border-surface-600'
          }

          return (
            <button
              key={i}
              className={cls}
              onClick={() => !confirmed && setSelected(i)}
              disabled={confirmed}
            >
              <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium border ${
                i === selected
                  ? confirmed
                    ? i === quiz.answer
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-red-500 text-white border-red-500'
                    : 'bg-primary-500 text-white border-primary-500'
                  : confirmed && i === quiz.answer
                    ? 'bg-green-500 text-white border-green-500'
                    : 'border-surface-300 dark:border-surface-600 text-surface-500'
              }`}>
                {optionLetter(i)}
              </span>
              <span className="text-left flex-1" dangerouslySetInnerHTML={{ __html: opt }} />
            </button>
          )
        })}
      </div>

      {!confirmed && (
        <button
          className="btn btn-primary w-full"
          onClick={handleConfirm}
          disabled={selected === null}
        >
          确认答案
        </button>
      )}

      {confirmed && (
        <div className={`p-4 rounded-lg border ${isCorrect
          ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
          : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800'
        } animate-slide-in`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '✓ 回答正确' : '✗ 回答错误'}
            </span>
          </div>
          <div className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed"
               dangerouslySetInnerHTML={{ __html: quiz.explanation }} />
        </div>
      )}
    </div>
  )
}
