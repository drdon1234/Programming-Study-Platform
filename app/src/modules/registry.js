import ccppModule from './c-cpp'
import embeddedModule from './embedded'
import linuxModule from './linux'

const modules = [ccppModule, embeddedModule, linuxModule]

const moduleMap = Object.fromEntries(modules.map(m => [m.id, m]))

export function getModules() {
  return modules
}

export function getModule(id) {
  return moduleMap[id] || null
}

export function getModuleChapters(moduleId, subModuleId) {
  const mod = moduleMap[moduleId]
  if (!mod) return []
  if (subModuleId) {
    return mod.chapters.filter(ch => ch.subModuleId === subModuleId)
  }
  return mod.chapters
}

export function getChapter(moduleId, chapterId) {
  const mod = moduleMap[moduleId]
  if (!mod) return null
  return mod.chapters.find(ch => ch.id === chapterId) || null
}

export function getModuleQuizzes(moduleId, chapterId) {
  const mod = moduleMap[moduleId]
  if (!mod) return []
  if (chapterId) {
    return mod.quizzes.filter(q => q.chapterId === chapterId)
  }
  return mod.quizzes
}

export function getChapterQuizzes(moduleId, chapterId) {
  return getModuleQuizzes(moduleId, chapterId)
}

export { modules }
