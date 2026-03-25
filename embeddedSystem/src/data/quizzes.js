export const quizzes = [
  {
    id: 1,
    chapterId: 1,
    type: 'single',
    difficulty: 'basic',
    question: '以下哪项最准确地描述了嵌入式系统(Embedded System)的定义？',
    options: ['任何使用微处理器的计算机系统', '为特定功能设计的、嵌入在更大系统中的计算机系统', '运行Linux操作系统的小型计算机', '仅用于工业控制的专用计算机'],
    answer: 1,
    explanation: '嵌入式系统是为特定功能设计的计算机系统，它被嵌入到更大的设备或系统中。与通用计算机不同，嵌入式系统通常只执行预定义的专用任务，并且对资源、功耗和成本有严格限制。'
  },
  {
    id: 2,
    chapterId: 1,
    type: 'single',
    difficulty: 'basic',
    question: '交叉编译器(Cross-compiler)的主要用途是什么？',
    options: ['在目标设备上直接编译代码', '在主机上编译可在不同架构目标设备上运行的代码', '同时编译多种编程语言', '将高级语言转换为其他高级语言'],
    answer: 1,
    explanation: '交叉编译器运行在主机(Host)上，但生成的可执行代码是为目标(Target)平台设计的。这是嵌入式开发的核心工具，因为目标设备通常资源有限，无法运行编译器本身。'
  },
  {
    id: 3,
    chapterId: 1,
    type: 'single',
    difficulty: 'basic',
    question: 'JTAG接口在嵌入式开发中的主要用途是什么？',
    options: ['连接网络', '芯片调试和编程', '音频输入输出', '显示图形界面'],
    answer: 1,
    explanation: 'JTAG(Joint Test Action Group)是一种用于芯片调试、测试和编程的标准接口。它允许开发者直接访问处理器内部，进行单步调试、断点设置和闪存编程等操作。'
  }
];
