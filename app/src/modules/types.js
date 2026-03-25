/**
 * 模块系统类型定义
 *
 * 每个学习模块必须导出一个符合 ModuleConfig 接口的对象。
 * 添加新模块只需：1.创建 modules/新模块/index.js  2.在 registry.js 中注册
 *
 * @typedef {Object} ModuleConfig
 * @property {string} id - 唯一标识符 (如 'c-cpp', 'linux', 'embedded')
 * @property {string} name - 显示名称
 * @property {string} icon - 图标 (emoji)
 * @property {string} description - 简短描述
 * @property {string} color - 主题色前缀 (如 'mod-ccpp')，对应 tailwind.config.js 中的颜色
 * @property {SubModule[]} subModules - 子模块列表（如 C/C++ 模块包含 C 和 C++ 两个子模块）
 * @property {Chapter[]} chapters - 所有章节数据
 * @property {Quiz[]} quizzes - 所有题目数据
 * @property {PdfRef[]} recommendedPdfs - 推荐 PDF 列表
 *
 * @typedef {Object} SubModule
 * @property {string} id - 子模块 ID
 * @property {string} name - 子模块名称
 * @property {string} [icon] - 子模块图标
 *
 * @typedef {Object} Chapter
 * @property {string} id - 章节 ID (如 'c-ch1', 'linux-basics')
 * @property {string} moduleId - 所属模块 ID
 * @property {string} [subModuleId] - 所属子模块 ID（可选）
 * @property {string} title - 章节标题
 * @property {string} description - 章节简述
 * @property {string} [difficulty] - 难度 ('入门' | '基础' | '进阶')
 * @property {string} [icon] - 图标
 * @property {ChapterSection[]} sections - 章节内容分段
 * @property {string} [htmlContent] - 原始 HTML 内容（用于 C/C++ 等 HTML 格式的章节）
 *
 * @typedef {Object} ChapterSection
 * @property {string} title - 小节标题
 * @property {string} content - 小节内容 (文本或 Markdown)
 * @property {CodeExample|null} [code] - 代码示例
 * @property {string[]} [keyPoints] - 要点列表
 *
 * @typedef {Object} CodeExample
 * @property {string} language - 代码语言 (c, cpp, bash, python...)
 * @property {string} title - 示例标题
 * @property {string} code - 代码内容
 *
 * @typedef {Object} Quiz
 * @property {string} id - 题目 ID
 * @property {string} chapterId - 关联章节 ID
 * @property {string} moduleId - 所属模块 ID
 * @property {string} [subModuleId] - 所属子模块 ID
 * @property {'single'|'multiple'|'truefalse'|'code'} type - 题目类型
 * @property {'basic'|'intermediate'|'advanced'} difficulty - 难度
 * @property {string} question - 题目内容
 * @property {string[]} options - 选项列表
 * @property {number|number[]} answer - 正确答案索引
 * @property {string} explanation - 解析
 *
 * @typedef {Object} PdfRef
 * @property {string} filename - PDF 文件名
 * @property {string} title - 显示标题
 * @property {string} [description] - 描述
 */

export const QUESTION_TYPES = {
  single: '单选题',
  multiple: '多选题',
  truefalse: '判断题',
  code: '代码分析',
  choice: '选择题',
}

export const DIFFICULTY_LEVELS = {
  basic: { label: '基础', color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30' },
  intermediate: { label: '中级', color: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30' },
  advanced: { label: '高级', color: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30' },
}

export const MODULE_COLORS = {
  'mod-ccpp': {
    bg: 'bg-mod-ccpp-50 dark:bg-mod-ccpp-700/20',
    text: 'text-mod-ccpp-600 dark:text-mod-ccpp-400',
    border: 'border-mod-ccpp-200 dark:border-mod-ccpp-700',
    accent: 'bg-mod-ccpp-500',
    badge: 'bg-mod-ccpp-100 text-mod-ccpp-700 dark:bg-mod-ccpp-700/30 dark:text-mod-ccpp-400',
  },
  'mod-embedded': {
    bg: 'bg-mod-embedded-50 dark:bg-mod-embedded-700/20',
    text: 'text-mod-embedded-600 dark:text-mod-embedded-400',
    border: 'border-mod-embedded-200 dark:border-mod-embedded-700',
    accent: 'bg-mod-embedded-500',
    badge: 'bg-mod-embedded-100 text-mod-embedded-700 dark:bg-mod-embedded-700/30 dark:text-mod-embedded-400',
  },
  'mod-linux': {
    bg: 'bg-mod-linux-50 dark:bg-mod-linux-700/20',
    text: 'text-mod-linux-600 dark:text-mod-linux-400',
    border: 'border-mod-linux-200 dark:border-mod-linux-700',
    accent: 'bg-mod-linux-500',
    badge: 'bg-mod-linux-100 text-mod-linux-700 dark:bg-mod-linux-700/30 dark:text-mod-linux-400',
  },
}
