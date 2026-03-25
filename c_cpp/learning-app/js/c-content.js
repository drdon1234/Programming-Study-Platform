window.C_CHAPTERS = [
  {
    id: 1,
    title: "初识C语言",
    description: "了解C语言的历史、特点和编译过程，编写第一个C程序",
    content: `<h2>初识C语言</h2>

<h3>C语言的历史</h3>
<p>C语言由<strong>丹尼斯·里奇（Dennis Ritchie）</strong>于<strong>1972年</strong>在美国贝尔实验室（Bell Labs）设计开发。C语言最初是为了重写UNIX操作系统而创建的——在此之前，UNIX主要用汇编语言编写，可移植性极差。C语言的出现使得UNIX成为第一个可以在多种硬件平台上运行的操作系统，这在计算机发展史上具有里程碑意义。</p>
<p>C语言的标准化经历了几个关键阶段：</p>
<ul>
<li><strong>K&amp;R C（1978年）</strong>：Brian Kernighan 和 Dennis Ritchie 合著的《The C Programming Language》成为C语言的第一个非正式标准。</li>
<li><strong>ANSI C / C89（1989年）</strong>：美国国家标准协会发布的第一个正式C语言标准。</li>
<li><strong>C99（1999年）</strong>：新增了<code>//</code>单行注释、<code>long long</code>类型、变长数组等特性。</li>
<li><strong>C11（2011年）</strong>：增加了多线程支持、泛型选择表达式、匿名结构体和联合体等。</li>
</ul>

<h3>为什么学习C语言</h3>
<p>即使在今天，C语言仍然是最重要的编程语言之一。学习C语言有以下核心价值：</p>
<ul>
<li><strong>系统编程</strong>：Linux内核、Windows内核、数据库引擎（如SQLite）、编译器（如GCC）等底层软件均由C编写。</li>
<li><strong>嵌入式开发</strong>：单片机、物联网设备、汽车电子控制系统等资源受限的环境广泛使用C语言。</li>
<li><strong>理解计算机底层</strong>：C语言允许直接操作内存地址和硬件寄存器，帮助你深入理解计算机的运行机制。</li>
<li><strong>语言基石</strong>：C++、Java、C#、Go、Rust等语言在语法和理念上都深受C语言影响。</li>
</ul>

<h3>编译过程</h3>
<p>C语言是<strong>编译型语言</strong>，将源代码（<code>.c</code>文件）转换为可执行文件需要经过四个步骤：</p>
<ol>
<li><strong>预处理（Preprocessing）</strong>：处理以<code>#</code>开头的指令，展开头文件（<code>#include</code>）和宏定义（<code>#define</code>）。</li>
<li><strong>编译（Compilation）</strong>：将预处理后的代码翻译为汇编语言。</li>
<li><strong>汇编（Assembly）</strong>：将汇编代码转换为机器码，生成目标文件（<code>.o</code> / <code>.obj</code>）。</li>
<li><strong>链接（Linking）</strong>：将多个目标文件与库文件合并，生成最终的可执行文件。</li>
</ol>

<div class="key-point">
<p>牢记编译四步骤：<strong>预处理 → 编译 → 汇编 → 链接</strong>。理解这个过程对调试编译错误和链接错误非常重要。</p>
</div>

<h3>第一个C程序</h3>
<p>下面是经典的"Hello, World!"程序：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
<p>逐行解析：</p>
<ul>
<li><code>#include &lt;stdio.h&gt;</code>：预处理指令，包含标准输入输出库头文件，使我们能使用<code>printf</code>等函数。</li>
<li><code>int main(void)</code>：主函数，是程序的唯一入口点。<code>int</code>表示返回值为整数，<code>void</code>表示不接受参数。</li>
<li><code>printf("Hello, World!\\n")</code>：调用标准库函数向屏幕输出文本，<code>\\n</code>表示换行。</li>
<li><code>return 0</code>：向操作系统返回0，表示程序正常退出。</li>
</ul>

<p>再来看一个多行输出的例子：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("===== 学习C语言 =====\\n");
    printf("第一步：安装编译器\\n");
    printf("第二步：编写代码\\n");
    printf("第三步：编译并运行\\n");
    return 0;
}</code></pre>

<div class="key-point">
<p>每个C程序必须有且只有一个<code>main()</code>函数作为入口。使用<code>printf()</code>前需包含<code>&lt;stdio.h&gt;</code>头文件。<code>\\n</code>是换行转义字符，会让后续输出换到下一行。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "C语言是由谁在哪一年开发的？",
        options: ["Bjarne Stroustrup，1979年", "Dennis Ritchie，1972年", "Ken Thompson，1970年", "James Gosling，1995年"],
        answer: 1,
        explanation: "C语言由<strong>Dennis Ritchie</strong>（丹尼斯·里奇）于<strong>1972年</strong>在贝尔实验室开发，最初目的是重写UNIX操作系统。"
      },
      {
        type: "choice",
        question: "C语言源代码编译为可执行文件的正确顺序是？",
        options: ["编译 → 预处理 → 链接 → 汇编", "预处理 → 编译 → 汇编 → 链接", "汇编 → 编译 → 预处理 → 链接", "预处理 → 汇编 → 编译 → 链接"],
        answer: 1,
        explanation: "正确的编译流程为：<strong>预处理（Preprocessing）→ 编译（Compilation）→ 汇编（Assembly）→ 链接（Linking）</strong>。"
      },
      {
        type: "choice",
        question: "以下哪个是C语言的第一个正式国际标准？",
        options: ["K&R C", "ANSI C / C89", "C99", "C11"],
        answer: 1,
        explanation: "<strong>ANSI C</strong>（又称C89）是1989年由美国国家标准协会发布的第一个C语言正式标准。K&amp;R C是1978年的非正式标准。"
      },
      {
        type: "truefalse",
        question: "C语言是一种解释型语言，源代码不需要编译就可以直接运行。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。C语言是<strong>编译型语言</strong>，源代码必须经过预处理、编译、汇编和链接四个步骤后才能生成可执行文件并运行。"
      },
      {
        type: "truefalse",
        question: "<code>main()</code>函数是每个C程序的入口点，程序从这里开始执行。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。每个C程序都必须包含一个<code>main()</code>函数，操作系统在启动程序时会调用它作为执行的起点。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    printf("Hello");
    printf("World");
    return 0;
}</code></pre>`,
        options: ["Hello World", "HelloWorld", "Hello\\nWorld", "编译错误"],
        answer: 1,
        explanation: "两次<code>printf</code>调用之间没有换行符<code>\\n</code>也没有空格，输出会直接拼接在一起，结果为<code>HelloWorld</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    printf("A\\nB\\nC\\n");
    return 0;
}</code></pre>`,
        options: ["A\\nB\\nC\\n", "ABC", "A B C", "A（换行）B（换行）C"],
        answer: 3,
        explanation: "<code>\\n</code>是换行转义字符，每遇到一个<code>\\n</code>就会换到下一行输出，因此A、B、C分别显示在三行上。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    printf("%d\\n", 10 + 25);
    return 0;
}</code></pre>`,
        options: ["10 + 25", "1025", "35", "编译错误"],
        answer: 2,
        explanation: "<code>%d</code>是整数格式说明符，<code>printf</code>会先计算表达式<code>10 + 25</code>的值为35，然后将其以十进制整数形式输出。"
      }
    ]
  },
  {
    id: 2,
    title: "C语言概述",
    description: "深入理解C程序的基本结构、预处理指令、注释和基本输入输出",
    content: `<h2>C语言概述</h2>

<h3>程序的基本结构</h3>
<p>一个完整的C程序由若干<strong>函数</strong>组成，其中<code>main()</code>函数是程序运行的入口。程序从<code>main()</code>的第一条语句开始，按顺序逐条执行，直到遇到<code>return</code>语句或函数体结束。每条语句以<strong>分号（;）</strong>结尾，多条语句组成的代码块用<strong>花括号（{ }）</strong>包围。</p>

<pre class="language-c"><code>#include &lt;stdio.h&gt;

void greet(void) {
    printf("欢迎学习C语言！\\n");
}

int main(void) {
    greet();
    printf("程序即将结束。\\n");
    return 0;
}</code></pre>

<p>上面的程序定义了两个函数：<code>greet()</code>和<code>main()</code>。程序从<code>main()</code>开始执行，调用<code>greet()</code>函数后回到<code>main()</code>继续执行。</p>

<h3>#include 预处理指令</h3>
<p><code>#include</code>指令用于在编译前将指定头文件的内容插入到当前文件中。它有两种形式：</p>
<ul>
<li><code>#include &lt;头文件&gt;</code>：在系统标准目录中搜索，用于标准库头文件。</li>
<li><code>#include "头文件"</code>：先在当前目录搜索，再到系统目录搜索，常用于自定义头文件。</li>
</ul>
<p>常见的标准头文件包括：<code>&lt;stdio.h&gt;</code>（输入输出）、<code>&lt;stdlib.h&gt;</code>（通用工具）、<code>&lt;string.h&gt;</code>（字符串操作）、<code>&lt;math.h&gt;</code>（数学函数）等。</p>

<h3>注释</h3>
<p>注释是写给程序员看的说明文字，编译器会忽略所有注释。C语言支持两种注释风格：</p>
<pre class="language-c"><code>/* 这是C89风格的多行注释
   可以跨越多行
   直到遇到结束标记 */

// 这是C99引入的单行注释，直到行末结束

int x = 10; // 也可以在代码后面加注释
/* int y = 20; */  // 注释可以用来临时禁用代码</code></pre>

<div class="key-point">
<p>多行注释<code>/* */</code>不能嵌套使用——内层的<code>*/</code>会被当作外层注释的结束标记，导致编译错误。建议使用<code>//</code>单行注释来临时禁用代码。</p>
</div>

<h3>C语言关键字</h3>
<p>C语言有一组<strong>保留关键字</strong>，它们具有特定含义，不能用作变量名、函数名等标识符。C89标准定义了32个关键字，包括：</p>
<ul>
<li><strong>数据类型</strong>：<code>int</code>、<code>char</code>、<code>float</code>、<code>double</code>、<code>void</code>、<code>short</code>、<code>long</code>、<code>unsigned</code>、<code>signed</code></li>
<li><strong>控制流</strong>：<code>if</code>、<code>else</code>、<code>switch</code>、<code>case</code>、<code>for</code>、<code>while</code>、<code>do</code>、<code>break</code>、<code>continue</code>、<code>return</code>、<code>goto</code>、<code>default</code></li>
<li><strong>存储类</strong>：<code>auto</code>、<code>static</code>、<code>extern</code>、<code>register</code></li>
<li><strong>其他</strong>：<code>struct</code>、<code>union</code>、<code>enum</code>、<code>typedef</code>、<code>const</code>、<code>volatile</code>、<code>sizeof</code></li>
</ul>

<h3>基本输出——printf</h3>
<p><code>printf()</code>是最常用的输出函数，通过<strong>格式字符串</strong>控制输出内容：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int age = 20;
    float height = 1.75f;
    char grade = 'A';

    printf("年龄：%d 岁\\n", age);
    printf("身高：%.2f 米\\n", height);
    printf("等级：%c\\n", grade);
    printf("信息：%s\\n", "Hello");
    return 0;
}</code></pre>

<div class="key-point">
<p><code>return 0;</code>表示程序正常退出。按照惯例，返回0表示成功，非零值表示出现了某种错误。操作系统可以根据返回值判断程序的执行状态。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "<code>#include &lt;stdio.h&gt;</code> 的作用是什么？",
        options: ["定义一个名为stdio的变量", "将标准输入输出头文件的内容包含到程序中", "运行stdio.h程序", "声明main函数"],
        answer: 1,
        explanation: "<code>#include &lt;stdio.h&gt;</code>是预处理指令，它在编译前将标准输入输出头文件<code>stdio.h</code>的内容插入到当前源文件中，使程序能够使用<code>printf</code>、<code>scanf</code>等函数。"
      },
      {
        type: "choice",
        question: "以下哪个是C99标准引入的注释风格？",
        options: ["/* 注释 */", "// 注释", "<!-- 注释 -->", "# 注释"],
        answer: 1,
        explanation: "<code>//</code>单行注释是C99标准引入的。<code>/* */</code>多行注释从C语言诞生之初就存在。<code>&lt;!-- --&gt;</code>是HTML注释，<code>#</code>在C中是预处理指令标记。"
      },
      {
        type: "choice",
        question: "以下哪个<strong>不是</strong>C语言的关键字？",
        options: ["int", "include", "return", "void"],
        answer: 1,
        explanation: "<code>include</code>不是C语言关键字，它只在<code>#include</code>预处理指令中使用。<code>int</code>、<code>return</code>、<code>void</code>都是C语言的保留关键字。"
      },
      {
        type: "choice",
        question: "<code>return 0;</code> 在<code>main()</code>函数中表示什么？",
        options: ["程序遇到了错误", "程序正常退出", "程序返回值为空", "程序需要重新运行"],
        answer: 1,
        explanation: "在<code>main()</code>函数中，<code>return 0;</code>向操作系统表明程序<strong>正常退出</strong>。按惯例，0表示成功，非零值表示异常。"
      },
      {
        type: "truefalse",
        question: "C语言的多行注释 <code>/* */</code> 可以嵌套使用。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。C语言的<code>/* */</code>多行注释<strong>不支持嵌套</strong>。编译器遇到第一个<code>*/</code>就会认为注释结束，嵌套使用会导致编译错误。"
      },
      {
        type: "truefalse",
        question: "一个C程序可以包含多个函数，但必须有且仅有一个<code>main()</code>函数。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。C程序可以定义任意多个函数，但<strong>有且仅有一个</strong><code>main()</code>函数作为程序的入口点。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    // printf("AAA\\n");
    printf("BBB\\n");
    /* printf("CCC\\n"); */
    return 0;
}</code></pre>`,
        options: ["AAA（换行）BBB（换行）CCC", "BBB", "AAA（换行）BBB", "BBB（换行）CCC"],
        answer: 1,
        explanation: "第一行<code>printf</code>被<code>//</code>单行注释注释掉了，第三行<code>printf</code>被<code>/* */</code>多行注释注释掉了。只有<code>printf(\"BBB\\n\")</code>会被执行，输出<code>BBB</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
void hello(void) {
    printf("Hello ");
}
int main(void) {
    hello();
    hello();
    printf("World\\n");
    return 0;
}</code></pre>`,
        options: ["Hello World", "Hello Hello World", "Hello Hello \\nWorld", "编译错误"],
        answer: 1,
        explanation: "<code>hello()</code>函数被调用两次，每次输出<code>Hello </code>（含尾部空格），然后<code>printf</code>输出<code>World</code>和换行符。最终输出为<code>Hello Hello World</code>。"
      }
    ]
  },
  {
    id: 3,
    title: "数据和C",
    description: "掌握C语言的基本数据类型、变量、常量及类型转换",
    content: `<h2>数据和C</h2>

<h3>变量与常量</h3>
<p><strong>变量</strong>是程序中用于存储数据的命名内存空间。使用变量前必须先<strong>声明</strong>，告诉编译器变量的名称和数据类型。变量名由字母、数字和下划线组成，且必须以字母或下划线开头，区分大小写。</p>
<p><strong>常量</strong>是在程序运行过程中值不会改变的数据。可以使用<code>const</code>限定符声明常量，也可以使用<code>#define</code>宏定义。</p>

<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int count = 10;           // 整型变量
    const double PI = 3.14159; // 常量
    char letter = 'A';        // 字符变量

    printf("count = %d\\n", count);
    printf("PI = %.5f\\n", PI);
    printf("letter = %c\\n", letter);
    return 0;
}</code></pre>

<h3>整数类型</h3>
<p>C语言提供多种整数类型以满足不同的存储需求：</p>
<ul>
<li><code>short</code>（短整型）：至少16位，范围至少 -32768 ~ 32767。</li>
<li><code>int</code>（整型）：最常用的整数类型，通常为32位。</li>
<li><code>long</code>（长整型）：至少32位。</li>
<li><code>long long</code>（C99）：至少64位，适合存储非常大的整数。</li>
</ul>
<p>每种类型都可以加<code>unsigned</code>修饰，表示只存储非负整数，正数范围翻倍。例如<code>unsigned int</code>在32位系统上的范围为 0 ~ 4294967295。</p>

<h3>浮点类型</h3>
<p>浮点类型用于表示带小数部分的数值：</p>
<ul>
<li><code>float</code>：单精度，通常占4字节，约6~7位有效数字。</li>
<li><code>double</code>：双精度，通常占8字节，约15~16位有效数字。</li>
<li><code>long double</code>：扩展精度，提供更高精度（实现相关）。</li>
</ul>

<h3>char类型与ASCII</h3>
<p><code>char</code>类型占1个字节，用于存储字符。在C中，字符本质上是以<strong>ASCII码</strong>（整数）形式存储的。例如字符<code>'A'</code>的ASCII值为65，<code>'a'</code>为97，<code>'0'</code>为48。</p>

<h3>sizeof运算符</h3>
<p><code>sizeof</code>是编译时运算符，用于获取类型或变量占用的<strong>字节数</strong>：</p>

