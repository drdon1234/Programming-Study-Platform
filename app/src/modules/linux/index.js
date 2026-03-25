import { chapters as rawChapters } from './chapters'
import { questions as rawQuestions } from './quizzes'

const chapters = rawChapters.map(ch => ({
  id: ch.id,
  moduleId: 'linux',
  title: ch.title,
  description: ch.description,
  difficulty: ch.difficulty,
  icon: ch.icon,
  sections: (ch.sections || []).map(s => ({
    title: s.title,
    content: s.content,
    code: s.code || null,
    keyPoints: null,
  })),
}))

const quizzes = Object.entries(rawQuestions).flatMap(([chapterId, qs]) =>
  qs.map((q, i) => ({
    id: `linux-${chapterId}-q${i + 1}`,
    chapterId,
    moduleId: 'linux',
    type: q.type === 'choice' ? 'single' : q.type === 'truefalse' ? 'truefalse' : q.type,
    difficulty: 'basic',
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
  }))
)

/** @type {import('../types').ModuleConfig} */
const linuxModule = {
  id: 'linux',
  name: 'Linux 程序设计',
  icon: '🐧',
  description: '基于《Linux程序设计》第4版与《Linux高级程序设计》，学习 Linux 系统编程',
  color: 'mod-linux',
  subModules: [],
  chapters,
  quizzes,
  recommendedPdfs: [],
}

export default linuxModule
