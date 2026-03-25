export const APP_NAME = '嵌入式系统学习平台'
export const STORAGE_KEY = 'embedded-learning-progress'
export const THEME_KEY = 'embedded-learning-theme'

export const DIFFICULTY = {
  BASIC: 'basic',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
}

export const DIFFICULTY_LABELS = {
  [DIFFICULTY.BASIC]: '基础',
  [DIFFICULTY.INTERMEDIATE]: '进阶',
  [DIFFICULTY.ADVANCED]: '高级',
}

export const DIFFICULTY_COLORS = {
  [DIFFICULTY.BASIC]: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
  [DIFFICULTY.INTERMEDIATE]: 'text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30',
  [DIFFICULTY.ADVANCED]: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30',
}

export const QUESTION_TYPE = {
  SINGLE: 'single',
  MULTIPLE: 'multiple',
  TRUE_FALSE: 'trueFalse',
  CODE: 'code',
}

export const QUESTION_TYPE_LABELS = {
  [QUESTION_TYPE.SINGLE]: '单选题',
  [QUESTION_TYPE.MULTIPLE]: '多选题',
  [QUESTION_TYPE.TRUE_FALSE]: '判断题',
  [QUESTION_TYPE.CODE]: '代码分析',
}

export const EXAM_DURATIONS = [
  { label: '30 分钟', value: 30 },
  { label: '60 分钟', value: 60 },
  { label: '90 分钟', value: 90 },
]