<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("char:      %zu 字节\\n", sizeof(char));
    printf("short:     %zu 字节\\n", sizeof(short));
    printf("int:       %zu 字节\\n", sizeof(int));
    printf("long:      %zu 字节\\n", sizeof(long));
    printf("long long: %zu 字节\\n", sizeof(long long));
    printf("float:     %zu 字节\\n", sizeof(float));
    printf("double:    %zu 字节\\n", sizeof(double));
    return 0;
}</code></pre>

<h3>类型转换</h3>
<p>C语言中的类型转换分为两种：</p>
<ul>
<li><strong>隐式转换（自动转换）</strong>：在混合运算中，编译器自动将较小的类型提升为较大的类型。例如<code>int</code>与<code>double</code>运算时，<code>int</code>会被提升为<code>double</code>。</li>
<li><strong>显式转换（强制转换）</strong>：使用<code>(类型名)</code>语法手动转换，例如<code>(int)3.7</code>将浮点数截断为整数3。</li>
</ul>

<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int a = 5, b = 2;
    double result1 = a / b;         // 整数除法：2.000000
    double result2 = (double)a / b; // 强制转换后：2.500000

    printf("整数除法：%f\\n", result1);
    printf("浮点除法：%f\\n", result2);
    return 0;
}</code></pre>

<div class="key-point">
<p>整数除法会<strong>截断小数部分</strong>，例如<code>5 / 2</code>结果为2而非2.5。如果需要精确的浮点结果，至少要将一个操作数转换为浮点类型：<code>(double)5 / 2</code>得到2.5。</p>
</div>

<div class="key-point">
<p><code>const</code>修饰的变量在初始化后不能被修改。使用<code>const</code>比<code>#define</code>宏定义更安全，因为<code>const</code>变量有类型检查。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "以下哪种数据类型通常占用内存最大？",
        options: ["char", "int", "float", "double"],
        answer: 3,
        explanation: "<code>double</code>通常占8个字节，<code>float</code>通常占4个字节，<code>int</code>通常占4个字节，<code>char</code>固定占1个字节。因此<code>double</code>占用内存最大。"
      },
      {
        type: "choice",
        question: "<code>unsigned int</code>类型的变量能存储的最小值是？",
        options: ["-2147483648", "-1", "0", "1"],
        answer: 2,
        explanation: "<code>unsigned</code>（无符号）类型只能存储<strong>非负整数</strong>，因此最小值为<strong>0</strong>。它将原本用于表示符号的位也用来存储数值，正数范围翻倍。"
      },
      {
        type: "choice",
        question: "字符<code>'A'</code>的ASCII码值是多少？",
        options: ["55", "60", "65", "97"],
        answer: 2,
        explanation: "在ASCII编码表中，大写字母<code>'A'</code>的编码值为<strong>65</strong>。<code>'a'</code>（小写）为97，<code>'0'</code>（数字字符零）为48。"
      },
      {
        type: "choice",
        question: "<code>sizeof(char)</code>的返回值是多少？",
        options: ["取决于平台", "1", "2", "4"],
        answer: 1,
        explanation: "C标准规定<code>sizeof(char)</code>永远返回<strong>1</strong>，无论在哪个平台上。<code>char</code>是C中最小的可寻址单位，其大小定义为1个字节。"
      },
      {
        type: "truefalse",
        question: "用<code>const</code>修饰的变量在程序运行过程中可以被重新赋值。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。<code>const</code>修饰的变量是<strong>只读的</strong>，初始化后不允许再次赋值。尝试修改<code>const</code>变量会导致编译错误。"
      },
      {
        type: "truefalse",
        question: "在C语言中，<code>int</code>和<code>double</code>混合运算时，<code>int</code>会被自动提升为<code>double</code>。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。这是C语言的<strong>隐式类型提升</strong>规则。在混合运算中，较低精度的类型会自动转换为较高精度的类型，<code>int</code>会提升为<code>double</code>以避免精度损失。"
      },
      {
        type: "truefalse",
        question: "<code>long long</code>类型是C89标准引入的。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。<code>long long</code>类型是<strong>C99标准</strong>引入的，至少为64位。C89标准中最大的整数类型是<code>long</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int a = 7, b = 2;
    printf("%d\\n", a / b);
    return 0;
}</code></pre>`,
        options: ["3.5", "3", "4", "3.000000"],
        answer: 1,
        explanation: "两个<code>int</code>类型相除执行<strong>整数除法</strong>，结果截断小数部分。<code>7 / 2 = 3</code>（余数1被丢弃），使用<code>%d</code>输出整数3。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    char ch = 'A';
    printf("%d\\n", ch + 1);
    return 0;
}</code></pre>`,
        options: ["A1", "B", "66", "编译错误"],
        answer: 2,
        explanation: "<code>'A'</code>的ASCII值为65，<code>ch + 1</code>的结果为66。因为使用<code>%d</code>格式输出，所以打印的是整数<strong>66</strong>而非字符<code>'B'</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    printf("%d\\n", (int)3.9 + (int)1.1);
    return 0;
}</code></pre>`,
        options: ["5", "4", "5.0", "4.0"],
        answer: 1,
        explanation: "<code>(int)3.9</code>截断为3，<code>(int)1.1</code>截断为1，相加得<strong>4</strong>。强制类型转换为<code>int</code>时直接丢弃小数部分，不做四舍五入。"
      }
    ]
  },
  {
    id: 4,
    title: "字符串和格式化输入/输出",
    description: "掌握字符串基础、printf格式化输出和scanf格式化输入",
    content: `<h2>字符串和格式化输入/输出</h2>

<h3>字符串基础</h3>
<p>C语言没有专门的字符串类型，而是使用<strong>字符数组</strong>来表示字符串。字符串的关键特征是以空字符<code>'\\0'</code>（ASCII值为0）结尾，这是C识别字符串结束位置的标志。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main(void) {
    char greeting[] = "Hello";  // 编译器自动添加 '\\0'
    char manual[6] = {'H','e','l','l','o','\\0'};

    printf("字符串：%s\\n", greeting);
    printf("长度：%zu\\n", strlen(greeting));  // 输出5，不含'\\0'
    printf("占用空间：%zu 字节\\n", sizeof(greeting)); // 输出6，含'\\0'
    return 0;
}</code></pre>
<p><code>strlen()</code>函数返回字符串的<strong>有效字符长度</strong>，不包括末尾的<code>'\\0'</code>。注意<code>strlen()</code>和<code>sizeof</code>的区别：<code>sizeof</code>返回数组占用的全部内存大小（含<code>'\\0'</code>），<code>strlen()</code>只计算有效字符数。</p>

<h3>printf格式化输出</h3>
<p><code>printf()</code>函数通过格式说明符控制输出内容和格式。常用的格式说明符包括：</p>
<ul>
<li><code>%d</code> / <code>%i</code>：有符号十进制整数</li>
<li><code>%u</code>：无符号十进制整数</li>
<li><code>%f</code>：浮点数（默认6位小数）</li>
<li><code>%e</code>：科学计数法表示</li>
<li><code>%c</code>：单个字符</li>
<li><code>%s</code>：字符串</li>
<li><code>%x</code> / <code>%X</code>：十六进制整数（小写/大写）</li>
<li><code>%o</code>：八进制整数</li>
<li><code>%%</code>：输出一个百分号字符</li>
</ul>
<p>格式说明符还可以包含宽度和精度修饰：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int num = 42;
    double pi = 3.14159265;

    printf("[%10d]\\n", num);     // 右对齐，宽度10
    printf("[%-10d]\\n", num);    // 左对齐，宽度10
    printf("[%08d]\\n", num);     // 零填充，宽度8
    printf("[%.4f]\\n", pi);      // 保留4位小数
    printf("[%e]\\n", pi);        // 科学计数法
    printf("百分比：90%%\\n");     // 输出%号
    printf("十六进制：%x\\n", 255);  // ff
    printf("八进制：%o\\n", 8);      // 10
    return 0;
}</code></pre>

<div class="key-point">
<p>使用<code>printf</code>输出百分号<code>%</code>时，需要写<code>%%</code>，因为单个<code>%</code>会被解释为格式说明符的开头。</p>
</div>

<h3>scanf格式化输入</h3>
<p><code>scanf()</code>函数从标准输入读取数据。它的参数中，变量前需要加<code>&amp;</code>（取地址运算符），因为<code>scanf</code>需要知道将数据存放在内存的哪个位置。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int age;
    float score;
    char name[50];

    printf("请输入姓名：");
    scanf("%s", name);          // 字符串不需要 &amp;
    printf("请输入年龄：");
    scanf("%d", &amp;age);         // 整数需要 &amp;
    printf("请输入成绩：");
    scanf("%f", &amp;score);       // 浮点数需要 &amp;

    printf("姓名：%s，年龄：%d，成绩：%.1f\\n", name, age, score);
    return 0;
}</code></pre>

<h3>转义字符</h3>
<p>转义字符以反斜杠<code>\\</code>开头，表示特殊字符：</p>
<ul>
<li><code>\\n</code>：换行</li>
<li><code>\\t</code>：水平制表符（Tab）</li>
<li><code>\\\\</code>：反斜杠本身</li>
<li><code>\\"</code>：双引号</li>
<li><code>\\'</code>：单引号</li>
<li><code>\\0</code>：空字符（字符串结束标志）</li>
</ul>

<div class="key-point">
<p>使用<code>scanf</code>读取字符串时，<code>%s</code>遇到空白字符（空格、Tab、换行）就会停止读取。如果需要读取含空格的整行内容，应使用<code>fgets()</code>函数。此外，<code>scanf</code>读取字符串时变量名前<strong>不需要</strong>加<code>&amp;</code>，因为数组名本身就代表地址。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "C语言中字符串以什么字符结尾？",
        options: ["\\n", "\\t", "\\0", "EOF"],
        answer: 2,
        explanation: "C语言字符串以<strong>空字符<code>'\\0'</code></strong>（ASCII值为0）结尾。编译器在字符串字面量末尾自动添加<code>'\\0'</code>，它是C识别字符串结束位置的标志。"
      },
      {
        type: "choice",
        question: "<code>strlen(\"Hello\")</code>的返回值是？",
        options: ["4", "5", "6", "7"],
        answer: 1,
        explanation: "<code>strlen()</code>返回字符串的<strong>有效字符数</strong>，不包括末尾的<code>'\\0'</code>。<code>\"Hello\"</code>有5个字符（H、e、l、l、o），所以返回5。"
      },
      {
        type: "choice",
        question: "使用<code>printf</code>输出百分号<code>%</code>应该写什么？",
        options: ["%", "\\%", "%%", "%p"],
        answer: 2,
        explanation: "在<code>printf</code>的格式字符串中，单个<code>%</code>被视为格式说明符的开头。要输出百分号字符本身，需要写<code><strong>%%</strong></code>。"
      },
      {
        type: "choice",
        question: "使用<code>scanf</code>读取一个<code>int</code>变量<code>x</code>的值，正确的写法是？",
        options: ["scanf(\"%d\", x);", "scanf(\"%d\", &amp;x);", "scanf(\"%f\", &amp;x);", "scanf(\"%d\", *x);"],
        answer: 1,
        explanation: "<code>scanf</code>需要变量的<strong>地址</strong>来存储读取的值，因此必须在变量名前加<code>&amp;</code>（取地址运算符）。<code>%d</code>对应<code>int</code>类型。"
      },
      {
        type: "truefalse",
        question: "<code>sizeof(\"Hi\")</code>的值等于<code>strlen(\"Hi\")</code>的值。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。<code>sizeof(\"Hi\")</code>返回<strong>3</strong>（包括<code>'H'</code>、<code>'i'</code>和<code>'\\0'</code>），而<code>strlen(\"Hi\")</code>返回<strong>2</strong>（只计算有效字符）。<code>sizeof</code>包含末尾的空字符。"
      },
      {
        type: "truefalse",
        question: "<code>scanf(\"%s\", name)</code>可以读取带有空格的完整句子。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。<code>scanf</code>的<code>%s</code>遇到<strong>空白字符</strong>（空格、Tab、换行）就会停止读取，无法读取含空格的完整句子。应使用<code>fgets()</code>函数代替。"
      },
      {
        type: "truefalse",
        question: "<code>scanf</code>读取字符串时，数组名前不需要加<code>&amp;</code>运算符。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。数组名本身在传递给函数时会退化为指向第一个元素的指针，因此<code>scanf(\"%s\", name)</code>不需要在<code>name</code>前加<code>&amp;</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    printf("%d\\n", 255);
    return 0;
}</code></pre>`,
        options: ["ff", "255", "0377", "0xFF"],
        answer: 1,
        explanation: "<code>%d</code>是十进制整数格式说明符，255以十进制输出就是<code>255</code>。若要输出十六进制用<code>%x</code>（ff），八进制用<code>%o</code>（377）。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
int main(void) {
    char s[] = "ABCDE";
    printf("%zu %zu\\n", strlen(s), sizeof(s));
    return 0;
}</code></pre>`,
        options: ["5 5", "5 6", "6 6", "4 5"],
        answer: 1,
        explanation: "<code>strlen(\"ABCDE\")</code>返回5（5个有效字符），<code>sizeof(s)</code>返回6（5个字符加末尾的<code>'\\0'</code>共6字节）。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    printf("%.2f\\n", 3.14159);
    return 0;
}</code></pre>`,
        options: ["3.14", "3.14159", "3.1", "3.14159000"],
        answer: 0,
        explanation: "<code>%.2f</code>表示保留<strong>2位小数</strong>。<code>3.14159</code>四舍五入保留两位小数后为<code>3.14</code>。"
      }
    ]
  },
  {
    id: 5,
    title: "运算符、表达式和语句",
    description: "掌握C语言中的各种运算符、表达式求值规则和基本语句",
    content: `<h2>运算符、表达式和语句</h2>

<h3>赋值运算符</h3>
<p>赋值运算符<code>=</code>将右边表达式的值存入左边的变量中。在C语言中，赋值是一个<strong>表达式</strong>，它本身也有值（即被赋的值），因此可以进行连续赋值：</p>
<pre class="language-c"><code>int a, b, c;
a = b = c = 10;  // 从右向左赋值，a、b、c都等于10</code></pre>

<h3>算术运算符</h3>
<p>C语言提供五个基本算术运算符：</p>
<ul>
<li><code>+</code>（加）、<code>-</code>（减）、<code>*</code>（乘）：与数学意义相同。</li>
<li><code>/</code>（除）：两个整数相除执行<strong>整数除法</strong>（截断小数），至少有一个浮点数则执行浮点除法。</li>
<li><code>%</code>（取模/取余）：返回整数除法的余数，<strong>只能用于整数</strong>。</li>
</ul>

<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("17 / 5  = %d\\n", 17 / 5);    // 整数除法：3
    printf("17 %% 5 = %d\\n", 17 % 5);    // 取模：2
    printf("17.0/5  = %f\\n", 17.0 / 5);  // 浮点除法：3.400000
    return 0;
}</code></pre>

<h3>运算符优先级</h3>
<p>C语言运算符有明确的优先级规则。常见优先级从高到低：</p>
<ol>
<li><code>()</code> 圆括号（最高优先级）</li>
<li><code>++</code> <code>--</code>（后缀）、<code>!</code>（逻辑非）、<code>-</code>（负号）、<code>(type)</code>（强制转换）、<code>sizeof</code></li>
<li><code>*</code> <code>/</code> <code>%</code>（乘除取模）</li>
<li><code>+</code> <code>-</code>（加减）</li>
<li><code>=</code> <code>+=</code> <code>-=</code> 等（赋值运算符，最低优先级之一）</li>
</ol>
<p>当不确定优先级时，使用<strong>圆括号</strong>明确运算顺序是最佳实践。</p>

<h3>自增与自减运算符</h3>
<p><code>++</code>和<code>--</code>分别将变量的值加1和减1，但<strong>前缀</strong>和<strong>后缀</strong>形式在表达式中的行为不同：</p>
<ul>
<li><strong>前缀</strong>（<code>++a</code>）：先加1，再使用新值参与运算。</li>
<li><strong>后缀</strong>（<code>a++</code>）：先使用当前值参与运算，再加1。</li>
</ul>

<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int a = 5, b = 5;
    int x = ++a;  // a先变为6，然后x = 6
    int y = b++;  // y先取b的值5，然后b变为6

    printf("a=%d, x=%d\\n", a, x);  // a=6, x=6
    printf("b=%d, y=%d\\n", b, y);  // b=6, y=5
    return 0;
}</code></pre>

<div class="key-point">
<p>前缀<code>++a</code>是"先增后用"，后缀<code>a++</code>是"先用后增"。在独立语句中（如<code>a++;</code>和<code>++a;</code>）效果完全相同，区别仅在于作为表达式的一部分时。</p>
</div>

