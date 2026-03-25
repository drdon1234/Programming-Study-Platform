/**
 * 模块模板 — 复制此目录并修改以添加新的学习模块
 *
 * 步骤:
 *   1. 复制 _template/ 目录，重命名为你的模块名（如 python/）
 *   2. 修改此文件的 moduleConfig，填入实际数据
 *   3. 创建 chapters.js 和 quizzes.js 存放学习内容
 *   4. 在 registry.js 中导入并注册你的模块
 *   5. 在 tailwind.config.js 中添加模块主题色（可选）
 *
 * 数据格式请参考 modules/types.js 中的 JSDoc 定义
 */

// import { chapters } from './chapters'
// import { quizzes } from './quizzes'

/** @type {import('../types').ModuleConfig} */
const templateModule = {
  id: 'your-module-id',
  name: '模块名称',
  icon: '📚',
  description: '模块描述',
  color: 'mod-ccpp', // 复用已有色板或在 tailwind.config.js 中添加新色
  subModules: [],
  chapters: [],
  quizzes: [],
  recommendedPdfs: [],
}

export default templateModule
