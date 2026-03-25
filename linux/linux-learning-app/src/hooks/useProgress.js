import { useState, useCallback } from 'react'

const STORAGE_KEY = 'linux-learn-progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { read: {}, quizScores: {} }
  } catch {
    return { read: {}, quizScores: {} }
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useProgress() {
  const [data, setData] = useState(loadProgress)

  const markRead = useCallback((moduleId) => {
    setData(prev => {
      const next = { ...prev, read: { ...prev.read, [moduleId]: true } }
      saveProgress(next)
      return next
    })
  }, [])

  const isRead = useCallback((moduleId) => {
    return !!data.read[moduleId]
  }, [data])

  const saveQuizScore = useCallback((moduleId, score, total) => {
    setData(prev => {
      const next = {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [moduleId]: { score, total, date: Date.now() }
        }
      }
      saveProgress(next)
      return next
    })
  }, [])

  const getQuizScore = useCallback((moduleId) => {
    return data.quizScores[moduleId] || null
  }, [data])

  const getModuleProgress = useCallback((moduleId) => {
    const read = data.read[moduleId] ? 50 : 0
    const quiz = data.quizScores[moduleId]
    const quizPart = quiz ? Math.round((quiz.score / quiz.total) * 50) : 0
    return read + quizPart
  }, [data])

  const getOverallProgress = useCallback((moduleIds) => {
    if (!moduleIds.length) return 0
    const total = moduleIds.reduce((sum, id) => sum + getModuleProgress(id), 0)
    return Math.round(total / moduleIds.length)
  }, [getModuleProgress])

  const resetProgress = useCallback(() => {
    const empty = { read: {}, quizScores: {} }
    saveProgress(empty)
    setData(empty)
  }, [])

  return {
    markRead,
    isRead,
    saveQuizScore,
    getQuizScore,
    getModuleProgress,
    getOverallProgress,
    resetProgress,
  }
}