<h3>复合赋值运算符</h3>
<p>复合赋值运算符是算术运算与赋值的简写形式：</p>
<ul>
<li><code>a += b</code> 等价于 <code>a = a + b</code></li>
<li><code>a -= b</code> 等价于 <code>a = a - b</code></li>
<li><code>a *= b</code> 等价于 <code>a = a * b</code></li>
<li><code>a /= b</code> 等价于 <code>a = a / b</code></li>
<li><code>a %= b</code> 等价于 <code>a = a % b</code></li>
</ul>

<div class="key-point">
<p>取模运算符<code>%</code>只能用于<strong>整数类型</strong>，不能用于<code>float</code>或<code>double</code>。如果需要对浮点数取模，可以使用<code>&lt;math.h&gt;</code>中的<code>fmod()</code>函数。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "<code>17 % 5</code> 的结果是？",
        options: ["3", "2", "3.4", "5"],
        answer: 1,
        explanation: "<code>%</code>是取模（取余）运算符。<code>17 / 5 = 3</code>余<code>2</code>，所以<code>17 % 5 = 2</code>。"
      },
      {
        type: "choice",
        question: "以下哪个运算符的优先级最高？",
        options: ["+", "*", "=", "()"],
        answer: 3,
        explanation: "圆括号<code>()</code>的优先级最高。优先级顺序为：<code>()</code> &gt; <code>*</code> &gt; <code>+</code> &gt; <code>=</code>。"
      },
      {
        type: "choice",
        question: "<code>a += 3</code> 等价于以下哪个表达式？",
        options: ["a = 3", "a = a + 3", "a = 3 + 3", "a == a + 3"],
        answer: 1,
        explanation: "复合赋值运算符<code>+=</code>是先加后赋值的简写。<code>a += 3</code>等价于<code>a = a + 3</code>。注意<code>==</code>是比较运算符，不是赋值。"
      },
      {
        type: "choice",
        question: "取模运算符<code>%</code>可以用于以下哪种类型？",
        options: ["float", "double", "int", "long double"],
        answer: 2,
        explanation: "取模运算符<code>%</code>只能用于<strong>整数类型</strong>（如<code>int</code>、<code>long</code>等），不能用于浮点类型。对浮点数取模需使用<code>fmod()</code>函数。"
      },
      {
        type: "truefalse",
        question: "在独立语句中，<code>a++;</code> 和 <code>++a;</code> 的最终效果完全相同。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。在独立语句中（不作为更大表达式的一部分），<code>a++;</code>和<code>++a;</code>都只是将<code>a</code>的值加1，最终效果完全相同。"
      },
      {
        type: "truefalse",
        question: "表达式 <code>5 / 2</code> 在C语言中的结果是 <code>2.5</code>。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。两个<code>int</code>类型相除执行<strong>整数除法</strong>，小数部分被截断。<code>5 / 2</code>的结果是<code>2</code>，而非<code>2.5</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int a = 10;
    a *= 2 + 3;
    printf("%d\\n", a);
    return 0;
}</code></pre>`,
        options: ["23", "50", "25", "60"],
        answer: 1,
        explanation: "<code>a *= 2 + 3</code>等价于<code>a = a * (2 + 3)</code>。注意<code>+=</code>/<code>*=</code>等复合赋值运算符右侧是整个表达式，所以先算<code>2 + 3 = 5</code>，再算<code>10 * 5 = 50</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int a = 5;
    int b = a++;
    printf("%d %d\\n", a, b);
    return 0;
}</code></pre>`,
        options: ["5 5", "6 5", "6 6", "5 6"],
        answer: 1,
        explanation: "<code>a++</code>是后缀自增，\u201C先用后增\u201D。先将<code>a</code>的当前值5赋给<code>b</code>，然后<code>a</code>自增为6。所以<code>a=6, b=5</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int a = 5;
    int b = ++a;
    printf("%d %d\\n", a, b);
    return 0;
}</code></pre>`,
        options: ["5 5", "6 5", "6 6", "5 6"],
        answer: 2,
        explanation: "<code>++a</code>是前缀自增，\u201C先增后用\u201D。<code>a</code>先自增为6，然后将新值6赋给<code>b</code>。所以<code>a=6, b=6</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int x = 2 + 3 * 4 - 6 / 2;
    printf("%d\\n", x);
    return 0;
}</code></pre>`,
        options: ["14", "8", "11", "7"],
        answer: 2,
        explanation: "按运算符优先级：先算乘除<code>3 * 4 = 12</code>和<code>6 / 2 = 3</code>，再算加减<code>2 + 12 - 3 = 11</code>。"
      }
    ]
  },
  {
    id: 6,
    title: "C控制语句：循环",
    description: "掌握while、for、do-while循环结构以及break和continue的使用",
    content: `<h2>C控制语句：循环</h2>

<h3>while循环</h3>
<p><code>while</code>循环在条件为真时反复执行循环体。它是一种<strong>入口条件</strong>循环——先判断条件，再决定是否执行循环体。如果条件一开始就为假，循环体一次也不执行。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int count = 1;
    while (count &lt;= 5) {
        printf("第 %d 次循环\\n", count);
        count++;
    }
    printf("循环结束，count = %d\\n", count);
    return 0;
}</code></pre>
<p>在这个例子中，<code>count</code>从1开始，每次循环增加1，当<code>count</code>变为6时条件为假，循环结束。</p>

<h3>for循环</h3>
<p><code>for</code>循环将初始化、条件判断和更新操作集中在一条语句中，特别适合<strong>已知循环次数</strong>的场景：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int sum = 0;
    for (int i = 1; i &lt;= 100; i++) {
        sum += i;
    }
    printf("1到100的和 = %d\\n", sum);  // 5050

    // for循环的三个表达式都可以省略
    // for (;;) 等价于 while (1)，即无限循环
    return 0;
}</code></pre>
<p><code>for</code>循环的执行顺序是：初始化 → 判断条件 → 执行循环体 → 更新 → 判断条件 → ……</p>

<h3>do-while循环</h3>
<p><code>do-while</code>是<strong>出口条件</strong>循环——先执行循环体，再判断条件。因此循环体<strong>至少执行一次</strong>，适合需要先执行再判断的场景（如用户输入验证）。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int num;
    do {
        printf("请输入一个正数：");
        scanf("%d", &amp;num);
    } while (num &lt;= 0);  // 注意这里有分号
    printf("你输入了：%d\\n", num);
    return 0;
}</code></pre>

<div class="key-point">
<p><code>while</code>和<code>for</code>是入口条件循环（先判断再执行），<code>do-while</code>是出口条件循环（先执行再判断）。<code>do-while</code>的循环体至少执行一次，且<code>while</code>后面有<strong>分号</strong>。</p>
</div>

<h3>嵌套循环</h3>
<p>循环内部可以包含另一个循环，形成嵌套结构。内层循环每次会完整执行所有迭代：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    for (int i = 1; i &lt;= 3; i++) {
        for (int j = 1; j &lt;= 3; j++) {
            printf("(%d,%d) ", i, j);
        }
        printf("\\n");
    }
    return 0;
}</code></pre>

<h3>break和continue</h3>
<p><code>break</code>语句<strong>立即终止</strong>当前所在的最内层循环，跳到循环后面的代码继续执行。<code>continue</code>语句<strong>跳过</strong>本次循环剩余部分，直接进入下一次迭代的条件判断。</p>

<h3>逗号运算符</h3>
<p>逗号运算符<code>,</code>将多个表达式串联，从左到右依次求值，整个表达式的值等于最后一个子表达式的值。在<code>for</code>循环中常用来同时操作多个变量：</p>
<pre class="language-c"><code>for (int i = 0, j = 10; i &lt; j; i++, j--) {
    printf("i=%d, j=%d\\n", i, j);
}</code></pre>

<div class="key-point">
<p><code>break</code>只能跳出<strong>最内层</strong>的循环，无法一次跳出多层嵌套循环。<code>continue</code>用于跳过当前迭代的剩余语句，而非结束整个循环。在<code>for</code>循环中使用<code>continue</code>后，更新表达式仍然会执行。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "以下哪种循环结构保证循环体至少执行一次？",
        options: ["while", "for", "do-while", "以上都不是"],
        answer: 2,
        explanation: "<code>do-while</code>是<strong>出口条件</strong>循环，先执行循环体再判断条件，因此循环体至少执行一次。<code>while</code>和<code>for</code>是入口条件循环，如果条件一开始为假则不执行。"
      },
      {
        type: "choice",
        question: "<code>break</code>语句在嵌套循环中的作用是？",
        options: ["终止所有循环", "终止最内层循环", "跳过本次迭代", "跳到程序末尾"],
        answer: 1,
        explanation: "<code>break</code>只能终止其所在的<strong>最内层</strong>循环，外层循环不受影响。如果需要跳出多层循环，通常使用标志变量或<code>goto</code>语句。"
      },
      {
        type: "choice",
        question: "<code>for (;;)</code> 等价于以下哪个语句？",
        options: ["for (0; 0; 0)", "while (0)", "while (1)", "do {} while (0)"],
        answer: 2,
        explanation: "<code>for (;;)</code>的三个表达式都省略了，省略条件表达式时默认为真，因此等价于<code>while (1)</code>，形成无限循环。"
      },
      {
        type: "truefalse",
        question: "在<code>for</code>循环中使用<code>continue</code>后，更新表达式（如<code>i++</code>）不会被执行。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。在<code>for</code>循环中，<code>continue</code>会跳过循环体中<code>continue</code>之后的语句，但<strong>更新表达式仍然会执行</strong>。这是<code>for</code>循环中<code>continue</code>和<code>while</code>循环中<code>continue</code>的一个重要区别。"
      },
      {
        type: "truefalse",
        question: "<code>while</code>循环和<code>for</code>循环可以互相转换实现相同的功能。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。<code>while</code>和<code>for</code>循环在功能上是等价的，任何<code>while</code>循环都可以改写为<code>for</code>循环，反之亦然。选择哪种主要取决于代码可读性。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int i = 0;
    while (i &lt; 3) {
        printf("%d ", i);
        i++;
    }
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
        answer: 1,
        explanation: "<code>i</code>从0开始，每次打印后加1。当<code>i</code>为0、1、2时条件为真执行循环体，<code>i</code>为3时条件为假退出。输出<code>0 1 2</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    for (int i = 0; i &lt; 5; i++) {
        if (i == 3) break;
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["0 1 2 3 4", "0 1 2", "0 1 2 4", "0 1 2 3"],
        answer: 1,
        explanation: "当<code>i</code>等于3时执行<code>break</code>，<strong>立即终止</strong>整个循环。因此只输出<code>i</code>为0、1、2时的值：<code>0 1 2</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    for (int i = 0; i &lt; 5; i++) {
        if (i == 3) continue;
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["0 1 2 3 4", "0 1 2", "0 1 2 4", "3"],
        answer: 2,
        explanation: "当<code>i</code>等于3时执行<code>continue</code>，<strong>跳过</strong>本次迭代剩余部分（不打印3），但循环继续。输出<code>0 1 2 4</code>，只有3被跳过。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int n = 1;
    do {
        printf("%d ", n);
        n *= 2;
    } while (n &lt; 10);
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["1 2 4 8 16", "1 2 4 8", "2 4 8", "1 2 4"],
        answer: 1,
        explanation: "<code>n</code>初始为1，每次乘以2：1→2→4→8→16。当<code>n</code>变为16时条件<code>16 &lt; 10</code>为假，循环结束。输出<code>1 2 4 8</code>（16时已退出，不打印）。"
      },
      {
        type: "output",
        question: `以下程序打印几个星号<code>*</code>？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    for (int i = 0; i &lt; 3; i++) {
        for (int j = 0; j &lt; 4; j++) {
            printf("*");
        }
    }
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["7", "3", "4", "12"],
        answer: 3,
        explanation: "外层循环执行3次，每次内层循环执行4次打印一个<code>*</code>。总共打印<code>3 × 4 = 12</code>个星号。"
      }
    ]
  },
  {
    id: 7,
    title: "C控制语句：分支和跳转",
    description: "掌握if/else、switch/case分支结构、条件运算符和逻辑运算符",
    content: `<h2>C控制语句：分支和跳转</h2>

<h3>if/else语句</h3>
<p><code>if</code>语句根据条件表达式的真假来决定执行哪段代码。在C语言中，<strong>0为假，任何非零值为真</strong>。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int score = 85;

    if (score &gt;= 90) {
        printf("优秀\\n");
    } else if (score &gt;= 80) {
        printf("良好\\n");
    } else if (score &gt;= 60) {
        printf("及格\\n");
    } else {
        printf("不及格\\n");
    }
    return 0;
}</code></pre>
<p><code>else if</code>链可以处理多个互斥条件。条件从上到下依次判断，一旦某个条件为真就执行对应的代码块，不再检查后续条件。</p>

<h3>switch/case语句</h3>
<p><code>switch</code>语句根据一个整数表达式的值跳转到匹配的<code>case</code>标签处执行。每个<code>case</code>分支通常需要<code>break</code>来终止，否则会<strong>贯穿（fall through）</strong>到下一个<code>case</code>。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int day = 3;
    switch (day) {
        case 1: printf("星期一\\n"); break;
        case 2: printf("星期二\\n"); break;
        case 3: printf("星期三\\n"); break;
        case 4: printf("星期四\\n"); break;
        case 5: printf("星期五\\n"); break;
        case 6:
        case 7: printf("周末\\n"); break;
        default: printf("无效的日期\\n"); break;
    }
    return 0;
}</code></pre>
<p>上面的例子中，<code>case 6</code>没有<code>break</code>，会贯穿到<code>case 7</code>，因此输入6和7都输出"周末"。<code>default</code>处理所有未匹配的情况。</p>

<div class="key-point">
<p><code>switch</code>的表达式和<code>case</code>标签必须是<strong>整数类型</strong>（包括<code>char</code>），不能是浮点数或字符串。忘记写<code>break</code>会导致代码"贯穿"到下一个<code>case</code>，这是C语言中非常常见的错误。</p>
</div>

<h3>条件运算符（三元运算符）</h3>
<p>条件运算符<code>? :</code>是C语言中唯一的三元运算符，它是简单<code>if/else</code>的简写形式：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int a = 10, b = 20;
    int max = (a &gt; b) ? a : b;
    printf("较大的值是：%d\\n", max);  // 20

    int x = 7;
    printf("%d是%s数\\n", x, (x % 2 == 0) ? "偶" : "奇");
    return 0;
}</code></pre>

<h3>逻辑运算符</h3>
<p>逻辑运算符用于组合多个条件表达式：</p>
<ul>
<li><code>&amp;&amp;</code>（逻辑与）：两个条件都为真时结果为真。</li>
<li><code>||</code>（逻辑或）：至少一个条件为真时结果为真。</li>
<li><code>!</code>（逻辑非）：取反，真变假，假变真。</li>
</ul>
<p>逻辑运算符具有<strong>短路求值</strong>特性：<code>&amp;&amp;</code>左边为假时不会计算右边；<code>||</code>左边为真时不会计算右边。</p>

<h3>goto语句</h3>
<p><code>goto</code>语句可以无条件跳转到同一函数内的标签处。虽然大多数情况下应避免使用<code>goto</code>（因为会降低代码可读性），但在跳出多层嵌套循环或统一错误处理时偶尔有用。</p>

<div class="key-point">
<p>逻辑运算符的<strong>短路求值</strong>在实际编程中非常重要。例如<code>if (p != NULL &amp;&amp; *p &gt; 0)</code>中，如果<code>p</code>为<code>NULL</code>，右边的<code>*p</code>不会被执行，从而避免了空指针解引用的错误。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "在C语言中，以下哪个值被视为\u201C假\u201D？",
        options: ["-1", "1", "0", "2"],
        answer: 2,
        explanation: "在C语言中，<strong>0为假，任何非零值为真</strong>。包括负数<code>-1</code>在内的非零值都被视为真，只有<code>0</code>被视为假。"
      },
      {
        type: "choice",
        question: "<code>switch</code>语句中，如果某个<code>case</code>缺少<code>break</code>，会发生什么？",
        options: ["编译错误", "跳到default", "贯穿到下一个case继续执行", "直接退出switch"],
        answer: 2,
        explanation: "缺少<code>break</code>时会发生<strong>贯穿（fall through）</strong>，程序会继续执行下一个<code>case</code>的代码，直到遇到<code>break</code>或<code>switch</code>块结束。"
      },
      {
        type: "choice",
        question: "逻辑运算符的短路求值是指？",
        options: ["运算速度更快", "如果左边已能确定结果则不计算右边", "结果总是0或1", "只能用于if语句"],
        answer: 1,
        explanation: "<strong>短路求值</strong>：对于<code>&amp;&amp;</code>，如果左操作数为假，右操作数不再计算（结果必为假）；对于<code>||</code>，如果左操作数为真，右操作数不再计算（结果必为真）。"
      },
      {
        type: "truefalse",
        question: "<code>switch</code>语句的<code>case</code>标签可以使用浮点数。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。<code>switch</code>的表达式和<code>case</code>标签必须是<strong>整数类型</strong>（包括<code>int</code>、<code>char</code>、枚举等），不能使用<code>float</code>或<code>double</code>。"
      },
      {
        type: "truefalse",
        question: "条件运算符 <code>? :</code> 是C语言中唯一的三元运算符。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。<code>条件 ? 表达式1 : 表达式2</code>是C语言中唯一需要三个操作数的运算符，因此称为三元运算符。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int x = 5;
    if (x &gt; 3)
        printf("A");
    if (x &gt; 4)
        printf("B");
    if (x &gt; 5)
        printf("C");
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["A", "AB", "ABC", "AC"],
        answer: 1,
        explanation: "三个<code>if</code>是独立的（不是<code>else if</code>链），每个都会判断。<code>5 &gt; 3</code>为真输出A，<code>5 &gt; 4</code>为真输出B，<code>5 &gt; 5</code>为假不输出。结果为<code>AB</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int n = 2;
    switch (n) {
        case 1: printf("one ");
        case 2: printf("two ");
        case 3: printf("three ");
        default: printf("other ");
    }
    printf("\\n");
    return 0;
}</code></pre>`,
        options: ["two", "two three", "two three other", "one two three other"],
        answer: 2,
        explanation: "<code>n</code>为2，匹配<code>case 2</code>开始执行。由于没有<code>break</code>语句，产生<strong>贯穿</strong>效果，会继续执行<code>case 3</code>和<code>default</code>。输出<code>two three other</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int a = 10, b = 5;
    int r = (a &gt; b) ? a - b : a + b;
    printf("%d\\n", r);
    return 0;
}</code></pre>`,
        options: ["15", "5", "10", "0"],
        answer: 1,
        explanation: "<code>a &gt; b</code>即<code>10 &gt; 5</code>为真，所以条件运算符返回<code>a - b = 10 - 5 = 5</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int a = 0, b = 5;
    if (a &amp;&amp; b++) {
        printf("true ");
    }
    printf("%d %d\\n", a, b);
    return 0;
}</code></pre>`,
        options: ["true 0 6", "0 6", "0 5", "true 0 5"],
        answer: 2,
        explanation: "<code>a</code>为0（假），由于<code>&amp;&amp;</code>的<strong>短路求值</strong>，左边为假时右边<code>b++</code>不会执行，<code>b</code>保持为5。<code>if</code>条件为假，不打印\"true\"。输出<code>0 5</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int main(void) {
    int x = -3;
    if (x)
        printf("yes\\n");
    else
        printf("no\\n");
    return 0;
}</code></pre>`,
        options: ["yes", "no", "编译错误", "未定义行为"],
        answer: 0,
        explanation: "在C语言中，<strong>任何非零值都为真</strong>，<code>-3</code>不是0，所以条件为真，执行<code>if</code>分支输出<code>yes</code>。"
      }
    ]
  },
  {
    id: 8,
    title: "字符输入/输出和输入验证",
    description: "掌握字符级I/O操作、缓冲区概念、EOF和ctype.h字符测试函数",
    content: `<h2>字符输入/输出和输入验证</h2>

