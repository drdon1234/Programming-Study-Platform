import CodeBlock from '../components/CodeBlock'

const moduleExample = `// modules/python/index.js
import { chapters } from './chapters'
import { quizzes } from './quizzes'

const pythonModule = {
  id: 'python',
  name: 'Python 编程',
  icon: '🐍',
  description: '从零学习 Python 编程',
  color: 'mod-ccpp', // 复用或新增颜色
  subModules: [],
  chapters,
  quizzes,
  recommendedPdfs: [],
}

export default pythonModule`

const registryExample = `// modules/registry.js
import ccppModule from './c-cpp'
import embeddedModule from './embedded'
import linuxModule from './linux'
import pythonModule from './python'  // 新增

const modules = [
  ccppModule,
  embeddedModule,
  linuxModule,
  pythonModule,  // 注册
]`

const chapterExample = `// modules/python/chapters.js
export const chapters = [
  {
    id: 'py-ch1',
    moduleId: 'python',
    title: 'Python 基础',
    description: '变量、数据类型和基本运算',
    sections: [
      {
        title: '什么是 Python',
        content: 'Python 是一种...',
        code: {
          language: 'python',
          title: 'Hello World',
          code: 'print("Hello, Python!")',
        },
        keyPoints: ['解释型语言', '动态类型', '简洁语法'],
      },
    ],
  },
]`

const quizExample = `// modules/python/quizzes.js
export const quizzes = [
  {
    id: 'py-ch1-q1',
    chapterId: 'py-ch1',
    moduleId: 'python',
    type: 'single',
    difficulty: 'basic',
    question: 'Python 是哪种类型的语言？',
    options: ['编译型', '解释型', '汇编型', '机器语言'],
    answer: 1,
    explanation: 'Python 是解释型语言...',
  },
]`

export default function HelpPage() {
  return (
    <div className="animate-fade-in space-y-8 max-w-3xl">
      <h1 className="text-2xl font-bold">帮助与扩展指南</h1>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">平台概述</h2>
        <p className="text-surface-600 dark:text-surface-400">
          本平台采用模块化架构，每个学习主题（如 C/C++、嵌入式、Linux）是一个独立的模块。
          添加新语言或新学科只需创建一个新模块并注册即可，无需修改核心代码。
        </p>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">如何添加新的学习模块</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">第 1 步：创建模块目录</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
              复制 <code>src/modules/_template/</code> 目录，重命名为你的模块名称。
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">第 2 步：编写章节数据</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
              创建 <code>chapters.js</code>，导出符合标准格式的章节数组。
            </p>
            <CodeBlock code={chapterExample} language="javascript" title="章节数据格式" />
          </div>

          <div>
            <h3 className="font-medium mb-2">第 3 步：编写题库数据</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
              创建 <code>quizzes.js</code>，导出题目数组。支持的题型：single（单选）、multiple（多选）、truefalse（判断）、code（代码分析）。
            </p>
            <CodeBlock code={quizExample} language="javascript" title="题库数据格式" />
          </div>

          <div>
            <h3 className="font-medium mb-2">第 4 步：创建模块入口</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
              编写 <code>index.js</code>，导出符合 <code>ModuleConfig</code> 接口的模块配置。
            </p>
            <CodeBlock code={moduleExample} language="javascript" title="模块入口" />
          </div>

          <div>
            <h3 className="font-medium mb-2">第 5 步：注册模块</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
              在 <code>src/modules/registry.js</code> 中导入并添加到 modules 数组。
            </p>
            <CodeBlock code={registryExample} language="javascript" title="注册模块" />
          </div>

          <div>
            <h3 className="font-medium mb-2">第 6 步（可选）：添加主题色</h3>
            <p className="text-sm text-surface-600 dark:text-surface-400">
              在 <code>tailwind.config.js</code> 的 <code>theme.extend.colors</code> 中添加 <code>mod-python</code> 等自定义颜色，
              并在 <code>src/modules/types.js</code> 的 <code>MODULE_COLORS</code> 中添加对应样式映射。
            </p>
          </div>
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">数据格式参考</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700">
                <th className="text-left py-2 pr-4 font-medium">类型</th>
                <th className="text-left py-2 pr-4 font-medium">接口</th>
                <th className="text-left py-2 font-medium">说明</th>
              </tr>
            </thead>
            <tbody className="text-surface-600 dark:text-surface-400">
              <tr className="border-b border-surface-100 dark:border-surface-800">
                <td className="py-2 pr-4"><code>ModuleConfig</code></td>
                <td className="py-2 pr-4">modules/types.js</td>
                <td className="py-2">模块顶层配置</td>
              </tr>
              <tr className="border-b border-surface-100 dark:border-surface-800">
                <td className="py-2 pr-4"><code>Chapter</code></td>
                <td className="py-2 pr-4">modules/types.js</td>
                <td className="py-2">章节数据，支持 sections 或 htmlContent</td>
              </tr>
              <tr className="border-b border-surface-100 dark:border-surface-800">
                <td className="py-2 pr-4"><code>Quiz</code></td>
                <td className="py-2 pr-4">modules/types.js</td>
                <td className="py-2">题目数据，type 支持 single/multiple/truefalse/code</td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><code>PdfRef</code></td>
                <td className="py-2 pr-4">modules/types.js</td>
                <td className="py-2">推荐 PDF 引用</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">PDF 文档管理</h2>
        <p className="text-surface-600 dark:text-surface-400">
          通过 PDF 文档库页面可以上传、查看和删除 PDF 文件。文件存储在 <code>app/pdfs/</code> 目录下。
          需要启动后端服务（<code>npm run dev</code>）才能使用 PDF 管理功能。
        </p>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">技术栈</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            ['React 19', '前端框架'],
            ['React Router 7', '客户端路由'],
            ['Vite 6', '构建工具'],
            ['Tailwind CSS 3', 'CSS 框架'],
            ['highlight.js', '代码高亮'],
            ['react-pdf', 'PDF 阅读'],
            ['Express.js', '后端 API'],
            ['localStorage', '进度存储'],
          ].map(([name, desc]) => (
            <div key={name} className="p-3 rounded-lg bg-surface-50 dark:bg-surface-800">
              <p className="font-medium">{name}</p>
              <p className="text-xs text-surface-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
