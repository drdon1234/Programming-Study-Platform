import { useEffect, useMemo, useState } from 'react'

const DIFFICULTY_CLASS = {
  basic:
    'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
  intermediate:
    'text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30',
  advanced: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30',
}

const DIFFICULTY_LABEL = {
  basic: '基础',
  intermediate: '进阶',
  advanced: '高级',
}

const TYPE_LABEL = {
  single: '单选题',
  multiple: '多选题',
  trueFalse: '判断题',
  code: '代码分析',
}

const OPTION_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function extractCodeFromQuestion(raw) {
  if (raw?.code) return raw.code
  if (typeof raw?.question !== 'string') return null
  const m = raw.question.match(/```(?:\w+)?\n?([\s\S]*?)```/)
  return m ? m[1].trim() : null
}

/** Supports both `{ id, text }[]` + letter answers and `string[]` + numeric index answers (quiz bank format). */
export function normalizeQuizQuestion(raw) {
  if (!raw?.options?.length) return raw
  const opt0 = raw.options[0]
  const hasObjectOptions =
    opt0 &&
    typeof opt0 === 'object' &&
    opt0 !== null &&
    'id' in opt0 &&
    'text' in opt0
  if (hasObjectOptions) {
    const code = raw.code ?? extractCodeFromQuestion(raw)
    return { ...raw, code }
  }
  const options = raw.options.map((text, i) => ({
    id: OPTION_LETTERS[i] ?? String(i),
    text: typeof text === 'string' ? text : String(text),
  }))
  let answer = raw.answer
  if (typeof answer === 'number') {
    answer = options[answer]?.id
  } else if (Array.isArray(answer)) {
    answer = answer.map((idx) => options[idx]?.id).filter(Boolean)
  }
  const code = raw.code ?? extractCodeFromQuestion(raw)
  return { ...raw, options, answer, code }
}

function normalizeCorrect(answer) {
  return Array.isArray(answer) ? [...answer].sort() : [answer]
}

function normalizeUser(userAnswer) {
  if (userAnswer === undefined || userAnswer === null) return []
  return Array.isArray(userAnswer) ? [...userAnswer].sort() : [userAnswer]
}

function isAnswerCorrect(question, userAnswer) {
  const c = normalizeCorrect(question.answer)
  const u = normalizeUser(userAnswer)
  if (c.length !== u.length) return false
  return c.every((v, i) => v === u[i])
}

/** Compare user selection to correct answer; accepts raw or normalized question. */
export function quizAnswersMatch(question, userAnswer) {
  if (userAnswer === undefined || userAnswer === null) return false
  const q = normalizeQuizQuestion(question)
  return isAnswerCorrect(q, userAnswer)
}

export default function QuizCard({
  question: rawQuestion,
  onAnswer,
  showResult,
  userAnswer,
}) {
  const question = useMemo(
    () => normalizeQuizQuestion(rawQuestion),
    [rawQuestion]
  )

  const [localMulti, setLocalMulti] = useState([])

  useEffect(() => {
    setLocalMulti([])
  }, [question.id])

  const typeLabel = TYPE_LABEL[question.type] ?? question.type
  const diffClass = DIFFICULTY_CLASS[question.difficulty] ?? DIFFICULTY_CLASS.basic
  const diffLabel = DIFFICULTY_LABEL[question.difficulty] ?? question.difficulty

  const questionText =
    question.code && typeof question.question === 'string'
      ? (question.question.split('```')[0]?.trim() || question.question)
      : question.question

  const isMulti = question.type === 'multiple'

  const correctSet = new Set(
    Array.isArray(question.answer) ? question.answer : [question.answer]
  )

  const userPickedSet = new Set(normalizeUser(userAnswer))

  function optionClasses(optionId) {
    const base =
      'w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors dark:border-zinc-600 dark:text-zinc-100'

    if (!showResult) {
      const selected = isMulti
        ? localMulti.includes(optionId)
        : userAnswer === optionId
      return `${base} border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 ${
        selected
          ? 'border-emerald-500 ring-2 ring-emerald-500/30 dark:border-emerald-400'
          : ''
      }`
    }

    const isCorrectOpt = correctSet.has(optionId)
    const userPicked = userPickedSet.has(optionId)

    if (isCorrectOpt) {
      return `${base} border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-100`
    }
    if (userPicked && !isCorrectOpt) {
      return `${base} border-red-500 bg-red-50 text-red-900 dark:border-red-500 dark:bg-red-950/40 dark:text-red-100`
    }
    return `${base} border-zinc-200 bg-zinc-50/80 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400`
  }

  function handleSingleSelect(optionId) {
    if (showResult) return
    onAnswer(question.id, optionId)
  }

  function toggleMulti(optionId) {
    if (showResult) return
    setLocalMulti((prev) =>
      prev.includes(optionId)
        ? prev.filter((x) => x !== optionId)
        : [...prev, optionId]
    )
  }

  function submitMulti() {
    if (showResult) return
    const sorted = [...localMulti].sort()
    onAnswer(question.id, sorted)
  }

  const answeredCorrect =
    showResult && isAnswerCorrect(question, userAnswer)

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${diffClass}`}
        >
          {diffLabel}
        </span>
        <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {typeLabel}
        </span>
      </div>

      <p className="mb-4 whitespace-pre-wrap text-base leading-relaxed text-zinc-900 dark:text-zinc-100">
        {questionText}
      </p>

      {question.code ? (
        <pre className="mb-6 overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-sm text-zinc-100 dark:border-zinc-600">
          <code className="font-mono text-[13px] leading-relaxed">
            {question.code}
          </code>
        </pre>
      ) : null}

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            disabled={showResult}
            onClick={() =>
              isMulti ? toggleMulti(opt.id) : handleSingleSelect(opt.id)
            }
            className={optionClasses(opt.id)}
          >
            <span className="font-medium text-zinc-500 dark:text-zinc-400">
              {opt.id}.
            </span>{' '}
            {opt.text}
          </button>
        ))}
      </div>

      {isMulti && !showResult ? (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={submitMulti}
            disabled={localMulti.length === 0}
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            确认
          </button>
        </div>
      ) : null}

      {showResult ? (
        <div className="mt-6 space-y-3">
          <p
            className={`text-sm font-medium ${
              answeredCorrect
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-red-600 dark:text-red-400'
            }`}
          >
            {answeredCorrect ? '回答正确' : '回答错误'}
          </p>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-200">
            <p className="mb-1 font-medium text-zinc-600 dark:text-zinc-400">
              解析
            </p>
            <p className="whitespace-pre-wrap">{question.explanation}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
