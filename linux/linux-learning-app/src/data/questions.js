export const questions = {
  'linux-basics': [
    {
      type: 'choice',
      question: 'Linux 内核最初是由谁开发的？',
      options: ['Richard Stallman', 'Linus Torvalds', 'Dennis Ritchie', 'Ken Thompson'],
      answer: 1,
      explanation: 'Linux 内核由芬兰程序员 Linus Torvalds 于 1991 年首次发布。Richard Stallman 创立了 GNU 项目，Dennis Ritchie 和 Ken Thompson 开发了 Unix 和 C 语言。'
    },
    {
      type: 'choice',
      question: '在 Linux 文件系统中，/etc 目录通常存放什么内容？',
      options: ['用户的主目录', '系统配置文件', '可执行程序', '设备文件'],
      answer: 1,
      explanation: '/etc 目录存放系统配置文件，如 /etc/passwd（用户账户信息）、/etc/fstab（文件系统挂载表）、/etc/hosts（主机名映射）等。'
    },
    {
      type: 'choice',
      question: '哪个命令用于递归创建多级目录？',
      options: ['mkdir dir1/dir2', 'mkdir -r dir1/dir2', 'mkdir -p dir1/dir2', 'mkdirs dir1/dir2'],
      answer: 2,
      explanation: 'mkdir -p 选项会递归创建所有不存在的父目录。不加 -p 时，如果父目录不存在则会报错。'
    },
    {
      type: 'truefalse',
      question: '在 Linux 中，隐藏文件和目录的名字以点号（.）开头。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: '在 Linux 中，以点号（.）开头的文件或目录被视为隐藏文件。使用 ls -a 可以显示隐藏文件。'
    },
    {
      type: 'choice',
      question: '命令 chmod 755 file.sh 中，数字 7 表示什么权限？',
      options: ['只读', '读和写', '读和执行', '读、写和执行'],
      answer: 3,
      explanation: '权限数字由 r=4, w=2, x=1 组成。7 = 4+2+1，表示读、写和执行权限。755 表示所有者有 rwx 权限，组用户和其他用户有 rx 权限。'
    },
    {
      type: 'choice',
      question: '以下哪个命令可以实时监控文件的新增内容？',
      options: ['cat -f file', 'head -f file', 'tail -f file', 'less -f file'],
      answer: 2,
      explanation: 'tail -f 命令会持续监控文件末尾的新增内容，常用于实时查看日志文件。'
    },
    {
      type: 'choice',
      question: '管道操作符 | 的作用是什么？',
      options: [
        '将命令的错误输出重定向到文件',
        '将前一个命令的标准输出作为后一个命令的标准输入',
        '同时执行两个命令',
        '将命令放到后台执行'
      ],
      answer: 1,
      explanation: '管道 | 将前一个命令的标准输出（stdout）连接到后一个命令的标准输入（stdin），实现命令间的数据流传递。'
    },
    {
      type: 'choice',
      question: '/dev 目录中存放的是什么类型的文件？',
      options: ['配置文件', '日志文件', '设备文件', '临时文件'],
      answer: 2,
      explanation: '/dev 目录包含设备文件，Linux 通过设备文件来访问硬件设备。如 /dev/sda 代表第一块硬盘，/dev/null 是特殊设备（丢弃所有写入数据）。'
    },
    {
      type: 'choice',
      question: '命令 cat file1.txt >> file2.txt 的作用是什么？',
      options: [
        '用 file1.txt 的内容覆盖 file2.txt',
        '将 file1.txt 的内容追加到 file2.txt 末尾',
        '比较两个文件的内容',
        '将两个文件合并为新文件'
      ],
      answer: 1,
      explanation: '>> 是追加重定向操作符，将输出追加到文件末尾而不覆盖原有内容。> 是覆盖重定向。'
    },
    {
      type: 'choice',
      question: '/proc 目录的特点是什么？',
      options: [
        '存放系统日志',
        '是一个虚拟文件系统，反映内核和进程信息',
        '存放用户程序',
        '存放临时文件'
      ],
      answer: 1,
      explanation: '/proc 是一个虚拟文件系统（pseudo-filesystem），不占用磁盘空间。它由内核动态生成，提供系统和进程的运行时信息，如 /proc/cpuinfo、/proc/meminfo。'
    },
    {
      type: 'choice',
      question: '在 Linux 中，root 用户的 UID 是多少？',
      options: ['0', '1', '100', '1000'],
      answer: 0,
      explanation: 'root 用户（超级用户）的 UID 永远是 0。这是 Linux 内核判断超级用户权限的标准。普通用户的 UID 通常从 1000 开始。'
    },
    {
      type: 'choice',
      question: '以下哪个命令用于在文件中搜索匹配的文本行？',
      options: ['find', 'grep', 'locate', 'which'],
      answer: 1,
      explanation: 'grep 用于在文件内容中搜索匹配正则表达式的行。find 用于按文件名/属性查找文件，locate 使用数据库快速查找文件，which 查找命令的路径。'
    },
    {
      type: 'choice',
      question: '符号链接（软链接）和硬链接的区别是什么？',
      options: [
        '没有区别',
        '软链接可以跨文件系统，硬链接不可以',
        '硬链接可以跨文件系统，软链接不可以',
        '软链接只能链接目录，硬链接只能链接文件'
      ],
      answer: 1,
      explanation: '符号链接（软链接）存储目标文件的路径，可以跨文件系统，可以链接目录。硬链接与原文件共享同一个 inode，不能跨文件系统，不能链接目录。'
    },
    {
      type: 'choice',
      question: '命令 2>&1 的含义是什么？',
      options: [
        '将文件描述符 1 重定向到文件描述符 2',
        '将标准错误重定向到标准输出',
        '将标准输入重定向到文件描述符 2',
        '同时打开两个文件'
      ],
      answer: 1,
      explanation: '2>&1 表示将标准错误（文件描述符 2）重定向到标准输出（文件描述符 1）当前指向的位置。常与 > 配合使用，将所有输出写入同一个文件。'
    },
    {
      type: 'truefalse',
      question: 'Linux 是一个多用户多任务的操作系统。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: 'Linux 从设计之初就是一个多用户多任务操作系统，支持多个用户同时登录系统，每个用户可以同时运行多个进程。'
    }
  ],

  'shell-programming': [
    {
      type: 'choice',
      question: 'Shell 脚本第一行的 #!/bin/bash 被称为什么？',
      options: ['注释', 'Shebang', '头文件', '声明'],
      answer: 1,
      explanation: '#!/bin/bash 称为 Shebang（也叫 hashbang），它告诉系统使用哪个解释器来执行脚本。#! 是一个特殊的字节序列，被系统识别为解释器指令。'
    },
    {
      type: 'choice',
      question: 'Shell 变量赋值时，以下哪种写法是正确的？',
      options: ['name = "Linux"', 'name ="Linux"', 'name= "Linux"', 'name="Linux"'],
      answer: 3,
      explanation: 'Shell 变量赋值时，等号两边不能有空格。name="Linux" 是唯一正确的写法。有空格会被解释为命令执行。'
    },
    {
      type: 'choice',
      question: '特殊变量 $? 表示什么？',
      options: ['当前脚本的进程ID', '上一条命令的退出状态码', '传递给脚本的参数个数', '当前脚本的文件名'],
      answer: 1,
      explanation: '$? 保存上一条命令的退出状态码。返回 0 表示成功，非 0 表示失败。$$ 是当前PID，$# 是参数个数，$0 是脚本名。'
    },
    {
      type: 'choice',
      question: '单引号和双引号在 Shell 中的区别是什么？',
      options: [
        '没有区别',
        '单引号内变量会被替换，双引号内不会',
        '双引号内变量会被替换，单引号内不会',
        '单引号只能包含数字'
      ],
      answer: 2,
      explanation: '双引号 "" 内的变量和命令替换会被执行（如 "$HOME" 输出实际路径）。单引号 \'\' 内所有字符按原样输出（如 \'$HOME\' 输出 $HOME 字面量）。'
    },
    {
      type: 'choice',
      question: 'Shell 中 [ -f /etc/passwd ] 测试的是什么？',
      options: [
        '/etc/passwd 是否为目录',
        '/etc/passwd 是否存在且为普通文件',
        '/etc/passwd 是否可执行',
        '/etc/passwd 是否为空'
      ],
      answer: 1,
      explanation: '-f 操作符测试文件是否存在且为普通文件（regular file）。-d 测试目录，-x 测试可执行，-s 测试文件非空。'
    },
    {
      type: 'code',
      question: '以下脚本的输出是什么？',
      code: '#!/bin/bash\nfor i in 1 2 3; do\n    echo -n "$i "\ndone\necho ""',
      options: ['1\n2\n3', '1 2 3 ', '123', '1, 2, 3'],
      answer: 1,
      explanation: 'for 循环遍历列表 1 2 3，echo -n 不换行输出。每次循环输出数字后接一个空格，最终结果是 "1 2 3 "。'
    },
    {
      type: 'choice',
      question: 'Shell 中 $() 和反引号 `` 的作用是什么？',
      options: ['字符串连接', '算术运算', '命令替换', '模式匹配'],
      answer: 2,
      explanation: '$() 和反引号都用于命令替换，执行括号/引号内的命令并将输出替换到当前位置。推荐使用 $()，因为它支持嵌套且更可读。'
    },
    {
      type: 'choice',
      question: 'Shell 中 read -p "Enter: " var 的作用是什么？',
      options: [
        '从文件中读取一行',
        '显示提示信息并从标准输入读取到变量 var',
        '将字符串 "Enter: " 赋值给 var',
        '打印变量 var 的值'
      ],
      answer: 1,
      explanation: 'read 命令从标准输入读取一行数据。-p 选项指定提示信息，用户输入的内容保存到变量 var 中。'
    },
    {
      type: 'choice',
      question: '在 case 语句中，每个分支以什么结尾？',
      options: ['break', ';;', 'end', 'done'],
      answer: 1,
      explanation: 'Shell 的 case 语句中，每个匹配分支以 ;; 结尾。这类似于其他语言的 break，但语法不同。case 语句以 esac 结束。'
    },
    {
      type: 'choice',
      question: 'Shell 中 local 关键字的作用是什么？',
      options: [
        '声明环境变量',
        '声明全局变量',
        '声明函数内的局部变量',
        '声明只读变量'
      ],
      answer: 2,
      explanation: 'local 关键字只能在函数内使用，声明局部变量。局部变量只在函数作用域内有效。Shell 函数中不使用 local 声明的变量默认是全局的。'
    },
    {
      type: 'code',
      question: '以下脚本执行后变量 result 的值是多少？',
      code: '#!/bin/bash\nresult=$((3 + 5 * 2))\necho $result',
      options: ['16', '13', '11', '8'],
      answer: 1,
      explanation: '$((...)) 是 Shell 的算术运算。按照数学运算优先级，先计算 5*2=10，再加 3，结果为 13。'
    },
    {
      type: 'choice',
      question: 'while IFS= read -r line; do ... done < file 中，-r 选项的作用是什么？',
      options: [
        '递归读取',
        '逆序读取',
        '不对反斜杠做转义处理',
        '只读取一行'
      ],
      answer: 2,
      explanation: 'read -r 选项防止反斜杠被解释为转义字符。没有 -r 时，行末的 \\ 会被当作续行符，\\n 会被当作换行符。'
    },
    {
      type: 'choice',
      question: 'Shell 函数如何返回字符串数据？',
      options: [
        '使用 return "string"',
        '使用 echo 输出，调用方用 $() 捕获',
        '使用 printf 直接返回',
        'Shell 函数不能返回字符串'
      ],
      answer: 1,
      explanation: 'Shell 的 return 只能返回 0-255 的整数状态码。要返回字符串数据，需要在函数中用 echo 输出，调用方用 result=$(func) 捕获。'
    },
    {
      type: 'truefalse',
      question: 'Shell 脚本中，# 开头的行（除 Shebang 外）是注释，不会被执行。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: '在 Shell 脚本中，# 开头的行是注释，Shell 解释器会忽略这些行。唯一的例外是第一行的 #!（Shebang），它被系统识别为解释器指令。'
    },
    {
      type: 'choice',
      question: '以下哪个命令可以将 Shell 变量导出为环境变量？',
      options: ['set', 'export', 'declare', 'env'],
      answer: 1,
      explanation: 'export 命令将 Shell 变量导出为环境变量，使其在子进程中也可用。set 显示所有变量，declare 声明变量属性，env 显示环境变量。'
    }
  ],

  'c-dev-env': [
    {
      type: 'choice',
      question: 'GCC 编译过程的正确顺序是什么？',
      options: [
        '编译 → 预处理 → 汇编 → 链接',
        '预处理 → 编译 → 汇编 → 链接',
        '预处理 → 汇编 → 编译 → 链接',
        '编译 → 汇编 → 预处理 → 链接'
      ],
      answer: 1,
      explanation: 'GCC 编译的四个阶段是：预处理（处理 #include 和 #define）→ 编译（生成汇编代码 .s）→ 汇编（生成目标文件 .o）→ 链接（生成可执行文件）。'
    },
    {
      type: 'choice',
      question: 'GCC 的 -g 选项的作用是什么？',
      options: [
        '生成优化代码',
        '生成调试信息',
        '生成共享库',
        '生成汇编代码'
      ],
      answer: 1,
      explanation: '-g 选项让 GCC 在编译时生成调试信息（DWARF 格式），使得程序可以用 GDB 进行源码级调试。'
    },
    {
      type: 'choice',
      question: 'gcc main.c -lm 中 -lm 表示链接什么库？',
      options: ['内存管理库', '数学库', '多线程库', '消息队列库'],
      answer: 1,
      explanation: '-l 选项用于链接库文件。-lm 链接数学库 libm.so（包含 sin、cos、sqrt 等函数）。-lpthread 链接线程库。'
    },
    {
      type: 'choice',
      question: '在 GDB 中，哪个命令用于设置断点？',
      options: ['stop', 'break', 'pause', 'halt'],
      answer: 1,
      explanation: 'GDB 中使用 break（简写 b）命令设置断点。可以按行号（break 25）或函数名（break main）设置。'
    },
    {
      type: 'choice',
      question: 'Makefile 中 $@ 自动变量代表什么？',
      options: ['第一个依赖文件', '所有依赖文件', '当前目标文件名', '当前目录'],
      answer: 2,
      explanation: 'Makefile 自动变量：$@ 代表当前规则的目标，$< 代表第一个依赖，$^ 代表所有依赖（去重）。'
    },
    {
      type: 'choice',
      question: 'Makefile 中命令行必须以什么开头？',
      options: ['空格', 'Tab', '#', '@'],
      answer: 1,
      explanation: 'Makefile 的规则中，命令行必须以 Tab 字符（不是空格）开头。这是 Make 的语法要求，用空格缩进会导致语法错误。'
    },
    {
      type: 'choice',
      question: 'gcc -Wall 选项的含义是什么？',
      options: [
        '编译所有文件',
        '开启所有警告信息',
        '写入所有日志',
        '链接所有库'
      ],
      answer: 1,
      explanation: '-Wall 表示 Warning All，开启大多数编译警告信息。这是良好的编程习惯，帮助发现潜在的代码问题。'
    },
    {
      type: 'choice',
      question: 'GDB 中 next 和 step 命令的区别是什么？',
      options: [
        '没有区别',
        'next 进入函数，step 不进入函数',
        'next 不进入函数，step 进入函数',
        'next 向前执行，step 向后执行'
      ],
      answer: 2,
      explanation: 'next（简写 n）单步执行但不进入函数调用（step over）。step（简写 s）单步执行并进入函数调用（step into）。'
    },
    {
      type: 'choice',
      question: 'gcc -c main.c 命令执行后生成什么文件？',
      options: ['可执行文件 main', '目标文件 main.o', '汇编文件 main.s', '预处理文件 main.i'],
      answer: 1,
      explanation: '-c 选项告诉 GCC 只编译不链接，生成目标文件（.o 文件）。需要后续链接步骤才能生成可执行文件。'
    },
    {
      type: 'choice',
      question: 'Linux 内核编码风格推荐的缩进方式是什么？',
      options: ['2 个空格', '4 个空格', 'Tab（8 个空格宽度）', 'Tab（4 个空格宽度）'],
      answer: 2,
      explanation: 'Linux 内核编码风格使用 Tab 缩进，Tab 宽度为 8 个空格。这是为了让过深的嵌套更加明显，促使开发者减少嵌套层级。'
    },
    {
      type: 'choice',
      question: 'valgrind 工具的主要用途是什么？',
      options: [
        '代码格式化',
        '内存泄漏检测',
        '性能分析',
        '代码覆盖率测试'
      ],
      answer: 1,
      explanation: 'valgrind 是 Linux 下最常用的内存调试工具，可以检测内存泄漏、越界访问、使用未初始化内存等问题。'
    },
    {
      type: 'choice',
      question: '.PHONY 在 Makefile 中的含义是什么？',
      options: [
        '声明文件依赖',
        '声明目标不对应实际文件',
        '声明变量',
        '声明默认目标'
      ],
      answer: 1,
      explanation: '.PHONY 声明伪目标，即该目标名不对应实际文件。常用于 clean、install 等目标，确保即使存在同名文件也能执行。'
    },
    {
      type: 'choice',
      question: 'strace 工具的功能是什么？',
      options: [
        '跟踪库函数调用',
        '跟踪系统调用',
        '跟踪网络数据包',
        '跟踪文件变化'
      ],
      answer: 1,
      explanation: 'strace 跟踪进程执行的系统调用及其参数和返回值，是调试和分析程序行为的强大工具。ltrace 用于跟踪库函数调用。'
    },
    {
      type: 'choice',
      question: 'GCC 中 -I 选项的作用是什么？',
      options: [
        '指定输入文件',
        '指定头文件搜索路径',
        '指定库文件路径',
        '启用内联优化'
      ],
      answer: 1,
      explanation: '-I（大写 i）选项添加头文件搜索路径。-L 添加库文件搜索路径。-l（小写 L）指定要链接的库。'
    },
    {
      type: 'truefalse',
      question: 'GDB 调试程序时，编译必须加 -g 选项才能进行源码级调试。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: '没有 -g 选项时，GDB 只能在汇编级别调试。加 -g 后编译器会在可执行文件中嵌入调试信息（源码行号、变量名等），才能进行源码级调试。'
    }
  ],

  'file-operations': [
    {
      type: 'choice',
      question: '在 Linux 中，标准输入、标准输出、标准错误对应的文件描述符分别是什么？',
      options: ['1, 2, 3', '0, 1, 2', '0, 1, 3', '1, 2, 0'],
      answer: 1,
      explanation: '标准输入（stdin）= 0（STDIN_FILENO），标准输出（stdout）= 1（STDOUT_FILENO），标准错误（stderr）= 2（STDERR_FILENO）。'
    },
    {
      type: 'choice',
      question: 'open() 系统调用成功时返回什么？',
      options: ['0', '1', '文件描述符（非负整数）', 'FILE 指针'],
      answer: 2,
      explanation: 'open() 成功时返回一个文件描述符（非负整数），失败时返回 -1 并设置 errno。文件描述符是内核为每个打开文件分配的标识。'
    },
    {
      type: 'choice',
      question: 'fopen() 和 open() 的主要区别是什么？',
      options: [
        '没有区别',
        'fopen 返回 FILE* 并有缓冲，open 返回 fd 无缓冲',
        'open 有缓冲，fopen 无缓冲',
        'fopen 只能打开文本文件'
      ],
      answer: 1,
      explanation: 'fopen() 是标准 C 库函数，返回 FILE* 流指针，提供自动缓冲管理。open() 是系统调用，返回文件描述符（int），没有用户态缓冲。'
    },
    {
      type: 'choice',
      question: 'O_CREAT | O_TRUNC 标志组合的效果是什么？',
      options: [
        '创建文件，如果已存在则追加',
        '创建文件，如果已存在则清空内容',
        '打开文件，如果不存在则报错',
        '创建文件，如果已存在则报错'
      ],
      answer: 1,
      explanation: 'O_CREAT 表示文件不存在时创建。O_TRUNC 表示如果文件已存在则将其长度截断为 0（清空内容）。两者组合常用于写入全新内容。'
    },
    {
      type: 'choice',
      question: 'stat() 函数的作用是什么？',
      options: [
        '修改文件内容',
        '获取文件属性信息',
        '创建文件',
        '删除文件'
      ],
      answer: 1,
      explanation: 'stat() 获取文件的属性信息（存入 struct stat 结构体），包括文件类型、权限、大小、修改时间、inode 号等。'
    },
    {
      type: 'choice',
      question: '标准 I/O 库的三种缓冲类型是什么？',
      options: [
        '输入缓冲、输出缓冲、错误缓冲',
        '文件缓冲、内存缓冲、网络缓冲',
        '全缓冲、行缓冲、无缓冲',
        '读缓冲、写缓冲、双向缓冲'
      ],
      answer: 2,
      explanation: '标准 I/O 有三种缓冲：全缓冲（缓冲区满才刷新，磁盘文件默认）、行缓冲（遇换行符刷新，终端默认）、无缓冲（立即输出，stderr 默认）。'
    },
    {
      type: 'choice',
      question: 'lseek() 函数的作用是什么？',
      options: [
        '锁定文件',
        '移动文件读写位置偏移量',
        '搜索文件内容',
        '链接文件'
      ],
      answer: 1,
      explanation: 'lseek() 用于移动文件的读写位置偏移量。可以从文件头（SEEK_SET）、当前位置（SEEK_CUR）或文件尾（SEEK_END）计算偏移。'
    },
    {
      type: 'code',
      question: '以下代码中，如果 /etc/hostname 不存在，程序会输出什么？',
      code: 'int fd = open("/etc/hostname", O_RDONLY);\nif (fd == -1) {\n    perror("open");\n    exit(1);\n}',
      options: [
        '程序正常退出',
        'open: No such file or directory（并退出）',
        '段错误',
        '什么都不输出'
      ],
      answer: 1,
      explanation: 'open() 失败返回 -1 并设置 errno。perror() 会输出参数字符串 "open" 加冒号加 errno 对应的错误描述。然后 exit(1) 退出程序。'
    },
    {
      type: 'choice',
      question: 'opendir() 函数返回什么类型的指针？',
      options: ['FILE *', 'DIR *', 'int *', 'void *'],
      answer: 1,
      explanation: 'opendir() 成功时返回 DIR* 指针，用于后续的 readdir() 调用来遍历目录项。失败返回 NULL。'
    },
    {
      type: 'choice',
      question: 'S_ISDIR(mode) 宏用于判断什么？',
      options: [
        '文件是否可读',
        '文件是否为目录',
        '文件是否为符号链接',
        '文件是否为空'
      ],
      answer: 1,
      explanation: 'S_ISDIR() 宏用于判断 stat 结构体的 st_mode 字段是否表示目录类型。类似的宏还有 S_ISREG()（普通文件）、S_ISLNK()（符号链接）。'
    },
    {
      type: 'choice',
      question: 'read() 系统调用返回 0 表示什么？',
      options: [
        '读取失败',
        '数据为空',
        '到达文件末尾（EOF）',
        '管道阻塞'
      ],
      answer: 2,
      explanation: 'read() 返回 0 表示到达文件末尾（EOF）。返回正数表示实际读取的字节数。返回 -1 表示出错。'
    },
    {
      type: 'choice',
      question: 'fflush(stdout) 的作用是什么？',
      options: [
        '关闭标准输出',
        '清空标准输出的内容',
        '强制将缓冲区数据写入标准输出',
        '重置文件位置'
      ],
      answer: 2,
      explanation: 'fflush() 强制将流的输出缓冲区中的数据立即写出。对于标准输出（行缓冲），在不换行时调用 fflush(stdout) 可以确保数据立即显示。'
    },
    {
      type: 'choice',
      question: '文件权限 0644 表示什么？',
      options: [
        '所有人都有读写执行权限',
        '所有者读写，组和其他只读',
        '所有者读写执行，组和其他读执行',
        '所有者只读，组和其他只写'
      ],
      answer: 1,
      explanation: '0644：所有者 6(rw-)可读写，组 4(r--)只读，其他 4(r--)只读。这是普通文件最常见的权限设置。'
    },
    {
      type: 'truefalse',
      question: 'write() 系统调用写入的字节数可能少于请求的字节数。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: 'write() 可能返回小于请求的字节数（称为短写），特别是在写入管道、socket 或磁盘空间不足时。需要循环写入确保所有数据写完。'
    },
    {
      type: 'choice',
      question: 'getcwd() 函数的功能是什么？',
      options: [
        '创建工作目录',
        '获取当前工作目录路径',
        '改变当前工作目录',
        '删除工作目录'
      ],
      answer: 1,
      explanation: 'getcwd() 获取当前工作目录的绝对路径并存入提供的缓冲区。chdir() 用于改变当前工作目录。'
    }
  ],

  'linux-env': [
    {
      type: 'choice',
      question: 'getopt() 函数的 optarg 全局变量保存什么？',
      options: [
        '当前选项字符',
        '选项的参数值',
        '剩余参数的个数',
        '错误信息'
      ],
      answer: 1,
      explanation: 'optarg 指向当前选项的参数值字符串。例如命令 -o output.txt 中，处理 -o 选项时 optarg 指向 "output.txt"。'
    },
    {
      type: 'choice',
      question: 'getenv("HOME") 返回 NULL 表示什么？',
      options: [
        '内存不足',
        '函数调用失败',
        '环境变量 HOME 不存在',
        '返回空字符串'
      ],
      answer: 2,
      explanation: 'getenv() 在找不到指定的环境变量时返回 NULL。找到时返回指向该环境变量值字符串的指针。'
    },
    {
      type: 'choice',
      question: 'setenv() 的第三个参数 overwrite 为 0 时，行为是什么？',
      options: [
        '总是设置环境变量',
        '如果已存在则不覆盖',
        '删除环境变量',
        '报错'
      ],
      answer: 1,
      explanation: 'setenv(name, value, overwrite) 中 overwrite=0 时，如果环境变量已存在则保持原值不变。overwrite 非 0 时则覆盖原值。'
    },
    {
      type: 'choice',
      question: 'time() 函数返回的时间是从哪个时间点开始计算的？',
      options: [
        '系统启动时间',
        '1970年1月1日 00:00:00 UTC',
        '2000年1月1日',
        '程序启动时间'
      ],
      answer: 1,
      explanation: 'time() 返回自 Unix 纪元（1970-01-01 00:00:00 UTC，即 Epoch）以来经过的秒数。这是 Unix/Linux 系统中时间表示的基础。'
    },
    {
      type: 'choice',
      question: 'struct tm 中 tm_mon 字段的取值范围是什么？',
      options: ['1-12', '0-11', '0-12', '1-13'],
      answer: 1,
      explanation: 'struct tm 中 tm_mon 范围是 0-11（0 表示一月，11 表示十二月）。tm_year 是从 1900 开始的偏移量。这是常见的易错点。'
    },
    {
      type: 'choice',
      question: 'strftime() 函数的作用是什么？',
      options: [
        '解析时间字符串',
        '将 struct tm 格式化为字符串',
        '计算时间差',
        '设置系统时间'
      ],
      answer: 1,
      explanation: 'strftime() 按照指定格式将 struct tm 格式化为字符串。如 strftime(buf, size, "%Y-%m-%d %H:%M:%S", tm) 生成 "2024-01-15 14:30:00" 格式。'
    },
    {
      type: 'choice',
      question: 'syslog() 中 LOG_ERR 和 LOG_WARNING 哪个优先级更高？',
      options: [
        'LOG_WARNING 更高',
        'LOG_ERR 更高',
        '相同',
        '取决于配置'
      ],
      answer: 1,
      explanation: 'syslog 优先级从高到低：EMERG > ALERT > CRIT > ERR > WARNING > NOTICE > INFO > DEBUG。LOG_ERR 表示错误条件，优先级高于 LOG_WARNING。'
    },
    {
      type: 'choice',
      question: 'extern char **environ 是什么？',
      options: [
        '命令行参数数组',
        '指向所有环境变量字符串数组的指针',
        '系统配置数组',
        '文件描述符数组'
      ],
      answer: 1,
      explanation: 'environ 是一个全局变量，指向环境变量字符串数组。每个元素是 "NAME=value" 格式的字符串，以 NULL 结尾。'
    },
    {
      type: 'choice',
      question: 'getopt() 的选项字符串 "vo:h" 中冒号表示什么？',
      options: [
        '-o 是可选选项',
        '-o 后面必须跟参数',
        '所有选项都需要参数',
        '分隔符'
      ],
      answer: 1,
      explanation: '选项字符后的冒号(:)表示该选项需要一个参数。"vo:h" 表示 -v 和 -h 不需要参数，-o 需要一个参数（如 -o filename）。'
    },
    {
      type: 'choice',
      question: 'gettimeofday() 相比 time() 的优势是什么？',
      options: [
        '可以设置时间',
        '可以获取微秒级精度',
        '可以获取时区信息',
        '运行速度更快'
      ],
      answer: 1,
      explanation: 'gettimeofday() 返回 struct timeval，包含秒（tv_sec）和微秒（tv_usec）两个字段，精度比 time()（只有秒级）高得多。'
    },
    {
      type: 'truefalse',
      question: '子进程会继承父进程的环境变量。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: '子进程在创建时（fork）会获得父进程环境变量的副本。子进程对环境变量的修改不会影响父进程。'
    },
    {
      type: 'choice',
      question: 'openlog() 函数中 LOG_PID 标志的作用是什么？',
      options: [
        '只记录 PID 信息',
        '在每条日志中包含进程 ID',
        '按 PID 过滤日志',
        '设置日志文件路径'
      ],
      answer: 1,
      explanation: 'LOG_PID 标志让 syslog 在每条日志消息中自动包含当前进程的 PID，方便在多进程环境中追踪日志来源。'
    }
  ],

  'process-mgmt': [
    {
      type: 'choice',
      question: 'fork() 调用成功时，在父进程和子进程中的返回值分别是什么？',
      options: [
        '父进程返回 0，子进程返回子进程 PID',
        '父进程返回子进程 PID，子进程返回 0',
        '两者都返回 0',
        '两者都返回子进程 PID'
      ],
      answer: 1,
      explanation: 'fork() 调用一次返回两次：在父进程中返回新创建子进程的 PID（正整数），在子进程中返回 0。这是区分父子进程的关键方法。'
    },
    {
      type: 'choice',
      question: '僵尸进程（Zombie）是如何产生的？',
      options: [
        '进程使用了过多内存',
        '子进程终止但父进程未调用 wait()',
        '进程被 SIGKILL 杀死',
        '进程进入死循环'
      ],
      answer: 1,
      explanation: '当子进程终止后，内核保留其退出状态信息等待父进程获取。如果父进程一直不调用 wait/waitpid 收集子进程状态，子进程就变成僵尸进程。'
    },
    {
      type: 'choice',
      question: 'exec 系列函数调用成功后会发生什么？',
      options: [
        '创建一个新进程',
        '当前进程的程序映像被新程序替换，不返回',
        '新程序在子进程中执行',
        '返回新进程的 PID'
      ],
      answer: 1,
      explanation: 'exec 成功后，当前进程的代码段、数据段、堆和栈都被新程序替换，从新程序的 main 开始执行。exec 不会创建新进程，PID 不变。成功则不返回。'
    },
    {
      type: 'choice',
      question: 'WIFEXITED(status) 宏的作用是什么？',
      options: [
        '获取子进程的退出码',
        '判断子进程是否正常终止',
        '判断子进程是否被信号杀死',
        '等待子进程退出'
      ],
      answer: 1,
      explanation: 'WIFEXITED(status) 判断子进程是否正常终止（通过 exit() 或 return）。配合 WEXITSTATUS(status) 可获取实际退出码。'
    },
    {
      type: 'choice',
      question: '创建守护进程时为什么要调用 setsid()？',
      options: [
        '设置进程优先级',
        '创建新会话，脱离控制终端',
        '设置进程的用户 ID',
        '设置信号处理函数'
      ],
      answer: 1,
      explanation: 'setsid() 创建一个新会话（session），使进程成为新会话的首进程，脱离原来的控制终端。这是守护进程不受终端关闭影响的关键步骤。'
    },
    {
      type: 'code',
      question: '以下代码执行后，总共有几个进程？',
      code: 'fork();\nfork();\nprintf("hello\\n");',
      options: ['2 个', '3 个', '4 个', '8 个'],
      answer: 2,
      explanation: '第一次 fork() 后有 2 个进程。第二次 fork() 每个进程各创建一个子进程，共 4 个进程。每个进程都会执行 printf，所以输出 4 次 hello。'
    },
    {
      type: 'choice',
      question: 'waitpid(-1, &status, WNOHANG) 中 WNOHANG 的作用是什么？',
      options: [
        '等待所有子进程',
        '如果没有子进程终止则立即返回（非阻塞）',
        '只等待指定的子进程',
        '忽略子进程的退出状态'
      ],
      answer: 1,
      explanation: 'WNOHANG 标志使 waitpid 变为非阻塞模式。如果没有子进程终止，立即返回 0 而不是阻塞等待。-1 表示等待任意子进程。'
    },
    {
      type: 'choice',
      question: 'fork() 创建的子进程与父进程共享什么？',
      options: [
        '堆内存',
        '栈内存',
        '代码段（只读）',
        '局部变量'
      ],
      answer: 2,
      explanation: 'fork() 后父子进程共享代码段（因为是只读的）。数据段、堆、栈都是写时复制（COW）——看起来独立，实际在修改时才复制。'
    },
    {
      type: 'choice',
      question: 'execvp("ls", argv) 中 p 后缀的含义是什么？',
      options: [
        '传递进程 ID',
        '使用 PATH 环境变量搜索可执行文件',
        '传递管道',
        '使用绝对路径'
      ],
      answer: 1,
      explanation: 'exec 函数名中的 p 表示使用 PATH 环境变量搜索可执行文件。不带 p 的版本（如 execv）需要指定可执行文件的完整路径。'
    },
    {
      type: 'truefalse',
      question: 'fork() 后子进程的 PID 和父进程相同。',
      options: ['正确', '错误'],
      answer: 1,
      explanation: '子进程拥有独立的 PID。fork() 在父进程中返回子进程的 PID，在子进程中返回 0。可以通过 getpid() 和 getppid() 分别获取自身和父进程的 PID。'
    },
    {
      type: 'choice',
      question: '守护进程创建中为什么要两次 fork？',
      options: [
        '创建两个工作子进程',
        '第二次 fork 确保进程不是会话首进程，不会重新获取控制终端',
        '增加进程优先级',
        '分离标准输入输出'
      ],
      answer: 1,
      explanation: '第一次 fork + setsid 创建新会话。但会话首进程可能重新打开终端。第二次 fork 使最终的守护进程不是会话首进程，确保永远无法获取控制终端。'
    },
    {
      type: 'choice',
      question: '以下哪个不是进程的内存段？',
      options: ['代码段（text）', '数据段（data）', '缓存段（cache）', '栈（stack）'],
      answer: 2,
      explanation: '进程典型的内存布局包括：代码段（text）、数据段（data/bss）、堆（heap）、栈（stack）。不存在所谓的"缓存段"。'
    }
  ],

  'signals': [
    {
      type: 'choice',
      question: '以下哪个信号不能被捕获或忽略？',
      options: ['SIGTERM', 'SIGINT', 'SIGKILL', 'SIGUSR1'],
      answer: 2,
      explanation: 'SIGKILL（9）和 SIGSTOP（19）是不能被捕获、阻塞或忽略的。这保证了系统管理员始终能强制终止或暂停进程。'
    },
    {
      type: 'choice',
      question: 'Ctrl+C 发送的是哪个信号？',
      options: ['SIGTERM', 'SIGQUIT', 'SIGINT', 'SIGKILL'],
      answer: 2,
      explanation: 'Ctrl+C 向前台进程组发送 SIGINT（信号 2）。Ctrl+\\ 发送 SIGQUIT（3）。kill 命令默认发送 SIGTERM（15）。'
    },
    {
      type: 'choice',
      question: 'signal(SIGINT, SIG_IGN) 的作用是什么？',
      options: [
        '终止进程',
        '忽略 SIGINT 信号',
        '恢复 SIGINT 的默认处理',
        '阻塞 SIGINT 信号'
      ],
      answer: 1,
      explanation: 'SIG_IGN 表示忽略信号。调用后进程收到 SIGINT 信号时不做任何处理。SIG_DFL 表示恢复默认处理行为。'
    },
    {
      type: 'choice',
      question: 'sigaction() 相比 signal() 的优势是什么？',
      options: [
        '执行更快',
        '占用更少内存',
        '行为在所有 Unix 系统上一致，且提供更多控制选项',
        '可以发送信号'
      ],
      answer: 2,
      explanation: 'signal() 在不同系统上的语义不一致（如处理器是否自动重置）。sigaction() 提供精确控制：信号屏蔽、标志位（SA_RESTART 等）、行为在所有 POSIX 系统上一致。'
    },
    {
      type: 'choice',
      question: 'SA_RESTART 标志的作用是什么？',
      options: [
        '重启信号处理函数',
        '自动重启被信号中断的系统调用',
        '重启进程',
        '重复发送信号'
      ],
      answer: 1,
      explanation: '当信号中断一个慢速系统调用（如 read、accept）时，SA_RESTART 标志让该系统调用自动重新执行，而不是返回 EINTR 错误。'
    },
    {
      type: 'choice',
      question: 'sigprocmask(SIG_BLOCK, &set, NULL) 的功能是什么？',
      options: [
        '解除信号屏蔽',
        '将 set 中的信号添加到进程的信号屏蔽字',
        '删除所有信号处理器',
        '发送 set 中的信号'
      ],
      answer: 1,
      explanation: 'SIG_BLOCK 将 set 中的信号添加到当前的信号屏蔽字中。被屏蔽的信号不会被递送，而是保持挂起状态直到解除屏蔽。'
    },
    {
      type: 'choice',
      question: '在信号处理函数中使用 printf() 安全吗？',
      options: [
        '安全',
        '不安全，printf 不是异步信号安全函数',
        '只在 Linux 上安全',
        '只对 SIGINT 安全'
      ],
      answer: 1,
      explanation: 'printf() 不是异步信号安全（async-signal-safe）函数，在信号处理函数中调用可能导致死锁或数据损坏。应使用 write() 等异步信号安全函数。'
    },
    {
      type: 'choice',
      question: 'volatile sig_atomic_t 类型的作用是什么？',
      options: [
        '用于存储文件描述符',
        '用于信号处理器和主程序间安全共享的标志变量',
        '用于存储进程 ID',
        '用于多线程同步'
      ],
      answer: 1,
      explanation: 'volatile 防止编译器优化掉对变量的读取。sig_atomic_t 保证原子性读写。两者结合用于信号处理函数和主程序之间安全地共享标志变量。'
    },
    {
      type: 'choice',
      question: 'kill(pid, 0) 的作用是什么？',
      options: [
        '杀死进程',
        '检测进程是否存在',
        '发送信号 0',
        '什么都不做'
      ],
      answer: 1,
      explanation: 'kill() 发送信号 0 时不会真正发送信号，但会进行权限检查和进程存在性检查。如果进程存在且有权限，返回 0；否则返回 -1。'
    },
    {
      type: 'choice',
      question: 'pause() 函数的行为是什么？',
      options: [
        '暂停程序 1 秒',
        '挂起进程直到捕获一个信号',
        '暂停所有子进程',
        '暂停信号递送'
      ],
      answer: 1,
      explanation: 'pause() 使调用进程挂起，直到捕获一个信号并从信号处理函数返回。pause() 始终返回 -1，errno 设为 EINTR。'
    },
    {
      type: 'choice',
      question: 'SIGCHLD 信号在什么时候产生？',
      options: [
        '子进程创建时',
        '子进程终止或停止时',
        '父进程调用 wait 时',
        '进程间通信时'
      ],
      answer: 1,
      explanation: 'SIGCHLD 信号在子进程终止、停止或继续时发送给父进程。常用于异步回收子进程状态，避免僵尸进程。'
    },
    {
      type: 'truefalse',
      question: '被屏蔽（阻塞）的信号会被丢弃。',
      options: ['正确', '错误'],
      answer: 1,
      explanation: '被屏蔽的信号不会被丢弃，而是保持"挂起"（pending）状态。当信号屏蔽被解除后，挂起的信号会被递送。但多个相同的挂起信号可能只递送一次。'
    }
  ],

  'ipc': [
    {
      type: 'choice',
      question: 'pipe() 创建的管道中，fd[0] 和 fd[1] 分别用于什么？',
      options: [
        'fd[0] 写入，fd[1] 读取',
        'fd[0] 读取，fd[1] 写入',
        '都可以读写',
        '取决于进程角色'
      ],
      answer: 1,
      explanation: 'pipe(fd) 创建管道后，fd[0] 用于读取，fd[1] 用于写入。记忆方法：0 对应 stdin（读），1 对应 stdout（写）。'
    },
    {
      type: 'choice',
      question: '匿名管道的局限性是什么？',
      options: [
        '只能传输文本数据',
        '只能在有亲缘关系的进程间使用',
        '数据会被加密',
        '只能单向传输且无限缓冲'
      ],
      answer: 1,
      explanation: '匿名管道只能在有亲缘关系（如父子进程）的进程间使用，因为管道的文件描述符需要通过 fork() 继承。命名管道（FIFO）可以在任意进程间使用。'
    },
    {
      type: 'choice',
      question: '共享内存是最快的 IPC 方式，原因是什么？',
      options: [
        '使用了硬件加速',
        '数据不需要在进程间复制，直接访问同一块内存',
        '内核提供了特殊优化',
        '数据通过 DMA 传输'
      ],
      answer: 1,
      explanation: '管道、消息队列等 IPC 需要将数据从发送进程复制到内核，再从内核复制到接收进程（两次复制）。共享内存映射同一物理内存，无需复制。'
    },
    {
      type: 'choice',
      question: '使用共享内存时通常还需要什么机制？',
      options: [
        '管道',
        '同步机制（如信号量或互斥锁）',
        '消息队列',
        '网络协议'
      ],
      answer: 1,
      explanation: '共享内存本身不提供同步。多个进程同时读写共享内存会导致竞争条件（race condition），必须使用信号量、互斥锁等同步机制来保护访问。'
    },
    {
      type: 'choice',
      question: 'System V 消息队列中 msgsnd() 的消息结构体有什么要求？',
      options: [
        '第一个字段必须是消息长度',
        '第一个字段必须是 long 类型的消息类型',
        '必须包含发送者 PID',
        '没有特殊要求'
      ],
      answer: 1,
      explanation: '消息结构体的第一个字段必须是 long mtype（消息类型，必须大于 0）。msgrcv() 可以根据 mtype 选择性接收特定类型的消息。'
    },
    {
      type: 'choice',
      question: '当管道的写端被关闭后，读端 read() 返回什么？',
      options: [
        '返回 -1',
        '返回 0（EOF）',
        '无限阻塞',
        '返回最后写入的数据'
      ],
      answer: 1,
      explanation: '当管道所有写端被关闭后，read() 在读完管道中的数据后返回 0（EOF）。这是管道通信的正常结束方式。'
    },
    {
      type: 'choice',
      question: '命名管道（FIFO）与匿名管道的区别是什么？',
      options: [
        'FIFO 是双向的',
        'FIFO 在文件系统中有路径名，不需要进程有亲缘关系',
        'FIFO 速度更快',
        'FIFO 没有缓冲区大小限制'
      ],
      answer: 1,
      explanation: 'FIFO 在文件系统中有一个路径名，任何进程都可以通过路径名打开它进行通信。FIFO 同样是半双工的，有缓冲区限制。'
    },
    {
      type: 'choice',
      question: 'shmget() 函数的作用是什么？',
      options: [
        '读取共享内存',
        '创建或获取共享内存段',
        '附加共享内存',
        '删除共享内存'
      ],
      answer: 1,
      explanation: 'shmget() 使用 key 创建新的或获取已有的共享内存段，返回共享内存标识符。shmat() 用于附加，shmdt() 用于分离，shmctl() 用于删除。'
    },
    {
      type: 'choice',
      question: 'ftok() 函数的用途是什么？',
      options: [
        '创建文件',
        '根据文件路径和项目 ID 生成 IPC 键值',
        '打开文件并获取 token',
        '生成随机数'
      ],
      answer: 1,
      explanation: 'ftok(pathname, proj_id) 根据文件路径和项目 ID 生成一个唯一的 key_t 键值，用于 shmget()、msgget()、semget() 等 IPC 函数。'
    },
    {
      type: 'choice',
      question: '向已关闭读端的管道写数据会发生什么？',
      options: [
        '数据丢失',
        '产生 SIGPIPE 信号',
        '返回成功',
        '阻塞等待'
      ],
      answer: 1,
      explanation: '如果管道所有读端都关闭了，向写端写数据会产生 SIGPIPE 信号。SIGPIPE 的默认行为是终止进程。write() 返回 -1，errno 为 EPIPE。'
    },
    {
      type: 'choice',
      question: 'IPC_RMID 标志在 shmctl() 中的作用是什么？',
      options: [
        '重置共享内存内容',
        '标记共享内存段为删除（最后分离时删除）',
        '立即删除并释放内存',
        '只读模式'
      ],
      answer: 1,
      explanation: 'shmctl(id, IPC_RMID, NULL) 将共享内存段标记为删除。它不会立即销毁，而是等所有进程都调用 shmdt() 分离后才真正释放。'
    },
    {
      type: 'truefalse',
      question: '管道中的数据一旦被读取就会被消耗，不能重复读取。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: '管道是先进先出（FIFO）的字节流，数据被读取后就从管道缓冲区中移除。多个读进程读取同一管道时，数据会被分割，每段只被一个进程读取。'
    }
  ],

  'threads': [
    {
      type: 'choice',
      question: 'pthread_create() 的第三个参数是什么？',
      options: [
        '线程优先级',
        '线程栈大小',
        '线程执行函数指针',
        '线程返回值'
      ],
      answer: 2,
      explanation: 'pthread_create(tid, attr, start_routine, arg)：第三个参数是线程函数指针（void *(*)(void *)类型），新线程从该函数开始执行。'
    },
    {
      type: 'choice',
      question: '同一进程内的线程共享什么资源？',
      options: [
        '栈空间',
        '线程 ID',
        '堆内存和全局变量',
        '线程局部变量'
      ],
      answer: 2,
      explanation: '同一进程的线程共享：代码段、数据段、堆内存、打开的文件描述符、信号处理器、环境变量。每个线程有独立的：栈、寄存器、线程 ID、errno。'
    },
    {
      type: 'choice',
      question: 'pthread_join() 的作用类似于进程中的哪个函数？',
      options: ['fork()', 'exec()', 'wait()', 'exit()'],
      answer: 2,
      explanation: 'pthread_join() 等待指定线程结束并回收其资源，类似于 wait/waitpid 等待子进程。不调用 join 也不 detach 会导致资源泄漏。'
    },
    {
      type: 'choice',
      question: '互斥锁如果不解锁就再次加锁会发生什么？',
      options: [
        '自动解锁',
        '死锁（deadlock）',
        '返回错误',
        '什么都不发生'
      ],
      answer: 1,
      explanation: '对一个已经被自己持有的普通互斥锁（PTHREAD_MUTEX_DEFAULT）再次加锁会导致死锁——线程永远等待自己释放锁。递归互斥锁允许重复加锁。'
    },
    {
      type: 'choice',
      question: '读写锁中，多个线程可以同时持有读锁吗？',
      options: [
        '不可以',
        '可以，前提是没有写者持有写锁',
        '只有两个线程可以',
        '取决于操作系统'
      ],
      answer: 1,
      explanation: '读写锁允许多个读者同时持有读锁（并发读），但写锁是独占的——获取写锁时不能有任何读锁或写锁被持有。'
    },
    {
      type: 'choice',
      question: 'pthread_cond_wait() 为什么必须与互斥锁配合使用？',
      options: [
        '性能优化',
        '防止条件检查和等待之间的竞争条件',
        '互斥锁提供条件存储',
        '这是 API 限制，没有技术原因'
      ],
      answer: 1,
      explanation: 'pthread_cond_wait 原子地释放互斥锁并进入等待状态。如果分开做（先检查条件、再等待），在两步之间条件可能改变，导致信号丢失。'
    },
    {
      type: 'choice',
      question: 'pthread_detach() 的作用是什么？',
      options: [
        '终止线程',
        '标记线程为分离状态，结束后自动回收资源',
        '暂停线程',
        '分离线程的栈空间'
      ],
      answer: 1,
      explanation: '分离（detach）的线程结束时其资源自动被系统回收，不需要其他线程调用 pthread_join()。已分离的线程不能再被 join。'
    },
    {
      type: 'choice',
      question: 'pthread_cond_signal() 和 pthread_cond_broadcast() 的区别是什么？',
      options: [
        'signal 发送信号，broadcast 广播消息',
        'signal 唤醒一个等待线程，broadcast 唤醒所有等待线程',
        'signal 同步，broadcast 异步',
        '没有区别'
      ],
      answer: 1,
      explanation: 'pthread_cond_signal() 至少唤醒一个等待该条件变量的线程。pthread_cond_broadcast() 唤醒所有等待的线程。'
    },
    {
      type: 'choice',
      question: '编译使用 pthread 的程序需要加什么编译选项？',
      options: ['-lthread', '-lpthread', '-pthread 或 -lpthread', '-mt'],
      answer: 2,
      explanation: '需要添加 -lpthread（链接 pthread 库）或 -pthread（同时设置编译和链接选项）。推荐使用 -pthread，它也会定义 _REENTRANT 宏。'
    },
    {
      type: 'code',
      question: '以下代码存在什么问题？',
      code: 'int count = 0;\nvoid *thread_func(void *arg) {\n    for (int i = 0; i < 100000; i++)\n        count++;\n    return NULL;\n}',
      options: [
        '没有问题',
        '竞争条件：多线程同时修改 count 没有加锁',
        '线程函数返回值错误',
        '循环次数太多'
      ],
      answer: 1,
      explanation: 'count++ 不是原子操作（包含读、修改、写三步）。多个线程同时执行会导致竞争条件，最终 count 的值小于期望值。需要用互斥锁保护。'
    },
    {
      type: 'choice',
      question: '条件变量等待中使用 while 而不是 if 检查条件的原因是什么？',
      options: [
        '性能更好',
        '语法要求',
        '防止虚假唤醒（spurious wakeup）',
        '没有区别'
      ],
      answer: 2,
      explanation: 'pthread_cond_wait() 可能因为虚假唤醒（无信号也返回）而返回。使用 while 循环重新检查条件，确保条件真正满足才继续执行。'
    },
    {
      type: 'truefalse',
      question: '线程的默认栈大小通常比进程的默认栈大小小。',
      options: ['正确', '错误'],
      answer: 1,
      explanation: '在大多数 Linux 系统中，线程的默认栈大小通常是 8MB（与进程主线程相同），由 pthread_attr_setstacksize 可自定义。具体值取决于系统配置。'
    }
  ],

  'network': [
    {
      type: 'choice',
      question: 'TCP 和 UDP 的主要区别是什么？',
      options: [
        'TCP 更快，UDP 更可靠',
        'TCP 面向连接且可靠，UDP 无连接且不保证可靠',
        'TCP 用于局域网，UDP 用于广域网',
        'TCP 传文本，UDP 传二进制'
      ],
      answer: 1,
      explanation: 'TCP 是面向连接的可靠传输协议（保证顺序、重传丢失数据）。UDP 是无连接的，不保证可靠传输，但延迟更低、开销更小。'
    },
    {
      type: 'choice',
      question: '创建 TCP 套接字的正确调用是什么？',
      options: [
        'socket(AF_INET, SOCK_DGRAM, 0)',
        'socket(AF_INET, SOCK_STREAM, 0)',
        'socket(AF_INET, SOCK_RAW, 0)',
        'socket(AF_UNIX, SOCK_STREAM, 0)'
      ],
      answer: 1,
      explanation: 'SOCK_STREAM 表示 TCP（字节流套接字），SOCK_DGRAM 表示 UDP（数据报套接字）。AF_INET 表示 IPv4，AF_UNIX/AF_LOCAL 表示本地套接字。'
    },
    {
      type: 'choice',
      question: 'TCP 服务器程序中，listen() 的第二个参数表示什么？',
      options: [
        '最大并发连接数',
        '连接请求队列的最大长度',
        '监听的端口号',
        '超时时间'
      ],
      answer: 1,
      explanation: 'listen(sockfd, backlog) 中 backlog 是内核为该套接字维护的已完成连接队列和未完成连接队列的总和上限。不是最大并发连接数。'
    },
    {
      type: 'choice',
      question: 'htons() 函数的作用是什么？',
      options: [
        '将主机名转换为 IP 地址',
        '将 16 位整数从主机字节序转换为网络字节序',
        '将字符串转换为端口号',
        '创建 HTTP 连接'
      ],
      answer: 1,
      explanation: 'htons = Host TO Network Short，将 16 位整数从主机字节序转为网络字节序（大端序）。htonl 用于 32 位整数。ntohs/ntohl 执行反向转换。'
    },
    {
      type: 'choice',
      question: 'accept() 函数的返回值是什么？',
      options: [
        '成功返回 0',
        '返回客户端地址',
        '返回新的已连接套接字描述符',
        '返回数据字节数'
      ],
      answer: 2,
      explanation: 'accept() 从监听队列取出一个已完成的连接，返回一个新的套接字描述符用于与该客户端通信。原来的监听套接字继续监听其他连接。'
    },
    {
      type: 'choice',
      question: 'SO_REUSEADDR 选项的作用是什么？',
      options: [
        '允许多个进程监听同一端口',
        '允许绑定处于 TIME_WAIT 状态的地址',
        '重新使用已关闭的连接',
        '自动重新连接'
      ],
      answer: 1,
      explanation: 'SO_REUSEADDR 允许 bind() 绑定一个处于 TIME_WAIT 状态的地址。这在服务器重启时非常重要，否则可能因为之前的连接未完全关闭而绑定失败。'
    },
    {
      type: 'choice',
      question: 'TCP 三次握手（Three-way Handshake）的顺序是什么？',
      options: [
        'SYN → ACK → FIN',
        'SYN → SYN-ACK → ACK',
        'ACK → SYN → FIN',
        'SYN → ACK → SYN-ACK'
      ],
      answer: 1,
      explanation: 'TCP 三次握手：1) 客户端发送 SYN；2) 服务器回复 SYN+ACK；3) 客户端发送 ACK。至此 TCP 连接建立完成。'
    },
    {
      type: 'choice',
      question: 'inet_pton(AF_INET, "127.0.0.1", &addr) 中的 "pton" 是什么的缩写？',
      options: [
        'pointer to network',
        'presentation to numeric',
        'port to network',
        'protocol to number'
      ],
      answer: 1,
      explanation: 'pton = Presentation TO Numeric，将人类可读的 IP 地址字符串转换为网络字节序的二进制形式。ntop 是反向转换。'
    },
    {
      type: 'choice',
      question: 'UDP 编程中使用什么函数发送数据？',
      options: ['send()', 'write()', 'sendto()', 'put()'],
      answer: 2,
      explanation: 'UDP 使用 sendto()/recvfrom()，因为 UDP 是无连接的，每次发送都需要指定目标地址。TCP 连接建立后可以直接使用 send()/recv() 或 write()/read()。'
    },
    {
      type: 'choice',
      question: '多进程并发服务器中，父进程 accept 后 fork 子进程处理连接，父进程为什么要关闭客户端 socket？',
      options: [
        '节省内存',
        '防止文件描述符泄漏，且不影响子进程的连接',
        '关闭客户端连接',
        '必须关闭才能 fork'
      ],
      answer: 1,
      explanation: 'fork 后父子进程共享文件描述符。父进程关闭自己的客户端 fd 副本不会真正关闭连接（引用计数机制），但避免了父进程的文件描述符泄漏。'
    },
    {
      type: 'choice',
      question: 'INADDR_ANY 常量在 bind() 中的含义是什么？',
      options: [
        '绑定到 127.0.0.1',
        '绑定到所有可用的网络接口',
        '使用随机 IP 地址',
        '绑定到默认网关'
      ],
      answer: 1,
      explanation: 'INADDR_ANY (0.0.0.0) 表示绑定到主机上所有可用的网络接口。无论客户端通过哪个 IP 连接（localhost、局域网 IP、公网 IP），服务器都能接收。'
    },
    {
      type: 'choice',
      question: 'epoll 相对于 select 的优势是什么？',
      options: [
        '使用更简单',
        '没有文件描述符数量限制（实际受系统限制），大量连接时效率更高',
        '跨平台兼容性更好',
        '支持 UDP'
      ],
      answer: 1,
      explanation: 'select 有 FD_SETSIZE 限制（通常 1024），且每次调用需扫描所有 fd。epoll 使用事件驱动机制，只返回就绪的 fd，在大量连接场景下性能远优于 select。'
    },
    {
      type: 'choice',
      question: 'TCP 四次挥手中，为什么需要 TIME_WAIT 状态？',
      options: [
        '等待所有数据传输完成',
        '确保最后的 ACK 被对方收到，并让旧的重复报文在网络中消失',
        '等待新的连接请求',
        '回收系统资源'
      ],
      answer: 1,
      explanation: 'TIME_WAIT 持续 2MSL（最大报文段生存时间），有两个目的：1) 确保最后一个 ACK 能被重传（若对方未收到会重发 FIN）；2) 让网络中可能残留的旧报文消失。'
    },
    {
      type: 'truefalse',
      question: 'UDP 数据报可能乱序到达接收方。',
      options: ['正确', '错误'],
      answer: 0,
      explanation: 'UDP 不保证数据报的顺序。每个 UDP 数据报独立路由，可能经过不同的网络路径，因此到达顺序可能与发送顺序不同。如需有序传输应使用 TCP。'
    }
  ]
}
