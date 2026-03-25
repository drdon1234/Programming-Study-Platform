import { useState, useCallback, useEffect, createContext, useContext } from 'react'
import { STORAGE_KEY } from '../utils/constants'

const defaultProgress = {
  chaptersRead: {},
  quizScores: {},
  bookmarks: [],
}

const ProgressContext = createContext(null)

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : { ...defaultProgress }
  } catch {
    return { ...defaultProgress }
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markChapterRead = useCallback((chapterId, sectionIndex) => {
    setProgress(prev => {
      const key = String(chapterId)
      const sections = prev.chaptersRead[key] || []
      if (sections.includes(sectionIndex)) return prev
      return {
        ...prev,
        chaptersRead: {
          ...prev.chaptersRead,
          [key]: [...sections, sectionIndex],
        },
      }
    })
  }, [])

  const markChapterComplete = useCallback((chapterId, totalSections) => {
    setProgress(prev => {
      const key = String(chapterId)
      const allSections = Array.from({ length: totalSections }, (_, i) => i)
      return {
        ...prev,
        chaptersRead: {
          ...prev.chaptersRead,
          [key]: allSections,
        },
      }
    })
  }, [])

  const saveQuizScore = useCallback((chapterId, score, total) => {
    setProgress(prev => {
      const key = String(chapterId)
      const existing = prev.quizScores[key] || []
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [key]: [...existing, { score, total, date: Date.now() }],
        },
      }
    })
  }, [])

  const saveExamScore = useCallback((score, total, duration) => {
    setProgress(prev => ({
      ...prev,
      examScores: [
        ...(prev.examScores || []),
        { score, total, duration, date: Date.now() },
      ],
    }))
  }, [])

  const getChapterProgress = useCallback((chapterId) => {
    const key = String(chapterId)
    const sections = progress.chaptersRead[key] || []
    if (sections.length === 0) return 0
    const totalEstimate = Math.max(sections.length, ...sections) + 1
    return Math.round((sections.length / totalEstimate) * 100)
  }, [progress.chaptersRead])

  const getChapterProgressExact = useCallback((chapterId, totalSections) => {
    const key = String(chapterId)
    const sections = progress.chaptersRead[key] || []
    if (totalSections === 0) return 0
    return Math.round((sections.length / totalSections) * 100)
  }, [progress.chaptersRead])

  const getBestQuizScore = useCallback((chapterId) => {
    const key = String(chapterId)
    const scores = progress.quizScores[key] || []
    if (scores.length === 0) return null
    return scores.reduce((best, s) => {
      const pct = s.score / s.total
      const bestPct = best.score / best.total
      return pct > bestPct ? s : best
    })
  }, [progress.quizScores])

  const getOverallProgress = useCallback(() => {
    const totalChapters = 14
    let completed = 0
    for (let i = 1; i <= totalChapters; i++) {
      if (getChapterProgress(i) >= 100) completed++
    }
    return Math.round((completed / totalChapters) * 100)
  }, [getChapterProgress])

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress })
  }, [])

  const value = {
    progress,
    markChapterRead,
    markChapterComplete,
    saveQuizScore,
    saveExamScore,
    getChapterProgress,
    getChapterProgressExact,
    getBestQuizScore,
    getOverallProgress,
    resetProgress,
  }

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
