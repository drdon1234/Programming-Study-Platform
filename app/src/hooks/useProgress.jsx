import { createContext, useContext, useReducer, useCallback, useMemo } from 'react'
import { STORAGE_KEYS } from '../utils/constants'

const ProgressContext = createContext(null)

const defaultProgress = {
  modules: {},
  lastVisited: null,
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { ...defaultProgress, ...parsed }
    }
  } catch { /* ignore */ }
  return defaultProgress
}

function saveProgress(state) {
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state))
}

function getModuleProgress(state, moduleId) {
  return state.modules[moduleId] || { chaptersRead: {}, quizScores: {} }
}

function progressReducer(state, action) {
  let next
  switch (action.type) {
    case 'MARK_SECTION_READ': {
      const { moduleId, chapterId, sectionIndex } = action.payload
      const mod = getModuleProgress(state, moduleId)
      const existing = mod.chaptersRead[chapterId] || []
      if (existing.includes(sectionIndex)) return state
      next = {
        ...state,
        modules: {
          ...state.modules,
          [moduleId]: {
            ...mod,
            chaptersRead: {
              ...mod.chaptersRead,
              [chapterId]: [...existing, sectionIndex].sort((a, b) => a - b),
            },
          },
        },
      }
      break
    }
    case 'MARK_CHAPTER_COMPLETE': {
      const { moduleId, chapterId, totalSections } = action.payload
      const mod = getModuleProgress(state, moduleId)
      const indices = Array.from({ length: totalSections }, (_, i) => i)
      next = {
        ...state,
        modules: {
          ...state.modules,
          [moduleId]: {
            ...mod,
            chaptersRead: {
              ...mod.chaptersRead,
              [chapterId]: indices,
            },
          },
        },
      }
      break
    }
    case 'SAVE_QUIZ_SCORE': {
      const { moduleId, chapterId, score, total } = action.payload
      const mod = getModuleProgress(state, moduleId)
      const scores = mod.quizScores[chapterId] || []
      next = {
        ...state,
        modules: {
          ...state.modules,
          [moduleId]: {
            ...mod,
            quizScores: {
              ...mod.quizScores,
              [chapterId]: [...scores, { score, total, date: Date.now() }],
            },
          },
        },
      }
      break
    }
    case 'SET_LAST_VISITED': {
      next = {
        ...state,
        lastVisited: { ...action.payload, timestamp: Date.now() },
      }
      break
    }
    case 'RESET_MODULE': {
      const { moduleId } = action.payload
      next = {
        ...state,
        modules: {
          ...state.modules,
          [moduleId]: { chaptersRead: {}, quizScores: {} },
        },
      }
      break
    }
    case 'RESET_ALL': {
      next = defaultProgress
      break
    }
    default:
      return state
  }
  saveProgress(next)
  return next
}

export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(progressReducer, null, loadProgress)

  const markSectionRead = useCallback((moduleId, chapterId, sectionIndex) => {
    dispatch({ type: 'MARK_SECTION_READ', payload: { moduleId, chapterId, sectionIndex } })
  }, [])

  const markChapterComplete = useCallback((moduleId, chapterId, totalSections) => {
    dispatch({ type: 'MARK_CHAPTER_COMPLETE', payload: { moduleId, chapterId, totalSections } })
  }, [])

  const saveQuizScore = useCallback((moduleId, chapterId, score, total) => {
    dispatch({ type: 'SAVE_QUIZ_SCORE', payload: { moduleId, chapterId, score, total } })
  }, [])

  const setLastVisited = useCallback((moduleId, chapterId) => {
    dispatch({ type: 'SET_LAST_VISITED', payload: { moduleId, chapterId } })
  }, [])

  const resetModule = useCallback((moduleId) => {
    dispatch({ type: 'RESET_MODULE', payload: { moduleId } })
  }, [])

  const resetAll = useCallback(() => {
    dispatch({ type: 'RESET_ALL' })
  }, [])

  const getChapterProgress = useCallback((moduleId, chapterId, totalSections) => {
    const mod = getModuleProgress(state, moduleId)
    const read = mod.chaptersRead[chapterId] || []
    if (totalSections <= 0) return read.length > 0 ? 100 : 0
    return Math.round((read.length / totalSections) * 100)
  }, [state])

  const getChapterCompleted = useCallback((moduleId, chapterId, totalSections) => {
    return getChapterProgress(moduleId, chapterId, totalSections) >= 100
  }, [getChapterProgress])

  const getModuleOverallProgress = useCallback((moduleId, chapters) => {
    if (!chapters.length) return 0
    const completed = chapters.filter(ch => {
      const total = ch.sections?.length || (ch.htmlContent ? 1 : 0)
      return getChapterCompleted(moduleId, ch.id, total)
    }).length
    return Math.round((completed / chapters.length) * 100)
  }, [getChapterCompleted])

  const getBestQuizScore = useCallback((moduleId, chapterId) => {
    const mod = getModuleProgress(state, moduleId)
    const scores = mod.quizScores[chapterId] || []
    if (!scores.length) return null
    return scores.reduce((best, s) => (s.score / s.total > best.score / best.total ? s : best))
  }, [state])

  const value = useMemo(() => ({
    state,
    markSectionRead,
    markChapterComplete,
    saveQuizScore,
    setLastVisited,
    resetModule,
    resetAll,
    getChapterProgress,
    getChapterCompleted,
    getModuleOverallProgress,
    getBestQuizScore,
  }), [state, markSectionRead, markChapterComplete, saveQuizScore, setLastVisited,
       resetModule, resetAll, getChapterProgress, getChapterCompleted,
       getModuleOverallProgress, getBestQuizScore])

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