<h3>getchar()和putchar()</h3>
<p><code>getchar()</code>和<code>putchar()</code>是最基本的字符级I/O函数。<code>getchar()</code>从标准输入读取一个字符并返回其整数值（ASCII码），<code>putchar()</code>将一个字符写到标准输出。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int ch;  // 用int而非char，以便容纳EOF
    printf("请输入字符（Ctrl+Z结束）：\\n");
    while ((ch = getchar()) != EOF) {
        putchar(ch);
    }
    printf("\\n输入结束。\\n");
    return 0;
}</code></pre>
<p>这个程序会逐个读取用户输入的字符并原样输出，直到遇到EOF信号。注意<code>ch</code>声明为<code>int</code>类型而非<code>char</code>，因为<code>EOF</code>是一个负整数值（通常为-1），<code>char</code>类型可能无法正确表示。</p>

<h3>缓冲区概念</h3>
<p>标准I/O通常使用<strong>缓冲（buffered）</strong>机制。当你在键盘上输入字符时，这些字符先被存储在一个临时区域（缓冲区）中，只有当你按下回车键后，缓冲区中的内容才会被程序读取。缓冲分为三种类型：</p>
<ul>
<li><strong>完全缓冲</strong>：缓冲区满时才刷新。</li>
<li><strong>行缓冲</strong>：遇到换行符时刷新（标准输入/输出通常是行缓冲）。</li>
<li><strong>无缓冲</strong>：每个字符立即传输（标准错误输出通常是无缓冲）。</li>
</ul>

<h3>EOF（文件结束标志）</h3>
<p><code>EOF</code>定义在<code>&lt;stdio.h&gt;</code>中，是一个宏常量，通常值为<code>-1</code>。它表示输入流的结束。从键盘模拟EOF的方式因操作系统而异：</p>
<ul>
<li>Windows：按<code>Ctrl+Z</code>然后回车</li>
<li>Linux/macOS：按<code>Ctrl+D</code></li>
</ul>

<div class="key-point">
<p><code>getchar()</code>的返回类型是<code>int</code>，不是<code>char</code>。必须用<code>int</code>类型变量接收返回值，以便正确区分有效字符和<code>EOF</code>（-1）。如果用<code>char</code>类型，在某些系统上可能永远检测不到<code>EOF</code>。</p>
</div>

<h3>输入验证</h3>
<p>健壮的程序应该验证用户输入的有效性。常见的输入验证策略包括检查<code>scanf</code>的返回值（表示成功匹配的项数）和清空输入缓冲区中的无效字符：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

int main(void) {
    int num;
    printf("请输入一个整数：");
    while (scanf("%d", &amp;num) != 1) {
        // scanf返回值不是1说明输入不是有效整数
        while (getchar() != '\\n')  // 清空缓冲区
            continue;
        printf("输入无效，请重新输入整数：");
    }
    printf("你输入的是：%d\\n", num);
    return 0;
}</code></pre>

<h3>ctype.h字符测试函数</h3>
<p><code>&lt;ctype.h&gt;</code>头文件提供了一系列字符分类和转换函数，常用函数包括：</p>
<ul>
<li><code>isalpha(c)</code>：是否为字母</li>
<li><code>isdigit(c)</code>：是否为数字</li>
<li><code>isalnum(c)</code>：是否为字母或数字</li>
<li><code>isupper(c)</code> / <code>islower(c)</code>：是否为大/小写字母</li>
<li><code>isspace(c)</code>：是否为空白字符</li>
<li><code>toupper(c)</code> / <code>tolower(c)</code>：大小写转换</li>
</ul>
<pre class="language-c"><code>#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;

int main(void) {
    char ch = 'a';
    if (islower(ch)) {
        printf("'%c' 的大写形式是 '%c'\\n", ch, toupper(ch));
    }
    printf("isdigit('5') = %d\\n", isdigit('5'));  // 非零（真）
    printf("isdigit('A') = %d\\n", isdigit('A'));  // 0（假）
    return 0;
}</code></pre>

