import { useState } from 'react'
import './QuizQuestion.css'

export default function QuizQuestion({ question, index, onAnswer, showResult }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (optIdx) => {
    if (showResult && selected !== null) return
    setSelected(optIdx)
    onAnswer(optIdx)
  }

  const isCorrect = selected === question.answer
  const answered = selected !== null

  return (
    <div className="quiz-q">
      <div className="quiz-q-header">
        <span className="quiz-q-num">第 {index + 1} 题</span>
        <span className="quiz-q-type">
          {question.type === 'choice' ? '选择题' :
           question.type === 'truefalse' ? '判断题' : '代码分析'}
        </span>
      </div>
      <div className="quiz-q-text">{question.question}</div>

      {question.code && (
        <pre className="quiz-q-code"><code>{question.code}</code></pre>
      )}

      <div className="quiz-q-options">
        {question.options.map((opt, i) => {
          let cls = 'quiz-q-opt'
          if (answered && showResult) {
            if (i === question.answer) cls += ' quiz-q-opt--correct'
            else if (i === selected && !isCorrect) cls += ' quiz-q-opt--wrong'
          } else if (i === selected) {
            cls += ' quiz-q-opt--selected'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={answered && showResult}
            >
              <span className="quiz-q-opt-letter">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="quiz-q-opt-text">{opt}</span>
            </button>
          )
        })}
      </div>

      {answered && showResult && (
        <div className={`quiz-q-explain ${isCorrect ? 'quiz-q-explain--correct' : 'quiz-q-explain--wrong'}`}>
          <div className="quiz-q-explain-title">
            {isCorrect ? '✓ 回答正确' : '✗ 回答错误'}
          </div>
          <div className="quiz-q-explain-text">{question.explanation}</div>
        </div>
      )}
    </div>
  )
}
