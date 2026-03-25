import { chapters1to7 } from './chapters_1_7'
import { chapters8to14 } from './chapters_8_14'
import { quizzes as rawQuizzes } from './quizzes'

const rawChapters = [...chapters1to7, ...chapters8to14]

const chapters = rawChapters.map(ch => ({
  id: `emb-ch${ch.id}`,
  moduleId: 'embedded',
  title: ch.title,
  description: ch.summary || ch.englishTitle || '',
  sections: (ch.sections || []).map(s => ({
    title: s.title,
    content: s.content,
    code: s.code || null,
    keyPoints: s.keyPoints || null,
  })),
}))

const quizzes = rawQuizzes.map(q => ({
  id: `emb-q${q.id}`,
  chapterId: `emb-ch${q.chapterId}`,
  moduleId: 'embedded',
  type: q.type === 'single' ? 'single' : q.type === 'truefalse' ? 'truefalse' : q.type,
  difficulty: q.difficulty || 'basic',
  question: q.question,
  options: q.options,
  answer: q.answer,
  explanation: q.explanation,
}))

/** @type {import('../types').ModuleConfig} */
const embeddedModule = {
  id: 'embedded',
  name: '嵌入式系统',
  icon: '🔧',
  description: '基于《Making Embedded Systems》第2版，学习嵌入式系统设计与开发',
  color: 'mod-embedded',
  subModules: [],
  chapters,
  quizzes,
  recommendedPdfs: [],
}

export default embeddedModule