<div class="key-point">
<p><code>ctype.h</code>中的函数接受<code>int</code>参数（字符的ASCII值），返回非零值表示真，0表示假。使用这些函数比手动判断ASCII范围更安全、更可移植。<code>toupper()</code>和<code>tolower()</code>只转换字母，非字母字符原样返回。</p>
</div>`,
    questions: [
      {
        type: "choice",
        question: "<code>getchar()</code>函数的返回类型是什么？",
        options: ["char", "int", "void", "unsigned char"],
        answer: 1,
        explanation: "<code>getchar()</code>返回<code>int</code>类型，这是为了能够同时表示所有有效字符（0~255）和<code>EOF</code>（通常为-1）。使用<code>char</code>类型可能无法正确检测<code>EOF</code>。"
      },
      {
        type: "choice",
        question: "<code>EOF</code>的典型值是？",
        options: ["0", "-1", "255", "1"],
        answer: 1,
        explanation: "<code>EOF</code>是定义在<code>&lt;stdio.h&gt;</code>中的宏常量，其值通常为<strong>-1</strong>。它用于标识输入流的结束或读取错误。"
      },
      {
        type: "choice",
        question: "以下哪个<code>ctype.h</code>函数用于判断字符是否为数字？",
        options: ["isalpha()", "isdigit()", "isalnum()", "isnumber()"],
        answer: 1,
        explanation: "<code>isdigit()</code>判断字符是否为数字（0~9）。<code>isalpha()</code>判断字母，<code>isalnum()</code>判断字母或数字。C标准库中没有<code>isnumber()</code>函数。"
      },
      {
        type: "truefalse",
        question: "标准输入通常使用无缓冲模式，输入的每个字符会立即被程序读取。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。标准输入通常使用<strong>行缓冲</strong>模式，用户输入的字符在按下回车键后才会被程序读取。无缓冲模式通常用于标准错误输出（<code>stderr</code>）。"
      },
      {
        type: "truefalse",
        question: "<code>toupper('a')</code>返回字符<code>'A'</code>，<code>toupper('1')</code>返回字符<code>'1'</code>（非字母字符原样返回）。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。<code>toupper()</code>只转换小写字母为大写字母，如果参数不是小写字母（如数字、标点、大写字母），则原样返回不做任何转换。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;
int main(void) {
    char ch = 'G';
    printf("%c\\n", tolower(ch));
    return 0;
}</code></pre>`,
        options: ["G", "g", "71", "103"],
        answer: 1,
        explanation: "<code>tolower('G')</code>将大写字母<code>'G'</code>转换为小写字母<code>'g'</code>。使用<code>%c</code>格式输出字符<code>g</code>。"
      },
      {
        type: "output",
        question: `以下代码中<code>scanf</code>的返回值是多少（假设用户输入"abc"）？<pre class="language-c"><code>int x;
int ret = scanf("%d", &amp;x);
// 用户输入：abc</code></pre>`,
        options: ["1", "0", "-1", "EOF"],
        answer: 1,
        explanation: "<code>scanf</code>返回成功匹配并赋值的项数。用户输入<code>abc</code>无法匹配<code>%d</code>（整数），匹配失败返回<strong>0</strong>。如果在读取前就遇到EOF则返回EOF。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;
int main(void) {
    printf("%d %d %d\\n", isdigit('9'), isalpha('9'), isalnum('9'));
    return 0;
}</code></pre>`,
        options: ["1 0 1", "非零 0 非零", "0 非零 0", "1 1 1"],
        answer: 1,
        explanation: "<code>'9'</code>是数字字符：<code>isdigit</code>返回非零（真），<code>isalpha</code>返回0（假，不是字母），<code>isalnum</code>返回非零（真，是字母或数字）。注意返回值不一定恰好是1，但一定是非零。"
      }
    ]
  },
  {
    id: 9,
    title: "函数",
    description: "掌握函数的定义与声明、参数传递、返回值、递归和函数原型",
    content: `<h2>函数</h2>

<h3>函数的定义与声明</h3>
<p>函数是C程序的基本构建模块，它将一段完成特定任务的代码封装起来，可以被反复调用。函数由<strong>返回类型</strong>、<strong>函数名</strong>、<strong>参数列表</strong>和<strong>函数体</strong>组成。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

// 函数声明（原型）
int add(int a, int b);
void print_line(int n);

int main(void) {
    int result = add(3, 5);
    printf("3 + 5 = %d\\n", result);
    print_line(20);
    return 0;
}

// 函数定义
int add(int a, int b) {
    return a + b;
}

void print_line(int n) {
    for (int i = 0; i &lt; n; i++) {
        putchar('-');
    }
    putchar('\\n');
}</code></pre>
<p>上面的代码展示了函数的完整使用方式：先在顶部<strong>声明</strong>函数原型（让编译器知道函数的存在），在<code>main()</code>中<strong>调用</strong>函数，最后在下方<strong>定义</strong>函数的具体实现。</p>

<h3>参数传递——值传递</h3>
<p>C语言的函数参数传递采用<strong>值传递（pass by value）</strong>机制：调用函数时，实参的<strong>副本</strong>被传递给形参。在函数内部修改形参不会影响原始的实参变量。</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

void try_modify(int x) {
    x = 100;
    printf("函数内部：x = %d\\n", x);  // 100
}

int main(void) {
    int num = 42;
    try_modify(num);
    printf("函数外部：num = %d\\n", num);  // 仍然是42
    return 0;
}</code></pre>
<p><code>try_modify</code>函数接收的是<code>num</code>的副本，将副本改为100不会影响原始的<code>num</code>。这就是值传递的本质——函数操作的是数据的拷贝，而非原始数据本身。</p>

<div class="key-point">
<p>C语言<strong>只有值传递</strong>。函数参数接收的是实参的副本，修改形参不会影响实参。如果需要在函数中修改外部变量的值，必须传递该变量的<strong>指针</strong>（地址）。</p>
</div>

<h3>返回值</h3>
<p>函数通过<code>return</code>语句返回一个值给调用者。<code>void</code>类型的函数不返回任何值。一个函数可以有多个<code>return</code>语句，但每次调用只会执行其中一个，执行后立即返回调用者。</p>

<h3>递归</h3>
<p><strong>递归</strong>是函数调用自身的编程技术。每个递归函数必须包含两个部分：<strong>基线条件</strong>（停止递归的条件）和<strong>递归调用</strong>（问题规模缩小的自身调用）。经典例子是阶乘计算：</p>
<pre class="language-c"><code>#include &lt;stdio.h&gt;

long factorial(int n) {
    if (n &lt;= 1) return 1;     // 基线条件
    return n * factorial(n - 1); // 递归调用
}

int main(void) {
    for (int i = 0; i &lt;= 10; i++) {
        printf("%d! = %ld\\n", i, factorial(i));
    }
    return 0;
}</code></pre>
<p>执行过程以<code>factorial(4)</code>为例：<code>4 * factorial(3)</code> → <code>4 * 3 * factorial(2)</code> → <code>4 * 3 * 2 * factorial(1)</code> → <code>4 * 3 * 2 * 1 = 24</code>。</p>

<div class="key-point">
<p>递归函数必须有明确的<strong>基线条件</strong>（终止条件），否则会无限递归导致栈溢出。每次递归调用都会在栈上创建新的函数帧，消耗内存。对于简单的递归问题，循环通常比递归更高效。</p>
</div>

<h3>函数原型与头文件</h3>
<p><strong>函数原型</strong>（函数声明）告诉编译器函数的返回类型、名称和参数类型，使得编译器在遇到函数调用时能够进行类型检查。函数原型通常放在文件顶部或者头文件（<code>.h</code>文件）中。</p>
<p>当项目包含多个源文件时，函数原型放在头文件中可以被多个源文件共享。使用<code>#include</code>指令包含头文件就相当于把头文件的内容复制到当前文件中。这种组织方式使得大型项目的代码管理更加清晰。</p>`,
    questions: [
      {
        type: "choice",
        question: "C语言函数的参数传递方式是？",
        options: ["引用传递", "值传递", "指针传递", "名称传递"],
        answer: 1,
        explanation: "C语言的参数传递是<strong>值传递（pass by value）</strong>：实参的副本被传递给形参，函数内部修改形参不影响外部实参。即使传递指针，传递的也是指针变量的副本（值）。"
      },
      {
        type: "choice",
        question: "递归函数必须包含什么来避免无限递归？",
        options: ["循环语句", "基线条件（终止条件）", "全局变量", "goto语句"],
        answer: 1,
        explanation: "递归函数必须有<strong>基线条件</strong>（base case），即在满足特定条件时停止递归调用并直接返回结果。没有基线条件的递归会无限调用下去，导致栈溢出。"
      },
      {
        type: "choice",
        question: "函数原型的主要作用是什么？",
        options: ["让函数运行更快", "让编译器能够进行类型检查", "替代函数定义", "分配函数使用的内存"],
        answer: 1,
        explanation: "函数原型（声明）告诉编译器函数的返回类型和参数类型，使编译器能在调用点进行<strong>类型检查</strong>，发现参数类型不匹配等错误。"
      },
      {
        type: "choice",
        question: "以下哪个是合法的函数定义？",
        options: ["void f { }", "int f(void) { return 0; }", "f(int x) { }", "int f(void) return 0;"],
        answer: 1,
        explanation: "合法的函数定义需要返回类型、函数名、参数列表（用圆括号包围）和花括号包围的函数体。<code>int f(void) { return 0; }</code>是完整合法的定义。"
      },
      {
        type: "truefalse",
        question: "在C语言中，函数内部修改形参的值会同时改变对应实参的值。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。由于C语言采用<strong>值传递</strong>，形参只是实参的副本。修改副本不会影响原始变量。要修改外部变量需要传递其指针。"
      },
      {
        type: "truefalse",
        question: "<code>void</code>类型的函数不需要<code>return</code>语句。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。<code>void</code>函数不返回值，可以省略<code>return</code>语句（执行到函数体末尾自动返回）。也可以使用<code>return;</code>（不带值）提前返回。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
void modify(int x) {
    x = x * 2;
}
int main(void) {
    int a = 10;
    modify(a);
    printf("%d\\n", a);
    return 0;
}</code></pre>`,
        options: ["20", "10", "0", "编译错误"],
        answer: 1,
        explanation: "<code>modify</code>函数接收的是<code>a</code>的副本。在函数内将副本乘以2，但<strong>不影响原始变量</strong><code>a</code>。所以<code>a</code>的值仍然是<code>10</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
long factorial(int n) {
    if (n &lt;= 1) return 1;
    return n * factorial(n - 1);
}
int main(void) {
    printf("%ld\\n", factorial(5));
    return 0;
}</code></pre>`,
        options: ["25", "15", "120", "60"],
        answer: 2,
        explanation: "<code>factorial(5) = 5 × 4 × 3 × 2 × 1 = 120</code>。递归展开：<code>5 * factorial(4)</code> → <code>5 * 4 * factorial(3)</code> → … → <code>5 * 4 * 3 * 2 * 1 = 120</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int max(int a, int b) {
    return (a &gt; b) ? a : b;
}
int main(void) {
    printf("%d\\n", max(max(3, 7), max(5, 2)));
    return 0;
}</code></pre>`,
        options: ["2", "3", "5", "7"],
        answer: 3,
        explanation: "从内到外计算：<code>max(3, 7) = 7</code>，<code>max(5, 2) = 5</code>，最后<code>max(7, 5) = 7</code>。"
      },
      {
        type: "output",
        question: `以下程序的输出是什么？<pre class="language-c"><code>#include &lt;stdio.h&gt;
int count_calls(void) {
    static int count = 0;
    count++;
    return count;
}
int main(void) {
    count_calls();
    count_calls();
    printf("%d\\n", count_calls());
    return 0;
}</code></pre>`,
        options: ["1", "2", "3", "0"],
        answer: 2,
        explanation: "<code>static</code>局部变量在程序运行期间只初始化一次，值在函数调用之间保持。三次调用分别返回1、2、3，最后一次的返回值3被打印。"
      }
    ]
  },

{
  id: 10,
  title: "数组和指针",
  description: "理解数组声明、初始化、多维数组以及指针的基本概念与运算",
  content: `
    <h2>数组和指针</h2>

    <h3>一、数组的声明与初始化</h3>
    <p>数组是存储多个<strong>相同类型</strong>元素的连续内存区域。声明数组时必须指定元素类型和元素个数。C语言中数组下标从 <code>0</code> 开始，最后一个元素的下标为 <code>长度 - 1</code>。</p>
    <p>初始化数组有多种方式：可以在声明时使用花括号列出所有值，也可以只初始化部分元素（其余自动置零），还可以使用 C99 的<strong>指定初始化器</strong>对特定下标赋值。如果提供了初始化列表，可以省略数组大小，编译器会自动计算。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

int main(void)
{
    int a[5] = {10, 20, 30, 40, 50};
    int b[]  = {1, 2, 3};           // 编译器推断长度为 3
    int c[5] = {[2] = 99};          // C99 指定初始化：c = {0, 0, 99, 0, 0}

    printf("a[0]=%d, b[2]=%d, c[2]=%d\\n", a[0], b[2], c[2]);
    printf("数组 b 的长度: %zu\\n", sizeof b / sizeof b[0]);
    return 0;
}
</pre>

    <h3>二、多维数组</h3>
    <p>多维数组本质上是"数组的数组"。最常见的是二维数组，可以理解为行和列组成的表格。声明形式为 <code>int m[行数][列数]</code>。初始化时可以用嵌套花括号分行书写，也可以扁平地列出所有值。在内存中，多维数组的元素按<strong>行优先</strong>顺序连续存储。</p>

    <h3>三、指针基础</h3>
    <p>指针是一个变量，其值为另一个变量的<strong>内存地址</strong>。使用 <code>&amp;</code>（取地址运算符）获取变量的地址，使用 <code>*</code>（解引用运算符）访问指针指向的值。声明指针时，需要指定它所指向的数据类型，例如 <code>int *p</code> 表示 p 是一个指向 <code>int</code> 的指针。</p>

    <div class="key-point">
      <strong>核心概念：</strong>指针变量存储的是地址而非数据本身。<code>*p</code> 获取指针指向的值（解引用），<code>&amp;x</code> 获取变量 x 的地址。指针的类型决定了解引用时读取多少字节。
    </div>

    <h3>四、指针与数组的关系</h3>
    <p>数组名在大多数表达式中会<strong>退化为指向首元素的指针</strong>。因此 <code>arr</code> 等价于 <code>&amp;arr[0]</code>，<code>arr[i]</code> 等价于 <code>*(arr + i)</code>。指针运算以所指向类型的大小为单位：<code>int</code> 指针加 1 实际地址增加 <code>sizeof(int)</code> 字节。可以用指针遍历数组，这与下标方式等效。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

int main(void)
{
    int arr[4] = {100, 200, 300, 400};
    int *p = arr;   // 等价于 int *p = &amp;arr[0];

    for (int i = 0; i &lt; 4; i++)
        printf("*(p+%d) = %d, arr[%d] = %d\\n", i, *(p + i), i, arr[i]);

    printf("p 的值: %p\\n", (void *)p);
    printf("p+1 的值: %p\\n", (void *)(p + 1));
    return 0;
}
</pre>

    <h3>五、数组作为函数参数</h3>
    <p>将数组传递给函数时，实际传递的是<strong>指向首元素的指针</strong>，而不是整个数组的副本。因此函数内部对数组元素的修改会影响原数组。为了让函数知道数组有多少个元素，通常需要额外传递一个表示长度的参数。函数形参既可以写成 <code>int arr[]</code>，也可以写成 <code>int *arr</code>，两者等价。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

void double_array(int *arr, int len)
{
    for (int i = 0; i &lt; len; i++)
        arr[i] *= 2;
}

int main(void)
{
    int data[] = {1, 2, 3, 4, 5};
    int n = sizeof data / sizeof data[0];

    double_array(data, n);
    for (int i = 0; i &lt; n; i++)
        printf("%d ", data[i]);   // 输出: 2 4 6 8 10
    printf("\\n");
    return 0;
}
</pre>

    <div class="key-point">
      <strong>关键区别：</strong>在函数内部对形参使用 <code>sizeof</code> 得到的是<strong>指针的大小</strong>（通常 4 或 8 字节），而不是整个数组的大小。这就是为什么需要单独传递数组长度。
    </div>
  `,
  questions: [
    {
      type: "output",
      question: "以下程序的输出是什么？<pre class=\"language-c\">int a[] = {5, 10, 15};\nint *p = a;\nprintf(\"%d\", *(p + 2));</pre>",
      options: ["5", "10", "15", "编译错误"],
      answer: 2,
      explanation: "<code>p</code> 指向数组首元素 <code>a[0]</code>，<code>p + 2</code> 指向 <code>a[2]</code>，解引用后得到 <code>15</code>。"
    },
    {
      type: "choice",
      question: "关于数组名，以下说法正确的是：",
      options: [
        "数组名是一个指针变量，可以对其赋值",
        "数组名在表达式中退化为指向首元素的指针，但不是变量，不可赋值",
        "数组名和指针完全相同，没有任何区别",
        "sizeof(数组名) 返回指针的大小"
      ],
      answer: 1,
      explanation: "数组名在大多数上下文中退化为指针常量，不能对其赋值（如 <code>arr = p</code> 是非法的）。但 <code>sizeof(arr)</code> 返回整个数组的字节数，这是它与普通指针的重要区别。"
    },
    {
      type: "truefalse",
      question: "<code>int a[5];</code> 声明后，<code>a[5] = 10;</code> 是安全合法的操作。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "数组 <code>a</code> 的合法下标范围是 0 到 4。<code>a[5]</code> 越界访问，属于未定义行为，可能导致程序崩溃或数据损坏。"
    },
    {
      type: "output",
      question: "以下程序的输出是什么？<pre class=\"language-c\">int x = 42;\nint *p = &amp;x;\n*p = 100;\nprintf(\"%d\", x);</pre>",
      options: ["42", "100", "地址值", "编译错误"],
      answer: 1,
      explanation: "<code>p</code> 指向 <code>x</code>，通过 <code>*p = 100</code> 修改了 <code>x</code> 的值，因此输出 <code>100</code>。"
    },
    {
      type: "choice",
      question: "以下哪种方式<strong>不能</strong>正确初始化数组？",
      options: [
        "int a[3] = {1, 2, 3};",
        "int a[] = {1, 2, 3};",
        "int a[3]; a = {1, 2, 3};",
        "int a[5] = {0};"
      ],
      answer: 2,
      explanation: "数组不能在声明之后使用花括号整体赋值。<code>a = {1, 2, 3}</code> 是非法语句。初始化只能在声明时进行。"
    },
    {
      type: "choice",
      question: "在 <code>int arr[3][4];</code> 中，<code>arr[1][2]</code> 是整个数组的第几个元素（从第1个开始数）？",
      options: ["第5个", "第6个", "第7个", "第8个"],
      answer: 2,
      explanation: "二维数组按行优先存储。第0行有4个元素（下标0-3），第1行从第5个元素开始，<code>arr[1][2]</code> 是第 1×4+2+1 = 第7个元素。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">int arr[5] = {1};\nprintf(\"%d %d\", arr[0], arr[3]);</pre>",
      options: ["1 0", "1 1", "1 随机值", "编译错误"],
      answer: 0,
      explanation: "部分初始化数组时，未明确指定的元素自动初始化为 <code>0</code>。因此 <code>arr[0]=1</code>，其余元素均为 <code>0</code>。"
    },
    {
      type: "truefalse",
      question: "将数组传递给函数时，函数接收的是整个数组的副本。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "C语言中数组传参实际传递的是指向首元素的指针，因此函数内对数组的修改会影响原数组。这不是值传递（副本）。"
    },
    {
      type: "choice",
      question: "若 <code>int *p</code> 指向 <code>int</code> 类型，且 <code>p</code> 的值为 <code>0x1000</code>，则 <code>p + 3</code> 的值是多少？（假设 <code>sizeof(int) = 4</code>）",
      options: ["0x1003", "0x100C", "0x1012", "0x1004"],
      answer: 1,
      explanation: "指针加法以所指类型大小为单位。<code>p + 3</code> 的实际地址为 <code>0x1000 + 3 × 4 = 0x1000 + 0xC = 0x100C</code>。"
    },
    {
      type: "choice",
      question: "<code>int a[10];</code> 在函数内和作为函数参数 <code>int a[]</code> 时，<code>sizeof(a)</code> 分别返回什么？（假设 <code>sizeof(int)=4</code>，64位系统）",
      options: [
        "都返回 40",
        "函数内返回 40，作为参数返回 8",
        "都返回 8",
        "函数内返回 8，作为参数返回 40"
      ],
      answer: 1,
      explanation: "局部数组 <code>sizeof(a)</code> 返回整个数组大小 10×4=40。但作为函数形参时，<code>a</code> 退化为指针，<code>sizeof(a)</code> 返回指针大小（64位系统为8字节）。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">int a[] = {10, 20, 30};\nint *p = a + 1;\nprintf(\"%d\", p[-1]);</pre>",
      options: ["10", "20", "30", "编译错误"],
      answer: 0,
      explanation: "<code>p = a + 1</code> 让 <code>p</code> 指向 <code>a[1]</code>。<code>p[-1]</code> 等价于 <code>*(p - 1)</code>，即 <code>a[0]</code>，值为 <code>10</code>。"
    },
    {
      type: "truefalse",
      question: "表达式 <code>arr[i]</code> 与 <code>*(arr + i)</code> 完全等价。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "C语言标准规定 <code>arr[i]</code> 就是 <code>*(arr + i)</code> 的语法糖，两者在编译后生成相同的代码，完全等价。"
    }
  ]
},
{
  id: 11,
  title: "字符串和字符串函数",
  description: "掌握C语言字符串的本质、输入输出方法及常用字符串处理函数",
  content: `
    <h2>字符串和字符串函数</h2>

    <h3>一、字符串的本质</h3>
    <p>C语言没有专门的字符串类型。<strong>字符串就是以空字符 <code>\\0</code> 结尾的 <code>char</code> 数组。</strong>空字符（数值为 0）标志着字符串的结束，所有字符串处理函数都依赖它来判断字符串长度。因此，存储 n 个字符的字符串至少需要 n+1 个字节的空间。</p>
    <p>字符串字面量（如 <code>"hello"</code>）由编译器自动添加 <code>\\0</code>，并存储在<strong>只读内存</strong>区域。可以用字符串字面量初始化字符数组，也可以用指针指向字符串字面量，但通过指针修改字面量的内容是未定义行为。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main(void)
{
    char s1[] = "Hello";      // 数组，可修改，长度6（含\\0）
    char *s2  = "World";      // 指针指向字面量，不可修改内容
    char s3[20];

    printf("s1 长度: %zu，sizeof: %zu\\n", strlen(s1), sizeof s1);
    // 输出: s1 长度: 5，sizeof: 6

    strcpy(s3, s1);
    strcat(s3, " ");
    strcat(s3, s2);
    printf("s3 = %s\\n", s3);  // 输出: s3 = Hello World
    return 0;
}
</pre>

    <div class="key-point">
      <strong>重要区别：</strong><code>strlen()</code> 返回字符串的字符数（不含 <code>\\0</code>），<code>sizeof</code> 返回数组占用的总字节数（含 <code>\\0</code>）。对指针使用 <code>sizeof</code> 只得到指针本身的大小。
    </div>

    <h3>二、字符串输入</h3>
    <p><code>scanf("%s", str)</code> 读取字符串，但遇到空白字符就停止，无法读取含空格的句子。<code>gets()</code> 可以读取整行，但<strong>不检查缓冲区边界</strong>，存在严重安全隐患（C11已移除）。推荐使用 <code>fgets(str, size, stdin)</code>，它最多读取 <code>size-1</code> 个字符，会保留末尾换行符。</p>

    <h3>三、常用字符串函数</h3>
    <p>标准库 <code>&lt;string.h&gt;</code> 提供了丰富的字符串处理函数：</p>
    <ul>
      <li><code>strlen(s)</code> — 返回字符串长度（不含 <code>\\0</code>）</li>
      <li><code>strcpy(dest, src)</code> — 将 src 复制到 dest（含 <code>\\0</code>）</li>
      <li><code>strncpy(dest, src, n)</code> — 最多复制 n 个字符，更安全</li>
      <li><code>strcat(dest, src)</code> — 将 src 追加到 dest 末尾</li>
      <li><code>strcmp(s1, s2)</code> — 比较两个字符串，相等返回 0</li>
      <li><code>strncmp(s1, s2, n)</code> — 只比较前 n 个字符</li>
    </ul>

    <h3>四、sprintf 格式化到字符串</h3>
    <p><code>sprintf()</code> 的功能与 <code>printf()</code> 相同，但输出目标是字符数组而不是屏幕。它可以将数字、字符串等拼接成格式化字符串，在需要构造复杂字符串时非常有用。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

int main(void)
{
    char buf[100];
    int year = 2024;
    double score = 95.5;

    sprintf(buf, "年份: %d, 分数: %.1f", year, score);
    printf("%s\\n", buf);  // 输出: 年份: 2024, 分数: 95.5
    return 0;
}
</pre>

    <div class="key-point">
      <strong>安全提示：</strong>使用 <code>strcpy</code>、<code>strcat</code>、<code>sprintf</code> 时务必确保目标数组足够大，否则会发生<strong>缓冲区溢出</strong>。更安全的替代方案是 <code>strncpy</code>、<code>strncat</code>、<code>snprintf</code>。
    </div>
  `,
  questions: [
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">char s[] = \"Hello\";\nprintf(\"%zu %zu\", strlen(s), sizeof(s));</pre>",
      options: ["5 5", "5 6", "6 6", "6 5"],
      answer: 1,
      explanation: "<code>strlen</code> 返回字符数 5（不含 <code>\\0</code>），<code>sizeof</code> 返回数组总大小 6 字节（5个字符 + 1个 <code>\\0</code>）。"
    },
    {
      type: "truefalse",
      question: "<code>char *s = \"hello\"; s[0] = 'H';</code> 是安全合法的操作。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "字符串字面量 <code>\"hello\"</code> 存储在只读内存区域。通过指针修改其内容是<strong>未定义行为</strong>，通常导致程序崩溃。应使用字符数组 <code>char s[] = \"hello\";</code> 才可修改。"
    },
    {
      type: "choice",
      question: "关于 <code>fgets(buf, 10, stdin)</code>，以下说法正确的是：",
      options: [
        "最多读取 10 个字符",
        "最多读取 9 个字符，并自动添加 \\0",
        "不会在末尾保留换行符",
        "如果输入超过 10 个字符会发生缓冲区溢出"
      ],
      answer: 1,
      explanation: "<code>fgets</code> 最多读取 <code>size-1</code> 个字符（此处为 9 个），为 <code>\\0</code> 保留一个位置。如果读到换行符且未超出限制，换行符会被保留在字符串中。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">char a[] = \"abc\";\nchar b[] = \"abd\";\nint r = strcmp(a, b);\nprintf(\"%s\", r &lt; 0 ? \"小于\" : (r == 0 ? \"等于\" : \"大于\"));</pre>",
      options: ["小于", "等于", "大于", "编译错误"],
      answer: 0,
      explanation: "<code>strcmp</code> 逐字符比较。前两个字符相同，第三个字符 <code>'c'</code>(99) 小于 <code>'d'</code>(100)，所以 <code>strcmp</code> 返回负值，输出\u201C小于\u201D。"
    },
    {
      type: "choice",
      question: "以下哪个函数已被 C11 标准移除，因为存在安全隐患？",
      options: ["fgets()", "gets()", "scanf()", "puts()"],
      answer: 1,
      explanation: "<code>gets()</code> 不检查缓冲区大小，无法防止溢出，是严重的安全漏洞来源，已被 C11 标准正式移除。应使用 <code>fgets()</code> 替代。"
    },
    {
      type: "truefalse",
      question: "可以使用 <code>==</code> 运算符来比较两个字符串的内容是否相同。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>==</code> 比较的是两个指针的地址值，而不是字符串内容。比较字符串内容应使用 <code>strcmp()</code>，当返回值为 0 时表示两个字符串相同。"
    },
    {
      type: "choice",
      question: "以下代码执行后 <code>dest</code> 的内容是什么？<pre class=\"language-c\">char dest[10] = \"Hi\";\nstrcat(dest, \" C\");</pre>",
      options: ["Hi", "Hi C", " CHi", "编译错误"],
      answer: 1,
      explanation: "<code>strcat</code> 将第二个字符串追加到第一个字符串末尾。先找到 <code>dest</code> 中的 <code>\\0</code> 位置（下标2），从该位置开始写入 <code>\" C\"</code>，最终 <code>dest</code> 为 <code>\"Hi C\"</code>。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">char s[] = \"ABCDE\";\nprintf(\"%c\", *(s + 3));</pre>",
      options: ["A", "C", "D", "E"],
      answer: 2,
      explanation: "<code>s + 3</code> 指向字符串的第4个字符（下标3），即 <code>'D'</code>。解引用后输出字符 <code>D</code>。"
    },
    {
      type: "choice",
      question: "<code>strncpy(dest, src, n)</code> 和 <code>strcpy(dest, src)</code> 的关键区别是：",
      options: [
        "strncpy 更快",
        "strncpy 会自动在末尾添加 \\0",
        "strncpy 限制最多复制 n 个字符，可防止溢出",
        "strncpy 只能用于字符串字面量"
      ],
      answer: 2,
      explanation: "<code>strncpy</code> 最多复制 <code>n</code> 个字符，能防止目标缓冲区溢出。但要注意，如果 <code>src</code> 长度大于等于 <code>n</code>，<code>strncpy</code> 不会自动添加 <code>\\0</code>，需要手动设置。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">char s[] = \"Hello\\0World\";\nprintf(\"%zu\", strlen(s));</pre>",
      options: ["5", "10", "11", "12"],
      answer: 0,
      explanation: "<code>strlen</code> 遇到第一个 <code>\\0</code> 就停止计数。<code>\"Hello\\0World\"</code> 在下标5处有一个 <code>\\0</code>，所以 <code>strlen</code> 返回 5。"
    }
  ]
},
{
  id: 12,
  title: "存储类别、链接和内存管理",
  description: "了解变量的存储类别、作用域规则、链接属性及动态内存分配",
  content: `
    <h2>存储类别、链接和内存管理</h2>

    <h3>一、存储类别</h3>
    <p>C语言中每个变量都有一个<strong>存储类别</strong>，决定了变量的生命周期和存储位置：</p>
    <ul>
      <li><code>auto</code>（自动变量）— 默认的局部变量类别，存储在栈上，函数结束时自动销毁。</li>
      <li><code>static</code>（静态变量）— 局部 static 变量在整个程序运行期间持续存在，只初始化一次；全局 static 变量将链接属性限制为内部链接。</li>
      <li><code>extern</code> — 声明一个在其他文件或其他位置定义的变量，不分配新的存储空间。</li>
      <li><code>register</code> — 建议编译器将变量存储在寄存器中以加快访问速度，但编译器可以忽略此建议。不能对 register 变量取地址。</li>
    </ul>

    <pre class="language-c">
#include &lt;stdio.h&gt;

void counter(void)
{
    static int count = 0;  // 只初始化一次
    count++;
    printf("调用次数: %d\\n", count);
}

int main(void)
{
    counter();  // 输出: 调用次数: 1
    counter();  // 输出: 调用次数: 2
    counter();  // 输出: 调用次数: 3
    return 0;
}
</pre>

    <h3>二、作用域与链接</h3>
    <p><strong>作用域</strong>决定变量在哪些代码区域可见。块作用域（花括号内）的变量只在该块内可见；文件作用域（在所有函数之外定义）的变量从定义点到文件末尾可见。</p>
    <p><strong>链接</strong>决定了变量能否被其他文件访问。<strong>外部链接</strong>的变量（全局变量，不带 static）可以被其他文件通过 <code>extern</code> 声明后使用；<strong>内部链接</strong>的变量（全局加 static）只在本文件内可见；<strong>无链接</strong>的变量（局部变量）只在本块内可见。</p>

    <div class="key-point">
      <strong>static 的双重含义：</strong>用于局部变量时，改变其生命周期（持续到程序结束）；用于全局变量或函数时，将链接属性限制为内部链接（只在本文件可见）。
    </div>

    <h3>三、动态内存管理</h3>
    <p>当编译时无法确定所需内存大小时，需要使用<strong>动态内存分配</strong>。标准库 <code>&lt;stdlib.h&gt;</code> 提供了以下函数：</p>
    <ul>
      <li><code>malloc(size)</code> — 分配 size 字节的未初始化内存，返回 <code>void *</code> 指针</li>
      <li><code>calloc(n, size)</code> — 分配 n 个大小为 size 的元素，并<strong>初始化为零</strong></li>
      <li><code>free(ptr)</code> — 释放之前动态分配的内存</li>
    </ul>
    <p>每次 <code>malloc</code> / <code>calloc</code> 都必须检查返回值是否为 <code>NULL</code>，并在不再使用时调用 <code>free</code> 释放内存。忘记释放会导致<strong>内存泄漏</strong>；释放后继续使用指针（悬空指针）属于未定义行为。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(void)
{
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("内存分配失败\\n");
        return 1;
    }
    for (int i = 0; i &lt; n; i++)
        arr[i] = (i + 1) * 10;
    for (int i = 0; i &lt; n; i++)
        printf("%d ", arr[i]);   // 输出: 10 20 30 40 50
    printf("\\n");
    free(arr);
    arr = NULL;  // 避免悬空指针
    return 0;
}
</pre>

    <div class="key-point">
      <strong>内存泄漏：</strong>动态分配的内存不会自动释放。如果丢失了指向该内存的指针（如指针被重新赋值或函数返回而未 free），该内存就无法释放，造成内存泄漏。长时间运行的程序会因此耗尽可用内存。
    </div>
  `,
  questions: [
    {
      type: "output",
      question: "以下程序的输出是什么？<pre class=\"language-c\">void func(void) {\n    static int x = 0;\n    x++;\n    printf(\"%d \", x);\n}\nint main(void) {\n    func(); func(); func();\n    return 0;\n}</pre>",
      options: ["1 1 1 ", "1 2 3 ", "0 1 2 ", "3 3 3 "],
      answer: 1,
      explanation: "<code>static</code> 局部变量只初始化一次，其值在函数调用之间保持。每次调用 <code>func</code>，<code>x</code> 在上次的基础上加1，所以输出 <code>1 2 3</code>。"
    },
    {
      type: "choice",
      question: "以下关于 <code>malloc</code> 和 <code>calloc</code> 的区别，正确的是：",
      options: [
        "malloc 初始化内存为零，calloc 不初始化",
        "calloc 初始化内存为零，malloc 不初始化",
        "malloc 用于分配数组，calloc 用于分配单个对象",
        "两者没有区别"
      ],
      answer: 1,
      explanation: "<code>malloc</code> 只分配指定大小的内存，不初始化（内容为随机值）。<code>calloc</code> 分配内存并将所有字节初始化为 0。此外，<code>calloc</code> 接受两个参数（元素个数和每个元素的大小）。"
    },
    {
      type: "truefalse",
      question: "<code>free(ptr)</code> 之后，<code>ptr</code> 自动变为 <code>NULL</code>。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>free</code> 只释放内存，不会修改指针本身的值。<code>ptr</code> 仍然保存着已释放内存的地址（悬空指针），应手动将其设为 <code>NULL</code> 以避免误用。"
    },
    {
      type: "choice",
      question: "<code>extern int count;</code> 的作用是：",
      options: [
        "定义一个新的全局变量 count",
        "声明一个在别处定义的变量 count，不分配内存",
        "将 count 声明为静态变量",
        "将 count 存储在寄存器中"
      ],
      answer: 1,
      explanation: "<code>extern</code> 关键字声明变量在其他文件（或同一文件的其他位置）已经定义，编译器不会为此分配新的存储空间，只是建立引用关系。"
    },
    {
      type: "truefalse",
      question: "可以对 <code>register</code> 变量使用取地址运算符 <code>&amp;</code>。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>register</code> 变量可能存储在 CPU 寄存器中，而寄存器没有内存地址。因此 C 标准禁止对 <code>register</code> 变量使用 <code>&amp;</code> 运算符。"
    },
    {
      type: "choice",
      question: "关于 <code>static</code> 关键字，以下哪个描述是错误的？",
      options: [
        "局部 static 变量在程序运行期间一直存在",
        "全局 static 变量只能在定义它的文件中访问",
        "static 变量如果未显式初始化，默认值为 0",
        "局部 static 变量每次函数调用都会重新初始化"
      ],
      answer: 3,
      explanation: "局部 <code>static</code> 变量只在第一次执行到其声明时初始化<strong>一次</strong>，之后的调用会跳过初始化，保留上次的值。这是 static 变量的核心特性。"
    },
    {
      type: "output",
      question: "以下代码是否存在内存泄漏？<pre class=\"language-c\">int *p = malloc(sizeof(int) * 10);\np = malloc(sizeof(int) * 20);\nfree(p);</pre>",
      options: [
        "没有泄漏，free 释放了所有内存",
        "有泄漏，第一次 malloc 的内存没有被释放",
        "有泄漏，第二次 malloc 的内存没有被释放",
        "编译错误"
      ],
      answer: 1,
      explanation: "第二次 <code>malloc</code> 让 <code>p</code> 指向新内存，第一次分配的 10 个 <code>int</code> 的内存地址丢失，无法再 <code>free</code>。<code>free(p)</code> 只释放了第二次分配的内存。"
    },
    {
      type: "choice",
      question: "在文件作用域中，<code>static int x = 5;</code> 和 <code>int x = 5;</code> 的区别是：",
      options: [
        "前者 x 为常量，后者为变量",
        "前者 x 只能在本文件内访问，后者可被其他文件通过 extern 访问",
        "前者在堆上，后者在栈上",
        "没有区别"
      ],
      answer: 1,
      explanation: "在文件作用域，<code>static</code> 将变量的链接属性设为内部链接，只在本文件可见。不加 <code>static</code> 的全局变量具有外部链接，其他文件可以用 <code>extern</code> 访问。"
    },
    {
      type: "truefalse",
      question: "<code>malloc(0)</code> 的行为是由C标准明确定义的，一定返回 <code>NULL</code>。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "C标准规定 <code>malloc(0)</code> 的行为是<strong>实现定义的</strong>：可能返回 <code>NULL</code>，也可能返回一个非空的、不可解引用的唯一指针。不同编译器行为可能不同。"
    },
    {
      type: "choice",
      question: "以下哪种情况会导致<strong>未定义行为</strong>？",
      options: [
        "使用 malloc 分配内存后检查 NULL",
        "使用 free 释放 malloc 返回的指针",
        "对已 free 的指针再次解引用",
        "将 malloc 的返回值强制转换为目标类型"
      ],
      answer: 2,
      explanation: "释放内存后，指针成为悬空指针。对悬空指针解引用（读取或写入）属于<strong>未定义行为</strong>，可能导致崩溃或数据损坏。应在 <code>free</code> 后将指针设为 <code>NULL</code>。"
    }
  ]
},
{
  id: 13,
  title: "文件输入/输出",
  description: "学习C语言文件操作的核心概念，包括文件打开、读写和定位",
  content: `
    <h2>文件输入/输出</h2>

    <h3>一、FILE 指针与文件打开</h3>
    <p>C语言通过 <code>FILE</code> 结构体（定义在 <code>&lt;stdio.h&gt;</code> 中）管理文件操作。程序不直接操作文件，而是通过<strong>FILE 指针</strong>与文件系统交互。使用 <code>fopen()</code> 打开文件并获得 FILE 指针，使用 <code>fclose()</code> 关闭文件并释放资源。</p>
    <p>文件模式决定了打开文件的方式：</p>
    <ul>
      <li><code>"r"</code> — 只读，文件必须存在</li>
      <li><code>"w"</code> — 只写，文件不存在则创建，<strong>已存在则清空内容</strong></li>
      <li><code>"a"</code> — 追加写入，写入内容添加到文件末尾</li>
      <li><code>"r+"</code> — 读写，文件必须存在</li>
      <li><code>"w+"</code> — 读写，创建新文件或清空已有文件</li>
      <li><code>"b"</code> — 与以上模式组合（如 <code>"rb"</code>），以二进制模式操作</li>
    </ul>

    <pre class="language-c">
#include &lt;stdio.h&gt;

int main(void)
{
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        printf("无法打开文件\\n");
        return 1;
    }
    fprintf(fp, "姓名: %s\\n", "张三");
    fprintf(fp, "分数: %d\\n", 95);
    fclose(fp);
    printf("写入完成\\n");
    return 0;
}
</pre>

    <h3>二、文本文件读写</h3>
    <p><code>fprintf()</code> 和 <code>fscanf()</code> 是 <code>printf()</code> 和 <code>scanf()</code> 的文件版本，第一个参数为 FILE 指针。<code>fputs(str, fp)</code> 写入字符串，<code>fgets(buf, size, fp)</code> 逐行读取文件。读取文件时，当 <code>fgets</code> 返回 <code>NULL</code> 表示到达文件末尾或出错。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

