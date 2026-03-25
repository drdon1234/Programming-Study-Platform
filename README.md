# Programming Study Platform

一站式编程学习自测平台，覆盖 C、C++、Linux 系统编程和嵌入式系统四大模块。按教材章节组织讲义与配套题库，支持自测、考试模式和学习进度跟踪。

## 功能概览

- **分模块学习** — C / C++ / Linux / 嵌入式，按章节浏览讲义与知识点
- **配套题库** — 650+ 道题目，涵盖选择题、判断题、代码阅读题，按 basic / intermediate / advanced 三级难度标注
- **考试模式** — 限时答题、即时评分与解析
- **PDF 资料库** — 上传和在线阅读参考教材

## 题库规模

| 模块 | 章节数 | 题量 | 亮点 |
|------|--------|------|------|
| C | 18 | ~173 | 安全编码、CMake、C11/C17 新特性 |
| C++ | 18 | ~188 | C++17/20/23、concepts、ranges、coroutines |
| Linux | 12 | ~174 | 系统编程、Docker/容器、systemd、Git/CI-CD |
| 嵌入式 | 14 | ~118 | RTOS、IoT协议、TinyML、功耗管理、PID控制 |

## 技术栈

- **前端**: React 19 + React Router 7 + Vite 6 + Tailwind CSS
- **后端**: Express 4 (PDF 上传 / 静态资源服务)
- **代码高亮**: highlight.js
- **PDF 阅读**: react-pdf

## 快速开始

```bash
# 安装依赖
cd app
npm install

# 开发模式（同时启动前端 + 后端）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务
npm start
```

或直接双击根目录的 `启动学习平台.bat`。

开发服务器默认运行在 `http://localhost:5173`，后端 API 在 `http://localhost:3001`。

## 项目结构

```
programmingStudyFiles/
├── app/                          # 主平台
│   ├── src/
│   │   ├── modules/
│   │   │   ├── c-cpp/            # C/C++ 讲义与题库
│   │   │   ├── linux/            # Linux 讲义与题库
│   │   │   └── embedded/         # 嵌入式讲义与题库
│   │   ├── components/           # React 组件
│   │   ├── pages/                # 页面路由
│   │   └── hooks/                # 自定义 Hooks
│   ├── server/                   # Express 后端
│   ├── pdfs/                     # PDF 资料存储
│   └── package.json
├── .gitignore
└── README.md
```

## 题目格式

题库以 JS 模块形式内嵌于源码中，每道题包含：

```js
{
  type: 'choice',           // choice | truefalse | output | code | single
  difficulty: 'intermediate', // basic | intermediate | advanced
  question: '题目内容',
  options: ['A', 'B', 'C', 'D'],
  answer: 1,                // 0-based 索引
  explanation: '详细解析'
}
```

## License

本项目为个人学习用途。题库内容参考公开教材，仅供学习交流。
