export const quizzes = [
  // ============================================================
  // Chapter 1: 嵌入式系统导论
  // ============================================================
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
  },
  {
    id: 4,
    chapterId: 1,
    type: 'single',
    difficulty: 'intermediate',
    question: '嵌入式系统与桌面系统开发最核心的区别是什么？',
    options: ['嵌入式系统只能用C语言编写', '嵌入式系统需要在资源约束下工作且与物理世界直接交互', '嵌入式系统不需要操作系统', '嵌入式系统的程序只能运行一次'],
    answer: 1,
    explanation: '嵌入式系统的核心特征是资源受限（RAM、Flash、处理能力有限）且需要与物理世界直接交互（传感器、执行器等）。这要求开发者同时理解硬件和软件。'
  },
  {
    id: 5,
    chapterId: 1,
    type: 'truefalse',
    difficulty: 'basic',
    question: '大多数ARM Cortex-M处理器只提供2个硬件断点，因此调试时需要策略性地选择断点位置。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '硬件断点数量确实非常有限，大多数ARM Cortex-M处理器只提供2个（部分型号4-8个）。这与桌面调试器可以设置任意多断点截然不同，需要开发者更策略性地使用。'
  },
  {
    id: 6,
    chapterId: 1,
    type: 'single',
    difficulty: 'intermediate',
    question: '在嵌入式调试中，printf调试的主要风险是什么？',
    options: ['会永久损坏串口硬件', '会改变系统时序行为，可能导致Heisenbug', '只能输出英文字符', '需要连接显示器'],
    answer: 1,
    explanation: 'printf操作占用处理器时间和通信带宽，可能改变系统的时序行为。在调试与时间相关的问题时，这种"观察者效应"可能导致bug在调试时消失——即经典的Heisenbug。'
  },
  {
    id: 7,
    chapterId: 1,
    type: 'single',
    difficulty: 'basic',
    question: '嵌入式系统中，哪种资源通常最为稀缺？',
    options: ['Flash存储', 'RAM', '处理器周期', '以上都是，但RAM通常最稀缺'],
    answer: 3,
    explanation: '嵌入式系统的RAM、Flash和处理器周期都受限，但RAM通常最稀缺——许多微控制器只有几KB甚至几百字节的RAM，而Flash容量通常是RAM的数倍到数十倍。'
  },
  {
    id: 8,
    chapterId: 1,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '嵌入式系统中，"过早优化是万恶之源"意味着应该先编写正确清晰的代码，再通过Profiling找到瓶颈后有针对性地优化。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Donald Knuth的名言强调首先保证代码正确和可维护，然后通过性能分析工具找出真正的瓶颈再优化。盲目优化不仅浪费时间，还可能引入难以发现的bug。'
  },
  {
    id: 9,
    chapterId: 1,
    type: 'single',
    difficulty: 'intermediate',
    question: '关于原型(Prototype)和产品(Product)的关系，以下哪个说法最准确？',
    options: ['原型可以直接作为产品发售', '原型到产品之间存在巨大鸿沟，需要考虑EMC、温度、成本等因素', '产品开发不需要原型阶段', '原型只用于软件验证'],
    answer: 1,
    explanation: '从功能原型到量产产品之间存在巨大鸿沟。量产需要考虑PCB布局、EMC合规性、温度范围、机械结构、成本优化等一系列问题，许多项目失败正是因为低估了这个过渡的工作量。'
  },
  {
    id: 10,
    chapterId: 1,
    type: 'single',
    difficulty: 'basic',
    question: '典型的嵌入式C程序为什么在main函数中包含一个无限循环 while(1)？',
    options: ['这是C语言语法要求', '嵌入式系统通常持续运行不会退出，需要在循环中处理任务', '为了防止编译器报错', '仅用于调试目的'],
    answer: 1,
    explanation: '嵌入式系统通常没有操作系统来接管程序退出后的控制权。程序需要持续运行来响应事件、处理任务，因此main函数中必须有一个无限循环来保持程序运行。'
  },

  // ============================================================
  // Chapter 2: 系统架构设计
  // ============================================================
  {
    id: 11,
    chapterId: 2,
    type: 'single',
    difficulty: 'basic',
    question: '架构设计中"组合"和"分解"分别是什么思考方式？',
    options: ['组合是自底向上，分解是自顶向下', '组合是自顶向下，分解是自底向上', '两者都是自底向上', '两者都是自顶向下'],
    answer: 0,
    explanation: '组合(Composition)是自底向上——将小的已知组件组合成更大的系统。分解(Decomposition)是自顶向下——将复杂需求拆解为可管理的小模块。两者互补。'
  },
  {
    id: 12,
    chapterId: 2,
    type: 'single',
    difficulty: 'intermediate',
    question: '分层架构(Layering)的关键规则是什么？',
    options: ['每一层都可以调用任意其他层', '上层可以调用下层，下层不应依赖上层', '下层调用上层，上层不依赖下层', '所有层之间不能有任何依赖'],
    answer: 1,
    explanation: '分层架构的核心规则是单向依赖：上层（如应用层）可以调用下层（如驱动层），但下层不应依赖上层。这确保了各层可以独立替换和测试。'
  },
  {
    id: 13,
    chapterId: 2,
    type: 'single',
    difficulty: 'intermediate',
    question: 'POSIX驱动接口模型的五个基本操作是什么？',
    options: ['create, delete, read, write, seek', 'open, close, read, write, ioctl', 'init, start, stop, reset, status', 'connect, send, receive, disconnect, configure'],
    answer: 1,
    explanation: 'POSIX驱动接口模型包含open（初始化设备）、close（释放资源）、read（读取数据）、write（写入数据）和ioctl（设备控制），提供了统一的外设操作模型。'
  },
  {
    id: 14,
    chapterId: 2,
    type: 'single',
    difficulty: 'intermediate',
    question: '适配器模式(Adapter Pattern)在嵌入式中的核心价值是什么？',
    options: ['提高代码执行速度', '在不修改现有代码的情况下将一种接口转换为另一种', '减少内存占用', '简化编译过程'],
    answer: 1,
    explanation: '适配器模式通过中间层将一种接口转换为另一种，实现硬件无关性。典型应用是包装芯片厂商SDK，使平台迁移时只需重写适配器层，应用代码保持不变。'
  },
  {
    id: 15,
    chapterId: 2,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '防御性编程要求对来自故障模块的错误数据和异常行为进行防护，包括参数验证、范围检查和错误恢复机制。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '防御性编程在嵌入式系统中尤为重要。在安全关键系统中，这种防御性设计不仅是好的实践，更是强制性要求。参数验证、范围检查和看门狗监控都是基本手段。'
  },
  {
    id: 16,
    chapterId: 2,
    type: 'single',
    difficulty: 'advanced',
    question: '沙箱测试(Sandbox Testing)的核心思想是什么？',
    options: ['在真实硬件上运行所有测试', '通过模拟实现(Mock)在无硬件条件下验证代码逻辑', '在隔离的网络环境中测试', '在虚拟机中运行嵌入式代码'],
    answer: 1,
    explanation: '沙箱测试为接口创建模拟实现(Mock)，在没有真实硬件的情况下测试上层代码逻辑。例如模拟传感器接口返回预设数据，测试算法在各种条件下的行为。'
  },
  {
    id: 17,
    chapterId: 2,
    type: 'single',
    difficulty: 'basic',
    question: '上下文图(Context Diagram)展示的是什么？',
    options: ['代码的执行顺序', '系统内部模块结构', '系统与外部世界的关系和边界', '程序的内存分布'],
    answer: 2,
    explanation: '上下文图将系统作为黑盒放在中心，展示与外部实体（用户、其他系统、传感器等）的交互关系，帮助明确系统边界。它是架构设计的起点。'
  },
  {
    id: 18,
    chapterId: 2,
    type: 'truefalse',
    difficulty: 'basic',
    question: '面对已有的代码库，渐进式改进通常比推倒重来更加务实和有效。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '理解现有架构、识别其优缺点，然后逐步改进，往往比推倒重来更务实。这在嵌入式项目中尤其适用，因为已有代码可能包含了许多经过硬件验证的关键细节。'
  },
  {
    id: 19,
    chapterId: 2,
    type: 'single',
    difficulty: 'intermediate',
    question: '在C语言中实现多态(Polymorphism)的典型做法是？',
    options: ['使用class关键字', '使用函数指针和结构体', '使用模板(template)', '使用虚函数(virtual)'],
    answer: 1,
    explanation: '虽然C语言不直接支持OOP，但通过结构体(struct)包含函数指针(function pointer)，可以实现封装、抽象和多态等面向对象概念。许多优秀的嵌入式框架就是基于此构建的。'
  },
  {
    id: 20,
    chapterId: 2,
    type: 'single',
    difficulty: 'intermediate',
    question: '单一职责原则(Single Responsibility Principle)在嵌入式设计中意味着什么？',
    options: ['每个文件只包含一个函数', '每个模块只有一个改变的理由', '每个变量只能被赋值一次', '每个中断只处理一种事件'],
    answer: 1,
    explanation: '单一职责原则要求每个模块只负责一个职责——只有一个改变的理由。当一个模块需要执行超出其职责的操作时，应该委托给专门负责的模块。'
  },

  // ============================================================
  // Chapter 3: 硬件基础入门
  // ============================================================
  {
    id: 21,
    chapterId: 3,
    type: 'single',
    difficulty: 'basic',
    question: '板级启动(Board Bring-up)的第一步通常是什么？',
    options: ['运行完整的应用程序', '检查电源轨(Power Rails)是否正常', '配置所有外设', '下载操作系统'],
    answer: 1,
    explanation: '板级启动应按系统化步骤验证：首先检查电源轨是否正常，然后验证处理器能否启动基本程序，接着逐一测试各外设。电源正常是一切工作的基础。'
  },
  {
    id: 22,
    chapterId: 3,
    type: 'single',
    difficulty: 'intermediate',
    question: '数据手册(Datasheet)中，对软件开发者最常参考的部分是什么？',
    options: ['封装尺寸图', '寄存器映射(Register Map)', '焊接温度曲线', '产品订购信息'],
    answer: 1,
    explanation: '寄存器映射详细描述了每个控制寄存器和状态寄存器的地址、位域(Bit Field)定义和功能说明。编写驱动程序的本质就是按照寄存器映射来读写寄存器。'
  },
  {
    id: 23,
    chapterId: 3,
    type: 'single',
    difficulty: 'intermediate',
    question: '在原理图中，两条交叉导线有圆点表示什么？没有圆点呢？',
    options: ['有圆点不连接，无圆点连接', '有圆点表示实际连接，无圆点表示不连接', '两者都表示连接', '圆点只是装饰'],
    answer: 1,
    explanation: '原理图中交叉且有圆点的导线表示实际电气连接，没有圆点的交叉表示不连接（仅在图纸上交叉）。同名的网络标号(Net Label)表示物理上相连。'
  },
  {
    id: 24,
    chapterId: 3,
    type: 'single',
    difficulty: 'basic',
    question: '以下哪种调试工具最适合分析SPI/I2C通信协议问题？',
    options: ['万用表', '示波器', '逻辑分析仪', '电流探头'],
    answer: 2,
    explanation: '逻辑分析仪可同时捕获多个数字信号通道（通常16个以上），并内置常见协议（UART/SPI/I2C）的解码器，是分析数字通信协议最高效的工具。'
  },
  {
    id: 25,
    chapterId: 3,
    type: 'single',
    difficulty: 'intermediate',
    question: '命令与响应模式(Command and Response Pattern)的核心实现机制是什么？',
    options: ['使用中断处理', '使用命令表将命令字符串映射到函数指针', '使用定时器轮询', '使用DMA传输'],
    answer: 1,
    explanation: '命令模式的核心是命令表(Command Table)，将命令字符串和对应的处理函数指针配对。通过遍历命令表进行字符串匹配来分发命令，易于扩展新命令。'
  },
  {
    id: 26,
    chapterId: 3,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '数据手册中的时序图(Timing Diagram)是理解器件通信协议和正确实现驱动的关键。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '时序图用图形化方式展示信号线之间的时间关系，如SPI时钟边沿与数据有效的关系、I2C的起始/停止条件。理解时序图是成功实现通信驱动的前提。'
  },
  {
    id: 27,
    chapterId: 3,
    type: 'single',
    difficulty: 'advanced',
    question: '嵌入式错误处理中，每个可能失败的函数应该如何报告错误？',
    options: ['通过全局变量报告', '通过printf输出', '返回错误码，调用者必须检查返回值', '忽略错误继续执行'],
    answer: 2,
    explanation: '一致的错误处理方法论要求每个可能失败的函数返回错误码，调用者必须检查返回值。错误应在最近的能有意义处理它的层次被处理。'
  },
  {
    id: 28,
    chapterId: 3,
    type: 'truefalse',
    difficulty: 'basic',
    question: '万用表的通断测试功能可以用来检查焊接连接是否良好。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '万用表的通断测试功能是检查焊接质量的基本方法。它可以检测两点之间是否存在低阻抗连接，发现虚焊、断路等焊接问题。'
  },
  {
    id: 29,
    chapterId: 3,
    type: 'single',
    difficulty: 'intermediate',
    question: '去耦电容(Decoupling Capacitor)在嵌入式电路中的主要作用是什么？',
    options: ['存储能量以延长电池寿命', '过滤电源噪声，保证电源稳定性', '增加信号强度', '降低时钟频率'],
    answer: 1,
    explanation: '去耦电容放置在IC电源引脚附近，为瞬态电流需求提供本地供电并过滤电源线上的高频噪声。正确放置去耦电容对系统稳定性至关重要。'
  },
  {
    id: 30,
    chapterId: 3,
    type: 'single',
    difficulty: 'advanced',
    question: '在安全关键系统中，错误处理还需要考虑什么？',
    options: ['UI美观性', '故障模式分析(Failure Mode Analysis)', '代码缩进风格', '注释数量'],
    answer: 1,
    explanation: '安全关键系统需要进行故障模式分析，系统化地识别和分类每种可能的错误，确定其影响和应对策略，确保即使在意外情况下系统也能安全降级运行。'
  },

  // ============================================================
  // Chapter 4: 输入输出与定时器
  // ============================================================
  {
    id: 31,
    chapterId: 4,
    type: 'single',
    difficulty: 'basic',
    question: '在C语言中，设置寄存器第5位的正确操作是？',
    options: ['reg = (1 << 5)', 'reg |= (1 << 5)', 'reg &= (1 << 5)', 'reg ^= (1 << 5)'],
    answer: 1,
    explanation: '设置位使用OR操作：reg |= (1 << 5)。直接赋值会清除其他位；AND操作用于测试/清除；XOR用于翻转。设置位不应影响寄存器其他位的状态。'
  },
  {
    id: 32,
    chapterId: 4,
    type: 'single',
    difficulty: 'intermediate',
    question: '清除寄存器第3位的正确操作是？',
    options: ['reg |= ~(1 << 3)', 'reg &= ~(1 << 3)', 'reg ^= (1 << 3)', 'reg = ~(1 << 3)'],
    answer: 1,
    explanation: '清除位使用AND和NOT的组合：reg &= ~(1 << 3)。~(1 << 3)生成除第3位外全为1的掩码，AND操作只将第3位清零而保留其他位。'
  },
  {
    id: 33,
    chapterId: 4,
    type: 'single',
    difficulty: 'intermediate',
    question: '操作硬件寄存器时，为什么必须使用volatile关键字？',
    options: ['提高访问速度', '防止编译器优化掉看似"多余"的寄存器读写操作', '减少代码体积', '使变量线程安全'],
    answer: 1,
    explanation: 'volatile告诉编译器该变量可能在程序控制流之外被改变（如硬件改变寄存器值），因此每次访问必须实际执行内存读写，不能使用缓存值或优化掉。'
  },
  {
    id: 34,
    chapterId: 4,
    type: 'single',
    difficulty: 'basic',
    question: 'GPIO配置为推挽输出(Push-Pull Output)模式通常用于什么场景？',
    options: ['读取按钮状态', '驱动LED', '接收串口数据', '测量模拟电压'],
    answer: 1,
    explanation: '推挽输出可以主动输出高电平和低电平，适合驱动LED等负载。与开漏输出不同，推挽输出不需要外部上拉电阻。'
  },
  {
    id: 35,
    chapterId: 4,
    type: 'single',
    difficulty: 'intermediate',
    question: '按钮消抖(Debouncing)的目的是什么？',
    options: ['防止按钮物理损坏', '防止机械弹跳导致的误检测', '降低按钮的功耗', '增加按钮的灵敏度'],
    answer: 1,
    explanation: '机械开关在接通和断开瞬间会产生弹跳，导致电平在5-20毫秒内多次切换。不进行消抖处理，一次按键可能被误检测为多次。'
  },
  {
    id: 36,
    chapterId: 4,
    type: 'single',
    difficulty: 'advanced',
    question: '定时器中断频率的计算公式是什么？',
    options: ['频率 = 系统时钟 × 预分频器 × 比较值', '频率 = 系统时钟 / (预分频器 × 比较值)', '频率 = 预分频器 / (系统时钟 × 比较值)', '频率 = 比较值 / 系统时钟'],
    answer: 1,
    explanation: '中断频率 = 系统时钟 / (预分频器 × 比较值)。例如72MHz时钟，预分频器72，比较值1000，则频率 = 72MHz/(72×1000) = 1kHz（每1ms中断）。'
  },
  {
    id: 37,
    chapterId: 4,
    type: 'single',
    difficulty: 'intermediate',
    question: 'PWM(脉冲宽度调制)通过什么来控制输出功率？',
    options: ['改变电压幅度', '改变信号频率', '改变占空比(Duty Cycle)', '改变电阻值'],
    answer: 2,
    explanation: 'PWM通过改变方波信号的占空比来控制平均输出功率。占空比越大，平均电压越高。PWM广泛用于LED调光和电机速度控制。'
  },
  {
    id: 38,
    chapterId: 4,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '依赖注入(Dependency Injection)的核心思想是模块不应自己创建所依赖的对象，而由外部注入具体实现。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '依赖注入让应用层代码依赖抽象接口而非具体硬件驱动。具体的驱动实现在初始化时通过函数指针或结构体注入，使同一模块可以配合不同硬件使用。'
  },
  {
    id: 39,
    chapterId: 4,
    type: 'single',
    difficulty: 'advanced',
    question: '定时器的输入捕获(Input Capture)功能主要用于什么？',
    options: ['产生PWM输出', '测量外部信号的脉冲宽度和频率', '产生延时', '计数事件'],
    answer: 1,
    explanation: '输入捕获在检测到外部信号边沿时自动记录计数器值，由此可以精确测量脉冲宽度和信号频率，常用于超声波测距、频率计等应用。'
  },

  // ============================================================
  // Chapter 5: 中断机制
  // ============================================================
  {
    id: 40,
    chapterId: 5,
    type: 'single',
    difficulty: 'basic',
    question: '不可屏蔽中断(NMI)的特点是什么？',
    options: ['优先级最低', '可以被软件禁用', '不能被软件禁用，用于最严重的事件', '只在调试模式下有效'],
    answer: 2,
    explanation: 'NMI(Non-Maskable Interrupt)不能被软件禁用，即使全局中断被禁用也能响应。通常用于硬件故障、看门狗超时或电源异常等最严重的事件。'
  },
  {
    id: 41,
    chapterId: 5,
    type: 'single',
    difficulty: 'intermediate',
    question: 'ARM Cortex-M处理器中断发生时，硬件自动保存哪些寄存器到栈？',
    options: ['所有通用寄存器R0-R15', 'R0-R3、R12、LR、PC和xPSR共8个', '仅保存PC和SP', '不自动保存任何寄存器'],
    answer: 1,
    explanation: 'ARM Cortex-M硬件自动保存8个寄存器：R0-R3（通用）、R12、LR（链接寄存器）、PC（程序计数器）和xPSR（状态寄存器）。其余寄存器如R4-R11由编译器在ISR序言中保存。'
  },
  {
    id: 42,
    chapterId: 5,
    type: 'single',
    difficulty: 'advanced',
    question: '临界区(Critical Section)保护中，为什么应该"保存并恢复中断状态"而非简单地"禁用再使能"？',
    options: ['后者执行速度更慢', '后者无法在嵌套调用中正确工作——内层可能错误地重新使能中断', '两者没有区别', '前者占用更少内存'],
    answer: 1,
    explanation: '如果函数A禁用中断后调用函数B，B在返回前直接使能中断会破坏A的临界区保护。保存/恢复中断状态可以正确处理嵌套场景。'
  },
  {
    id: 43,
    chapterId: 5,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: 'counter++这个操作在被中断打断时可能产生错误，因为它包含读取、加1、写回三个步骤。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'counter++不是原子操作，包含读取-修改-写回三步。如果在读取后被中断，ISR修改了counter，恢复后写回的值会覆盖ISR的修改，产生竞态条件。'
  },
  {
    id: 44,
    chapterId: 5,
    type: 'single',
    difficulty: 'intermediate',
    question: 'ARM Cortex-M的尾链(Tail-Chaining)优化是什么？',
    options: ['将多个中断合并为一个', '在ISR返回时直接跳转到下一个待处理ISR，跳过上下文恢复和重新保存', '将ISR代码内联到主循环', '自动调整中断优先级'],
    answer: 1,
    explanation: '尾链优化在一个ISR返回时如果有另一个待处理中断，处理器跳过上下文恢复和重新保存的过程，直接跳转到下一个ISR，大幅减少连续中断的响应延迟。'
  },
  {
    id: 45,
    chapterId: 5,
    type: 'single',
    difficulty: 'intermediate',
    question: '中断向量表(Interrupt Vector Table)本质上是什么？',
    options: ['一段可执行代码', '存储ISR入口地址的函数指针数组', '一个链表数据结构', '一组配置寄存器'],
    answer: 1,
    explanation: '向量表是存储在固定内存地址的函数指针数组。处理器用中断号作为索引查表获取ISR地址并跳转执行。ARM Cortex-M向量表的第一个条目是初始栈指针。'
  },
  {
    id: 46,
    chapterId: 5,
    type: 'single',
    difficulty: 'advanced',
    question: 'ARM Cortex-M的BASEPRI寄存器有什么作用？',
    options: ['设置基础中断频率', '选择性屏蔽低于某个优先级阈值的中断', '配置系统时钟', '设置栈指针初始值'],
    answer: 1,
    explanation: 'BASEPRI允许选择性地屏蔽低于某个优先级阈值的中断，而不是禁用所有中断。这使得高优先级的关键中断仍可在临界区内响应，兼顾数据保护和实时性。'
  },
  {
    id: 47,
    chapterId: 5,
    type: 'single',
    difficulty: 'intermediate',
    question: 'SysTick定时器在嵌入式系统中通常用于什么？',
    options: ['产生PWM输出', '作为系统时间基准，驱动小型调度器', '串口通信', '控制电机转速'],
    answer: 1,
    explanation: 'SysTick是一种平衡方案：配置定期中断（通常1ms），ISR中更新时间计数器和标志位，主循环根据标志执行任务。兼顾时间精度和代码简洁性。'
  },
  {
    id: 48,
    chapterId: 5,
    type: 'truefalse',
    difficulty: 'advanced',
    question: '小型调度器中ISR应该只做简单操作（递减计数器和设置标志），实际任务执行应放在主循环的非中断上下文中。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这是正确的设计原则。ISR保持简短避免了在中断上下文中执行复杂操作的风险（栈溢出、长时间占用CPU），同时通过标志位将工作分发到主循环处理。'
  },

  // ============================================================
  // Chapter 6: 活动流管理
  // ============================================================
  {
    id: 49,
    chapterId: 6,
    type: 'single',
    difficulty: 'intermediate',
    question: '优先级反转(Priority Inversion)是什么问题？',
    options: ['高优先级任务运行太快', '高优先级任务被低优先级任务间接阻塞', '所有任务优先级相同', '中断优先级自动改变'],
    answer: 1,
    explanation: '当高优先级任务等待低优先级任务持有的资源，而低优先级任务又被中等优先级任务抢占时，高优先级任务被间接阻塞。火星探路者号的故障就是经典案例。'
  },
  {
    id: 50,
    chapterId: 6,
    type: 'single',
    difficulty: 'intermediate',
    question: '表驱动(Table-Driven)状态机实现的优点是什么？',
    options: ['执行速度最快', '状态机行为完全由数据定义，修改只需改表格不需改代码逻辑', '内存占用最小', '编译时间最短'],
    answer: 1,
    explanation: '表驱动方式将状态转换关系存储在查找表中，每行定义当前状态、事件、动作和下一状态。修改行为只需改表格数据，代码逻辑保持不变。'
  },
  {
    id: 51,
    chapterId: 6,
    type: 'single',
    difficulty: 'intermediate',
    question: '看门狗定时器(Watchdog Timer)在哪里喂狗是正确做法？',
    options: ['在定时器ISR中', '在主循环中所有关键任务执行之后', '在系统初始化时', '在低功耗睡眠模式中'],
    answer: 1,
    explanation: '在定时器ISR中喂狗是常见错误——即使主循环死锁，定时器中断仍会正常触发。正确做法是在主循环中喂狗，确保所有关键任务都正常执行后才喂。'
  },
  {
    id: 52,
    chapterId: 6,
    type: 'single',
    difficulty: 'advanced',
    question: '以下哪种主循环模式最被推荐用于复杂嵌入式系统？',
    options: ['轮询等待模式', '中断完成一切模式', '中断触发事件模式（ISR设标志/入队，主循环处理）', '纯定时器驱动模式'],
    answer: 2,
    explanation: '中断触发事件模式中ISR只做最小工作（记录事件到队列/设标志），主循环取出事件处理。兼顾了快速中断响应和清晰的处理逻辑，是成熟嵌入式系统的推荐架构。'
  },
  {
    id: 53,
    chapterId: 6,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '活动对象模式(Active Objects Pattern)通过异步消息传递通信，从根本上避免了共享状态引起的竞态条件。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '每个活动对象有自己的事件队列和处理循环，通过异步消息传递通信。消除了共享资源的直接访问，从根本上避免竞态条件，同时提供高度模块化和可测试性。'
  },
  {
    id: 54,
    chapterId: 6,
    type: 'single',
    difficulty: 'basic',
    question: 'RTOS中任务可以处于哪些状态？',
    options: ['只有运行和停止两种', '运行、就绪、阻塞和挂起', '仅运行、等待和完成', '活跃和非活跃'],
    answer: 1,
    explanation: '任务是调度的基本单位，可处于运行(Running)、就绪(Ready)、阻塞(Blocked)和挂起(Suspended)等状态。调度器根据优先级和状态决定哪个任务获得CPU时间。'
  },
  {
    id: 55,
    chapterId: 6,
    type: 'single',
    difficulty: 'intermediate',
    question: '状态机设计中，"隐藏转换"(Hidden Transitions)指的是什么？',
    options: ['状态转换太快看不到', '状态转换条件未被明确记录或发生在非预期位置', '状态转换需要密码', '多个状态同时转换'],
    answer: 1,
    explanation: '隐藏转换是指直接设置状态变量而不经过正式的转换逻辑，或在中断中改变状态而主循环不知道。这会导致难以追踪的bug，应通过集中的转换逻辑避免。'
  },

  // ============================================================
  // Chapter 7: 外设通信
  // ============================================================
  {
    id: 56,
    chapterId: 7,
    type: 'single',
    difficulty: 'basic',
    question: 'UART通信为什么被称为"异步"通信？',
    options: ['因为数据传输速度不固定', '因为通信双方不共享时钟信号，通过约定波特率同步', '因为只能单方向传输', '因为可以随时中断传输'],
    answer: 1,
    explanation: 'UART的"异步"指通信双方各自使用本地时钟，不共享时钟信号。双方通过预先约定的波特率来同步数据传输，一个UART帧包含起始位、数据位、可选校验位和停止位。'
  },
  {
    id: 57,
    chapterId: 7,
    type: 'single',
    difficulty: 'intermediate',
    question: 'SPI总线需要几条信号线？分别是什么？',
    options: ['2条：SDA和SCL', '4条：MOSI、MISO、SCLK和CS', '1条：DATA', '3条：TX、RX和CLK'],
    answer: 1,
    explanation: 'SPI使用4条线：MOSI（主出从入）、MISO（主入从出）、SCLK（串行时钟，主设备产生）和CS/SS（片选，选择从设备）。是同步全双工通信。'
  },
  {
    id: 58,
    chapterId: 7,
    type: 'single',
    difficulty: 'intermediate',
    question: 'I2C总线使用什么机制来区分总线上的不同设备？',
    options: ['每个设备有独立的片选线', '通过设备地址(Address)来区分', '通过不同的时钟频率', '通过不同的数据线'],
    answer: 1,
    explanation: 'I2C使用7位或10位地址区分总线上的设备，不需要片选线。每个设备有唯一地址，主设备发送地址后对应设备应答(ACK)。这是I2C节省引脚的关键。'
  },
  {
    id: 59,
    chapterId: 7,
    type: 'single',
    difficulty: 'advanced',
    question: 'SPI通信的CPOL和CPHA定义了什么？',
    options: ['数据位宽和传输速率', '时钟极性和时钟相位，共4种工作模式(Mode 0-3)', '主从角色和数据方向', '错误检测和重传机制'],
    answer: 1,
    explanation: 'CPOL决定空闲时时钟电平（0=低，1=高），CPHA决定数据采样边沿（0=第一个，1=第二个）。通信双方必须使用相同模式，Mode 0(CPOL=0,CPHA=0)最常用。'
  },
  {
    id: 60,
    chapterId: 7,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: 'SPI通信是全双工的——即使只需要读取数据，也必须发送一个字节来产生时钟。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'SPI全双工意味着主设备通过MOSI发送数据的同时从MISO接收数据。要读取从设备数据，必须发送字节（通常0x00或0xFF作为空操作）来产生SCLK时钟。'
  },
  {
    id: 61,
    chapterId: 7,
    type: 'single',
    difficulty: 'intermediate',
    question: 'I2C总线为什么需要上拉电阻？',
    options: ['增加数据传输速度', '因为使用开漏输出(Open-Drain)，需要上拉电阻将线拉回高电平', '防止静电损坏', '减少功耗'],
    answer: 1,
    explanation: 'I2C使用开漏输出，设备只能将线拉低不能驱动高电平。上拉电阻在所有设备释放时将线恢复到高电平。这种"线与"特性使得总线仲裁成为可能。'
  },
  {
    id: 62,
    chapterId: 7,
    type: 'single',
    difficulty: 'intermediate',
    question: 'DMA(Direct Memory Access)的核心优势是什么？',
    options: ['增加存储容量', '允许外设直接与内存交换数据，无需CPU介入每次传输', '提高CPU的时钟频率', '简化编程接口'],
    answer: 1,
    explanation: 'DMA控制器作为数据搬运工在后台传输数据。CPU只需配置DMA（源/目标地址、长度等），传输自动进行，完成时中断通知CPU。大大提高了高速数据传输的效率。'
  },
  {
    id: 63,
    chapterId: 7,
    type: 'single',
    difficulty: 'advanced',
    question: '环形缓冲区(Ring Buffer)的大小为什么推荐选择2的幂次方？',
    options: ['编译器要求', '可以用位与操作(index & (size-1))替代取模运算提高效率', '减少内存碎片', '硬件DMA要求'],
    answer: 1,
    explanation: '2的幂次方大小使得取模运算可以用位与替代：index % size 等价于 index & (size-1)。位与操作只需一个时钟周期，比除法取模快得多。'
  },
  {
    id: 64,
    chapterId: 7,
    type: 'truefalse',
    difficulty: 'advanced',
    question: '单生产者单消费者的环形缓冲区中，如果头指针只由生产者修改、尾指针只由消费者修改，则可以实现无锁(Lock-Free)的线程安全操作。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在SPSC场景中（如ISR写入、主循环读取），由于头/尾指针各由一方独占修改，且在32位系统上对齐的32位指针操作是原子的，可以实现无锁的线程安全。'
  },

  // ============================================================
  // Chapter 8: 系统集成
  // ============================================================
  {
    id: 65,
    chapterId: 8,
    type: 'single',
    difficulty: 'intermediate',
    question: '按键矩阵用M+N个引脚可以检测多少个按键？',
    options: ['M+N个', 'M×N个', 'M-N个', '2×(M+N)个'],
    answer: 1,
    explanation: '按键矩阵将按键排列成M行N列。系统用M+N个引脚（M行输出+N列输入）通过行列扫描检测M×N个按键。例如4+4=8个引脚检测4×4=16个按键。'
  },
  {
    id: 66,
    chapterId: 8,
    type: 'single',
    difficulty: 'intermediate',
    question: 'NOR Flash和NAND Flash的主要区别是什么？',
    options: ['NOR更便宜', 'NOR支持随机读取适合代码存储，NAND容量更大适合数据', 'NAND速度更快', '两者完全相同'],
    answer: 1,
    explanation: 'NOR Flash支持按字节随机读取，适合存储代码和只读数据，可以原地执行(XIP)。NAND Flash容量更大但需要按页访问，适合大数据存储。'
  },
  {
    id: 67,
    chapterId: 8,
    type: 'single',
    difficulty: 'intermediate',
    question: '根据奈奎斯特定理(Nyquist Theorem)，ADC采样率必须满足什么条件？',
    options: ['等于信号频率', '至少是信号最高频率的两倍', '是信号频率的一半', '与信号频率无关'],
    answer: 1,
    explanation: '奈奎斯特定理要求采样率至少为信号最高频率的两倍。实际应用中通常需要更高的倍率，并配合抗混叠滤波器避免频率混叠问题。'
  },
  {
    id: 68,
    chapterId: 8,
    type: 'single',
    difficulty: 'intermediate',
    question: '策略模式(Strategy Pattern)在嵌入式数据处理中的作用是什么？',
    options: ['加密数据', '允许在运行时通过函数指针切换算法实现', '压缩数据', '验证数据完整性'],
    answer: 1,
    explanation: '策略模式允许在运行时切换算法实现而不改变使用者代码。例如数据滤波模块可在移动平均、中值滤波和卡尔曼滤波之间动态切换，只需改变函数指针。'
  },
  {
    id: 69,
    chapterId: 8,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '模拟EEPROM技术利用Flash模拟EEPROM行为，需要实现磨损均衡(Wear Leveling)算法来保护Flash寿命。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Flash只能整块擦除而EEPROM可以字节写入。模拟层通常在Flash扇区中维护日志结构，新数据追加写入，满时触发垃圾回收。磨损均衡确保Flash各区域被均匀擦写。'
  },
  {
    id: 70,
    chapterId: 8,
    type: 'single',
    difficulty: 'advanced',
    question: '系统集成中计算数据带宽时，为什么需要"留有裕量"？',
    options: ['法规要求', '传输协议有额外开销，且处理器需要时间处理数据', '为了后续扩展', '提高数据质量'],
    answer: 1,
    explanation: '数据带宽计算需包含协议开销（命令字节、地址等），加上处理器读取和处理数据的时间。如果任何环节吞吐量不足，系统会出现数据丢失或响应延迟。'
  },
  {
    id: 71,
    chapterId: 8,
    type: 'single',
    difficulty: 'intermediate',
    question: '享元模式(Flyweight Pattern)在嵌入式显示系统中的价值是什么？',
    options: ['加快渲染速度', '让多个相同字符共享一份字形数据以减少内存占用', '支持更多颜色', '简化字体设计'],
    answer: 1,
    explanation: '享元模式将对象的共享部分（如字形位图数据）与可变部分（如位置和颜色）分离。所有相同字符共享一份字形数据，每个实例只存储位置等外在属性，大幅节省内存。'
  },

  // ============================================================
  // Chapter 9: 调试技术
  // ============================================================
  {
    id: 72,
    chapterId: 9,
    type: 'single',
    difficulty: 'intermediate',
    question: 'volatile关键字在嵌入式调试中防止了什么问题？',
    options: ['防止内存泄漏', '防止编译器优化掉硬件寄存器和中断变量的访问', '防止栈溢出', '防止数据竞争'],
    answer: 1,
    explanation: '编译器可能优化掉看似无用的寄存器写入、将轮询状态寄存器优化为只读一次、或重排硬件写入顺序。volatile告诉编译器不可优化这些访问。'
  },
  {
    id: 73,
    chapterId: 9,
    type: 'single',
    difficulty: 'intermediate',
    question: '栈涂色/水印技术(Stack Painting)的工作原理是什么？',
    options: ['用不同颜色显示栈使用情况', '初始化时用特殊模式值填充栈空间，运行后检查有多少被覆盖', '在栈上打印调试信息', '给栈内存分配不同权限'],
    answer: 1,
    explanation: '初始化时将栈填充为已知模式值（如0xDEADBEEF），运行后从栈底检查模式值被覆盖了多少来确定最大栈使用深度。简单有效，帮助合理设置栈大小。'
  },
  {
    id: 74,
    chapterId: 9,
    type: 'single',
    difficulty: 'advanced',
    question: 'ARM Cortex-M发生硬故障(Hard Fault)时，异常帧中的哪个值最能帮助定位故障位置？',
    options: ['R0的值', 'PC(程序计数器)的值', 'SP(栈指针)的值', 'R12的值'],
    answer: 1,
    explanation: 'PC值指向故障发生时正在执行的指令地址。结合编译生成的map文件或ELF文件，可以将地址翻译为源代码位置，这是定位故障的最重要线索。'
  },
  {
    id: 75,
    chapterId: 9,
    type: 'single',
    difficulty: 'intermediate',
    question: '以下哪个不是导致硬故障(Hard Fault)的常见原因？',
    options: ['除零错误', '访问不存在的内存地址', '代码注释格式不正确', '非对齐内存访问'],
    answer: 2,
    explanation: '硬故障的常见原因包括除零错误、访问非法地址、执行未定义指令和非对齐访问。代码注释格式不会导致运行时硬故障，它在编译阶段就会被处理。'
  },
  {
    id: 76,
    chapterId: 9,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: 'KISS原则(Keep It Simple, Stupid)在嵌入式系统中尤为重要，因为嵌入式软件生命周期通常很长（可达十年以上）。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '嵌入式产品可能需要维护十年甚至更久，期间多位工程师参与维护。清晰可读的代码比"聪明"的单行优化更重要，现代编译器的优化能力已经足够强大。'
  },
  {
    id: 77,
    chapterId: 9,
    type: 'single',
    difficulty: 'advanced',
    question: '核心转储(Core Dump)在嵌入式产品部署后的价值是什么？',
    options: ['加快程序启动', '硬故障时将关键寄存器和栈内容保存到非易失存储供离线分析', '压缩代码体积', '备份用户数据'],
    answer: 1,
    explanation: '当硬故障发生时，处理程序将关键寄存器和部分栈内容保存到Flash等非易失存储。下次启动时可上报给开发团队离线分析，是产品部署后诊断问题的重要手段。'
  },
  {
    id: 78,
    chapterId: 9,
    type: 'single',
    difficulty: 'intermediate',
    question: '使用strncpy代替strcpy的主要目的是什么？',
    options: ['提高拷贝速度', '限制拷贝长度防止缓冲区溢出', '支持Unicode字符', '减少内存占用'],
    answer: 1,
    explanation: '缓冲区溢出是严重的内存安全问题。strncpy限制了拷贝的最大长度，防止向固定大小的缓冲区写入超过其容量的数据，是防范溢出的基本措施。'
  },

  // ============================================================
  // Chapter 10: 互联设备开发
  // ============================================================
  {
    id: 79,
    chapterId: 10,
    type: 'single',
    difficulty: 'basic',
    question: 'BLE(低功耗蓝牙)设备通常通过什么方式连接到互联网？',
    options: ['直接连接WiFi', '通过网关(Gateway)转发到互联网', '通过以太网连接', '通过卫星通信'],
    answer: 1,
    explanation: 'BLE等低功耗协议的设备通过附近的网关连接互联网。网关由市电供电，具备WiFi或以太网能力。这种架构允许终端设备使用极低功耗的无线技术，延长电池寿命。'
  },
  {
    id: 80,
    chapterId: 10,
    type: 'single',
    difficulty: 'intermediate',
    question: 'CRC(循环冗余校验)相比简单校验和(Checksum)的优势是什么？',
    options: ['计算更快', '能检测到更多类型的传输错误', '占用更少空间', '实现更简单'],
    answer: 1,
    explanation: 'CRC比简单校验和能检测更多类型的传输错误（如位翻转、突发错误等）。CRC-16和CRC-32在嵌入式系统中广泛使用，许多MCU甚至内置了硬件CRC计算单元。'
  },
  {
    id: 81,
    chapterId: 10,
    type: 'single',
    difficulty: 'intermediate',
    question: '固件更新中，为什么需要数字签名(Digital Signature)？',
    options: ['压缩固件体积', '确保固件来源可信且内容未被篡改', '加快下载速度', '美化固件界面'],
    answer: 1,
    explanation: '数字签名使用非对称加密，设备存储公钥验证签名。这确保固件来自可信来源且未被篡改，防止恶意固件被安装。还应检查版本号防止降级攻击。'
  },
  {
    id: 82,
    chapterId: 10,
    type: 'single',
    difficulty: 'advanced',
    question: 'A/B分区固件更新方案的核心优势和代价是什么？',
    options: ['更快的更新速度但需要网络连接', '支持原子切换和自动回退但需要两倍固件存储空间', '更小的固件体积但更新不可逆', '更简单的实现但不支持回退'],
    answer: 1,
    explanation: 'A/B分区维护两个固件分区，新固件写入备用分区验证后切换。启动失败可自动回退到旧分区。代价是需要两倍固件存储空间。是目前最流行的更新架构。'
  },
  {
    id: 83,
    chapterId: 10,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: 'Mesh网络具有自愈性——单个节点故障不会导致整个网络瘫痪，覆盖范围可以通过添加节点扩展。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Mesh网络中设备之间可以互相转发数据，不需要每个设备都在网关直接通信范围内。Thread、Zigbee和BLE Mesh都支持这种拓扑，提供自愈性和可扩展性。'
  },
  {
    id: 84,
    chapterId: 10,
    type: 'single',
    difficulty: 'intermediate',
    question: 'STRIDE威胁建模框架分析的六种威胁类型是什么？',
    options: ['硬件、软件、网络、用户、环境、成本', '欺骗身份、篡改数据、否认行为、信息泄露、拒绝服务、权限提升', '病毒、木马、蠕虫、间谍、广告、勒索', '输入、输出、存储、计算、通信、显示'],
    answer: 1,
    explanation: 'STRIDE分析六种威胁：Spoofing(欺骗身份)、Tampering(篡改数据)、Repudiation(否认行为)、Information Disclosure(信息泄露)、Denial of Service(拒绝服务)、Elevation of Privilege(权限提升)。'
  },
  {
    id: 85,
    chapterId: 10,
    type: 'single',
    difficulty: 'intermediate',
    question: '分阶段发布(Staged Rollout)策略的核心思想是什么？',
    options: ['同时更新所有设备', '先更新少量设备监控无问题后再逐步扩大范围', '只更新最新型号的设备', '让用户手动选择是否更新'],
    answer: 1,
    explanation: '先更新一小批设备（如5%），监控确认无问题后再逐步扩大范围。如果早期发现问题，受影响设备数量可控。在管理大规模设备时尤为重要。'
  },
  {
    id: 86,
    chapterId: 10,
    type: 'single',
    difficulty: 'intermediate',
    question: 'AES对称加密为什么适合资源受限的嵌入式设备？',
    options: ['不需要密钥', '速度快、资源消耗低', '绝对安全不可破解', '不需要硬件支持'],
    answer: 1,
    explanation: 'AES对称加密使用相同密钥加解密，计算量远小于非对称加密（如RSA/ECC），适合CPU和内存受限的嵌入式设备。许多MCU还内置了AES硬件加速器。'
  },

  // ============================================================
  // Chapter 11: 资源优化
  // ============================================================
  {
    id: 87,
    chapterId: 11,
    type: 'single',
    difficulty: 'intermediate',
    question: '分析代码空间分布最重要的工具是什么？',
    options: ['示波器', '链接器生成的Map文件', 'GDB调试器', '编辑器的行号'],
    answer: 1,
    explanation: 'Map文件列出了每个目标文件、每个函数和全局变量在最终镜像中的地址和大小。通过排序分析可以找出占用空间最多的模块，指导优化工作。'
  },
  {
    id: 88,
    chapterId: 11,
    type: 'single',
    difficulty: 'intermediate',
    question: '编译选项 -Os 的含义是什么？',
    options: ['输出调试信息', '在保持合理性能的同时最小化代码体积', '开启所有优化', '生成汇编文件'],
    answer: 1,
    explanation: '-Os优化级别针对代码大小进行优化。配合-ffunction-sections、-fdata-sections和链接器的--gc-sections可以精细移除未使用的函数和数据，有效减小代码体积。'
  },
  {
    id: 89,
    chapterId: 11,
    type: 'single',
    difficulty: 'advanced',
    question: '为什么嵌入式系统中应避免使用malloc/free动态内存分配？',
    options: ['编译器不支持', '存在内存碎片化风险和不确定的分配失败', '运行速度太慢', '语法太复杂'],
    answer: 1,
    explanation: '堆分配不仅有碎片化风险（长时间运行后可能无法分配大块连续内存），还可能导致不确定的分配失败。静态分配在编译时确定RAM用量，避免运行时不足。'
  },
  {
    id: 90,
    chapterId: 11,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: 'const修饰的不变数据会被存储在Flash而非RAM中，从而节省宝贵的RAM空间。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'const修饰的数据被编译器标记为只读，链接器会将其放置在Flash/ROM区域而非RAM。这对嵌入式系统的RAM优化非常重要。'
  },
  {
    id: 91,
    chapterId: 11,
    type: 'single',
    difficulty: 'advanced',
    question: '性能优化中，Profiling的首要目的是什么？',
    options: ['让代码看起来更专业', '找到真正的性能瓶颈，避免过早优化', '压缩代码体积', '检查语法错误'],
    answer: 1,
    explanation: '过早优化是经典反模式——开发者凭直觉优化的代码可能只占总运行时间1%。Profiling告诉你每个函数的执行时间占比，指导优化聚焦在收益最大的热点。'
  },
  {
    id: 92,
    chapterId: 11,
    type: 'single',
    difficulty: 'intermediate',
    question: '内存覆盖(Memory Overlay)技术的前提条件是什么？',
    options: ['需要虚拟内存支持', '被覆盖的功能确实不会同时执行', '需要操作系统支持', '只能用于代码段'],
    answer: 1,
    explanation: '如果系统中有些功能不会同时使用（如初始化和正常运行），它们的数据缓冲区可以共享同一段RAM。使用Union或链接脚本映射到相同地址，但必须严格保证不并发。'
  },
  {
    id: 93,
    chapterId: 11,
    type: 'single',
    difficulty: 'intermediate',
    question: '查找表(Lookup Table)优化的本质是什么策略？',
    options: ['时间换空间', '空间换时间——用预计算的结果替换运行时计算', '减少代码行数', '增加代码并行性'],
    answer: 1,
    explanation: '查找表将复杂计算的结果预先存储在数组中，运行时用一次内存访问替代复杂计算。是经典的空间换时间策略，特别适合三角函数、CRC等计算密集操作。'
  },

  // ============================================================
  // Chapter 12: 嵌入式数学
  // ============================================================
  {
    id: 94,
    chapterId: 12,
    type: 'single',
    difficulty: 'intermediate',
    question: '在没有FPU的处理器上，定点数(Fixed-point)运算相比软件浮点的优势是什么？',
    options: ['精度更高', '可以获得数量级的性能提升', '代码更简单', '不需要特殊库'],
    answer: 1,
    explanation: '没有FPU时软件浮点加法需要50-100个周期，浮点乘除更慢。定点数使用整数运算模拟小数，利用硬件整数运算单元，性能提升可达数量级。'
  },
  {
    id: 95,
    chapterId: 12,
    type: 'single',
    difficulty: 'advanced',
    question: 'Q15定点数格式中，两个Q15数相乘后需要什么操作？',
    options: ['左移15位', '右移15位修正缩放', '不需要移位', '除以2'],
    answer: 1,
    explanation: '两个Q15数相乘后结果是Q30格式（小数部分30位），需要右移15位才能得到正确的Q15格式结果。乘法通常用int32_t存储中间结果防止溢出。'
  },
  {
    id: 96,
    chapterId: 12,
    type: 'single',
    difficulty: 'intermediate',
    question: '霍纳法则(Horner\'s Method)将多项式 ax³+bx²+cx+d 重写为什么形式？',
    options: ['a(x³)+b(x²)+cx+d', '((ax+b)x+c)x+d', 'd+c/x+b/x²+a/x³', '(a+b+c+d)x³'],
    answer: 1,
    explanation: '霍纳法则通过因式分解将多项式求值改写为嵌套乘法形式：((ax+b)x+c)x+d。将乘法次数从6次减少到3次，是嵌入式数学优化的基本技巧。'
  },
  {
    id: 97,
    chapterId: 12,
    type: 'truefalse',
    difficulty: 'basic',
    question: '在嵌入式处理器上，除法通常是"慢操作"，即使有硬件除法器也比加减法慢得多。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '加减法通常1-2周期，即使有硬件除法器也需2-12周期，无硬件除法器则需数十到数百周期。如果除数是常量，编译器通常会自动将除法转换为乘法加移位。'
  },
  {
    id: 98,
    chapterId: 12,
    type: 'single',
    difficulty: 'intermediate',
    question: 'TinyML指的是什么？',
    options: ['一种微型编程语言', '在毫瓦级功耗的设备上运行机器学习推理', '一种小型数据库', '压缩版的Python'],
    answer: 1,
    explanation: 'TinyML指在资源极其有限的微控制器上运行机器学习推理。常见应用包括关键词检测、异常检测和手势识别。TensorFlow Lite Micro是目前最成熟的嵌入式ML框架。'
  },
  {
    id: 99,
    chapterId: 12,
    type: 'single',
    difficulty: 'intermediate',
    question: '8位整数量化将ML模型缩小为浮点版本的多少？',
    options: ['一半', '四分之一', '八分之一', '不变'],
    answer: 1,
    explanation: '8位整数量化将32位浮点权重替换为8位整数，模型缩小到四分之一。同时利用整数运算避免了对FPU的依赖，非常适合嵌入式部署。'
  },
  {
    id: 100,
    chapterId: 12,
    type: 'single',
    difficulty: 'advanced',
    question: '饱和算术(Saturating Arithmetic)在控制系统中为什么重要？',
    options: ['提高计算速度', '结果超出范围时钳位到最大/最小值而不是回绕', '减少代码体积', '简化调试'],
    answer: 1,
    explanation: '普通整数溢出会回绕（如INT16_MAX + 1 变成 INT16_MIN），在控制系统中这种跳变可能造成灾难性后果。饱和算术将结果钳位到边界值，行为更安全可预测。'
  },
  {
    id: 101,
    chapterId: 12,
    type: 'single',
    difficulty: 'intermediate',
    question: '指数移动平均(EMA)相比简单平均值的优势是什么？',
    options: ['计算更快', '给近期的样本更大权重，适合实时滤波', '不需要除法', '精度更高'],
    answer: 1,
    explanation: '累积平均中新样本影响随样本数增加而减小。EMA通过加权让近期样本权重更大，对变化的响应更快，且只需常数内存空间，非常适合实时传感器数据滤波。'
  },

  // ============================================================
  // Chapter 13: 功耗管理
  // ============================================================
  {
    id: 102,
    chapterId: 13,
    type: 'single',
    difficulty: 'intermediate',
    question: '数字电路的动态功耗与什么成正比？',
    options: ['电流的平方', '频率和电压的平方(P ∝ f × V²)', '仅与电阻有关', '与温度成反比'],
    answer: 1,
    explanation: '动态功耗是晶体管开关切换时对负载电容充放电产生的。P_dynamic ∝ f × V²，因此降低时钟频率或工作电压可以显著减少动态功耗。'
  },
  {
    id: 103,
    chapterId: 13,
    type: 'single',
    difficulty: 'basic',
    question: '降低功耗最基本有效的第一步是什么？',
    options: ['降低系统时钟', '关闭所有当前不需要的外设模块（时钟门控）', '切换到更小的处理器', '减少代码行数'],
    answer: 1,
    explanation: '通过时钟门控(Clock Gating)关闭不需要的外设时钟是最基本有效的功耗优化。没有时钟的模块几乎不消耗动态功耗。系统初始化时应只使能实际需要的外设。'
  },
  {
    id: 104,
    chapterId: 13,
    type: 'single',
    difficulty: 'intermediate',
    question: '未使用的浮空(Floating)输入引脚为什么会增加功耗？',
    options: ['引脚发热', '可能在高低电平之间振荡导致输入缓冲器频繁切换', '引脚漏电', '引脚产生电磁辐射'],
    answer: 1,
    explanation: '浮空输入引脚无确定电平，可能在高低之间振荡导致额外功耗。应将未使用引脚配置为输出低电平或使能内部上拉/下拉电阻来消除此问题。'
  },
  {
    id: 105,
    chapterId: 13,
    type: 'single',
    difficulty: 'intermediate',
    question: '深度睡眠(Deep Sleep)模式的唤醒延迟为什么比轻度睡眠长？',
    options: ['处理器完全关机需要重启', '需要重新启动高速振荡器、等待PLL锁定、恢复Flash控制器等', '需要重新下载程序', '需要用户手动唤醒'],
    answer: 1,
    explanation: '深度睡眠关闭了大部分时钟和模块。唤醒时需要重启高速振荡器（μs到ms级启动时间）、等待PLL锁定、恢复Flash控制器等，延迟可达毫秒级。'
  },
  {
    id: 106,
    chapterId: 13,
    type: 'single',
    difficulty: 'intermediate',
    question: '中断驱动的低功耗架构中，处理器在无事可做时应该执行什么指令？',
    options: ['NOP(空操作)', 'WFI(Wait For Interrupt)或WFE(Wait For Event)进入睡眠', 'HALT(停机)', '继续空循环'],
    answer: 1,
    explanation: 'WFI/WFE指令让处理器进入睡眠状态，中断到来时自动唤醒。这是低功耗设计的标准做法——主循环处理完所有事件后立即睡眠，最大化低功耗时间。'
  },
  {
    id: 107,
    chapterId: 13,
    type: 'truefalse',
    difficulty: 'advanced',
    question: '链式处理器(Chained Processors)架构使用超低功耗小MCU持续监控，仅在需要时唤醒高性能主处理器。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '链式处理器用一个超低功耗MCU（如Cortex-M0+）持续监控环境，只在检测到需要复杂处理的事件时才唤醒高性能主MCU。比让主处理器持续运行节省数量级的能量。'
  },
  {
    id: 108,
    chapterId: 13,
    type: 'single',
    difficulty: 'advanced',
    question: '低功耗设计中，为什么"合并多个任务到同一次唤醒中处理"可以节省能量？',
    options: ['减少代码行数', '每次唤醒有固定的能量开销（重启时钟等），减少唤醒次数可降低总能量', '减少RAM使用', '提高处理精度'],
    answer: 1,
    explanation: '每次唤醒都有固定的能量开销（重启时钟、恢复上下文）。将多个任务合并到一次唤醒中批量处理可以减少唤醒次数，在BLE设备中这种策略很常见。'
  },
  {
    id: 109,
    chapterId: 13,
    type: 'single',
    difficulty: 'intermediate',
    question: '使用什么工具可以将功耗变化与软件事件关联分析？',
    options: ['万用表', '逻辑分析仪', '专用功耗分析工具（如Nordic PPK或Otii Arc）', 'GDB调试器'],
    answer: 2,
    explanation: '专用功耗分析工具可同时记录电流波形和GPIO信号，将功耗变化与软件事件关联。例如看到BLE广播的电流尖峰、传感器采样的功耗曲线。这对优化工作占空比非常有价值。'
  },

  // ============================================================
  // Chapter 14: 电机与运动控制
  // ============================================================
  {
    id: 110,
    chapterId: 14,
    type: 'single',
    difficulty: 'basic',
    question: '步进电机相比直流电机的核心优势是什么？',
    options: ['转速更高', '可以在没有位置反馈的情况下实现开环位置控制', '功耗更低', '成本更低'],
    answer: 1,
    explanation: '步进电机通过精确的脉冲序列控制旋转角度（如1.8°/步），无需编码器反馈即可实现开环位置控制。广泛应用于3D打印机和CNC机床。缺点是高速可能丢步。'
  },
  {
    id: 111,
    chapterId: 14,
    type: 'single',
    difficulty: 'intermediate',
    question: 'PID控制器中，积分项(I)的主要作用是什么？',
    options: ['加快响应速度', '消除稳态误差', '防止过冲', '降低噪声'],
    answer: 1,
    explanation: '积分项累积误差的时间积分。即使当前误差很小，只要持续存在，积分值就不断增长直到消除偏差。副作用是可能导致积分饱和(Integral Windup)。'
  },
  {
    id: 112,
    chapterId: 14,
    type: 'single',
    difficulty: 'intermediate',
    question: 'H桥电路中，shoot-through（直通）是什么？为什么危险？',
    options: ['电机转速过快', '同一桥臂上下开关同时导通造成电源短路', '信号干扰过大', '编码器计数溢出'],
    answer: 1,
    explanation: '同一桥臂上下MOSFET同时导通会造成电源直接短路，瞬间大电流可能烧毁器件。方向切换时必须加入死区时间(Dead Time)防止短暂的同时导通。'
  },
  {
    id: 113,
    chapterId: 14,
    type: 'single',
    difficulty: 'intermediate',
    question: '正交解码(Quadrature Decoding)中，4倍频解码是如何实现的？',
    options: ['对时钟信号4分频', '对A相和B相信号的每个上升沿和下降沿都计数', '使用4个编码器', '将编码器分辨率乘以4'],
    answer: 1,
    explanation: '编码器输出相位差90°的A/B两路方波。对两路信号的每个边沿（上升+下降）都计数，每个基础脉冲产生4个计数事件，将有效分辨率提高到4倍。'
  },
  {
    id: 114,
    chapterId: 14,
    type: 'truefalse',
    difficulty: 'intermediate',
    question: '梯形运动曲线(Trapezoidal Profile)在加速和减速的起止点存在加速度突变(Jerk不连续)，会产生机械冲击。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '梯形曲线分匀加速-匀速-匀减速三段，加速度是阶跃变化的（突然开始突然结束），Jerk为无穷大。S曲线通过限制Jerk使加速度连续平滑来解决此问题。'
  },
  {
    id: 115,
    chapterId: 14,
    type: 'single',
    difficulty: 'advanced',
    question: '电机堵转电流(Stall Current)通常是正常运行电流的多少倍？',
    options: ['1-2倍', '5-10倍', '50-100倍', '与正常电流相同'],
    answer: 1,
    explanation: '电机堵转时反电动势为零，电流仅受绕组电阻限制，可达正常运行电流的5-10倍。电源和驱动器必须能承受此峰值，软启动策略可限制启动电流。'
  },
  {
    id: 116,
    chapterId: 14,
    type: 'single',
    difficulty: 'intermediate',
    question: 'PID控制器中，微分项(D)的特殊作用是什么？',
    options: ['加速收敛', '具有预测性质，对误差变化速度做出反应以防止过冲', '消除稳态误差', '过滤高频噪声'],
    answer: 1,
    explanation: '微分项计算误差的变化率，有阻尼效果。当误差正在快速减小时（接近目标），微分项产生反向力减速防止过冲。但对噪声敏感，实际中需先滤波。'
  },
  {
    id: 117,
    chapterId: 14,
    type: 'single',
    difficulty: 'intermediate',
    question: '反电动势(Back-EMF)可能对驱动电路造成什么损害？',
    options: ['降低电机效率', '回流到电源或控制器造成电压尖峰损坏器件', '使电机反转', '增加噪声'],
    answer: 1,
    explanation: '电机断电后惯性旋转产生的反电动势可能通过驱动电路回流，造成电压尖峰损坏器件。续流二极管(Flyback Diode)或H桥制动模式可安全吸收反电动势。'
  },
  {
    id: 118,
    chapterId: 14,
    type: 'single',
    difficulty: 'basic',
    question: '舵机(Servo)通常通过什么信号控制输出角度？',
    options: ['模拟电压', 'PWM脉宽（1ms-2ms对应不同角度）', 'I2C数据', '串口命令'],
    answer: 1,
    explanation: '标准舵机通过PWM脉宽控制角度，1ms-2ms脉宽对应0°-180°范围。舵机集成了电机、减速齿轮和控制电路，使用简单，常用于机器人关节。'
  }
];