int main(void)
{
    FILE *fp = fopen("output.txt", "r");
    if (fp == NULL) {
        printf("无法打开文件\\n");
        return 1;
    }
    char line[256];
    while (fgets(line, sizeof line, fp) != NULL)
        printf("读取: %s", line);
    fclose(fp);
    return 0;
}
</pre>

    <h3>三、二进制文件与随机访问</h3>
    <p>对于非文本数据（如结构体），使用 <code>fwrite()</code> 和 <code>fread()</code> 进行二进制读写，效率更高且不会发生格式转换。<code>fseek(fp, offset, origin)</code> 可以移动文件位置指示器，实现随机访问。<code>origin</code> 可以是 <code>SEEK_SET</code>（文件开头）、<code>SEEK_CUR</code>（当前位置）或 <code>SEEK_END</code>（文件末尾）。<code>ftell(fp)</code> 返回当前位置。</p>

    <div class="key-point">
      <strong>必须检查返回值：</strong><code>fopen</code> 失败返回 <code>NULL</code>。任何文件操作之前都应检查文件是否成功打开。用完文件后务必调用 <code>fclose</code>，否则可能丢失缓冲区中的数据。
    </div>

    <div class="key-point">
      <strong>文本模式 vs 二进制模式：</strong>在 Windows 系统上，文本模式会将 <code>\\n</code> 自动转换为 <code>\\r\\n</code>（写入时）或反向转换（读取时）。二进制模式不做任何转换。处理非文本数据时应使用二进制模式。
    </div>
  `,
  questions: [
    {
      type: "choice",
      question: "使用 <code>fopen(\"data.txt\", \"w\")</code> 打开一个已存在的文件，会发生什么？",
      options: [
        "打开失败，返回 NULL",
        "文件内容被清空，从头开始写入",
        "在文件末尾追加内容",
        "以只读方式打开"
      ],
      answer: 1,
      explanation: "<code>\"w\"</code> 模式表示写入。如果文件已存在，其内容会被<strong>清空</strong>；如果文件不存在，则创建新文件。这是一个常见的陷阱。"
    },
    {
      type: "truefalse",
      question: "<code>fopen</code> 返回 <code>NULL</code> 表示文件打开成功。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>fopen</code> 返回 <code>NULL</code> 表示打开<strong>失败</strong>（如文件不存在、权限不足等）。成功时返回有效的 <code>FILE</code> 指针。"
    },
    {
      type: "choice",
      question: "以下哪个函数用于将结构体以二进制方式写入文件？",
      options: ["fprintf", "fputs", "fwrite", "fscanf"],
      answer: 2,
      explanation: "<code>fwrite</code> 以二进制方式直接将内存中的数据写入文件，适合写入结构体等非文本数据。<code>fprintf</code> 和 <code>fputs</code> 用于文本输出。"
    },
    {
      type: "choice",
      question: "<code>fseek(fp, 0, SEEK_END)</code> 的作用是：",
      options: [
        "将文件位置移动到文件开头",
        "将文件位置移动到文件末尾",
        "将文件位置向后移动 0 字节",
        "关闭文件"
      ],
      answer: 1,
      explanation: "<code>SEEK_END</code> 表示以文件末尾为基准，偏移量为 0 表示正好在末尾。常与 <code>ftell</code> 配合使用来获取文件大小。"
    },
    {
      type: "truefalse",
      question: "<code>fgets</code> 读取一行时，如果行末有换行符，换行符会被包含在结果字符串中。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "<code>fgets</code> 在读取到换行符时会将换行符也存入缓冲区（这与 <code>gets</code> 不同）。如果不需要换行符，需要手动去除。"
    },
    {
      type: "choice",
      question: "以下哪种文件模式可以在不清空文件的情况下向文件添加内容？",
      options: ["\"w\"", "\"r\"", "\"a\"", "\"w+\""],
      answer: 2,
      explanation: "<code>\"a\"</code>（append）模式在文件末尾追加内容，不会清空已有数据。<code>\"w\"</code> 和 <code>\"w+\"</code> 都会清空文件内容。"
    },
    {
      type: "output",
      question: "以下代码用来获取文件大小，<code>ftell(fp)</code> 返回的值代表什么？<pre class=\"language-c\">fseek(fp, 0, SEEK_END);\nlong size = ftell(fp);</pre>",
      options: [
        "文件中的行数",
        "文件的字节数",
        "文件中的字符数（不含 \\0）",
        "文件指针的内存地址"
      ],
      answer: 1,
      explanation: "<code>fseek</code> 将位置移到文件末尾后，<code>ftell</code> 返回当前位置相对于文件开头的<strong>字节偏移量</strong>，即文件的字节大小。"
    },
    {
      type: "truefalse",
      question: "在 Windows 系统上，文本模式和二进制模式打开文件没有任何区别。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "在 Windows 上，文本模式会自动进行 <code>\\n</code> 与 <code>\\r\\n</code> 之间的转换。二进制模式不做此转换。在 Linux/macOS 上两者确实没有区别。"
    }
  ]
},
{
  id: 14,
  title: "结构和其他数据形式",
  description: "学习struct、typedef、union和enum，掌握自定义数据类型",
  content: `
    <h2>结构和其他数据形式</h2>

    <h3>一、结构体（struct）</h3>
    <p><strong>结构体</strong>是一种将不同类型的数据组合成单一实体的复合数据类型。与数组不同，结构体的成员可以是不同类型。使用 <code>struct</code> 关键字声明结构体模板，再用该模板创建变量。访问成员使用点运算符 <code>.</code>。结构体变量可以整体赋值（同类型之间），也可以在声明时用花括号初始化。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

