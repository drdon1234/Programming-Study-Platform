export const chapters = [
  {
    id: 'linux-basics',
    title: 'Linux 基础入门',
    icon: '🐧',
    description: 'Linux操作系统概述、文件系统层次结构、基本Shell命令',
    difficulty: '入门',
    sections: [
      {
        title: 'Linux 操作系统概述',
        content: `Linux 是一个开源的类 Unix 操作系统内核，由 Linus Torvalds 于 1991 年首次发布。它与 GNU 项目的工具集结合，构成了完整的 GNU/Linux 操作系统。

Linux 具有以下核心特点：
• **开源免费**：源代码完全公开，任何人可以查看、修改和分发
• **多用户多任务**：支持多个用户同时登录，每个用户可运行多个进程
• **良好的可移植性**：支持 x86、ARM、MIPS 等多种硬件架构
• **强大的网络支持**：内置 TCP/IP 协议栈，天然适合服务器环境
• **稳定性与安全性**：严格的权限管理，适合关键业务场景

Linux 发行版（Distribution）是在内核基础上集成了各种软件包的完整系统。常见的发行版包括 Ubuntu、CentOS、Debian、Fedora、Arch Linux 等。`
      },
      {
        title: '文件系统层次结构（FHS）',
        content: `Linux 中"一切皆文件"是最核心的设计哲学。整个文件系统从根目录 / 开始，采用树状层次结构：

• **/bin**：基本用户命令（ls、cp、mv、cat 等）
• **/sbin**：系统管理命令（shutdown、fdisk、ifconfig 等）
• **/etc**：系统配置文件（passwd、fstab、hosts 等）
• **/home**：普通用户的主目录
• **/root**：超级用户 root 的主目录
• **/usr**：用户程序和数据（/usr/bin、/usr/lib、/usr/include 等）
• **/var**：可变数据文件（日志文件、邮件、临时文件等）
• **/tmp**：临时文件，系统重启后可能被清除
• **/dev**：设备文件（硬盘 /dev/sda、终端 /dev/tty 等）
• **/proc**：虚拟文件系统，反映内核和进程状态
• **/lib**：共享库文件和内核模块`,
        code: {
          language: 'bash',
          title: '查看文件系统结构',
          code: `# 查看根目录下的内容
ls /

# 以树形结构显示（需安装 tree 命令）
tree -L 1 /

# 查看当前目录的完整路径
pwd

# 查看某个目录的磁盘使用情况
du -sh /var/log`
        }
      },
      {
        title: '基本 Shell 命令',
        content: `Shell 是用户与 Linux 内核交互的命令行接口。最常用的 Shell 是 Bash（Bourne Again Shell）。

**文件和目录操作：**
• \`ls\` — 列出目录内容，常用选项：-l（详细）、-a（包括隐藏文件）、-h（人类可读大小）
• \`cd\` — 切换目录，cd ~ 回主目录，cd - 回上一个目录
• \`mkdir\` — 创建目录，-p 可递归创建
• \`rm\` — 删除文件或目录，-r 递归删除，-f 强制删除
• \`cp\` — 复制文件或目录，-r 递归复制
• \`mv\` — 移动或重命名文件

**文件查看：**
• \`cat\` — 显示文件全部内容
• \`head\` / \`tail\` — 显示文件头部/尾部，-n 指定行数
• \`less\` / \`more\` — 分页查看文件

**权限管理：**
• \`chmod\` — 修改文件权限（如 chmod 755 file）
• \`chown\` — 修改文件所有者
• \`chgrp\` — 修改文件所属组`,
        code: {
          language: 'bash',
          title: '常用命令示例',
          code: `# 列出当前目录所有文件（含隐藏文件）的详细信息
ls -la

# 递归创建多级目录
mkdir -p project/src/include

# 复制整个目录
cp -r source_dir/ dest_dir/

# 查看文件前10行
head -n 10 /etc/passwd

# 实时监控日志文件
tail -f /var/log/syslog

# 修改文件权限：所有者可读写执行，组和其他可读执行
chmod 755 script.sh

# 查找文件
find /home -name "*.c" -type f`
        }
      },
      {
        title: '管道与重定向',
        content: `管道和重定向是 Linux 命令行最强大的特性之一，体现了 Unix "做一件事并做好"的哲学。

**重定向：**
• \`>\` — 输出重定向（覆盖文件）
• \`>>\` — 输出重定向（追加到文件）
• \`<\` — 输入重定向
• \`2>\` — 错误输出重定向
• \`&>\` — 标准输出和错误输出同时重定向

**管道 |：**
将前一个命令的标准输出作为后一个命令的标准输入，可以串联多个命令：`,
        code: {
          language: 'bash',
          title: '管道与重定向示例',
          code: `# 将命令输出保存到文件
ls -la > filelist.txt

# 将错误信息重定向到文件
gcc main.c 2> errors.txt

# 管道：统计当前目录文件数量
ls | wc -l

# 管道组合：查找包含 "error" 的日志行并统计
cat /var/log/syslog | grep "error" | wc -l

# 排序并去重
cat names.txt | sort | uniq

# 查找系统中占用内存最多的前5个进程
ps aux | sort -k 4 -rn | head -5`
        }
      }
    ]
  },
  {
    id: 'shell-programming',
    title: 'Shell 编程',
    icon: '💻',
    description: 'Shell脚本编写、变量、条件判断、循环、函数',
    difficulty: '入门',
    sections: [
      {
        title: 'Shell 脚本基础',
        content: `Shell 脚本是一系列 Shell 命令的集合，保存在文件中以便重复执行。脚本的第一行通常是 Shebang（#!），指定解释器路径。

脚本文件需要执行权限才能直接运行。也可以通过 bash script.sh 方式运行。`,
        code: {
          language: 'bash',
          title: '第一个 Shell 脚本',
          code: `#!/bin/bash
# 第一个Shell脚本 — hello.sh

echo "Hello, Linux Programming!"
echo "当前时间: $(date)"
echo "当前用户: $USER"
echo "当前目录: $PWD"

# 运行方式：
# chmod +x hello.sh
# ./hello.sh`
        }
      },
      {
        title: '变量与引用',
        content: `Shell 变量不需要声明类型，赋值时等号两边不能有空格。

**变量类型：**
• **用户变量**：用户自定义，如 name="Linux"
• **环境变量**：系统预定义，如 $HOME、$PATH、$USER
• **特殊变量**：$0（脚本名）、$1-$9（位置参数）、$#（参数个数）、$?（上一个命令返回值）、$$（当前PID）

**引用规则：**
• 双引号 ""：允许变量替换和命令替换
• 单引号 ''：原样输出，不做任何替换
• 反引号 \`\` 或 $()：命令替换，执行命令并返回结果`,
        code: {
          language: 'bash',
          title: '变量使用示例',
          code: `#!/bin/bash

# 变量赋值（等号两边不能有空格）
name="Linux"
version=5.15
count=0

# 使用变量（加 $ 前缀）
echo "系统: $name"
echo "内核版本: \${version}"

# 只读变量
readonly PI=3.14159

# 命令替换
current_date=$(date +%Y-%m-%d)
file_count=$(ls | wc -l)
echo "今天是 $current_date，当前目录有 $file_count 个文件"

# 引用区别
echo "用户主目录是: $HOME"     # 输出实际路径
echo '用户主目录是: $HOME'     # 原样输出 $HOME

# 特殊变量
echo "脚本名: $0"
echo "第一个参数: $1"
echo "参数个数: $#"
echo "上一条命令返回值: $?"`
        }
      },
      {
        title: '条件判断',
        content: `Shell 中的条件判断使用 if-then-elif-else-fi 结构。条件测试可以使用 test 命令或方括号 [ ] 语法。

**文件测试操作符：**
• -f file：文件存在且为普通文件
• -d file：文件存在且为目录
• -r / -w / -x：文件可读/可写/可执行
• -s file：文件存在且非空

**字符串测试：**
• -z string：字符串长度为零
• -n string：字符串长度非零
• str1 = str2：字符串相等
• str1 != str2：字符串不等

**数值比较：**
• -eq（等于）、-ne（不等于）、-gt（大于）、-lt（小于）、-ge（大于等于）、-le（小于等于）`,
        code: {
          language: 'bash',
          title: '条件判断示例',
          code: `#!/bin/bash

# if-elif-else 结构
score=85
if [ $score -ge 90 ]; then
    echo "优秀"
elif [ $score -ge 70 ]; then
    echo "良好"
elif [ $score -ge 60 ]; then
    echo "及格"
else
    echo "不及格"
fi

# 文件测试
filename="/etc/passwd"
if [ -f "$filename" ]; then
    echo "$filename 存在"
    if [ -r "$filename" ]; then
        echo "且可读"
    fi
fi

# case 语句
read -p "请输入操作 (start/stop/restart): " action
case $action in
    start)
        echo "启动服务..."
        ;;
    stop)
        echo "停止服务..."
        ;;
    restart)
        echo "重启服务..."
        ;;
    *)
        echo "未知操作: $action"
        ;;
esac`
        }
      },
      {
        title: '循环结构',
        content: `Shell 提供了 for、while 和 until 三种循环结构。

• **for 循环**：遍历列表中的每个元素
• **while 循环**：条件为真时持续执行
• **until 循环**：条件为假时持续执行（与 while 相反）

循环控制：break 退出循环，continue 跳过当前迭代。`,
        code: {
          language: 'bash',
          title: '循环示例',
          code: `#!/bin/bash

# for 循环遍历列表
for fruit in apple banana cherry; do
    echo "水果: $fruit"
done

# for 循环遍历文件
for file in /etc/*.conf; do
    echo "配置文件: $file"
done

# C 风格 for 循环
for ((i=1; i<=5; i++)); do
    echo "计数: $i"
done

# while 循环
count=1
while [ $count -le 5 ]; do
    echo "while 循环第 $count 次"
    count=$((count + 1))
done

# 读取文件的每一行
while IFS= read -r line; do
    echo "行内容: $line"
done < /etc/hosts`
        }
      },
      {
        title: 'Shell 函数',
        content: `Shell 函数是一段可以复用的代码块。函数必须先定义后调用。函数通过 return 返回状态码（0-255），如果要返回字符串或其他数据，需要使用 echo 配合命令替换。

函数中的变量默认是全局的，使用 local 关键字可以声明局部变量。`,
        code: {
          language: 'bash',
          title: '函数定义与调用',
          code: `#!/bin/bash

# 定义函数
greet() {
    local name=$1    # 局部变量
    echo "你好, $name!"
}

# 调用函数
greet "Linux"
greet "World"

# 返回值的函数
is_file_exists() {
    local file=$1
    if [ -f "$file" ]; then
        return 0    # 成功（真）
    else
        return 1    # 失败（假）
    fi
}

# 使用函数返回值
if is_file_exists "/etc/passwd"; then
    echo "文件存在"
fi

# 通过 echo 返回数据
get_file_size() {
    local file=$1
    local size=$(stat -c %s "$file" 2>/dev/null)
    echo "$size"
}

size=$(get_file_size "/etc/passwd")
echo "文件大小: \${size} 字节"`
        }
      }
    ]
  },
  {
    id: 'c-dev-env',
    title: 'C 语言开发环境',
    icon: '🔧',
    description: 'GCC编译器、GDB调试器、Make构建工具、Linux编码风格',
    difficulty: '基础',
    sections: [
      {
        title: 'GCC 编译器',
        content: `GCC（GNU Compiler Collection）是 Linux 下最重要的 C/C++ 编译器。编译过程分为四个阶段：

1. **预处理（Preprocessing）**：处理 #include、#define 等预处理指令 → 生成 .i 文件
2. **编译（Compilation）**：将预处理后的代码转换为汇编代码 → 生成 .s 文件
3. **汇编（Assembly）**：将汇编代码转换为机器码 → 生成 .o 目标文件
4. **链接（Linking）**：将目标文件与库文件链接 → 生成可执行文件

**常用编译选项：**
• \`-o\`：指定输出文件名
• \`-Wall\`：开启所有警告
• \`-g\`：生成调试信息（配合 GDB 使用）
• \`-O0/-O1/-O2/-O3\`：优化级别
• \`-c\`：只编译不链接
• \`-I\`：指定头文件搜索路径
• \`-L\`：指定库文件搜索路径
• \`-l\`：链接指定库`,
        code: {
          language: 'bash',
          title: 'GCC 编译命令示例',
          code: `# 最简单的编译
gcc hello.c -o hello

# 带警告和调试信息
gcc -Wall -g main.c -o main

# 分步编译
gcc -E main.c -o main.i      # 预处理
gcc -S main.i -o main.s      # 编译为汇编
gcc -c main.s -o main.o      # 汇编为目标文件
gcc main.o -o main            # 链接

# 多文件编译
gcc -Wall -g main.c utils.c -o app

# 链接数学库
gcc calc.c -o calc -lm

# 指定头文件和库文件路径
gcc -I./include -L./lib main.c -o app -lmylib`
        }
      },
      {
        title: 'GDB 调试器',
        content: `GDB（GNU Debugger）是 Linux 下最强大的程序调试工具。使用 GDB 前需要用 -g 选项编译程序以包含调试信息。

**核心调试命令：**
• \`break\`（b）：设置断点（行号或函数名）
• \`run\`（r）：运行程序
• \`next\`（n）：单步执行（不进入函数）
• \`step\`（s）：单步执行（进入函数）
• \`continue\`（c）：继续执行到下一个断点
• \`print\`（p）：打印变量值
• \`backtrace\`（bt）：显示调用栈
• \`list\`（l）：显示源代码
• \`watch\`：监视变量变化
• \`info locals\`：显示所有局部变量`,
        code: {
          language: 'bash',
          title: 'GDB 调试会话示例',
          code: `# 编译（必须加 -g）
gcc -g -Wall buggy.c -o buggy

# 启动 GDB
gdb ./buggy

# GDB 命令示例：
# (gdb) break main          # 在 main 函数设断点
# (gdb) break 25            # 在第25行设断点
# (gdb) run                 # 运行程序
# (gdb) run arg1 arg2       # 带参数运行
# (gdb) next                # 单步（不进入函数）
# (gdb) step                # 单步（进入函数）
# (gdb) print variable      # 打印变量
# (gdb) print *ptr          # 打印指针指向的值
# (gdb) print array[0]@10   # 打印数组前10个元素
# (gdb) backtrace           # 显示调用栈
# (gdb) info breakpoints    # 查看所有断点
# (gdb) delete 1            # 删除1号断点
# (gdb) watch var           # 监视变量 var
# (gdb) quit                # 退出 GDB`
        }
      },
      {
        title: 'Make 与 Makefile',
        content: `Make 是 Linux 下的自动化构建工具，通过 Makefile 文件描述编译规则和依赖关系，自动判断哪些文件需要重新编译。

**Makefile 基本规则格式：**
\`\`\`
目标: 依赖
    命令（必须用 Tab 缩进）
\`\`\`

**核心概念：**
• **目标（target）**：要生成的文件名或伪目标
• **依赖（prerequisites）**：目标所依赖的文件
• **命令（recipe）**：生成目标的 Shell 命令
• **变量**：CC=gcc、CFLAGS=-Wall -g 等
• **自动变量**：$@（目标）、$<（第一个依赖）、$^（所有依赖）
• **伪目标**：.PHONY 声明不对应实际文件的目标（如 clean）`,
        code: {
          language: 'makefile',
          title: 'Makefile 示例',
          code: `# 变量定义
CC = gcc
CFLAGS = -Wall -g
TARGET = myapp
SRCS = main.c utils.c network.c
OBJS = $(SRCS:.c=.o)

# 默认目标
all: $(TARGET)

# 链接目标文件生成可执行文件
$(TARGET): $(OBJS)
\t$(CC) $(CFLAGS) -o $@ $^

# 模式规则：.c 文件编译为 .o 文件
%.o: %.c
\t$(CC) $(CFLAGS) -c $< -o $@

# 伪目标：清理编译产物
.PHONY: clean
clean:
\trm -f $(OBJS) $(TARGET)

# 伪目标：安装
.PHONY: install
install: $(TARGET)
\tcp $(TARGET) /usr/local/bin/`
        }
      },
      {
        title: 'Linux 编码风格与工具',
        content: `Linux 内核采用的编码风格强调可读性和一致性。在 Linux 环境下开发 C 程序，推荐使用 Vim 或 Emacs 编辑器。

**Linux 内核编码风格要点：**
• 缩进使用 Tab（宽度为 8 个空格）
• 大括号风格：函数定义大括号另起一行，if/for/while 等大括号跟在语句后面
• 单行不超过 80 个字符
• 函数尽量短小，一个函数只做一件事
• 变量名和函数名使用小写字母加下划线

**常用开发工具：**
• \`vim\`：功能强大的文本编辑器
• \`valgrind\`：内存泄漏检测工具
• \`strace\`：跟踪系统调用
• \`ltrace\`：跟踪库函数调用`,
        code: {
          language: 'c',
          title: 'Linux 编码风格示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_BUFFER_SIZE 1024

struct student {
        char name[64];
        int age;
        float score;
};

/*
 * calculate_average - 计算学生平均分
 * @students: 学生数组指针
 * @count: 学生数量
 *
 * 返回所有学生的平均分数。若 count 为 0 则返回 0。
 */
static float calculate_average(struct student *students, int count)
{
        float sum = 0.0;
        int i;

        if (count <= 0)
                return 0.0;

        for (i = 0; i < count; i++)
                sum += students[i].score;

        return sum / count;
}`
        }
      }
    ]
  },
  {
    id: 'file-operations',
    title: '文件操作',
    icon: '📁',
    description: '系统调用、标准I/O库、文件属性与权限、目录操作',
    difficulty: '基础',
    sections: [
      {
        title: '文件系统调用',
        content: `Linux 提供了一组底层系统调用来操作文件。这些系统调用直接与内核交互，使用文件描述符（file descriptor，一个非负整数）来标识打开的文件。

**核心系统调用：**
• \`open()\`：打开或创建文件，返回文件描述符
• \`read()\`：从文件描述符读取数据
• \`write()\`：向文件描述符写入数据
• \`close()\`：关闭文件描述符
• \`lseek()\`：移动文件读写位置

**标准文件描述符：**
• 0 — 标准输入（STDIN_FILENO）
• 1 — 标准输出（STDOUT_FILENO）
• 2 — 标准错误（STDERR_FILENO）`,
        code: {
          language: 'c',
          title: '文件系统调用示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

int main(void)
{
        int fd;
        char buf[256];
        ssize_t n;

        /* 打开文件（只读） */
        fd = open("/etc/hostname", O_RDONLY);
        if (fd == -1) {
                perror("open");
                exit(EXIT_FAILURE);
        }

        /* 读取文件内容 */
        n = read(fd, buf, sizeof(buf) - 1);
        if (n > 0) {
                buf[n] = '\\0';
                printf("主机名: %s", buf);
        }

        close(fd);

        /* 创建并写入文件 */
        fd = open("output.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644);
        if (fd == -1) {
                perror("open");
                exit(EXIT_FAILURE);
        }

        const char *msg = "Hello from system call!\\n";
        write(fd, msg, strlen(msg));
        close(fd);

        return 0;
}`
        }
      },
      {
        title: '标准 I/O 库',
        content: `标准 I/O 库（stdio.h）是对底层系统调用的封装，提供了缓冲区管理，使用 FILE* 类型的流（stream）指针操作文件。

**标准 I/O 相对于系统调用的优势：**
• 自动缓冲管理，减少系统调用次数，提高效率
• 提供格式化输入输出（printf/scanf）
• 可移植性更好（ANSI C 标准）

**缓冲类型：**
• **全缓冲**：缓冲区满时才写入（磁盘文件默认）
• **行缓冲**：遇到换行符时写入（终端默认）
• **无缓冲**：立即写入（stderr 默认）`,
        code: {
          language: 'c',
          title: '标准 I/O 操作示例',
          code: `#include <stdio.h>
#include <stdlib.h>

int main(void)
{
        FILE *fp;
        char line[256];

        /* 打开文件读取 */
        fp = fopen("/etc/passwd", "r");
        if (fp == NULL) {
                perror("fopen");
                exit(EXIT_FAILURE);
        }

        /* 逐行读取 */
        printf("系统用户列表:\\n");
        while (fgets(line, sizeof(line), fp) != NULL) {
                printf("  %s", line);
        }
        fclose(fp);

        /* 写入文件 */
        fp = fopen("data.txt", "w");
        if (fp == NULL) {
                perror("fopen");
                exit(EXIT_FAILURE);
        }

        fprintf(fp, "姓名: %s\\n", "张三");
        fprintf(fp, "分数: %d\\n", 95);
        fputs("这是一行文本\\n", fp);

        fclose(fp);
        return 0;
}`
        }
      },
      {
        title: '文件属性与权限',
        content: `Linux 文件权限系统基于三类用户：文件所有者（owner）、所属组（group）、其他人（others）。每类用户有读（r=4）、写（w=2）、执行（x=1）三种权限。

**stat() 系统调用**可以获取文件的详细属性信息，包括文件类型、权限、大小、修改时间等。

**常用宏判断文件类型：**
• S_ISREG() — 普通文件
• S_ISDIR() — 目录
• S_ISLNK() — 符号链接
• S_ISFIFO() — 管道文件`,
        code: {
          language: 'c',
          title: '获取文件属性示例',
          code: `#include <stdio.h>
#include <sys/stat.h>
#include <time.h>

int main(int argc, char *argv[])
{
        struct stat sb;
        const char *path = argc > 1 ? argv[1] : ".";

        if (stat(path, &sb) == -1) {
                perror("stat");
                return 1;
        }

        printf("文件: %s\\n", path);

        /* 文件类型 */
        printf("类型: ");
        if (S_ISREG(sb.st_mode))       printf("普通文件\\n");
        else if (S_ISDIR(sb.st_mode))  printf("目录\\n");
        else if (S_ISLNK(sb.st_mode))  printf("符号链接\\n");
        else                            printf("其他\\n");

        /* 权限 */
        printf("权限: %o\\n", sb.st_mode & 0777);

        /* 大小 */
        printf("大小: %ld 字节\\n", (long)sb.st_size);

        /* 修改时间 */
        printf("修改时间: %s", ctime(&sb.st_mtime));

        return 0;
}`
        }
      },
      {
        title: '目录操作',
        content: `Linux 提供了一组函数来操作目录，包括打开、读取、创建和删除目录。

**目录操作函数：**
• \`opendir()\`：打开目录，返回 DIR* 指针
• \`readdir()\`：读取目录项，返回 struct dirent*
• \`closedir()\`：关闭目录
• \`mkdir()\`：创建目录
• \`rmdir()\`：删除空目录
• \`chdir()\`：切换当前工作目录
• \`getcwd()\`：获取当前工作目录`,
        code: {
          language: 'c',
          title: '遍历目录示例',
          code: `#include <stdio.h>
#include <dirent.h>
#include <sys/stat.h>
#include <string.h>

int main(int argc, char *argv[])
{
        DIR *dir;
        struct dirent *entry;
        struct stat sb;
        char path[512];
        const char *dirname = argc > 1 ? argv[1] : ".";

        dir = opendir(dirname);
        if (dir == NULL) {
                perror("opendir");
                return 1;
        }

        printf("目录 %s 的内容:\\n", dirname);
        while ((entry = readdir(dir)) != NULL) {
                /* 跳过 . 和 .. */
                if (strcmp(entry->d_name, ".") == 0 ||
                    strcmp(entry->d_name, "..") == 0)
                        continue;

                snprintf(path, sizeof(path), "%s/%s",
                         dirname, entry->d_name);
                stat(path, &sb);

                printf("  %-20s  %s  %8ld bytes\\n",
                       entry->d_name,
                       S_ISDIR(sb.st_mode) ? "[DIR]" : "[FILE]",
                       (long)sb.st_size);
        }

        closedir(dir);
        return 0;
}`
        }
      }
    ]
  },
  {
    id: 'linux-env',
    title: 'Linux 环境编程',
    icon: '🌍',
    description: '程序参数、环境变量、时间日期、系统日志',
    difficulty: '基础',
    sections: [
      {
        title: '程序参数处理',
        content: `C 程序通过 main 函数的 argc 和 argv 参数接收命令行参数。对于复杂的选项解析，Linux 提供了 getopt() 和 getopt_long() 函数。

**getopt() 函数**用于解析短选项（如 -v、-o file），它自动处理选项的解析和错误报告。optarg 指向选项的参数值，optind 是下一个要处理的参数索引。`,
        code: {
          language: 'c',
          title: '命令行参数解析',
          code: `#include <stdio.h>
#include <unistd.h>
#include <getopt.h>

int main(int argc, char *argv[])
{
        int opt;
        int verbose = 0;
        char *output = NULL;

        /* 短选项解析 */
        while ((opt = getopt(argc, argv, "vo:h")) != -1) {
                switch (opt) {
                case 'v':
                        verbose = 1;
                        break;
                case 'o':
                        output = optarg;
                        break;
                case 'h':
                        printf("用法: %s [-v] [-o output] file...\\n",
                               argv[0]);
                        return 0;
                default:
                        return 1;
                }
        }

        if (verbose)
                printf("详细模式已开启\\n");
        if (output)
                printf("输出文件: %s\\n", output);

        /* 处理剩余的非选项参数 */
        for (int i = optind; i < argc; i++)
                printf("输入文件: %s\\n", argv[i]);

        return 0;
}`
        }
      },
      {
        title: '环境变量',
        content: `环境变量是操作系统用来存储配置信息的键值对。每个进程都有自己的环境变量副本，子进程会继承父进程的环境变量。

**操作环境变量的函数：**
• \`getenv(name)\`：获取环境变量的值，不存在返回 NULL
• \`setenv(name, value, overwrite)\`：设置环境变量
• \`unsetenv(name)\`：删除环境变量
• \`putenv(string)\`：以 "NAME=value" 格式设置
• **extern char \\*\\*environ**：全局变量，指向环境变量数组`,
        code: {
          language: 'c',
          title: '环境变量操作',
          code: `#include <stdio.h>
#include <stdlib.h>

extern char **environ;

int main(void)
{
        /* 获取环境变量 */
        char *home = getenv("HOME");
        char *path = getenv("PATH");
        char *user = getenv("USER");

        printf("HOME = %s\\n", home ? home : "(未设置)");
        printf("USER = %s\\n", user ? user : "(未设置)");

        /* 设置环境变量 */
        setenv("MY_APP_DEBUG", "1", 1);
        printf("MY_APP_DEBUG = %s\\n", getenv("MY_APP_DEBUG"));

        /* 遍历所有环境变量 */
        printf("\\n--- 所有环境变量 ---\\n");
        for (char **ep = environ; *ep != NULL; ep++) {
                printf("%s\\n", *ep);
        }

        return 0;
}`
        }
      },
      {
        title: '时间与日期',
        content: `Linux 提供了多种时间相关的函数：

• \`time()\`：获取当前时间（自 1970-01-01 00:00:00 UTC 以来的秒数，即 epoch）
• \`localtime()\`：将 time_t 转换为本地时间的 struct tm
• \`gmtime()\`：转换为 UTC 时间的 struct tm
• \`strftime()\`：格式化时间字符串
• \`gettimeofday()\`：获取微秒级精度的时间
• \`clock_gettime()\`：获取纳秒级精度的时间（POSIX）`,
        code: {
          language: 'c',
          title: '时间操作示例',
          code: `#include <stdio.h>
#include <time.h>
#include <sys/time.h>

int main(void)
{
        time_t now;
        struct tm *local;
        char buf[128];
        struct timeval tv;

        /* 获取当前时间 */
        time(&now);
        printf("epoch 时间戳: %ld\\n", (long)now);

        /* 转换为本地时间 */
        local = localtime(&now);
        printf("年: %d, 月: %d, 日: %d\\n",
               local->tm_year + 1900,
               local->tm_mon + 1,
               local->tm_mday);

        /* 格式化时间 */
        strftime(buf, sizeof(buf),
                 "%Y年%m月%d日 %H:%M:%S", local);
        printf("格式化: %s\\n", buf);

        /* 高精度时间 */
        gettimeofday(&tv, NULL);
        printf("秒: %ld, 微秒: %ld\\n",
               (long)tv.tv_sec, (long)tv.tv_usec);

        return 0;
}`
        }
      },
      {
        title: '系统日志',
        content: `Linux 提供了 syslog 系统日志机制，程序可以通过 openlog()、syslog()、closelog() 函数向系统日志写入消息。

**日志优先级（从高到低）：**
LOG_EMERG → LOG_ALERT → LOG_CRIT → LOG_ERR → LOG_WARNING → LOG_NOTICE → LOG_INFO → LOG_DEBUG`,
        code: {
          language: 'c',
          title: '系统日志使用',
          code: `#include <syslog.h>

int main(void)
{
        /* 打开日志连接 */
        openlog("myapp", LOG_PID | LOG_CONS, LOG_USER);

        /* 写入不同级别的日志 */
        syslog(LOG_INFO, "程序启动");
        syslog(LOG_WARNING, "配置文件未找到，使用默认值");
        syslog(LOG_ERR, "连接数据库失败: %s", "超时");

        /* 关闭日志 */
        closelog();

        return 0;
}
/* 日志可在 /var/log/syslog 或 journalctl 中查看 */`
        }
      }
    ]
  },
  {
    id: 'process-mgmt',
    title: '进程管理',
    icon: '⚙️',
    description: '进程概念、fork/exec/wait、守护进程',
    difficulty: '中级',
    sections: [
      {
        title: '进程基本概念',
        content: `进程（Process）是程序的一次执行实例。每个进程拥有独立的虚拟地址空间、文件描述符表和运行状态。

**进程的关键属性：**
• **PID**：进程 ID，唯一标识一个进程
• **PPID**：父进程 ID
• **UID/GID**：进程所有者和组
• **进程状态**：运行（R）、睡眠（S）、僵尸（Z）、停止（T）等

**进程的内存布局：**
• **代码段（text）**：只读的程序指令
• **数据段（data）**：已初始化的全局变量
• **BSS段**：未初始化的全局变量
• **堆（heap）**：动态分配的内存（malloc），向上增长
• **栈（stack）**：局部变量和函数调用信息，向下增长`,
        code: {
          language: 'c',
          title: '获取进程信息',
          code: `#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main(void)
{
        printf("PID（进程ID）:  %d\\n", getpid());
        printf("PPID（父进程ID）: %d\\n", getppid());
        printf("UID（用户ID）:  %d\\n", getuid());
        printf("GID（组ID）:   %d\\n", getgid());
        printf("EUID（有效用户ID）: %d\\n", geteuid());

        return 0;
}`
        }
      },
      {
        title: 'fork() 创建进程',
        content: `fork() 是 Unix/Linux 中创建新进程的核心系统调用。它创建当前进程的一个几乎完全相同的副本（子进程）。

**fork() 的关键特性：**
• 调用一次，返回两次
• 在父进程中返回子进程的 PID
• 在子进程中返回 0
• 出错时返回 -1
• 子进程获得父进程数据空间、堆和栈的副本（写时复制，COW）
• 子进程继承父进程的文件描述符`,
        code: {
          language: 'c',
          title: 'fork() 示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(void)
{
        pid_t pid;
        int value = 100;

        printf("fork 前: value = %d\\n", value);

        pid = fork();
        if (pid < 0) {
                perror("fork");
                exit(EXIT_FAILURE);
        }

        if (pid == 0) {
                /* 子进程 */
                value = 200;
                printf("子进程 [PID=%d]: value = %d\\n",
                       getpid(), value);
        } else {
                /* 父进程 */
                value = 300;
                printf("父进程 [PID=%d]: 子进程PID=%d, value = %d\\n",
                       getpid(), pid, value);
        }

        /* 父子进程都会执行这里 */
        printf("[PID=%d] 最终 value = %d\\n", getpid(), value);

        return 0;
}`
        }
      },
      {
        title: 'exec 系列函数',
        content: `exec 系列函数用新程序替换当前进程的映像。调用成功后，原程序的代码不再执行。通常和 fork() 配合使用：父进程 fork() 创建子进程，子进程用 exec 执行新程序。

**exec 函数家族：**
• \`execl(path, arg0, arg1, ..., NULL)\` — 参数列表
• \`execv(path, argv[])\` — 参数数组
• \`execle()\` — 参数列表 + 环境变量
• \`execve()\` — 参数数组 + 环境变量（真正的系统调用）
• \`execlp()\` — 参数列表 + PATH搜索
• \`execvp()\` — 参数数组 + PATH搜索`,
        code: {
          language: 'c',
          title: 'fork + exec 示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void)
{
        pid_t pid = fork();

        if (pid < 0) {
                perror("fork");
                exit(EXIT_FAILURE);
        }

        if (pid == 0) {
                /* 子进程：执行 ls -la 命令 */
                printf("子进程执行 ls 命令:\\n");
                execlp("ls", "ls", "-la", "/tmp", NULL);
                /* 如果 exec 成功，下面的代码不会执行 */
                perror("execlp");
                exit(EXIT_FAILURE);
        } else {
                /* 父进程：等待子进程结束 */
                int status;
                waitpid(pid, &status, 0);

                if (WIFEXITED(status)) {
                        printf("\\n子进程退出码: %d\\n",
                               WEXITSTATUS(status));
                }
        }

        return 0;
}`
        }
      },
      {
        title: '进程等待与守护进程',
        content: `**wait() 和 waitpid()** 用于父进程等待子进程结束并获取其退出状态。如果子进程已终止但父进程未调用 wait()，子进程会变成僵尸进程（Z 状态）。

**守护进程（Daemon）** 是在后台运行的、脱离终端控制的进程。创建守护进程的步骤：
1. fork() 后父进程退出
2. 子进程调用 setsid() 创建新会话
3. 再次 fork() 并退出父进程
4. 修改工作目录为 /
5. 重设文件权限掩码 umask(0)
6. 关闭不需要的文件描述符`,
        code: {
          language: 'c',
          title: '守护进程创建',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/stat.h>
#include <syslog.h>

void create_daemon(void)
{
        pid_t pid;

        /* 第一次 fork */
        pid = fork();
        if (pid < 0) exit(EXIT_FAILURE);
        if (pid > 0) exit(EXIT_SUCCESS); /* 父进程退出 */

        /* 创建新会话 */
        if (setsid() < 0) exit(EXIT_FAILURE);

        /* 第二次 fork */
        pid = fork();
        if (pid < 0) exit(EXIT_FAILURE);
        if (pid > 0) exit(EXIT_SUCCESS);

        /* 设置工作目录和文件权限掩码 */
        chdir("/");
        umask(0);

        /* 关闭标准文件描述符 */
        close(STDIN_FILENO);
        close(STDOUT_FILENO);
        close(STDERR_FILENO);
}

int main(void)
{
        create_daemon();
        openlog("mydaemon", LOG_PID, LOG_DAEMON);
        syslog(LOG_INFO, "守护进程已启动");

        while (1) {
                syslog(LOG_INFO, "守护进程运行中...");
                sleep(30);
        }
        return 0;
}`
        }
      }
    ]
  },
  {
    id: 'signals',
    title: '信号处理',
    icon: '🚦',
    description: '信号概念、signal/sigaction、信号集、可靠信号',
    difficulty: '中级',
    sections: [
      {
        title: '信号基本概念',
        content: `信号（Signal）是 Linux 中进程间通信的一种异步机制，用于通知进程某个事件已经发生。信号可以来自内核、其他进程或用户操作。

**常用信号：**
• **SIGINT（2）**：终端中断（Ctrl+C）
• **SIGQUIT（3）**：终端退出（Ctrl+\\）
• **SIGKILL（9）**：强制终止（不可捕获）
• **SIGSEGV（11）**：段错误（非法内存访问）
• **SIGTERM（15）**：终止信号（可捕获，kill 命令默认发送）
• **SIGCHLD（17）**：子进程状态改变
• **SIGALRM（14）**：定时器到期
• **SIGUSR1（10）/ SIGUSR2（12）**：用户自定义信号
• **SIGPIPE（13）**：向已关闭的管道写数据
• **SIGSTOP（19）**：停止进程（不可捕获）
• **SIGCONT（18）**：继续被停止的进程

**信号的三种处理方式：**
1. 默认处理（通常是终止进程）
2. 忽略信号（SIG_IGN）
3. 捕获信号（用自定义处理函数）`
      },
      {
        title: 'signal() 函数',
        content: `signal() 是最简单的信号处理函数，但它在不同系统上的行为可能不一致。它设置一个信号处理函数，当指定信号到达时会自动调用该函数。

信号处理函数（handler）在执行时会中断程序的正常流程，执行完后恢复原来的执行位置。`,
        code: {
          language: 'c',
          title: 'signal() 基本用法',
          code: `#include <stdio.h>
#include <signal.h>
#include <unistd.h>

volatile sig_atomic_t got_signal = 0;

void handler(int signo)
{
        if (signo == SIGINT) {
                got_signal = 1;
        }
}

int main(void)
{
        /* 设置 SIGINT 的处理函数 */
        signal(SIGINT, handler);

        /* 忽略 SIGQUIT */
        signal(SIGQUIT, SIG_IGN);

        printf("程序运行中，按 Ctrl+C 触发信号...\\n");

        while (!got_signal) {
                printf(".");
                fflush(stdout);
                sleep(1);
        }

        printf("\\n收到 SIGINT 信号，程序优雅退出\\n");
        return 0;
}`
        }
      },
      {
        title: 'sigaction() 函数',
        content: `sigaction() 是更强大、更可靠的信号处理接口，推荐在新代码中使用。它允许精确控制信号处理行为：

**struct sigaction 的关键字段：**
• \`sa_handler\`：信号处理函数指针
• \`sa_mask\`：处理该信号期间要屏蔽的附加信号
• \`sa_flags\`：控制信号行为的标志位
  - SA_RESTART：自动重启被中断的系统调用
  - SA_NOCLDSTOP：子进程停止时不产生 SIGCHLD
  - SA_SIGINFO：使用三参数的处理函数`,
        code: {
          language: 'c',
          title: 'sigaction() 可靠信号处理',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>
#include <string.h>

void term_handler(int signo)
{
        const char msg[] = "收到终止信号，正在清理...\\n";
        write(STDOUT_FILENO, msg, sizeof(msg) - 1);
        _exit(0);
}

int main(void)
{
        struct sigaction sa;

        /* 清空结构体 */
        memset(&sa, 0, sizeof(sa));

        /* 设置处理函数 */
        sa.sa_handler = term_handler;

        /* 处理 SIGTERM 期间屏蔽 SIGINT */
        sigemptyset(&sa.sa_mask);
        sigaddset(&sa.sa_mask, SIGINT);

        /* 设置标志：自动重启被中断的系统调用 */
        sa.sa_flags = SA_RESTART;

        /* 注册信号处理 */
        if (sigaction(SIGTERM, &sa, NULL) == -1) {
                perror("sigaction");
                exit(EXIT_FAILURE);
        }
        if (sigaction(SIGINT, &sa, NULL) == -1) {
                perror("sigaction");
                exit(EXIT_FAILURE);
        }

        printf("PID=%d，等待信号...\\n", getpid());
        while (1)
                pause(); /* 挂起进程，等待信号 */

        return 0;
}`
        }
      },
      {
        title: '信号集与信号屏蔽',
        content: `信号集（sigset_t）用于表示一组信号。通过信号屏蔽字（signal mask），进程可以暂时阻塞某些信号的递送。

**信号集操作函数：**
• \`sigemptyset(&set)\`：清空信号集
• \`sigfillset(&set)\`：填满信号集（包含所有信号）
• \`sigaddset(&set, signo)\`：添加一个信号
• \`sigdelset(&set, signo)\`：删除一个信号
• \`sigismember(&set, signo)\`：测试信号是否在集合中

**sigprocmask()** 用于检测或更改进程的信号屏蔽字：
• SIG_BLOCK：将 set 中的信号添加到屏蔽字
• SIG_UNBLOCK：从屏蔽字中移除 set 中的信号
• SIG_SETMASK：设置屏蔽字为 set`,
        code: {
          language: 'c',
          title: '信号屏蔽示例',
          code: `#include <stdio.h>
#include <signal.h>
#include <unistd.h>

int main(void)
{
        sigset_t newmask, oldmask, pendmask;

        /* 创建包含 SIGINT 的信号集 */
        sigemptyset(&newmask);
        sigaddset(&newmask, SIGINT);

        /* 屏蔽 SIGINT */
        sigprocmask(SIG_BLOCK, &newmask, &oldmask);

        printf("SIGINT 已被屏蔽，5秒内按 Ctrl+C 不会中断\\n");
        sleep(5);

        /* 检查挂起的信号 */
        sigpending(&pendmask);
        if (sigismember(&pendmask, SIGINT))
                printf("SIGINT 处于挂起状态\\n");

        /* 恢复原来的信号屏蔽字（解除屏蔽） */
        printf("解除屏蔽...\\n");
        sigprocmask(SIG_SETMASK, &oldmask, NULL);

        printf("程序继续运行\\n");
        return 0;
}`
        }
      }
    ]
  },
  {
    id: 'ipc',
    title: '进程间通信',
    icon: '🔗',
    description: '管道、FIFO、消息队列、共享内存、信号量',
    difficulty: '中级',
    sections: [
      {
        title: '管道（pipe）',
        content: `管道是 Unix/Linux 中最基本的 IPC 机制。pipe() 创建的匿名管道是半双工的（数据只能单向流动），且只能在有亲缘关系的进程间使用。

**pipe() 系统调用：**
• 创建两个文件描述符：fd[0] 用于读，fd[1] 用于写
• 数据遵循先进先出（FIFO）顺序
• 管道有固定大小的缓冲区（通常 64KB）
• 写端关闭后，读端读取到 EOF（返回 0）
• 读端关闭后，写端写入会产生 SIGPIPE 信号`,
        code: {
          language: 'c',
          title: '管道通信示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

int main(void)
{
        int pipefd[2];
        pid_t pid;
        char buf[256];

        if (pipe(pipefd) == -1) {
                perror("pipe");
                exit(EXIT_FAILURE);
        }

        pid = fork();
        if (pid < 0) {
                perror("fork");
                exit(EXIT_FAILURE);
        }

        if (pid == 0) {
                /* 子进程：读取端 */
                close(pipefd[1]); /* 关闭写端 */

                ssize_t n = read(pipefd[0], buf, sizeof(buf) - 1);
                if (n > 0) {
                        buf[n] = '\\0';
                        printf("子进程收到: %s\\n", buf);
                }
                close(pipefd[0]);
                exit(0);
        } else {
                /* 父进程：写入端 */
                close(pipefd[0]); /* 关闭读端 */

                const char *msg = "Hello from parent!";
                write(pipefd[1], msg, strlen(msg));
                close(pipefd[1]);

                wait(NULL);
        }

        return 0;
}`
        }
      },
      {
        title: '命名管道（FIFO）',
        content: `命名管道（FIFO）是一种特殊的文件，任何进程都可以通过文件名打开它进行通信，不要求进程间有亲缘关系。

**创建命名管道：**
• 命令行：mkfifo /tmp/myfifo
• 程序中：mkfifo(path, mode) 函数

FIFO 的特点和普通管道类似：半双工、先进先出、有缓冲区大小限制。打开 FIFO 时，如果没有进程在另一端打开对应的读/写端，open() 会阻塞。`,
        code: {
          language: 'c',
          title: 'FIFO 通信示例（写入端）',
          code: `/* fifo_writer.c - 写入端 */
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <sys/stat.h>

#define FIFO_PATH "/tmp/myfifo"

int main(void)
{
        int fd;

        /* 创建 FIFO（如果已存在则忽略错误） */
        mkfifo(FIFO_PATH, 0666);

        printf("等待读取端连接...\\n");
        fd = open(FIFO_PATH, O_WRONLY);

        const char *messages[] = {
                "消息1: Hello FIFO!",
                "消息2: 进程间通信",
                "消息3: 通信结束",
        };

        for (int i = 0; i < 3; i++) {
                write(fd, messages[i], strlen(messages[i]) + 1);
                printf("已发送: %s\\n", messages[i]);
                sleep(1);
        }

        close(fd);
        return 0;
}

/* fifo_reader.c - 读取端 */
/* fd = open(FIFO_PATH, O_RDONLY);
 * 然后循环 read(fd, buf, size) 读取数据 */`
        }
      },
      {
        title: '共享内存',
        content: `共享内存是最快的 IPC 机制，因为数据不需要在进程间复制——多个进程直接访问同一块物理内存。

**POSIX 共享内存 API：**
• \`shmget()\`：创建或获取共享内存段
• \`shmat()\`：将共享内存段附加到进程地址空间
• \`shmdt()\`：分离共享内存段
• \`shmctl()\`：控制共享内存段（删除等）

使用共享内存时需要配合同步机制（如信号量）来防止竞争条件。`,
        code: {
          language: 'c',
          title: '共享内存示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <unistd.h>
#include <sys/wait.h>

#define SHM_SIZE 1024

int main(void)
{
        int shmid;
        char *shmaddr;
        key_t key = ftok("/tmp", 'A');

        /* 创建共享内存 */
        shmid = shmget(key, SHM_SIZE, IPC_CREAT | 0666);
        if (shmid == -1) {
                perror("shmget");
                exit(EXIT_FAILURE);
        }

        pid_t pid = fork();
        if (pid == 0) {
                /* 子进程：写入共享内存 */
                shmaddr = shmat(shmid, NULL, 0);
                strcpy(shmaddr, "来自子进程的消息!");
                printf("子进程已写入共享内存\\n");
                shmdt(shmaddr);
                exit(0);
        } else {
                wait(NULL);

                /* 父进程：读取共享内存 */
                shmaddr = shmat(shmid, NULL, SHM_RDONLY);
                printf("父进程读取: %s\\n", shmaddr);
                shmdt(shmaddr);

                /* 删除共享内存 */
                shmctl(shmid, IPC_RMID, NULL);
        }

        return 0;
}`
        }
      },
      {
        title: '消息队列',
        content: `消息队列允许进程以消息为单位传递数据，每条消息都有一个类型（long 型整数），接收方可以按类型选择性接收消息。

**System V 消息队列 API：**
• \`msgget()\`：创建或获取消息队列
• \`msgsnd()\`：发送消息
• \`msgrcv()\`：接收消息
• \`msgctl()\`：控制消息队列

消息结构体必须以 long 类型的消息类型字段开头。`,
        code: {
          language: 'c',
          title: '消息队列示例',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/msg.h>

struct msgbuf {
        long mtype;
        char mtext[256];
};

int main(void)
{
        int msgid;
        key_t key = ftok("/tmp", 'B');

        /* 创建消息队列 */
        msgid = msgget(key, IPC_CREAT | 0666);
        if (msgid == -1) {
                perror("msgget");
                exit(EXIT_FAILURE);
        }

        if (fork() == 0) {
                /* 子进程：发送消息 */
                struct msgbuf msg;
                msg.mtype = 1;
                strcpy(msg.mtext, "Hello via message queue!");
                msgsnd(msgid, &msg, strlen(msg.mtext) + 1, 0);
                printf("已发送消息\\n");
                exit(0);
        } else {
                wait(NULL);

                /* 父进程：接收消息 */
                struct msgbuf msg;
                msgrcv(msgid, &msg, sizeof(msg.mtext), 1, 0);
                printf("收到消息: %s\\n", msg.mtext);

                /* 删除消息队列 */
                msgctl(msgid, IPC_RMID, NULL);
        }

        return 0;
}`
        }
      }
    ]
  },
  {
    id: 'threads',
    title: '线程编程',
    icon: '🧵',
    description: 'POSIX线程创建与终止、互斥锁、读写锁、条件变量',
    difficulty: '中级',
    sections: [
      {
        title: 'POSIX 线程基础',
        content: `线程（Thread）是进程内的一个执行单元。同一进程内的所有线程共享进程的地址空间、文件描述符和其他资源，但每个线程拥有自己的栈和寄存器状态。

**线程相比进程的优势：**
• 创建和切换的开销更小
• 线程间通信更方便（共享地址空间）
• 适合需要并行执行的计算密集型任务

**POSIX 线程（pthread）核心函数：**
• \`pthread_create()\`：创建新线程
• \`pthread_join()\`：等待线程结束
• \`pthread_exit()\`：线程主动退出
• \`pthread_detach()\`：分离线程（结束后自动回收资源）
• \`pthread_self()\`：获取当前线程 ID

编译时需要链接 pthread 库：gcc -o prog prog.c **-lpthread**`,
        code: {
          language: 'c',
          title: '线程创建与等待',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

void *thread_func(void *arg)
{
        int id = *(int *)arg;
        printf("线程 %d 开始执行 (TID=%lu)\\n",
               id, pthread_self());
        sleep(1);
        printf("线程 %d 执行完毕\\n", id);

        int *result = malloc(sizeof(int));
        *result = id * 100;
        return result;
}

int main(void)
{
        pthread_t threads[3];
        int ids[3] = {1, 2, 3};

        /* 创建 3 个线程 */
        for (int i = 0; i < 3; i++) {
                if (pthread_create(&threads[i], NULL,
                                   thread_func, &ids[i]) != 0) {
                        perror("pthread_create");
                        exit(EXIT_FAILURE);
                }
        }

        /* 等待所有线程结束并获取返回值 */
        for (int i = 0; i < 3; i++) {
                void *retval;
                pthread_join(threads[i], &retval);
                printf("线程 %d 返回值: %d\\n", ids[i], *(int *)retval);
                free(retval);
        }

        printf("所有线程执行完毕\\n");
        return 0;
}`
        }
      },
      {
        title: '互斥锁（Mutex）',
        content: `互斥锁（Mutex）是最基本的线程同步机制，保证同一时刻只有一个线程可以访问共享资源。

**互斥锁操作：**
• \`pthread_mutex_init()\`：初始化互斥锁
• \`pthread_mutex_lock()\`：加锁（如已被锁住则阻塞）
• \`pthread_mutex_trylock()\`：尝试加锁（非阻塞）
• \`pthread_mutex_unlock()\`：解锁
• \`pthread_mutex_destroy()\`：销毁互斥锁

使用互斥锁的黄金法则：加锁和解锁必须成对出现，持有锁的时间应尽量短。`,
        code: {
          language: 'c',
          title: '互斥锁保护共享数据',
          code: `#include <stdio.h>
#include <pthread.h>

#define NUM_THREADS 5
#define ITERATIONS  100000

int counter = 0;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

void *increment(void *arg)
{
        for (int i = 0; i < ITERATIONS; i++) {
                pthread_mutex_lock(&mutex);
                counter++;
                pthread_mutex_unlock(&mutex);
        }
        return NULL;
}

int main(void)
{
        pthread_t threads[NUM_THREADS];

        for (int i = 0; i < NUM_THREADS; i++)
                pthread_create(&threads[i], NULL, increment, NULL);

        for (int i = 0; i < NUM_THREADS; i++)
                pthread_join(threads[i], NULL);

        printf("最终计数: %d (期望: %d)\\n",
               counter, NUM_THREADS * ITERATIONS);

        pthread_mutex_destroy(&mutex);
        return 0;
}`
        }
      },
      {
        title: '读写锁',
        content: `读写锁（rwlock）允许多个线程同时读取共享数据，但写入时需要独占访问。适用于读多写少的场景。

**读写锁规则：**
• 没有线程持有写锁时，多个线程可以同时获取读锁
• 只有没有任何线程持有读锁或写锁时，才能获取写锁
• 写锁比读锁优先级更高（防止写者饥饿）`,
        code: {
          language: 'c',
          title: '读写锁示例',
          code: `#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

int shared_data = 0;
pthread_rwlock_t rwlock = PTHREAD_RWLOCK_INITIALIZER;

void *reader(void *arg)
{
        int id = *(int *)arg;
        for (int i = 0; i < 5; i++) {
                pthread_rwlock_rdlock(&rwlock);
                printf("读者 %d: 数据 = %d\\n", id, shared_data);
                pthread_rwlock_unlock(&rwlock);
                usleep(100000);
        }
        return NULL;
}

void *writer(void *arg)
{
        int id = *(int *)arg;
        for (int i = 0; i < 3; i++) {
                pthread_rwlock_wrlock(&rwlock);
                shared_data += 10;
                printf("写者 %d: 写入数据 = %d\\n", id, shared_data);
                pthread_rwlock_unlock(&rwlock);
                usleep(200000);
        }
        return NULL;
}

int main(void)
{
        pthread_t r[3], w[2];
        int r_ids[] = {1, 2, 3}, w_ids[] = {1, 2};

        for (int i = 0; i < 3; i++)
                pthread_create(&r[i], NULL, reader, &r_ids[i]);
        for (int i = 0; i < 2; i++)
                pthread_create(&w[i], NULL, writer, &w_ids[i]);

        for (int i = 0; i < 3; i++) pthread_join(r[i], NULL);
        for (int i = 0; i < 2; i++) pthread_join(w[i], NULL);

        pthread_rwlock_destroy(&rwlock);
        return 0;
}`
        }
      },
      {
        title: '条件变量',
        content: `条件变量（Condition Variable）用于线程间的事件通知。一个线程等待某个条件成立，另一个线程在条件满足时发出通知。条件变量必须与互斥锁配合使用。

**条件变量操作：**
• \`pthread_cond_wait(cond, mutex)\`：释放互斥锁并等待条件
• \`pthread_cond_signal(cond)\`：唤醒一个等待的线程
• \`pthread_cond_broadcast(cond)\`：唤醒所有等待的线程

典型模式是**生产者-消费者模型**。`,
        code: {
          language: 'c',
          title: '条件变量：生产者-消费者',
          code: `#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int count = 0;

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t not_full = PTHREAD_COND_INITIALIZER;
pthread_cond_t not_empty = PTHREAD_COND_INITIALIZER;

void *producer(void *arg)
{
        for (int i = 1; i <= 10; i++) {
                pthread_mutex_lock(&mutex);
                while (count == BUFFER_SIZE)
                        pthread_cond_wait(&not_full, &mutex);

                buffer[count++] = i;
                printf("生产: %d (缓冲区: %d/%d)\\n",
                       i, count, BUFFER_SIZE);

                pthread_cond_signal(&not_empty);
                pthread_mutex_unlock(&mutex);
                usleep(100000);
        }
        return NULL;
}

void *consumer(void *arg)
{
        for (int i = 0; i < 10; i++) {
                pthread_mutex_lock(&mutex);
                while (count == 0)
                        pthread_cond_wait(&not_empty, &mutex);

                int item = buffer[--count];
                printf("消费: %d (缓冲区: %d/%d)\\n",
                       item, count, BUFFER_SIZE);

                pthread_cond_signal(&not_full);
                pthread_mutex_unlock(&mutex);
                usleep(200000);
        }
        return NULL;
}

int main(void)
{
        pthread_t prod, cons;
        pthread_create(&prod, NULL, producer, NULL);
        pthread_create(&cons, NULL, consumer, NULL);
        pthread_join(prod, NULL);
        pthread_join(cons, NULL);
        return 0;
}`
        }
      }
    ]
  },
  {
    id: 'network',
    title: '网络编程',
    icon: '🌐',
    description: 'Socket API、TCP/UDP客户端服务器、并发服务器',
    difficulty: '高级',
    sections: [
      {
        title: 'Socket 基础概念',
        content: `Socket（套接字）是网络通信的端点，提供了进程间跨网络通信的接口。它是应用层与传输层（TCP/UDP）之间的抽象层。

**Socket 地址结构：**
• \`struct sockaddr_in\`：IPv4 地址（地址族 AF_INET、端口、IP 地址）
• 端口号范围：0-65535（0-1023 为特权端口）

**核心 Socket API：**
• \`socket()\`：创建套接字
• \`bind()\`：绑定地址和端口
• \`listen()\`：开始监听连接（TCP）
• \`accept()\`：接受客户端连接（TCP）
• \`connect()\`：连接到服务器（TCP）
• \`send()/recv()\`：TCP 数据传输
• \`sendto()/recvfrom()\`：UDP 数据传输

**字节序转换函数：**
• \`htons()/htonl()\`：主机字节序 → 网络字节序
• \`ntohs()/ntohl()\`：网络字节序 → 主机字节序
• \`inet_pton()/inet_ntop()\`：IP 地址与字符串互转`
      },
      {
        title: 'TCP 服务器',
        content: `TCP（传输控制协议）提供可靠的、面向连接的字节流传输。TCP 服务器的典型流程是：socket() → bind() → listen() → accept() → recv()/send() → close()。`,
        code: {
          language: 'c',
          title: 'TCP 服务器（回显服务器）',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 8080
#define BUFFER_SIZE 1024

int main(void)
{
        int server_fd, client_fd;
        struct sockaddr_in server_addr, client_addr;
        socklen_t client_len = sizeof(client_addr);
        char buf[BUFFER_SIZE];
        ssize_t n;

        /* 创建 TCP 套接字 */
        server_fd = socket(AF_INET, SOCK_STREAM, 0);
        if (server_fd == -1) {
                perror("socket");
                exit(EXIT_FAILURE);
        }

        /* 允许地址重用 */
        int opt = 1;
        setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR,
                   &opt, sizeof(opt));

        /* 绑定地址 */
        memset(&server_addr, 0, sizeof(server_addr));
        server_addr.sin_family = AF_INET;
        server_addr.sin_addr.s_addr = INADDR_ANY;
        server_addr.sin_port = htons(PORT);
        bind(server_fd, (struct sockaddr *)&server_addr,
             sizeof(server_addr));

        /* 监听 */
        listen(server_fd, 5);
        printf("服务器监听端口 %d...\\n", PORT);

        /* 接受连接 */
        client_fd = accept(server_fd,
                           (struct sockaddr *)&client_addr,
                           &client_len);
        printf("客户端已连接: %s:%d\\n",
               inet_ntoa(client_addr.sin_addr),
               ntohs(client_addr.sin_port));

        /* 回显数据 */
        while ((n = recv(client_fd, buf, sizeof(buf)-1, 0)) > 0) {
                buf[n] = '\\0';
                printf("收到: %s", buf);
                send(client_fd, buf, n, 0);
        }

        close(client_fd);
        close(server_fd);
        return 0;
}`
        }
      },
      {
        title: 'TCP 客户端',
        content: `TCP 客户端流程比服务器简单：socket() → connect() → send()/recv() → close()。客户端不需要 bind()、listen() 和 accept()。`,
        code: {
          language: 'c',
          title: 'TCP 客户端',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 8080
#define BUFFER_SIZE 1024

int main(void)
{
        int sockfd;
        struct sockaddr_in server_addr;
        char buf[BUFFER_SIZE];

        /* 创建套接字 */
        sockfd = socket(AF_INET, SOCK_STREAM, 0);
        if (sockfd == -1) {
                perror("socket");
                exit(EXIT_FAILURE);
        }

        /* 设置服务器地址 */
        memset(&server_addr, 0, sizeof(server_addr));
        server_addr.sin_family = AF_INET;
        server_addr.sin_port = htons(PORT);
        inet_pton(AF_INET, "127.0.0.1",
                  &server_addr.sin_addr);

        /* 连接服务器 */
        if (connect(sockfd, (struct sockaddr *)&server_addr,
                    sizeof(server_addr)) == -1) {
                perror("connect");
                exit(EXIT_FAILURE);
        }
        printf("已连接到服务器\\n");

        /* 发送和接收数据 */
        printf("输入消息（Ctrl+D 退出）:\\n");
        while (fgets(buf, sizeof(buf), stdin) != NULL) {
                send(sockfd, buf, strlen(buf), 0);
                ssize_t n = recv(sockfd, buf, sizeof(buf)-1, 0);
                if (n > 0) {
                        buf[n] = '\\0';
                        printf("回显: %s", buf);
                }
        }

        close(sockfd);
        return 0;
}`
        }
      },
      {
        title: 'UDP 编程与并发服务器',
        content: `**UDP（用户数据报协议）** 是无连接的，不保证可靠传输，但延迟更低。使用 sendto()/recvfrom() 进行数据传输。

**并发服务器模型：**
1. **多进程模型**：每个客户端连接 fork() 一个子进程处理
2. **多线程模型**：每个客户端连接创建一个线程处理
3. **I/O 多路复用**：使用 select()/poll()/epoll() 在单线程中处理多个连接

epoll 是 Linux 特有的高性能 I/O 多路复用机制，适合处理大量并发连接。`,
        code: {
          language: 'c',
          title: '多进程并发 TCP 服务器',
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <signal.h>
#include <sys/wait.h>

#define PORT 8080
#define BUF_SIZE 1024

void sigchld_handler(int sig)
{
        while (waitpid(-1, NULL, WNOHANG) > 0)
                ;
}

void handle_client(int client_fd)
{
        char buf[BUF_SIZE];
        ssize_t n;

        while ((n = recv(client_fd, buf, sizeof(buf)-1, 0)) > 0) {
                buf[n] = '\\0';
                send(client_fd, buf, n, 0);
        }
        close(client_fd);
        exit(0);
}

int main(void)
{
        int server_fd, client_fd;
        struct sockaddr_in addr;
        socklen_t len = sizeof(addr);

        signal(SIGCHLD, sigchld_handler);

        server_fd = socket(AF_INET, SOCK_STREAM, 0);
        int opt = 1;
        setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR,
                   &opt, sizeof(opt));

        memset(&addr, 0, sizeof(addr));
        addr.sin_family = AF_INET;
        addr.sin_addr.s_addr = INADDR_ANY;
        addr.sin_port = htons(PORT);
        bind(server_fd, (struct sockaddr *)&addr, sizeof(addr));
        listen(server_fd, 128);

        printf("并发服务器监听端口 %d\\n", PORT);

        while (1) {
                client_fd = accept(server_fd,
                        (struct sockaddr *)&addr, &len);
                if (client_fd == -1) continue;

                if (fork() == 0) {
                        close(server_fd);
                        handle_client(client_fd);
                }
                close(client_fd);
        }

        return 0;
}`
        }
      }
    ]
  },
  {
    id: 'containers',
    title: '容器技术',
    icon: '📦',
    description: 'Docker基础、镜像与容器生命周期、Linux namespace与cgroups、容器网络与存储',
    difficulty: '中级',
    sections: [
      {
        title: '容器与 Docker 基础',
        content: `容器是一种操作系统级别的虚拟化技术，通过 Linux 内核的 namespace（命名空间）和 cgroups（控制组）实现进程隔离和资源限制。

**容器 vs 虚拟机：**
• 容器共享宿主机内核，启动秒级，开销极小
• 虚拟机运行完整 OS 和独立内核，启动分钟级，隔离性更强

**Docker 核心概念：**
• **镜像（Image）**：只读的应用打包模板，由多层文件系统组成
• **容器（Container）**：镜像的运行实例，在镜像层之上添加可写层
• **Dockerfile**：定义镜像构建步骤的文本文件
• **仓库（Registry）**：存储和分发镜像的服务（如 Docker Hub）

**常用命令：**
• \`docker build -t name:tag .\` — 构建镜像
• \`docker run -d -p 8080:80 image\` — 运行容器
• \`docker ps\` — 查看运行中的容器
• \`docker stop/start/rm\` — 容器生命周期管理
• \`docker-compose up\` — 启动多容器应用`
      },
      {
        title: 'Linux namespace 与 cgroups',
        content: `容器的底层依赖两大 Linux 内核特性：

**namespace（命名空间）— 隔离：**
• **PID namespace**：隔离进程 ID 空间
• **Network namespace**：隔离网络接口、路由表、端口
• **Mount namespace**：隔离文件系统挂载点
• **UTS namespace**：隔离主机名和域名
• **User namespace**：隔离用户和组 ID
• **IPC namespace**：隔离进程间通信资源

**cgroups（控制组）— 资源限制：**
• 限制 CPU 使用时间和核心数
• 限制内存使用量（超出可触发 OOM Killer）
• 限制磁盘 I/O 带宽
• 统计资源使用情况

Docker 使用 \`docker run --memory=512m --cpus=1.5\` 等参数底层调用 cgroups 实现资源限制。`
      }
    ]
  },
  {
    id: 'modern-tools',
    title: '现代 Linux 工具',
    icon: '🛠️',
    description: 'systemd服务管理、Git版本控制、CI/CD概念、包管理器、现代CLI工具',
    difficulty: '基础',
    sections: [
      {
        title: 'systemd 服务管理',
        content: `systemd 是现代 Linux 发行版的默认 init 系统（PID 1），负责系统启动和服务管理。

**核心概念：**
• **Unit 文件**：定义服务、挂载点、定时器等的配置文件（.service、.timer、.mount）
• **Service Type**：simple（默认，前台运行）、forking（传统 daemon）、oneshot（一次性任务）、notify（主动通知就绪）

**常用 systemctl 命令：**
• \`systemctl start/stop/restart service\` — 启停服务
• \`systemctl enable/disable service\` — 开机自启管理
• \`systemctl status service\` — 查看服务状态
• \`systemctl daemon-reload\` — 重新加载 unit 文件

**journalctl 日志查看：**
• \`journalctl -u nginx\` — 查看指定服务日志
• \`journalctl -f\` — 实时跟踪最新日志
• \`journalctl --since "1 hour ago"\` — 按时间过滤`
      },
      {
        title: 'Git 版本控制',
        content: `Git 是最流行的分布式版本控制系统，几乎所有 Linux 项目都使用 Git 管理代码。

**核心工作流：**
工作区（Working Directory）→ 暂存区（Staging Area）→ 本地仓库（Repository）→ 远程仓库（Remote）

**常用命令：**
• \`git add file\` — 添加到暂存区
• \`git commit -m "msg"\` — 提交到本地仓库
• \`git branch / git checkout -b\` — 分支管理
• \`git merge\` — 合并分支（创建合并提交）
• \`git rebase\` — 变基（形成线性历史）
• \`git push / git pull\` — 与远程仓库同步

**Feature Branch 工作流：**
从主分支创建功能分支 → 开发并提交 → 发起 Pull Request → 代码审查 → 合并到主分支`
      },
      {
        title: '包管理与现代 CLI 工具',
        content: `**包管理器：**
• **apt**（Debian/Ubuntu）：apt update、apt install、apt remove
• **yum/dnf**（RHEL/CentOS/Fedora）：dnf install、dnf update
• **pacman**（Arch）：pacman -S、pacman -Syu

**现代 CLI 替代工具：**
• **ripgrep（rg）**：替代 grep，默认递归、自动忽略 .gitignore、多线程搜索
• **fd**：替代 find，语法简洁、速度更快
• **bat**：替代 cat，带语法高亮和行号
• **exa/eza**：替代 ls，更好的显示格式和 Git 集成

**终端复用器 tmux：**
• 在一个终端中管理多个会话、窗口和面板
• \`Ctrl+B d\` 分离会话（后台运行），\`tmux attach\` 重连
• SSH 断开后会话不丢失

**SSH 密钥认证：**
• \`ssh-keygen\` 生成密钥对（公钥 + 私钥）
• 公钥放服务器 ~/.ssh/authorized_keys，私钥留本地
• 比密码认证更安全、更便捷`
      }
    ]
  }
]
