import { cChapters } from './c-chapters'
import { cppChapters } from './cpp-chapters'

function adaptChapters(raw, subModuleId) {
  return raw.map(ch => ({
    id: `${subModuleId}-ch${ch.id}`,
    moduleId: 'c-cpp',
    subModuleId,
    title: ch.title,
    description: ch.description,
    htmlContent: ch.content,
    sections: [],
    quizzes: (ch.questions || []).map((q, i) => ({
      id: `${subModuleId}-ch${ch.id}-q${i + 1}`,
      chapterId: `${subModuleId}-ch${ch.id}`,
      moduleId: 'c-cpp',
      subModuleId,
      type: q.type === 'choice' ? 'single' : q.type === 'truefalse' ? 'truefalse' : q.type,
      difficulty: 'basic',
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
    })),
  }))
}

const cAdapted = adaptChapters(cChapters, 'c')
const cppAdapted = adaptChapters(cppChapters, 'cpp')

const allChapters = [...cAdapted, ...cppAdapted]
const allQuizzes = allChapters.flatMap(ch => ch.quizzes)

/** @type {import('../types').ModuleConfig} */
const ccppModule = {
  id: 'c-cpp',
  name: 'C/C++ 编程',
  icon: '💻',
  description: '基于《C Primer Plus》与《C++ Primer Plus》第6版，从零开始系统学习 C 与 C++ 编程',
  color: 'mod-ccpp',
  subModules: [
    { id: 'c', name: 'C 语言', icon: 'C' },
    { id: 'cpp', name: 'C++', icon: 'C++' },
  ],
  chapters: allChapters,
  quizzes: allQuizzes,
  recommendedPdfs: [
    { filename: 'C++ Primer Plus（第6版）.pdf', title: 'C++ Primer Plus 第6版', description: '经典 C++ 入门教材' },
  ],
}

export default ccppModule