struct Student {
    char name[20];
    int  age;
    float gpa;
};

int main(void)
{
    struct Student s1 = {"李明", 20, 3.85};
    struct Student s2 = s1;  // 整体复制

    printf("姓名: %s\\n", s1.name);
    printf("年龄: %d\\n", s1.age);
    printf("GPA: %.2f\\n", s1.gpa);
    return 0;
}
</pre>

    <h3>二、结构数组与指向结构的指针</h3>
    <p>可以创建结构体数组来存储多条记录。当函数需要处理结构体时，传递<strong>指向结构体的指针</strong>比传递结构体本身更高效（避免复制整个结构）。通过指针访问成员使用箭头运算符 <code>-&gt;</code>，这是 <code>(*ptr).member</code> 的简写形式。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

struct Point {
    int x;
    int y;
};

void move(struct Point *p, int dx, int dy)
{
    p-&gt;x += dx;   // 等价于 (*p).x += dx
    p-&gt;y += dy;
}

int main(void)
{
    struct Point pts[3] = {{0,0}, {1,2}, {3,4}};
    move(&amp;pts[0], 5, 5);
    printf("pts[0] = (%d, %d)\\n", pts[0].x, pts[0].y);
    // 输出: pts[0] = (5, 5)
    return 0;
}
</pre>

    <h3>三、typedef</h3>
    <p><code>typedef</code> 为已有类型创建别名，可以简化复杂的类型声明，提高代码可读性。最常见的用法是为结构体类型起别名，避免每次都写 <code>struct</code> 关键字。</p>

    <h3>四、联合体（union）与枚举（enum）</h3>
    <p><code>union</code> 的所有成员<strong>共享同一块内存</strong>，其大小等于最大成员的大小。同一时刻只能有一个成员有效。<code>enum</code>（枚举）定义一组命名的整数常量，使代码更具可读性。枚举值默认从 0 开始递增，也可以手动指定。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

typedef struct {
    char name[20];
    int  id;
} Employee;

enum Color { RED, GREEN, BLUE };  // RED=0, GREEN=1, BLUE=2

union Data {
    int    i;
    float  f;
    char   c;
};

int main(void)
{
    Employee emp = {"王芳", 1001};
    printf("员工: %s, 工号: %d\\n", emp.name, emp.id);

    enum Color favorite = GREEN;
    printf("颜色编号: %d\\n", favorite);  // 输出: 1

    union Data d;
    d.i = 42;
    printf("整数: %d\\n", d.i);
    d.f = 3.14f;   // 此时 d.i 的值不再有效
    printf("浮点: %.2f\\n", d.f);
    return 0;
}
</pre>

    <div class="key-point">
      <strong>struct vs union：</strong>结构体为每个成员分配独立的内存，总大小是所有成员大小之和（加上可能的对齐填充）。联合体所有成员共享内存，总大小等于最大成员的大小，同一时刻只能使用一个成员。
    </div>

    <div class="key-point">
      <strong>typedef 的优势：</strong>使用 <code>typedef struct { ... } Name;</code> 后，可以直接用 <code>Name</code> 声明变量，无需每次写 <code>struct</code> 关键字，让代码更简洁。
    </div>
  `,
  questions: [
    {
      type: "choice",
      question: "访问结构体指针成员的正确方式是：",
      options: [
        "ptr.member",
        "ptr->member",
        "*ptr->member",
        "ptr[member]"
      ],
      answer: 1,
      explanation: "通过指针访问结构体成员使用箭头运算符 <code>-&gt;</code>，即 <code>ptr-&gt;member</code>，等价于 <code>(*ptr).member</code>。直接用点运算符 <code>.</code> 只能对结构体变量（非指针）使用。"
    },
    {
      type: "truefalse",
      question: "两个相同类型的结构体变量之间可以使用 <code>=</code> 进行整体赋值。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "C语言允许同类型的结构体变量之间整体赋值，编译器会逐成员复制（浅拷贝）。这与数组不同——数组不能用 <code>=</code> 整体赋值。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">enum Season { SPRING = 1, SUMMER, AUTUMN, WINTER };\nprintf(\"%d\", AUTUMN);</pre>",
      options: ["2", "3", "4", "编译错误"],
      answer: 1,
      explanation: "<code>SPRING</code> 被手动设为 1，之后的值依次递增：<code>SUMMER=2</code>，<code>AUTUMN=3</code>，<code>WINTER=4</code>。"
    },
    {
      type: "choice",
      question: "关于 <code>union</code>，以下说法正确的是：",
      options: [
        "union 的大小是所有成员大小之和",
        "union 的所有成员可以同时使用",
        "union 的大小等于最大成员的大小",
        "union 与 struct 完全相同"
      ],
      answer: 2,
      explanation: "<code>union</code> 的所有成员<strong>共享同一块内存</strong>，因此其大小等于最大成员的大小。同一时刻只有一个成员有效，写入一个成员会覆盖其他成员的值。"
    },
    {
      type: "choice",
      question: "<code>typedef int* IntPtr;</code> 之后，<code>IntPtr a, b;</code> 表示：",
      options: [
        "a 是指针，b 是 int 变量",
        "a 和 b 都是 int 变量",
        "a 和 b 都是 int 指针",
        "编译错误"
      ],
      answer: 2,
      explanation: "<code>typedef</code> 将 <code>IntPtr</code> 定义为 <code>int*</code> 类型的别名。<code>IntPtr a, b;</code> 等价于 <code>int *a, *b;</code>，两者都是指针。注意这与 <code>int *a, b;</code>（只有 a 是指针）不同。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">struct S { int a; int b; };\nstruct S s = {10, 20};\nstruct S *p = &amp;s;\nprintf(\"%d\", p-&gt;a + p-&gt;b);</pre>",
      options: ["10", "20", "30", "编译错误"],
      answer: 2,
      explanation: "<code>p</code> 指向结构体 <code>s</code>，<code>p-&gt;a</code> 为 10，<code>p-&gt;b</code> 为 20，相加得 30。"
    },
    {
      type: "truefalse",
      question: "结构体的成员可以包含另一个结构体类型的变量（嵌套结构）。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "结构体支持嵌套，成员可以是另一个结构体类型。例如一个\u201C矩形\u201D结构体可以包含两个\u201C点\u201D结构体成员。但结构体不能包含自身类型的成员（可以包含指向自身类型的指针）。"
    },
    {
      type: "choice",
      question: "以下哪个声明使用 <code>typedef</code> 后可以直接用 <code>Point</code> 定义变量（无需写 <code>struct</code>）？",
      options: [
        "struct Point { int x; int y; };",
        "typedef struct { int x; int y; } Point;",
        "typedef Point { int x; int y; };",
        "define Point struct { int x; int y; }"
      ],
      answer: 1,
      explanation: "<code>typedef struct { int x; int y; } Point;</code> 将匿名结构体类型命名为 <code>Point</code>，之后可以直接使用 <code>Point p;</code> 声明变量。"
    },
    {
      type: "choice",
      question: "将结构体传递给函数时，以下哪种方式效率更高？",
      options: [
        "直接传递结构体变量（值传递）",
        "传递结构体的指针",
        "两者效率完全相同",
        "传递结构体数组"
      ],
      answer: 1,
      explanation: "值传递会复制整个结构体，如果结构体很大则开销很大。传递指针只需复制一个地址值（通常 4 或 8 字节），效率远高于值传递。"
    },
    {
      type: "truefalse",
      question: "<code>enum</code> 类型的值本质上是整数，可以参与整数运算。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "C语言中 <code>enum</code> 值本质上就是 <code>int</code> 常量，可以参与各种整数运算、比较和赋值。但为了代码可读性，通常建议只在枚举定义的范围内使用。"
    }
  ]
},
{
  id: 15,
  title: "位操作",
  description: "理解二进制表示、位运算符、位字段和掩码操作技术",
  content: `
    <h2>位操作</h2>

    <h3>一、二进制表示与位运算符</h3>
    <p>计算机内部以<strong>二进制</strong>形式存储所有数据。位运算直接在二进制位的层面操作数据，是底层编程和性能优化的重要工具。C语言提供六种位运算符：</p>
    <ul>
      <li><code>&amp;</code>（按位与）— 两位都为 1 结果才为 1</li>
      <li><code>|</code>（按位或）— 有一位为 1 结果就为 1</li>
      <li><code>^</code>（按位异或）— 两位不同结果为 1</li>
      <li><code>~</code>（按位取反）— 每位取反：0 变 1，1 变 0</li>
      <li><code>&lt;&lt;</code>（左移）— 各位左移，右侧补 0，相当于乘以 2 的幂</li>
      <li><code>&gt;&gt;</code>（右移）— 各位右移，相当于除以 2 的幂（无符号数补0，有符号数行为取决于实现）</li>
    </ul>

    <pre class="language-c">
#include &lt;stdio.h&gt;

int main(void)
{
    unsigned char a = 0xC5;  // 二进制: 1100 0101
    unsigned char b = 0xA3;  // 二进制: 1010 0011

    printf("a &amp; b = 0x%02X\\n", a &amp; b);  // 1000 0001 = 0x81
    printf("a | b = 0x%02X\\n", a | b);  // 1110 0111 = 0xE7
    printf("a ^ b = 0x%02X\\n", a ^ b);  // 0110 0110 = 0x66
    printf("~a    = 0x%02X\\n", (unsigned char)~a);  // 0011 1010 = 0x3A

    unsigned int x = 5;    // 二进制: 0000 0101
    printf("x &lt;&lt; 2 = %u\\n", x &lt;&lt; 2);  // 0001 0100 = 20
    printf("x &gt;&gt; 1 = %u\\n", x &gt;&gt; 1);  // 0000 0010 = 2
    return 0;
}
</pre>

    <h3>二、掩码操作</h3>
    <p><strong>掩码</strong>（mask）是一种通过位运算选择性地操作特定位的技术：</p>
    <ul>
      <li><strong>设置位</strong>（置1）：<code>value |= mask</code> — 用按位或将指定位设为 1</li>
      <li><strong>清除位</strong>（置0）：<code>value &amp;= ~mask</code> — 用按位与加取反将指定位设为 0</li>
      <li><strong>翻转位</strong>：<code>value ^= mask</code> — 用按位异或翻转指定位</li>
      <li><strong>检查位</strong>：<code>value &amp; mask</code> — 检查指定位是否为 1</li>
    </ul>

    <pre class="language-c">
#include &lt;stdio.h&gt;

#define BIT3 (1 &lt;&lt; 3)   // 0000 1000，第3位的掩码

int main(void)
{
    unsigned char flags = 0x00;

    flags |= BIT3;       // 设置第3位：0000 1000
    printf("设置后: 0x%02X\\n", flags);

    if (flags &amp; BIT3)
        printf("第3位已设置\\n");

    flags &amp;= ~BIT3;      // 清除第3位：0000 0000
    printf("清除后: 0x%02X\\n", flags);
    return 0;
}
</pre>

    <h3>三、位字段</h3>
    <p><strong>位字段</strong>允许在结构体中按位分配存储空间，适合需要紧凑存储多个小数值的场景（如硬件寄存器映射、网络协议头）。成员的宽度用冒号和位数指定。</p>

    <div class="key-point">
      <strong>左移与乘法：</strong>左移 n 位等价于乘以 2<sup>n</sup>，右移 n 位等价于除以 2<sup>n</sup>（取整）。位运算比乘除法更快，但现代编译器通常会自动优化。
    </div>

    <div class="key-point">
      <strong>异或的妙用：</strong><code>a ^ a = 0</code>（任何数与自身异或为 0），<code>a ^ 0 = a</code>（任何数与 0 异或不变）。利用这个性质可以不借助临时变量交换两个值：<code>a ^= b; b ^= a; a ^= b;</code>。
    </div>
  `,
  questions: [
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">unsigned int a = 12;  // 1100\nunsigned int b = 10;  // 1010\nprintf(\"%u\", a &amp; b);</pre>",
      options: ["8", "14", "2", "22"],
      answer: 0,
      explanation: "<code>1100 &amp; 1010 = 1000</code>（按位与：两位都为1才为1），二进制 <code>1000</code> 等于十进制 <code>8</code>。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">unsigned int x = 3;\nprintf(\"%u\", x &lt;&lt; 3);</pre>",
      options: ["6", "9", "24", "12"],
      answer: 2,
      explanation: "左移 3 位等价于乘以 2<sup>3</sup>=8。<code>3 × 8 = 24</code>。二进制：<code>011</code> 左移3位变为 <code>011000</code> = 24。"
    },
    {
      type: "choice",
      question: "要将变量 <code>flags</code> 的第 5 位设为 1（其他位不变），应使用：",
      options: [
        "flags &= (1 << 5);",
        "flags |= (1 << 5);",
        "flags ^= (1 << 5);",
        "flags = (1 << 5);"
      ],
      answer: 1,
      explanation: "按位或 <code>|=</code> 可以将指定位设为 1 而不影响其他位。<code>flags |= (1 &lt;&lt; 5)</code> 只将第5位置1。<code>&amp;=</code> 用于清除位，<code>^=</code> 用于翻转位，直接赋值会覆盖所有位。"
    },
    {
      type: "choice",
      question: "要将变量 <code>flags</code> 的第 2 位清零（其他位不变），应使用：",
      options: [
        "flags |= ~(1 << 2);",
        "flags &= ~(1 << 2);",
        "flags ^= (1 << 2);",
        "flags &= (1 << 2);"
      ],
      answer: 1,
      explanation: "<code>~(1 &lt;&lt; 2)</code> 生成一个除第2位为 0 外其余全为 1 的掩码。与 <code>flags</code> 按位与后，第2位被清零，其他位保持不变。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">int a = 5, b = 3;\nprintf(\"%d\", a ^ b);</pre>",
      options: ["1", "6", "7", "8"],
      answer: 1,
      explanation: "<code>5 = 101</code>，<code>3 = 011</code>。按位异或：<code>101 ^ 011 = 110</code> = 6。异或规则：相同为0，不同为1。"
    },
    {
      type: "truefalse",
      question: "表达式 <code>x &amp; 1</code> 可以用来判断整数 <code>x</code> 是奇数还是偶数。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "整数的最低位（第0位）决定奇偶性：最低位为 1 则为奇数，为 0 则为偶数。<code>x &amp; 1</code> 提取最低位，结果为 1 表示奇数，0 表示偶数。"
    },
    {
      type: "choice",
      question: "关于位字段，以下说法错误的是：",
      options: [
        "位字段成员的宽度用冒号和位数指定",
        "位字段可以节省存储空间",
        "位字段的布局在所有平台上完全相同",
        "位字段通常定义在结构体中"
      ],
      answer: 2,
      explanation: "位字段的内存布局（如位的排列顺序、对齐方式）是<strong>实现定义的</strong>，不同编译器和平台可能不同。因此位字段不适合需要跨平台兼容的场景。"
    },
    {
      type: "output",
      question: "以下代码执行后 <code>a</code> 和 <code>b</code> 的值分别是什么？<pre class=\"language-c\">int a = 7, b = 2;\na ^= b;\nb ^= a;\na ^= b;</pre>",
      options: ["a=7, b=2", "a=2, b=7", "a=5, b=5", "a=0, b=0"],
      answer: 1,
      explanation: "这是利用异或交换两个变量的经典技巧。三步异或操作后，<code>a</code> 和 <code>b</code> 的值被交换：<code>a=2</code>，<code>b=7</code>。"
    }
  ]
},
{
  id: 16,
  title: "C预处理器和C库",
  description: "掌握宏定义、条件编译、头文件包含及常用标准库函数",
  content: `
    <h2>C预处理器和C库</h2>

    <h3>一、#define 宏定义</h3>
    <p><strong>预处理器</strong>在编译之前处理源代码，执行文本替换。<code>#define</code> 是最常用的预处理指令，用于定义<strong>宏</strong>（常量或带参数的代码片段）。宏名通常全大写。简单宏用于定义常量，在整个文件中所有出现该宏名的地方都会被替换为指定的值。</p>
    <p><strong>带参数的宏</strong>类似于函数，但在预处理阶段进行文本替换，没有函数调用的开销。编写带参数的宏时，应给每个参数和整个表达式加上<strong>括号</strong>，以避免运算优先级导致的错误。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;

#define PI          3.14159265
#define MAX(a, b)   ((a) &gt; (b) ? (a) : (b))
#define SQUARE(x)   ((x) * (x))

int main(void)
{
    double area = PI * SQUARE(5.0);
    printf("圆面积: %.2f\\n", area);    // 78.54

    int m = MAX(10, 20);
    printf("较大值: %d\\n", m);         // 20

    // 注意：SQUARE(a+1) 展开为 ((a+1)*(a+1))，括号保证正确
    int a = 3;
    printf("SQUARE(a+1) = %d\\n", SQUARE(a + 1));  // 16
    return 0;
}
</pre>

    <div class="key-point">
      <strong>宏的陷阱：</strong>宏参数可能被求值多次。例如 <code>SQUARE(++x)</code> 展开为 <code>((++x)*(++x))</code>，<code>x</code> 被递增两次，产生未定义行为。对有副作用的表达式应避免使用带参数的宏。
    </div>

    <h3>二、#include 与条件编译</h3>
    <p><code>#include &lt;头文件&gt;</code> 在系统目录查找头文件，<code>#include "头文件"</code> 先在当前目录查找。<strong>条件编译</strong>指令可以控制哪些代码参与编译，常用于防止头文件重复包含和实现跨平台代码。</p>

    <pre class="language-c">
// myheader.h — 防止重复包含的标准写法
#ifndef MYHEADER_H
#define MYHEADER_H

void greet(const char *name);
int  add(int a, int b);

#endif
</pre>

    <p><code>#ifdef</code> 检查宏是否已定义，<code>#ifndef</code> 检查宏是否未定义，<code>#endif</code> 结束条件块。上面的模式称为<strong>头文件保护</strong>（include guard），确保即使头文件被多次包含也只处理一次。<code>#if</code>、<code>#elif</code>、<code>#else</code> 可以根据表达式的值选择性编译。</p>

    <h3>三、常用标准库</h3>
    <p>C标准库提供了丰富的功能：</p>
    <ul>
      <li><code>&lt;math.h&gt;</code> — 数学函数：<code>sqrt</code>、<code>pow</code>、<code>fabs</code>、<code>ceil</code>、<code>floor</code>、三角函数等</li>
      <li><code>&lt;stdlib.h&gt;</code> — 通用工具：<code>rand</code>、<code>srand</code>、<code>atoi</code>、<code>atof</code>、<code>abs</code>、<code>exit</code>、<code>malloc/free</code></li>
      <li><code>&lt;string.h&gt;</code> — 字符串处理：<code>strlen</code>、<code>strcpy</code>、<code>strcmp</code>、<code>memcpy</code>、<code>memset</code></li>
      <li><code>&lt;ctype.h&gt;</code> — 字符分类：<code>isalpha</code>、<code>isdigit</code>、<code>toupper</code>、<code>tolower</code>、<code>isspace</code></li>
    </ul>

    <pre class="language-c">
#include &lt;stdio.h&gt;
#include &lt;math.h&gt;
#include &lt;ctype.h&gt;
#include &lt;stdlib.h&gt;

int main(void)
{
    printf("sqrt(144) = %.0f\\n", sqrt(144));    // 12
    printf("pow(2,10) = %.0f\\n", pow(2, 10));   // 1024

    char ch = 'a';
    printf("toupper('%c') = %c\\n", ch, toupper(ch));  // A

    const char *num = "42";
    printf("atoi(\"%s\") = %d\\n", num, atoi(num));    // 42
    return 0;
}
</pre>

    <div class="key-point">
      <strong>宏 vs 函数：</strong>宏在预处理阶段展开，无调用开销但可能增大代码体积；函数有调用开销但类型安全且更易调试。C99 的 <code>inline</code> 函数兼具两者优点。
    </div>
  `,
  questions: [
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">#define DOUBLE(x) ((x) + (x))\nint a = 3;\nprintf(\"%d\", DOUBLE(a + 1));</pre>",
      options: ["6", "7", "8", "9"],
      answer: 2,
      explanation: "<code>DOUBLE(a + 1)</code> 展开为 <code>((a + 1) + (a + 1))</code> = <code>(3 + 1) + (3 + 1)</code> = <code>8</code>。因为宏参数加了括号，运算正确。"
    },
    {
      type: "choice",
      question: "以下哪个预处理指令用于防止头文件被重复包含？",
      options: [
        "#define 和 #undef",
        "#ifndef、#define 和 #endif",
        "#if 和 #else",
        "#include 和 #pragma"
      ],
      answer: 1,
      explanation: "头文件保护（include guard）使用 <code>#ifndef HEADER_H</code> / <code>#define HEADER_H</code> / <code>#endif</code> 的组合，确保头文件内容只被处理一次。"
    },
    {
      type: "truefalse",
      question: "带参数的宏在编译时进行类型检查，与函数一样安全。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "宏只是文本替换，在预处理阶段完成，<strong>不进行任何类型检查</strong>。类型错误只有在编译展开后的代码时才会被发现。函数则在调用时进行类型检查。"
    },
    {
      type: "choice",
      question: "<code>#include &lt;stdio.h&gt;</code> 和 <code>#include \"myfile.h\"</code> 的区别是：",
      options: [
        "没有区别，只是风格不同",
        "尖括号在系统目录搜索，双引号先在当前目录搜索",
        "尖括号用于C文件，双引号用于C++文件",
        "尖括号编译更快"
      ],
      answer: 1,
      explanation: "<code>&lt; &gt;</code> 让编译器在系统头文件目录中搜索。<code>\" \"</code> 让编译器先在当前源文件目录搜索，找不到再去系统目录。自定义头文件通常用双引号。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-c\">#include &lt;ctype.h&gt;\n#include &lt;stdio.h&gt;\nchar c = '5';\nprintf(\"%d %d\", isalpha(c) != 0, isdigit(c) != 0);</pre>",
      options: ["0 0", "1 0", "0 1", "1 1"],
      answer: 2,
      explanation: "<code>'5'</code> 是数字字符，不是字母。<code>isalpha('5')</code> 返回 0（假），<code>isdigit('5')</code> 返回非零值（真）。因此输出 <code>0 1</code>。"
    },
    {
      type: "choice",
      question: "<code>atoi(\"123abc\")</code> 的返回值是：",
      options: ["0", "123", "123abc", "编译错误"],
      answer: 1,
      explanation: "<code>atoi</code> 从字符串开头读取数字字符并转换为整数，遇到非数字字符停止。<code>\"123abc\"</code> 前三个字符是数字，返回 <code>123</code>。"
    },
    {
      type: "choice",
      question: "以下宏定义为什么可能产生错误？<pre class=\"language-c\">#define SQUARE(x) x * x</pre>",
      options: [
        "宏名不能全大写",
        "缺少分号",
        "SQUARE(2+3) 会展开为 2+3*2+3=11，而非 25",
        "宏不支持乘法运算"
      ],
      answer: 2,
      explanation: "没有括号的宏 <code>SQUARE(2+3)</code> 展开为 <code>2+3*2+3</code>，由于乘法优先级高于加法，结果为 <code>2+6+3=11</code> 而非预期的 25。应定义为 <code>((x)*(x))</code>。"
    },
    {
      type: "truefalse",
      question: "<code>rand()</code> 函数每次运行程序都产生相同的随机数序列，除非先调用 <code>srand()</code> 设置不同的种子。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "<code>rand()</code> 是伪随机数生成器，使用固定的默认种子（通常为 1）。每次程序运行产生相同序列。通过 <code>srand(time(0))</code> 设置基于时间的种子可以获得不同序列。"
    }
  ]
},
{
  id: 17,
  title: "高级数据表示",
  description: "学习链表、抽象数据类型、队列和二叉搜索树的基本概念",
  content: `
    <h2>高级数据表示</h2>

    <h3>一、链表</h3>
    <p>数组在编译时确定大小，且插入/删除元素需要移动大量数据。<strong>链表</strong>通过动态内存分配和指针实现灵活的数据组织。每个<strong>节点</strong>包含数据域和指向下一个节点的指针域。链表的最后一个节点指针为 <code>NULL</code>，表示链表结束。</p>
    <p>链表的优点是插入和删除操作高效（O(1) 如果已知位置），缺点是不支持随机访问（必须从头遍历）且每个节点有额外的指针开销。</p>

    <pre class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// 在链表头部插入新节点
Node *prepend(Node *head, int value)
{
    Node *new_node = (Node *)malloc(sizeof(Node));
    if (new_node == NULL)
        return head;
    new_node-&gt;data = value;
    new_node-&gt;next = head;
    return new_node;
}

// 遍历并打印链表
void print_list(const Node *head)
{
    const Node *curr = head;
    while (curr != NULL) {
        printf("%d -&gt; ", curr-&gt;data);
        curr = curr-&gt;next;
    }
    printf("NULL\\n");
}

// 释放整个链表
void free_list(Node *head)
{
    Node *temp;
    while (head != NULL) {
        temp = head;
        head = head-&gt;next;
        free(temp);
    }
}

int main(void)
{
    Node *list = NULL;
    list = prepend(list, 30);
    list = prepend(list, 20);
    list = prepend(list, 10);
    print_list(list);   // 输出: 10 -> 20 -> 30 -> NULL
    free_list(list);
    return 0;
}
</pre>

    <h3>二、抽象数据类型（ADT）</h3>
    <p><strong>ADT</strong> 是一种将数据和操作封装在一起的设计思想，用户只需知道"做什么"（接口），不需要知道"怎么做"（实现）。例如"栈"这个 ADT 定义了 push、pop、is_empty 等操作，但底层可以用数组或链表实现，对使用者透明。C语言通过头文件声明接口、源文件隐藏实现来模拟 ADT。</p>

    <h3>三、队列</h3>
    <p><strong>队列</strong>是一种<strong>先进先出（FIFO）</strong>的数据结构。元素从队尾入队（enqueue），从队头出队（dequeue）。队列常用链表或循环数组实现，应用广泛：操作系统的任务调度、消息缓冲、广度优先搜索等都使用队列。</p>

    <pre class="language-c">
// 简化的链表队列结构
typedef struct QNode {
    int data;
    struct QNode *next;
} QNode;

typedef struct {
    QNode *front;   // 队头
    QNode *rear;    // 队尾
    int    count;
} Queue;

void enqueue(Queue *q, int value)
{
    QNode *new_node = (QNode *)malloc(sizeof(QNode));
    if (new_node == NULL) return;
    new_node-&gt;data = value;
    new_node-&gt;next = NULL;
    if (q-&gt;rear != NULL)
        q-&gt;rear-&gt;next = new_node;
    else
        q-&gt;front = new_node;
    q-&gt;rear = new_node;
    q-&gt;count++;
}
</pre>

    <h3>四、二叉搜索树</h3>
    <p><strong>二叉搜索树（BST）</strong>是一种特殊的二叉树：每个节点最多有两个子节点；左子树所有节点的值小于根节点，右子树所有节点的值大于根节点。BST 的查找、插入、删除平均时间复杂度为 O(log n)，但最坏情况（退化为链表）为 O(n)。中序遍历 BST 可以得到有序序列。</p>

    <div class="key-point">
      <strong>数据结构选择：</strong>数组适合频繁随机访问的场景；链表适合频繁插入/删除的场景；队列适合先进先出的任务处理；二叉搜索树适合需要快速查找、插入和有序遍历的场景。选择合适的数据结构是程序设计的关键。
    </div>

    <div class="key-point">
      <strong>内存管理：</strong>使用链表等动态数据结构时，每个节点都通过 <code>malloc</code> 分配内存。当节点被删除或链表被销毁时，必须逐一 <code>free</code> 所有节点，否则会造成内存泄漏。
    </div>
  `,
  questions: [
    {
      type: "choice",
      question: "链表相比数组的主要优势是：",
      options: [
        "支持通过下标随机访问元素",
        "内存占用更少",
        "插入和删除元素无需移动其他元素",
        "遍历速度更快"
      ],
      answer: 2,
      explanation: "链表在已知位置插入/删除时只需修改指针，时间复杂度为 O(1)，而数组需要移动后续所有元素。但链表不支持随机访问，且每个节点有额外的指针开销。"
    },
    {
      type: "truefalse",
      question: "链表的最后一个节点的 <code>next</code> 指针应设为 <code>NULL</code>。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "链表末尾节点的 <code>next</code> 指针设为 <code>NULL</code> 是标准做法，用于标识链表的结束。遍历时以 <code>next == NULL</code> 作为终止条件。"
    },
    {
      type: "choice",
      question: "队列遵循的原则是：",
      options: [
        "后进先出（LIFO）",
        "先进先出（FIFO）",
        "随机访问",
        "优先级最高先出"
      ],
      answer: 1,
      explanation: "队列是<strong>先进先出（FIFO）</strong>结构：最先入队的元素最先出队，就像排队一样。后进先出（LIFO）是栈的特点。"
    },
    {
      type: "choice",
      question: "二叉搜索树的中序遍历结果有什么特点？",
      options: [
        "结果是随机顺序",
        "结果是从大到小的降序",
        "结果是从小到大的升序",
        "结果与插入顺序相同"
      ],
      answer: 2,
      explanation: "BST 的性质保证左子树 &lt; 根 &lt; 右子树。中序遍历（左→根→右）按照这个顺序访问所有节点，得到的序列自然是<strong>升序排列</strong>的。"
    },
    {
      type: "output",
      question: "以下代码创建链表后，<code>print_list</code> 的输出是什么？<pre class=\"language-c\">Node *list = NULL;\nlist = prepend(list, 3);\nlist = prepend(list, 2);\nlist = prepend(list, 1);\nprint_list(list);</pre>（<code>prepend</code> 在链表头部插入节点）",
      options: [
        "3 -> 2 -> 1 -> NULL",
        "1 -> 2 -> 3 -> NULL",
        "1 -> 3 -> 2 -> NULL",
        "NULL -> 1 -> 2 -> 3"
      ],
      answer: 1,
      explanation: "<code>prepend</code> 在头部插入。依次插入 3、2、1 后，最后插入的 1 在最前面：<code>1 -&gt; 2 -&gt; 3 -&gt; NULL</code>。"
    },
    {
      type: "choice",
      question: "关于抽象数据类型（ADT），以下说法正确的是：",
      options: [
        "ADT 必须用链表实现",
        "ADT 强调接口与实现的分离，用户无需了解内部实现",
        "ADT 只能在面向对象语言中实现",
        "ADT 不能用C语言实现"
      ],
      answer: 1,
      explanation: "ADT 的核心思想是<strong>接口与实现分离</strong>：定义\u201C做什么\u201D但隐藏\u201C怎么做\u201D。C语言可以通过头文件声明接口、源文件实现细节来模拟 ADT。"
    },
    {
      type: "truefalse",
      question: "释放链表时，只需 <code>free</code> 头节点即可，系统会自动释放其余节点。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "每个节点都是独立 <code>malloc</code> 分配的内存，必须逐一 <code>free</code>。只释放头节点会导致其余节点的内存泄漏。应从头到尾遍历并释放每个节点。"
    },
    {
      type: "choice",
      question: "二叉搜索树在最坏情况下（如按顺序插入1,2,3,4,5）的查找时间复杂度是：",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      answer: 2,
      explanation: "按顺序插入会使 BST 退化为一条链（每个节点只有右子节点），此时查找需要遍历所有节点，时间复杂度退化为 <strong>O(n)</strong>。平衡二叉树可以避免这种情况。"
    }
  ]
}
];
