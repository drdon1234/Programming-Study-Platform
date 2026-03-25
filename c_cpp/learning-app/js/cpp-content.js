window.CPP_CHAPTERS = [
  {
    id: 1,
    title: "预备知识",
    description: "了解C++的历史、特点以及与C语言的关系",
    content: `
<h2>第1章 预备知识</h2>

<h3>1.1 C++的起源与发展</h3>
<p>C++由丹麦计算机科学家<strong>Bjarne Stroustrup</strong>（比雅尼·斯特劳斯特鲁普）于20世纪80年代初在贝尔实验室开发。最初，这门语言被称为<strong>"C with Classes"</strong>（带类的C），因为它是在C语言的基础上添加了面向对象编程的特性。1983年，这门语言正式更名为<strong>C++</strong>，其中"++"是C语言中的自增运算符，寓意这是C语言的增强版本。</p>

<p>C++的设计哲学是：在保留C语言高效、灵活、接近硬件等优点的同时，引入更高级的抽象机制，让程序员能够更好地管理大型复杂项目。</p>

<h3>1.2 C++与C语言的关系</h3>
<p>C++是C语言的<strong>超集</strong>，这意味着绝大多数合法的C程序也是合法的C++程序。但C++在C的基础上增加了许多重要特性：</p>
<ul>
  <li><strong>面向对象编程（OOP）</strong>：类、继承、多态、封装</li>
  <li><strong>泛型编程</strong>：模板（template）机制</li>
  <li><strong>异常处理</strong>：try/catch/throw机制</li>
  <li><strong>标准模板库（STL）</strong>：容器、算法、迭代器</li>
  <li><strong>引用</strong>、<strong>命名空间</strong>、<strong>函数重载</strong>等</li>
</ul>

<h3>1.3 面向对象编程概述</h3>
<p>面向对象编程（Object-Oriented Programming，OOP）是C++最重要的特性之一。OOP的核心概念包括：</p>
<ul>
  <li><strong>封装（Encapsulation）</strong>：将数据和操作数据的函数绑定在一起，隐藏内部实现细节</li>
  <li><strong>继承（Inheritance）</strong>：允许新类基于已有类来创建，实现代码复用</li>
  <li><strong>多态（Polymorphism）</strong>：同一接口可以有不同的实现方式</li>
  <li><strong>抽象（Abstraction）</strong>：只暴露必要的接口，隐藏复杂性</li>
</ul>

<pre class="language-cpp"><code>// OOP示例：简单的类定义
class Animal {
private:
    string name;
public:
    Animal(string n) : name(n) {}
    virtual void speak() {
        cout &lt;&lt; name &lt;&lt; " makes a sound" &lt;&lt; endl;
    }
};</code></pre>

<h3>1.4 C++标准的演进</h3>
<p>C++经历了多次标准化过程，每个版本都引入了重要的新特性：</p>
<ul>
  <li><strong>C++98</strong>：第一个ISO标准，奠定了语言基础，引入STL</li>
  <li><strong>C++03</strong>：小幅修订，主要是缺陷修复</li>
  <li><strong>C++11</strong>：重大更新，被称为"现代C++的开端"，引入auto、lambda、移动语义、智能指针等</li>
  <li><strong>C++14</strong>：对C++11的完善和补充</li>
  <li><strong>C++17</strong>：引入结构化绑定、if constexpr、std::optional等</li>
</ul>

<div class="key-point">
  <p><strong>核心要点：</strong>C++是在C语言基础上发展而来的多范式编程语言。它支持过程式编程、面向对象编程和泛型编程。学习C++时，需要同时掌握底层内存管理和高级抽象机制。</p>
</div>

<h3>1.5 开发环境搭建</h3>
<p>要开始学习C++，需要准备以下开发工具：</p>
<ul>
  <li><strong>编译器</strong>：GCC（g++）、Clang、MSVC（Visual Studio自带）</li>
  <li><strong>集成开发环境（IDE）</strong>：Visual Studio、CLion、Code::Blocks、VS Code</li>
  <li><strong>文本编辑器</strong>：Vim、Emacs、Sublime Text</li>
</ul>

<pre class="language-cpp"><code>// 第一个C++程序
#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hello, C++!" &lt;&lt; std::endl;
    return 0;
}</code></pre>

<p>编译运行的基本命令：</p>
<pre class="language-cpp"><code>// 使用g++编译
// g++ hello.cpp -o hello
// ./hello</code></pre>

<div class="key-point">
  <p><strong>记住：</strong>C++源代码文件通常使用<code>.cpp</code>、<code>.cc</code>或<code>.cxx</code>作为扩展名。头文件使用<code>.h</code>或<code>.hpp</code>扩展名。编译器将源代码转换为可执行的机器码。</p>
</div>
`,
    questions: [
      {
        type: "choice",
        question: "C++语言最初的名称是什么？",
        options: ["C Advanced", "C with Classes", "C Plus", "Object C"],
        answer: 1,
        explanation: "C++最初被称为<strong>C with Classes</strong>（带类的C），由Bjarne Stroustrup在贝尔实验室开发。1983年正式更名为C++。"
      },
      {
        type: "choice",
        question: "C++之父是谁？",
        options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
        answer: 2,
        explanation: "<strong>Bjarne Stroustrup</strong>（比雅尼·斯特劳斯特鲁普）是C++的创造者，他在贝尔实验室开发了这门语言。Dennis Ritchie是C语言之父。"
      },
      {
        type: "truefalse",
        question: "C++是C语言的超集，所有合法的C程序都是合法的C++程序。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "虽然C++在很大程度上兼容C语言，但并非所有C程序都能在C++中编译通过。例如，C中允许隐式从<code>void*</code>转换为其他指针类型，但C++不允许。因此说\u201C所有\u201D是不准确的。"
      },
      {
        type: "choice",
        question: "以下哪个不是面向对象编程（OOP）的核心概念？",
        options: ["封装", "编译", "继承", "多态"],
        answer: 1,
        explanation: "OOP的四个核心概念是<strong>封装、继承、多态和抽象</strong>。编译是将源代码转换为机器码的过程，不属于OOP概念。"
      },
      {
        type: "choice",
        question: "哪个C++标准被称为\u201C现代C++的开端\u201D？",
        options: ["C++98", "C++03", "C++11", "C++17"],
        answer: 2,
        explanation: "<strong>C++11</strong>引入了大量新特性，如auto关键字、lambda表达式、移动语义、智能指针等，被广泛认为是现代C++的开端。"
      },
      {
        type: "truefalse",
        question: "C++只支持面向对象编程范式。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "C++是一门<strong>多范式编程语言</strong>，支持过程式编程、面向对象编程和泛型编程等多种编程范式，并非只支持OOP。"
      },
      {
        type: "choice",
        question: "以下哪个是C++源代码文件的常见扩展名？",
        options: [".java", ".py", ".cpp", ".cs"],
        answer: 2,
        explanation: "C++源代码文件通常使用<code>.cpp</code>、<code>.cc</code>或<code>.cxx</code>作为扩展名。<code>.java</code>是Java文件，<code>.py</code>是Python文件，<code>.cs</code>是C#文件。"
      },
      {
        type: "choice",
        question: "C++中的STL代表什么？",
        options: ["Simple Type Library", "Standard Template Library", "System Tool Library", "Static Type Language"],
        answer: 1,
        explanation: "STL即<strong>Standard Template Library</strong>（标准模板库），它提供了容器（如vector、map）、算法（如sort、find）和迭代器等通用工具。"
      }
    ]
  },
  {
    id: 2,
    title: "开始学习C++",
    description: "掌握C++程序的基本结构和输入输出",
    content: `
<h2>第2章 开始学习C++</h2>

<h3>2.1 main()函数</h3>
<p>每个C++程序都必须有且仅有一个<strong>main()函数</strong>，它是程序执行的入口点。操作系统运行程序时，会首先调用main()函数。main()函数的标准形式如下：</p>

<pre class="language-cpp"><code>int main() {
    // 程序代码
    return 0;  // 返回0表示程序正常结束
}</code></pre>

<p><code>int</code>表示main()函数的返回类型为整数。<code>return 0;</code>表示程序正常退出，返回给操作系统的值为0。非零返回值通常表示程序遇到了错误。</p>

<h3>2.2 #include预处理指令</h3>
<p><code>#include</code>是C++的预处理指令，用于在编译之前将指定头文件的内容插入到当前文件中。C++标准库的头文件使用尖括号，自定义头文件使用双引号：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;    // 标准库头文件，用于输入输出
#include &lt;string&gt;      // 标准库头文件，用于字符串
#include "myheader.h"  // 自定义头文件</code></pre>

<p><code>&lt;iostream&gt;</code>是最常用的头文件之一，它提供了<code>cout</code>（控制台输出）和<code>cin</code>（控制台输入）等功能。注意C++标准库头文件没有<code>.h</code>后缀。</p>

<h3>2.3 using namespace std</h3>
<p>C++标准库中的所有组件都定义在<strong>std命名空间</strong>中。访问它们有三种方式：</p>
<ul>
  <li>使用完整限定名：<code>std::cout</code></li>
  <li>使用using声明：<code>using std::cout;</code></li>
  <li>使用using编译指令：<code>using namespace std;</code>（不推荐在头文件中使用）</li>
</ul>

<h3>2.4 cout与cin</h3>
<p><code>cout</code>是C++的标准输出对象，配合插入运算符<code>&lt;&lt;</code>使用。<code>cin</code>是标准输入对象，配合提取运算符<code>&gt;&gt;</code>使用：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    cout &lt;&lt; "请输入你的年龄：";
    cin &gt;&gt; age;
    cout &lt;&lt; "你的年龄是 " &lt;&lt; age &lt;&lt; " 岁" &lt;&lt; endl;
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong><code>cout &lt;&lt;</code>用于输出，可以连续使用<code>&lt;&lt;</code>来输出多个值。<code>cin &gt;&gt;</code>用于输入，会自动跳过空白字符。</p>
</div>

<h3>2.5 endl与\\n</h3>
<p><code>endl</code>和<code>\\n</code>都可以实现换行，但它们有区别：</p>
<ul>
  <li><code>endl</code>：插入换行符并<strong>刷新输出缓冲区</strong></li>
  <li><code>\\n</code>：仅插入换行符，不刷新缓冲区，<strong>效率更高</strong></li>
</ul>
<p>在大多数情况下，使用<code>\\n</code>即可。当需要确保输出立即显示时（如调试输出），可以使用<code>endl</code>。</p>

<h3>2.6 变量声明</h3>
<p>C++要求变量在使用之前必须先声明。声明时需要指定变量的类型和名称：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int count = 10;        // 声明并初始化整型变量
    double price = 9.99;   // 声明并初始化双精度浮点变量
    char grade = 'A';      // 声明并初始化字符变量

    cout &lt;&lt; "数量：" &lt;&lt; count &lt;&lt; "\\n";
    cout &lt;&lt; "价格：" &lt;&lt; price &lt;&lt; "\\n";
    cout &lt;&lt; "等级：" &lt;&lt; grade &lt;&lt; "\\n";
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>记住：</strong>C++允许在代码中的任何位置声明变量（C语言要求在块的开头声明）。良好的编程习惯是在首次使用变量的地方附近声明它，并在声明时初始化。</p>
</div>
`,
    questions: [
      {
        type: "choice",
        question: "C++程序的执行入口是哪个函数？",
        options: ["start()", "begin()", "main()", "init()"],
        answer: 2,
        explanation: "每个C++程序都从<code>main()</code>函数开始执行。它是程序的入口点，且每个程序必须有且仅有一个main()函数。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>#include &lt;iostream&gt;\nusing namespace std;\nint main() {\n    cout &lt;&lt; \"Hello\" &lt;&lt; \" \" &lt;&lt; \"World\";\n    return 0;\n}</code></pre>",
        options: ["Hello World", "Hello  World", "HelloWorld", "编译错误"],
        answer: 0,
        explanation: "<code>cout</code>可以连续使用<code>&lt;&lt;</code>运算符输出多个值。三次输出分别是\"Hello\"、\" \"和\"World\"，拼接后结果为<strong>Hello World</strong>。"
      },
      {
        type: "truefalse",
        question: "<code>endl</code>和<code>\\n</code>的功能完全相同。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "<code>endl</code>不仅插入换行符，还会<strong>刷新输出缓冲区</strong>；而<code>\\n</code>只插入换行符，不会刷新缓冲区。因此<code>\\n</code>的效率通常更高。"
      },
      {
        type: "choice",
        question: "以下哪种方式用于包含C++标准库头文件？",
        options: ["#include \"iostream\"", "#include &lt;iostream&gt;", "#import &lt;iostream&gt;", "include &lt;iostream&gt;"],
        answer: 1,
        explanation: "C++标准库头文件使用尖括号包含：<code>#include &lt;iostream&gt;</code>。双引号形式通常用于自定义头文件。<code>#import</code>不是标准C++指令。"
      },
      {
        type: "choice",
        question: "<code>cin &gt;&gt; x;</code>中的<code>&gt;&gt;</code>运算符称为什么？",
        options: ["插入运算符", "提取运算符", "右移运算符", "比较运算符"],
        answer: 1,
        explanation: "与<code>cin</code>搭配使用时，<code>&gt;&gt;</code>被称为<strong>提取运算符</strong>，从输入流中提取数据。而<code>&lt;&lt;</code>与<code>cout</code>搭配使用时称为插入运算符。"
      },
      {
        type: "truefalse",
        question: "<code>using namespace std;</code>是使用cout和cin之前必须写的唯一方式。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "除了<code>using namespace std;</code>外，还可以使用完整限定名<code>std::cout</code>或using声明<code>using std::cout;</code>来访问标准库组件。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>#include &lt;iostream&gt;\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 3;\n    cout &lt;&lt; a + b &lt;&lt; endl;\n    return 0;\n}</code></pre>",
        options: ["53", "8", "a+b", "编译错误"],
        answer: 1,
        explanation: "<code>a + b</code>会先计算表达式的值（5 + 3 = 8），然后<code>cout</code>输出结果<strong>8</strong>。<code>&lt;&lt;</code>运算符的优先级低于加法运算符。"
      },
      {
        type: "choice",
        question: "main()函数返回0表示什么？",
        options: ["程序出错", "程序正常结束", "程序需要重启", "没有特殊含义"],
        answer: 1,
        explanation: "<code>return 0;</code>表示程序<strong>正常结束</strong>。操作系统会接收这个返回值，非零返回值通常表示程序遇到了某种错误。"
      }
    ]
  },
  {
    id: 3,
    title: "处理数据",
    description: "学习C++的基本数据类型和类型转换",
    content: `
<h2>第3章 处理数据</h2>

<h3>3.1 整型数据类型</h3>
<p>C++提供了多种整型数据类型，它们的区别在于可以存储的值的范围不同。不同类型的最小位数由标准规定：</p>
<ul>
  <li><code>short</code>：至少16位（2字节）</li>
  <li><code>int</code>：至少16位，通常32位（4字节）</li>
  <li><code>long</code>：至少32位（4字节）</li>
  <li><code>long long</code>：至少64位（8字节，C++11引入）</li>
</ul>
<p>每种整型都有对应的<strong>unsigned</strong>（无符号）版本，只能存储非负数，但正数范围翻倍。例如<code>unsigned int</code>的范围是0到约42亿。</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
#include &lt;climits&gt;    // 包含整型限制的常量
using namespace std;

int main() {
    cout &lt;&lt; "int 大小：" &lt;&lt; sizeof(int) &lt;&lt; " 字节" &lt;&lt; endl;
    cout &lt;&lt; "int 最大值：" &lt;&lt; INT_MAX &lt;&lt; endl;
    cout &lt;&lt; "long long 大小：" &lt;&lt; sizeof(long long) &lt;&lt; " 字节" &lt;&lt; endl;

    short s = 32767;
    unsigned int u = 4000000000U;
    long long big = 9000000000LL;
    return 0;
}</code></pre>

<h3>3.2 浮点类型</h3>
<p>C++有三种浮点类型：</p>
<ul>
  <li><code>float</code>：单精度，通常4字节，有效数字约6-7位</li>
  <li><code>double</code>：双精度，通常8字节，有效数字约15-16位</li>
  <li><code>long double</code>：扩展精度，通常10-16字节</li>
</ul>
<p>默认情况下，浮点常量（如3.14）的类型是<code>double</code>。要指定为float类型需要加后缀<code>f</code>（如3.14f）。</p>

<h3>3.3 char与bool类型</h3>
<p><code>char</code>类型用于存储字符，占1字节。C++还提供了<code>wchar_t</code>用于宽字符。<code>bool</code>类型只有两个值：<code>true</code>（1）和<code>false</code>（0）。</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    char ch = 'A';
    cout &lt;&lt; "字符：" &lt;&lt; ch &lt;&lt; endl;
    cout &lt;&lt; "ASCII码：" &lt;&lt; int(ch) &lt;&lt; endl;  // 输出65

    bool isReady = true;
    cout &lt;&lt; "布尔值：" &lt;&lt; isReady &lt;&lt; endl;    // 输出1
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong><code>char</code>本质上是一种整数类型，存储的是字符的ASCII码值。<code>'A'</code>的ASCII码是65。<code>bool</code>类型中，任何非零值都被视为<code>true</code>，零为<code>false</code>。</p>
</div>

<h3>3.4 const限定符与auto关键字</h3>
<p><code>const</code>限定符用于声明常量，一旦初始化就不能修改其值。推荐使用<code>const</code>代替<code>#define</code>来定义常量：</p>
<pre class="language-cpp"><code>const double PI = 3.14159265;
const int MAX_SIZE = 100;</code></pre>

<p>C++11引入的<code>auto</code>关键字让编译器根据初始值自动推断变量类型：</p>
<pre class="language-cpp"><code>auto x = 42;       // x 为 int
auto y = 3.14;     // y 为 double
auto z = 'A';      // z 为 char</code></pre>

<h3>3.5 类型转换</h3>
<p>C++支持多种类型转换方式。隐式转换由编译器自动完成，而显式转换需要程序员明确指定：</p>
<ul>
  <li><strong>隐式转换</strong>：将较小的类型赋值给较大的类型（如int到double）</li>
  <li><strong>static_cast</strong>：C++推荐的显式类型转换方式</li>
</ul>
<pre class="language-cpp"><code>int a = 10, b = 3;
double result = static_cast&lt;double&gt;(a) / b;  // 结果为3.333...
cout &lt;&lt; "sizeof(a) = " &lt;&lt; sizeof(a) &lt;&lt; endl; // 输出4</code></pre>

<div class="key-point">
  <p><strong>记住：</strong><code>sizeof</code>运算符返回类型或变量所占的字节数。<code>static_cast&lt;目标类型&gt;(表达式)</code>是C++推荐的类型转换方式，比C风格的强制转换更安全、更清晰。</p>
</div>
`,
    questions: [
      {
        type: "choice",
        question: "<code>sizeof(int)</code>在大多数现代系统上返回多少？",
        options: ["1", "2", "4", "8"],
        answer: 2,
        explanation: "在大多数现代32位和64位系统上，<code>int</code>通常占<strong>4字节（32位）</strong>。但C++标准只规定int至少为16位。"
      },
      {
        type: "truefalse",
        question: "<code>unsigned int</code>可以存储负数。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "<code>unsigned</code>（无符号）类型<strong>只能存储非负数</strong>（0和正数），不能存储负数。作为交换，它的正数范围比对应的有符号类型大一倍。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>#include &lt;iostream&gt;\nusing namespace std;\nint main() {\n    char ch = 'B';\n    cout &lt;&lt; int(ch);\n    return 0;\n}</code></pre>",
        options: ["B", "65", "66", "67"],
        answer: 2,
        explanation: "字符<code>'B'</code>的ASCII码值是66（<code>'A'</code>是65，<code>'B'</code>是65+1=66）。<code>int(ch)</code>将char转换为int，输出ASCII码值<strong>66</strong>。"
      },
      {
        type: "choice",
        question: "以下哪个类型的有效数字位数最多？",
        options: ["float", "double", "int", "short"],
        answer: 1,
        explanation: "<code>double</code>（双精度浮点）通常有<strong>15-16位有效数字</strong>，而<code>float</code>只有6-7位。<code>int</code>和<code>short</code>是整型，不涉及有效数字的概念。"
      },
      {
        type: "truefalse",
        question: "<code>auto</code>关键字是C++11引入的新特性。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "<code>auto</code>关键字在C++11中被重新定义，用于让编译器<strong>自动推断变量类型</strong>。在C++11之前，auto有不同的含义（自动存储类）。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>#include &lt;iostream&gt;\nusing namespace std;\nint main() {\n    int a = 7, b = 2;\n    cout &lt;&lt; a / b;\n    return 0;\n}</code></pre>",
        options: ["3.5", "3", "4", "3.0"],
        answer: 1,
        explanation: "两个<code>int</code>类型相除执行<strong>整数除法</strong>，结果会截断小数部分。7 / 2 = 3（不是3.5）。要得到3.5，需要将其中一个操作数转换为浮点类型。"
      },
      {
        type: "choice",
        question: "<code>const double PI = 3.14;</code>之后执行<code>PI = 3.14159;</code>会怎样？",
        options: ["PI变为3.14159", "PI保持3.14", "编译错误", "运行时错误"],
        answer: 2,
        explanation: "<code>const</code>声明的常量<strong>不能被修改</strong>。试图修改const变量的值会导致编译错误。"
      },
      {
        type: "choice",
        question: "C++推荐使用哪种方式进行显式类型转换？",
        options: ["(int)x", "int(x)", "static_cast&lt;int&gt;(x)", "convert&lt;int&gt;(x)"],
        answer: 2,
        explanation: "<code>static_cast&lt;目标类型&gt;(表达式)</code>是C++推荐的类型转换方式。<code>(int)x</code>是C风格强制转换，<code>int(x)</code>是函数式强制转换，两者都不如static_cast安全。"
      },
      {
        type: "choice",
        question: "<code>long long</code>类型至少占多少位？",
        options: ["16位", "32位", "64位", "128位"],
        answer: 2,
        explanation: "C++11标准规定<code>long long</code>类型至少为<strong>64位（8字节）</strong>。它是C++11引入的标准整型类型。"
      },
      {
        type: "truefalse",
        question: "浮点常量<code>3.14</code>的默认类型是<code>float</code>。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "浮点常量默认类型是<code>double</code>，不是<code>float</code>。要指定为float类型，需要加后缀<code>f</code>，如<code>3.14f</code>。"
      }
    ]
  },
  {
    id: 4,
    title: "复合类型",
    description: "学习数组、字符串、结构体、指针等复合数据类型",
    content: `
<h2>第4章 复合类型</h2>

<h3>4.1 数组</h3>
<p><strong>数组</strong>是存储相同类型元素的连续内存块。声明数组时需要指定类型、名称和大小。数组的索引从0开始：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int scores[5] = {90, 85, 78, 92, 88};  // 声明并初始化
    int nums[3] = {1};       // 第一个元素为1，其余为0
    int zeros[4] = {};       // 所有元素初始化为0（C++11）

    cout &lt;&lt; "第一个成绩：" &lt;&lt; scores[0] &lt;&lt; endl;   // 90
    cout &lt;&lt; "最后一个成绩：" &lt;&lt; scores[4] &lt;&lt; endl; // 88
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>注意：</strong>C++不会检查数组越界访问。访问<code>scores[5]</code>不会报错，但会产生未定义行为。数组大小在编译时确定，不能动态改变。</p>
</div>

<h3>4.2 C风格字符串与string类</h3>
<p>C风格字符串是以空字符<code>'\\0'</code>结尾的字符数组。C++还提供了更安全、更方便的<code>string</code>类：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    // C风格字符串
    char greeting[] = "Hello";    // 自动添加'\\0'，实际占6字节
    char name[20];
    cout &lt;&lt; "输入名字：";
    cin &gt;&gt; name;

    // string类（推荐）
    string str1 = "你好";
    string str2 = "世界";
    string str3 = str1 + str2;    // 字符串拼接
    cout &lt;&lt; str3 &lt;&lt; endl;         // 输出：你好世界
    cout &lt;&lt; "长度：" &lt;&lt; str3.size() &lt;&lt; endl;
    return 0;
}</code></pre>

<h3>4.3 结构体（struct）</h3>
<p><strong>结构体</strong>可以将不同类型的数据组合在一起，形成一个自定义的复合类型：</p>

<pre class="language-cpp"><code>struct Student {
    string name;
    int age;
    double gpa;
};

int main() {
    Student s1 = {"张三", 20, 3.8};
    Student s2;
    s2.name = "李四";
    s2.age = 21;
    s2.gpa = 3.5;

    cout &lt;&lt; s1.name &lt;&lt; "的GPA：" &lt;&lt; s1.gpa &lt;&lt; endl;
    return 0;
}</code></pre>

<h3>4.4 联合体与枚举</h3>
<p><strong>联合体（union）</strong>的所有成员共享同一块内存空间，同一时刻只能使用其中一个成员。<strong>枚举（enum）</strong>用于定义一组命名的整型常量：</p>
<pre class="language-cpp"><code>enum Color { RED, GREEN, BLUE };  // RED=0, GREEN=1, BLUE=2
Color c = GREEN;

union Data {
    int i;
    double d;
    char c;
};  // Data的大小等于最大成员（double）的大小</code></pre>

<h3>4.5 指针与动态内存</h3>
<p><strong>指针</strong>是存储内存地址的变量。<code>&amp;</code>运算符获取变量的地址，<code>*</code>运算符解引用指针来访问指向的值：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int val = 42;
    int* ptr = &amp;val;     // ptr存储val的地址

    cout &lt;&lt; "值：" &lt;&lt; val &lt;&lt; endl;        // 42
    cout &lt;&lt; "地址：" &lt;&lt; ptr &lt;&lt; endl;       // 0x...（某个地址）
    cout &lt;&lt; "解引用：" &lt;&lt; *ptr &lt;&lt; endl;    // 42

    // 动态内存分配
    int* p = new int(100);     // 在堆上分配单个int
    int* arr = new int[5];     // 在堆上分配int数组
    arr[0] = 10;
    arr[1] = 20;

    delete p;        // 释放单个对象
    delete[] arr;    // 释放数组（注意[]）
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong>使用<code>new</code>分配的内存必须使用<code>delete</code>释放，否则会导致<strong>内存泄漏</strong>。释放数组要用<code>delete[]</code>。指针算术中，指针加1会移动到下一个元素（移动的字节数等于元素的大小）。</p>
</div>
`,
    questions: [
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int arr[4] = {10, 20, 30, 40};\ncout &lt;&lt; arr[2];</code></pre>",
        options: ["10", "20", "30", "40"],
        answer: 2,
        explanation: "数组索引从0开始。<code>arr[0]=10</code>、<code>arr[1]=20</code>、<code>arr[2]=30</code>、<code>arr[3]=40</code>。因此<code>arr[2]</code>输出<strong>30</strong>。"
      },
      {
        type: "truefalse",
        question: "C风格字符串<code>\"Hello\"</code>在内存中占5个字节。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "C风格字符串以空字符<code>'\\0'</code>结尾，所以<code>\"Hello\"</code>实际占<strong>6个字节</strong>（5个字符 + 1个空字符）。"
      },
      {
        type: "choice",
        question: "以下哪种方式可以正确拼接两个<code>string</code>对象？",
        options: ["strcat(s1, s2)", "s1 + s2", "s1.append(s2)只能用于C风格字符串", "string类不支持拼接"],
        answer: 1,
        explanation: "C++的<code>string</code>类重载了<code>+</code>运算符，可以直接使用<code>s1 + s2</code>来拼接字符串。<code>strcat</code>是C风格字符串函数。"
      },
      {
        type: "choice",
        question: "结构体中通过什么运算符访问成员？",
        options: ["->", "::", ".", "[]"],
        answer: 2,
        explanation: "通过结构体变量访问成员使用<strong>点运算符（.）</strong>，如<code>s1.name</code>。<code>-></code>用于通过指针访问成员，<code>::</code>是作用域解析运算符。"
      },
      {
        type: "truefalse",
        question: "<code>enum Color { RED, GREEN, BLUE };</code>中，GREEN的值为1。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "枚举默认从0开始编号。<code>RED=0</code>、<code>GREEN=1</code>、<code>BLUE=2</code>。因此GREEN的值确实为<strong>1</strong>。"
      },
      {
        type: "choice",
        question: "以下哪个语句可以正确释放动态分配的数组？",
        options: ["delete arr;", "delete[] arr;", "free(arr);", "remove arr;"],
        answer: 1,
        explanation: "使用<code>new[]</code>分配的动态数组必须用<code>delete[]</code>释放。使用<code>delete</code>（不带[]）释放数组会导致未定义行为。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int x = 10;\nint* p = &amp;x;\n*p = 20;\ncout &lt;&lt; x;</code></pre>",
        options: ["10", "20", "地址值", "编译错误"],
        answer: 1,
        explanation: "<code>p</code>指向<code>x</code>的地址。<code>*p = 20</code>通过解引用修改了<code>x</code>的值为20。因此输出<strong>20</strong>。"
      },
      {
        type: "choice",
        question: "联合体（union）的特点是什么？",
        options: ["每个成员独立存储", "所有成员共享同一内存空间", "只能包含整型成员", "大小为所有成员之和"],
        answer: 1,
        explanation: "联合体的所有成员<strong>共享同一块内存空间</strong>，同一时刻只能使用其中一个成员。联合体的大小等于其最大成员的大小。"
      },
      {
        type: "choice",
        question: "<code>int arr[3] = {1};</code>执行后，<code>arr[2]</code>的值是什么？",
        options: ["1", "0", "未定义", "随机值"],
        answer: 1,
        explanation: "当初始化列表中的值少于数组大小时，未明确初始化的元素会被<strong>自动初始化为0</strong>。因此<code>arr[0]=1</code>，<code>arr[1]=0</code>，<code>arr[2]=0</code>。"
      },
      {
        type: "truefalse",
        question: "使用<code>new</code>分配的内存如果不用<code>delete</code>释放，程序结束后操作系统会回收。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "现代操作系统确实会在程序结束后回收其占用的所有内存。但在长时间运行的程序中不释放内存仍然是不好的做法，因为会导致<strong>内存泄漏</strong>，逐渐耗尽系统资源。"
      }
    ]
  },
  {
    id: 5,
    title: "循环和关系表达式",
    description: "掌握C++中的循环结构和关系运算符",
    content: `
<h2>第5章 循环和关系表达式</h2>

<h3>5.1 for循环</h3>
<p><code>for</code>循环是C++中最灵活的循环结构，适用于已知循环次数的场景。它由三个部分组成：初始化、条件判断和更新表达式：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    // 基本for循环
    for (int i = 0; i &lt; 5; i++) {
        cout &lt;&lt; "第" &lt;&lt; i + 1 &lt;&lt; "次迭代" &lt;&lt; endl;
    }

    // 累加求和
    int sum = 0;
    for (int i = 1; i &lt;= 100; i++) {
        sum += i;
    }
    cout &lt;&lt; "1到100的和：" &lt;&lt; sum &lt;&lt; endl;  // 5050
    return 0;
}</code></pre>

<h3>5.2 while循环与do-while循环</h3>
<p><code>while</code>循环在每次迭代前检查条件，条件为真时执行循环体。<code>do-while</code>循环先执行一次循环体，然后再检查条件：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    // while循环
    int count = 5;
    while (count &gt; 0) {
        cout &lt;&lt; count &lt;&lt; " ";
        count--;
    }
    cout &lt;&lt; endl;  // 输出：5 4 3 2 1

    // do-while循环：至少执行一次
    int num;
    do {
        cout &lt;&lt; "输入正数（0退出）：";
        cin &gt;&gt; num;
    } while (num != 0);

    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>核心区别：</strong><code>while</code>循环可能一次都不执行（如果初始条件为假）。<code>do-while</code>循环<strong>至少执行一次</strong>，因为条件判断在循环体之后。当需要先获取输入再验证时，do-while特别有用。</p>
</div>

<h3>5.3 基于范围的for循环（C++11）</h3>
<p>C++11引入了<strong>基于范围的for循环</strong>，简化了遍历容器和数组的代码：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};

    // 基于范围的for循环遍历数组
    for (int x : arr) {
        cout &lt;&lt; x &lt;&lt; " ";
    }
    cout &lt;&lt; endl;  // 输出：10 20 30 40 50

    // 使用引用修改元素
    for (int&amp; x : arr) {
        x *= 2;
    }
    // 此时arr变为 {20, 40, 60, 80, 100}
    return 0;
}</code></pre>

<h3>5.4 关系运算符与递增递减运算符</h3>
<p>关系运算符用于比较两个值，结果为<code>true</code>或<code>false</code>：</p>
<ul>
  <li><code>&lt;</code> 小于、<code>&gt;</code> 大于、<code>&lt;=</code> 小于等于、<code>&gt;=</code> 大于等于</li>
  <li><code>==</code> 等于、<code>!=</code> 不等于</li>
</ul>
<p><code>++</code>和<code>--</code>运算符分为前缀和后缀两种形式：</p>
<ul>
  <li><strong>前缀</strong>（<code>++i</code>）：先自增，再使用值</li>
  <li><strong>后缀</strong>（<code>i++</code>）：先使用值，再自增</li>
</ul>

<h3>5.5 逗号运算符与嵌套循环</h3>
<p><strong>逗号运算符</strong>允许在一个表达式中执行多个操作，常用在for循环中同时操作多个变量。<strong>嵌套循环</strong>是循环内部包含另一个循环：</p>
<pre class="language-cpp"><code>// 逗号运算符
for (int i = 0, j = 10; i &lt; j; i++, j--) {
    cout &lt;&lt; i &lt;&lt; " " &lt;&lt; j &lt;&lt; endl;
}

// 嵌套循环：打印乘法表片段
for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
        cout &lt;&lt; i * j &lt;&lt; "\\t";
    }
    cout &lt;&lt; endl;
}</code></pre>

<div class="key-point">
  <p><strong>记住：</strong>逗号运算符的值是最右边表达式的值。嵌套循环中，外层循环每执行一次，内层循环完整执行一遍。要避免无限循环，确保循环条件最终会变为假。</p>
</div>
`,
    questions: [
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>for (int i = 0; i &lt; 3; i++) {\n    cout &lt;&lt; i &lt;&lt; \" \";\n}</code></pre>",
        options: ["1 2 3 ", "0 1 2 ", "0 1 2 3 ", "1 2 3 4 "],
        answer: 1,
        explanation: "循环从<code>i=0</code>开始，条件<code>i &lt; 3</code>，当i为0、1、2时条件为真。输出<strong>0 1 2 </strong>，当i=3时条件为假，循环结束。"
      },
      {
        type: "truefalse",
        question: "<code>do-while</code>循环的循环体至少执行一次。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "<code>do-while</code>循环先执行循环体，然后再判断条件。因此无论条件是否为真，循环体<strong>至少执行一次</strong>。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int x = 5;\ncout &lt;&lt; x++ &lt;&lt; \" \" &lt;&lt; x;</code></pre>",
        options: ["5 6", "6 6", "5 5", "未定义行为"],
        answer: 3,
        explanation: "在同一个表达式中对变量进行修改（<code>x++</code>）并在其他地方使用该变量（<code>x</code>），是<strong>未定义行为</strong>。不同编译器可能给出不同结果。"
      },
      {
        type: "choice",
        question: "基于范围的for循环是哪个C++标准引入的？",
        options: ["C++98", "C++03", "C++11", "C++17"],
        answer: 2,
        explanation: "基于范围的for循环（<code>for (auto x : container)</code>）是<strong>C++11</strong>引入的新特性，大大简化了遍历容器的代码。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int i = 10;\nwhile (i &gt; 7) {\n    cout &lt;&lt; i &lt;&lt; \" \";\n    i--;\n}</code></pre>",
        options: ["10 9 8 7 ", "10 9 8 ", "9 8 7 ", "10 9 8 7 6 "],
        answer: 1,
        explanation: "i=10：输出10，i变为9；i=9：输出9，i变为8；i=8：输出8，i变为7；i=7：条件<code>7 &gt; 7</code>为假，退出。输出<strong>10 9 8 </strong>。"
      },
      {
        type: "choice",
        question: "<code>++i</code>和<code>i++</code>的区别是什么？",
        options: ["没有区别", "++i先使用后自增，i++先自增后使用", "++i先自增后使用，i++先使用后自增", "++i只能用于for循环"],
        answer: 2,
        explanation: "<strong>前缀++i</strong>先将i加1，然后返回新值；<strong>后缀i++</strong>先返回旧值，然后将i加1。在独立语句中效果相同，但在表达式中有区别。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int a = 3;\nint b = ++a;\ncout &lt;&lt; a &lt;&lt; \" \" &lt;&lt; b;</code></pre>",
        options: ["3 3", "3 4", "4 4", "4 3"],
        answer: 2,
        explanation: "<code>++a</code>是前缀自增，先将a加1变为4，然后将值4赋给b。因此a=4，b=4，输出<strong>4 4</strong>。"
      },
      {
        type: "truefalse",
        question: "<code>for (int x : arr)</code>中修改x会修改数组arr中的元素。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "<code>for (int x : arr)</code>中x是元素的<strong>副本</strong>，修改x不会影响原数组。要修改原数组，需要使用引用：<code>for (int&amp; x : arr)</code>。"
      },
      {
        type: "choice",
        question: "下列关于逗号运算符的说法正确的是？",
        options: ["逗号运算符的值是左边表达式的值", "逗号运算符的值是右边表达式的值", "逗号运算符不能用于for循环", "逗号运算符只能连接两个表达式"],
        answer: 1,
        explanation: "逗号运算符先计算左边的表达式，再计算右边的表达式，<strong>整个逗号表达式的值是右边表达式的值</strong>。"
      },
      {
        type: "output",
        question: "以下嵌套循环共输出多少个星号？<pre class=\"language-cpp\"><code>for (int i = 0; i &lt; 3; i++)\n    for (int j = 0; j &lt; 4; j++)\n        cout &lt;&lt; \"*\";</code></pre>",
        options: ["7", "12", "3", "4"],
        answer: 1,
        explanation: "外层循环执行3次，每次内层循环执行4次，共输出 3 × 4 = <strong>12</strong>个星号。"
      }
    ]
  },
  {
    id: 6,
    title: "分支语句和逻辑运算符",
    description: "学习条件分支和逻辑判断的使用方法",
    content: `
<h2>第6章 分支语句和逻辑运算符</h2>

<h3>6.1 if/else语句</h3>
<p><code>if</code>语句根据条件的真假来决定执行哪段代码。可以使用<code>else</code>和<code>else if</code>来处理多种情况：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int score;
    cout &lt;&lt; "输入分数：";
    cin &gt;&gt; score;

    if (score &gt;= 90) {
        cout &lt;&lt; "优秀" &lt;&lt; endl;
    } else if (score &gt;= 80) {
        cout &lt;&lt; "良好" &lt;&lt; endl;
    } else if (score &gt;= 60) {
        cout &lt;&lt; "及格" &lt;&lt; endl;
    } else {
        cout &lt;&lt; "不及格" &lt;&lt; endl;
    }
    return 0;
}</code></pre>

<h3>6.2 逻辑运算符</h3>
<p>逻辑运算符用于组合多个条件表达式：</p>
<ul>
  <li><code>&amp;&amp;</code>（逻辑与）：两个条件都为真，结果才为真</li>
  <li><code>||</code>（逻辑或）：至少一个条件为真，结果就为真</li>
  <li><code>!</code>（逻辑非）：取反，真变假，假变真</li>
</ul>
<p>C++中逻辑运算符使用<strong>短路求值</strong>：对于<code>&amp;&amp;</code>，如果左侧为假，则不计算右侧；对于<code>||</code>，如果左侧为真，则不计算右侧。</p>

<pre class="language-cpp"><code>int age = 25;
bool hasLicense = true;

if (age &gt;= 18 &amp;&amp; hasLicense) {
    cout &lt;&lt; "可以开车" &lt;&lt; endl;
}

if (age &lt; 12 || age &gt; 65) {
    cout &lt;&lt; "享受票价优惠" &lt;&lt; endl;
}

if (!hasLicense) {
    cout &lt;&lt; "需要考取驾照" &lt;&lt; endl;
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong>短路求值可以用来避免错误。例如<code>if (ptr != nullptr &amp;&amp; *ptr &gt; 0)</code>中，如果ptr为空，则不会执行<code>*ptr</code>，避免了空指针解引用。</p>
</div>

<h3>6.3 cctype字符函数库</h3>
<p><code>&lt;cctype&gt;</code>头文件提供了一组用于判断和转换字符的函数：</p>
<ul>
  <li><code>isalpha(ch)</code>：是否为字母</li>
  <li><code>isdigit(ch)</code>：是否为数字</li>
  <li><code>isupper(ch)</code> / <code>islower(ch)</code>：是否为大/小写字母</li>
  <li><code>toupper(ch)</code> / <code>tolower(ch)</code>：转换为大/小写</li>
</ul>

<h3>6.4 条件运算符（?:）</h3>
<p>条件运算符（也叫三元运算符）是if/else的简洁替代方式：</p>
<pre class="language-cpp"><code>int a = 10, b = 20;
int max = (a &gt; b) ? a : b;  // max = 20
string result = (score &gt;= 60) ? "及格" : "不及格";</code></pre>

<h3>6.5 switch语句</h3>
<p><code>switch</code>语句根据表达式的值跳转到匹配的<code>case</code>标签。每个case通常需要<code>break</code>来防止穿透执行：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int day;
    cout &lt;&lt; "输入星期几（1-7）：";
    cin &gt;&gt; day;

    switch (day) {
        case 1: cout &lt;&lt; "星期一" &lt;&lt; endl; break;
        case 2: cout &lt;&lt; "星期二" &lt;&lt; endl; break;
        case 3: cout &lt;&lt; "星期三" &lt;&lt; endl; break;
        case 6:
        case 7: cout &lt;&lt; "周末" &lt;&lt; endl; break;
        default: cout &lt;&lt; "工作日" &lt;&lt; endl; break;
    }
    return 0;
}</code></pre>

<h3>6.6 break与continue</h3>
<p><code>break</code>用于立即退出循环或switch语句。<code>continue</code>用于跳过当前迭代的剩余部分，直接开始下一次迭代：</p>
<pre class="language-cpp"><code>for (int i = 0; i &lt; 10; i++) {
    if (i == 5) break;      // i=5时退出循环
    if (i % 2 == 0) continue; // 跳过偶数
    cout &lt;&lt; i &lt;&lt; " ";       // 输出：1 3
}</code></pre>

<div class="key-point">
  <p><strong>记住：</strong><code>switch</code>的表达式必须是整型或枚举类型，不能用浮点数或字符串。忘记写<code>break</code>会导致case穿透（fall-through），即继续执行下一个case的代码。</p>
</div>
`,
    questions: [
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int x = 15;\nif (x &gt; 20)\n    cout &lt;&lt; \"A\";\nelse if (x &gt; 10)\n    cout &lt;&lt; \"B\";\nelse\n    cout &lt;&lt; \"C\";</code></pre>",
        options: ["A", "B", "C", "AB"],
        answer: 1,
        explanation: "x=15，不满足<code>x &gt; 20</code>，但满足<code>x &gt; 10</code>，输出<strong>B</strong>。if-else if-else结构只执行第一个满足条件的分支。"
      },
      {
        type: "choice",
        question: "<code>&amp;&amp;</code>运算符的短路求值是指什么？",
        options: ["两个条件都会计算", "如果左侧为假，不计算右侧", "如果左侧为真，不计算右侧", "随机选择一个条件计算"],
        answer: 1,
        explanation: "对于<code>&amp;&amp;</code>（逻辑与），如果左侧为假，结果必定为假，<strong>不再计算右侧</strong>。对于<code>||</code>（逻辑或），如果左侧为真，不再计算右侧。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int a = 5, b = 3;\ncout &lt;&lt; ((a &gt; b) ? a : b);</code></pre>",
        options: ["3", "5", "true", "1"],
        answer: 1,
        explanation: "条件<code>a &gt; b</code>（5 &gt; 3）为真，因此三元运算符返回<code>a</code>的值，输出<strong>5</strong>。"
      },
      {
        type: "truefalse",
        question: "<code>switch</code>语句可以使用字符串作为判断条件。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "C++中<code>switch</code>的表达式必须是<strong>整型或枚举类型</strong>（包括char），不支持字符串和浮点数。要判断字符串，应使用if-else if结构。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>for (int i = 1; i &lt;= 5; i++) {\n    if (i == 3) continue;\n    cout &lt;&lt; i &lt;&lt; \" \";\n}</code></pre>",
        options: ["1 2 3 4 5 ", "1 2 4 5 ", "1 2 ", "3 "],
        answer: 1,
        explanation: "当<code>i==3</code>时，<code>continue</code>跳过本次迭代，不输出3。其他值正常输出，结果为<strong>1 2 4 5 </strong>。"
      },
      {
        type: "choice",
        question: "以下哪个是<code>&lt;cctype&gt;</code>中用于判断字符是否为数字的函数？",
        options: ["isnumber()", "isdigit()", "isnum()", "checkdigit()"],
        answer: 1,
        explanation: "<code>isdigit(ch)</code>是<code>&lt;cctype&gt;</code>库中判断字符是否为数字（'0'-'9'）的函数。"
      },
      {
        type: "output",
        question: "以下switch语句输出什么？<pre class=\"language-cpp\"><code>int n = 2;\nswitch (n) {\n    case 1: cout &lt;&lt; \"A\";\n    case 2: cout &lt;&lt; \"B\";\n    case 3: cout &lt;&lt; \"C\";\n    default: cout &lt;&lt; \"D\";\n}</code></pre>",
        options: ["B", "BC", "BCD", "ABCD"],
        answer: 2,
        explanation: "匹配到<code>case 2</code>后输出B，由于没有<code>break</code>语句，发生case穿透，继续执行后面所有case，输出<strong>BCD</strong>。"
      },
      {
        type: "truefalse",
        question: "<code>!true</code>的值为<code>false</code>。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "<code>!</code>是逻辑非运算符，将<code>true</code>取反为<code>false</code>，将<code>false</code>取反为<code>true</code>。因此<code>!true</code>确实等于<code>false</code>。"
      },
      {
        type: "choice",
        question: "以下哪种写法可以防止switch中的case穿透？",
        options: ["在每个case末尾加return", "在每个case末尾加break", "在每个case末尾加continue", "A和B都可以"],
        answer: 3,
        explanation: "<code>break</code>和<code>return</code>都可以防止case穿透。<code>break</code>退出switch语句，<code>return</code>直接从函数返回。<code>continue</code>用于循环，不适用于switch。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>bool a = true, b = false;\ncout &lt;&lt; (a &amp;&amp; b) &lt;&lt; \" \" &lt;&lt; (a || b);</code></pre>",
        options: ["true false", "1 0", "0 1", "false true"],
        answer: 2,
        explanation: "<code>true &amp;&amp; false = false</code>（0），<code>true || false = true</code>（1）。<code>cout</code>默认将bool值输出为0和1，所以输出<strong>0 1</strong>。"
      }
    ]
  },
  {
    id: 7,
    title: "函数——C++的编程模块",
    description: "学习函数的定义、声明和参数传递方式",
    content: `
<h2>第7章 函数——C++的编程模块</h2>

<h3>7.1 函数的定义与原型</h3>
<p>函数是C++程序的基本构建模块。使用函数需要三个步骤：<strong>函数原型</strong>（声明）、<strong>函数定义</strong>（实现）和<strong>函数调用</strong>：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

// 函数原型（声明）
double average(double a, double b);

int main() {
    double result = average(85.5, 92.0);  // 函数调用
    cout &lt;&lt; "平均分：" &lt;&lt; result &lt;&lt; endl;
    return 0;
}

// 函数定义（实现）
double average(double a, double b) {
    return (a + b) / 2.0;
}</code></pre>

<p>函数原型告诉编译器函数的返回类型、名称和参数类型。它必须在函数调用之前出现，通常放在main()之前或头文件中。</p>

<h3>7.2 按值传递</h3>
<p>C++函数参数默认使用<strong>按值传递</strong>，即函数接收的是实参的副本。在函数内修改形参不会影响原始变量：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

void tryToChange(int x) {
    x = 100;  // 只修改了副本
    cout &lt;&lt; "函数内x = " &lt;&lt; x &lt;&lt; endl;
}

int main() {
    int num = 42;
    tryToChange(num);
    cout &lt;&lt; "函数外num = " &lt;&lt; num &lt;&lt; endl;  // 仍然是42
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong>按值传递的优点是安全，函数不会意外修改调用者的数据。缺点是对于大型对象（如大数组、大结构体），复制操作效率低下。</p>
</div>

<h3>7.3 数组作为函数参数</h3>
<p>将数组传递给函数时，实际传递的是数组首元素的指针，而不是整个数组的副本。因此函数可以修改原始数组，且需要额外传递数组大小：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

// 以下两种写法等价
void printArray(int arr[], int size) {
    for (int i = 0; i &lt; size; i++) {
        cout &lt;&lt; arr[i] &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
}

int sumArray(const int* arr, int size) {
    int total = 0;
    for (int i = 0; i &lt; size; i++) {
        total += arr[i];
    }
    return total;
}

int main() {
    int data[] = {10, 20, 30, 40, 50};
    int n = sizeof(data) / sizeof(data[0]);  // 计算元素个数
    printArray(data, n);
    cout &lt;&lt; "总和：" &lt;&lt; sumArray(data, n) &lt;&lt; endl;
    return 0;
}</code></pre>

<h3>7.4 指针参数与const参数</h3>
<p>通过传递<strong>指针</strong>，函数可以修改调用者的变量。使用<code>const</code>修饰指针参数可以防止函数修改指向的数据：</p>

<pre class="language-cpp"><code>void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void display(const int* arr, int size) {
    // arr指向的内容不可修改
    for (int i = 0; i &lt; size; i++)
        cout &lt;&lt; arr[i] &lt;&lt; " ";
}

int main() {
    int x = 10, y = 20;
    swap(&amp;x, &amp;y);  // x变为20，y变为10
    return 0;
}</code></pre>

<h3>7.5 处理字符串的函数</h3>
<p>C++中处理字符串的函数可以接收C风格字符串（char指针）或string对象：</p>
<pre class="language-cpp"><code>// 处理C风格字符串
int strLength(const char* str) {
    int count = 0;
    while (str[count] != '\\0')
        count++;
    return count;
}

// 处理string对象
void greet(const string&amp; name) {
    cout &lt;&lt; "你好，" &lt;&lt; name &lt;&lt; "！" &lt;&lt; endl;
}</code></pre>

<div class="key-point">
  <p><strong>记住：</strong>如果函数不需要修改参数值，应使用<code>const</code>修饰参数。对于大型对象参数，应优先使用<code>const</code>引用或<code>const</code>指针来避免不必要的复制。</p>
</div>
`,
    questions: [
      {
        type: "choice",
        question: "函数原型的作用是什么？",
        options: ["定义函数的实现", "告诉编译器函数的接口信息", "调用函数", "分配函数的内存"],
        answer: 1,
        explanation: "函数原型（声明）告诉编译器函数的<strong>返回类型、名称和参数类型</strong>，使得编译器在遇到函数调用时能够进行类型检查。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>void modify(int x) { x = 99; }\nint main() {\n    int a = 10;\n    modify(a);\n    cout &lt;&lt; a;\n    return 0;\n}</code></pre>",
        options: ["99", "10", "0", "编译错误"],
        answer: 1,
        explanation: "C++默认使用<strong>按值传递</strong>，modify函数修改的是参数的副本，不影响原始变量a。因此输出<strong>10</strong>。"
      },
      {
        type: "truefalse",
        question: "数组作为函数参数传递时，函数接收的是整个数组的副本。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "数组作为参数传递时，传递的是数组<strong>首元素的指针</strong>，而不是副本。因此函数可以通过该指针修改原始数组的内容。"
      },
      {
        type: "choice",
        question: "以下哪种参数声明表示函数不会修改数组内容？",
        options: ["void f(int arr[])", "void f(int* arr)", "void f(const int* arr)", "void f(int&amp; arr)"],
        answer: 2,
        explanation: "<code>const int* arr</code>表示指针指向的内容为常量，<strong>函数不能通过该指针修改数据</strong>。这是保护数组内容不被修改的推荐方式。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>void swap(int* a, int* b) {\n    int t = *a; *a = *b; *b = t;\n}\nint main() {\n    int x = 1, y = 2;\n    swap(&amp;x, &amp;y);\n    cout &lt;&lt; x &lt;&lt; \" \" &lt;&lt; y;\n    return 0;\n}</code></pre>",
        options: ["1 2", "2 1", "1 1", "2 2"],
        answer: 1,
        explanation: "通过指针传递，swap函数能修改原始变量。交换后x=2，y=1，输出<strong>2 1</strong>。"
      },
      {
        type: "choice",
        question: "如何计算数组<code>int arr[10]</code>的元素个数？",
        options: ["sizeof(arr)", "sizeof(arr) / sizeof(int)", "arr.size()", "arr.length()"],
        answer: 1,
        explanation: "<code>sizeof(arr)</code>返回数组总字节数，除以单个元素的字节数<code>sizeof(int)</code>即得到元素个数。注意此方法只在数组定义的作用域内有效。"
      },
      {
        type: "truefalse",
        question: "函数可以不返回任何值，此时返回类型应声明为<code>void</code>。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "<code>void</code>返回类型表示函数<strong>不返回值</strong>。调用void函数时不能将其用于赋值表达式或需要值的地方。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int add(int a, int b) { return a + b; }\nint main() {\n    cout &lt;&lt; add(add(1, 2), add(3, 4));\n    return 0;\n}</code></pre>",
        options: ["10", "7", "3", "编译错误"],
        answer: 0,
        explanation: "<code>add(1,2)</code>返回3，<code>add(3,4)</code>返回7，<code>add(3,7)</code>返回10。函数调用可以嵌套使用，输出<strong>10</strong>。"
      },
      {
        type: "choice",
        question: "以下函数声明中，哪个参数声明方式与<code>int arr[]</code>等价？",
        options: ["int arr", "int&amp; arr", "int* arr", "int arr[10]"],
        answer: 2,
        explanation: "在函数参数中，<code>int arr[]</code>和<code>int* arr</code>是完全<strong>等价</strong>的，都表示接收一个指向int的指针。编译器会将数组参数自动转换为指针。"
      },
      {
        type: "truefalse",
        question: "函数原型中参数名是必需的。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "函数原型中参数名是<strong>可选的</strong>。例如<code>double average(double, double);</code>是合法的原型，编译器只需要参数类型信息。"
      }
    ]
  },
  {
    id: 8,
    title: "函数探幽",
    description: "深入学习内联函数、引用参数、函数重载和模板",
    content: `
<h2>第8章 函数探幽</h2>

<h3>8.1 内联函数</h3>
<p><strong>内联函数</strong>使用<code>inline</code>关键字声明，建议编译器在调用处展开函数代码，而不是执行常规的函数调用。这可以减少函数调用的开销，适用于短小且频繁调用的函数：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

inline double square(double x) {
    return x * x;
}

int main() {
    double a = 3.0;
    // 编译器可能将其替换为：double b = a * a;
    double b = square(a);
    cout &lt;&lt; a &lt;&lt; "的平方 = " &lt;&lt; b &lt;&lt; endl;
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>注意：</strong><code>inline</code>只是对编译器的建议，编译器可以选择忽略。不宜将复杂或递归函数声明为内联。内联函数的定义通常放在头文件中。</p>
</div>

<h3>8.2 引用变量</h3>
<p><strong>引用</strong>（<code>&amp;</code>）是变量的别名，创建后始终绑定到同一个变量。引用必须在声明时初始化，且不能更改绑定目标：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

void swapByRef(int&amp; a, int&amp; b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    int&amp; ref = x;     // ref是x的引用（别名）
    ref = 50;          // 等同于 x = 50
    cout &lt;&lt; "x = " &lt;&lt; x &lt;&lt; endl;  // 输出50

    swapByRef(x, y);   // 按引用传递，直接交换原始值
    cout &lt;&lt; "x = " &lt;&lt; x &lt;&lt; ", y = " &lt;&lt; y &lt;&lt; endl;
    return 0;
}</code></pre>

<h3>8.3 const引用</h3>
<p>使用<code>const</code>引用作为函数参数，既避免了复制大型对象的开销，又防止函数修改原始数据。这是传递大型对象的推荐方式：</p>

<pre class="language-cpp"><code>// 推荐方式：const引用避免复制，又保护原始数据
void printInfo(const string&amp; info) {
    cout &lt;&lt; info &lt;&lt; endl;
    // info = "新内容";  // 错误！不能修改const引用
}

// 小型基本类型按值传递即可
void process(int n) {
    cout &lt;&lt; n * 2 &lt;&lt; endl;
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong>对于基本类型（int、double等），按值传递效率高。对于大型对象（string、struct、容器等），使用<code>const</code>引用传递最佳。需要修改原始数据时，使用非const引用。</p>
</div>

<h3>8.4 默认参数</h3>
<p><strong>默认参数</strong>允许在函数原型中为参数指定默认值。调用时可以省略具有默认值的参数：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

// 默认参数在原型中指定，从右向左设置
void greet(const string&amp; name, const string&amp; greeting = "你好") {
    cout &lt;&lt; greeting &lt;&lt; "，" &lt;&lt; name &lt;&lt; "！" &lt;&lt; endl;
}

int main() {
    greet("张三");              // 使用默认值："你好，张三！"
    greet("李四", "早上好");    // 覆盖默认值："早上好，李四！"
    return 0;
}</code></pre>

<h3>8.5 函数重载</h3>
<p><strong>函数重载</strong>允许定义多个同名函数，只要它们的参数列表（参数个数或类型）不同。编译器根据实参类型选择匹配的版本：</p>
<pre class="language-cpp"><code>int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
string add(const string&amp; a, const string&amp; b) { return a + b; }

// 编译器自动选择匹配的版本
add(1, 2);           // 调用int版本
add(1.5, 2.5);       // 调用double版本
add("你", "好");     // 调用string版本（需要string类型参数）</code></pre>

<h3>8.6 函数模板</h3>
<p><strong>函数模板</strong>使用<code>template</code>关键字定义通用函数，可以处理不同类型的参数而无需为每种类型编写独立的函数：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

template &lt;typename T&gt;
T getMax(T a, T b) {
    return (a &gt; b) ? a : b;
}

int main() {
    cout &lt;&lt; getMax(10, 20) &lt;&lt; endl;       // T为int，输出20
    cout &lt;&lt; getMax(3.14, 2.72) &lt;&lt; endl;   // T为double，输出3.14
    cout &lt;&lt; getMax('A', 'Z') &lt;&lt; endl;     // T为char，输出Z
    return 0;
}</code></pre>

<div class="key-point">
  <p><strong>记住：</strong>函数模板不是函数本身，而是编译器生成函数的"蓝图"。编译器根据实参类型自动实例化出具体的函数。模板是C++泛型编程的基础。</p>
</div>
`,
    questions: [
      {
        type: "choice",
        question: "关于内联函数的说法，正确的是？",
        options: ["inline保证函数一定会被内联", "内联函数适合复杂的递归函数", "inline只是对编译器的建议", "内联函数不能有返回值"],
        answer: 2,
        explanation: "<code>inline</code>只是对编译器的<strong>建议</strong>，编译器可以根据实际情况决定是否内联。复杂或递归函数通常不会被内联。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>int x = 10;\nint&amp; ref = x;\nref = 30;\ncout &lt;&lt; x;</code></pre>",
        options: ["10", "30", "编译错误", "未定义"],
        answer: 1,
        explanation: "<code>ref</code>是<code>x</code>的引用（别名），修改ref等同于修改x。因此<code>ref = 30</code>后，x也变为<strong>30</strong>。"
      },
      {
        type: "truefalse",
        question: "引用在声明后可以重新绑定到其他变量。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "引用一旦初始化绑定到某个变量后，就<strong>不能重新绑定</strong>到其他变量。对引用的所有操作都会作用于原始变量。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>void change(int&amp; n) { n = 99; }\nint main() {\n    int a = 1;\n    change(a);\n    cout &lt;&lt; a;\n    return 0;\n}</code></pre>",
        options: ["1", "99", "0", "编译错误"],
        answer: 1,
        explanation: "参数<code>int&amp; n</code>是引用传递，函数内修改n直接影响原始变量a。因此a变为<strong>99</strong>。"
      },
      {
        type: "choice",
        question: "关于默认参数的规则，正确的是？",
        options: ["默认参数可以从左到右设置", "默认参数必须从右向左连续设置", "所有参数都必须有默认值", "默认参数只能是0"],
        answer: 1,
        explanation: "默认参数必须<strong>从右向左连续设置</strong>。即如果某个参数有默认值，它右边的所有参数也必须有默认值。"
      },
      {
        type: "choice",
        question: "函数重载是根据什么来区分不同版本的？",
        options: ["返回类型", "函数名", "参数列表（参数个数或类型）", "函数体的内容"],
        answer: 2,
        explanation: "编译器根据<strong>参数列表</strong>（参数个数、类型或顺序的不同）来区分重载函数。仅返回类型不同不构成重载。"
      },
      {
        type: "truefalse",
        question: "两个函数仅返回类型不同（参数列表相同），也构成函数重载。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "仅返回类型不同<strong>不构成函数重载</strong>，会导致编译错误。重载必须在参数列表上有所区别。"
      },
      {
        type: "output",
        question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>template &lt;typename T&gt;\nT bigger(T a, T b) { return (a &gt; b) ? a : b; }\nint main() {\n    cout &lt;&lt; bigger(5, 9);\n    return 0;\n}</code></pre>",
        options: ["5", "9", "编译错误", "14"],
        answer: 1,
        explanation: "模板函数<code>bigger</code>实例化为<code>int</code>版本。<code>5 &gt; 9</code>为假，返回b=<strong>9</strong>。"
      },
      {
        type: "choice",
        question: "传递大型对象给函数时，最推荐的方式是？",
        options: ["按值传递", "按指针传递", "按const引用传递", "按非const引用传递"],
        answer: 2,
        explanation: "对于大型对象，<code>const</code>引用传递<strong>既避免了复制开销，又防止了意外修改</strong>。这是传递只读大型参数的最佳实践。"
      },
      {
        type: "choice",
        question: "关于函数模板，下列说法正确的是？",
        options: ["模板本身就是一个完整的函数", "模板是编译器生成函数的蓝图", "模板只能用于整型参数", "使用模板会降低程序性能"],
        answer: 1,
        explanation: "函数模板是编译器用来<strong>生成具体函数的蓝图</strong>。编译器根据调用时的实参类型实例化出具体的函数代码。模板是C++泛型编程的基础。"
      }
    ]
  },
  {
    id: 9,
    title: "内存模型和名称空间",
    description: "理解C++的存储持续性、作用域和名称空间机制",
    content: `
<h2>第9章 内存模型和名称空间</h2>

<h3>9.1 单独编译</h3>
<p>大型C++项目通常将代码分为多个文件来组织管理。典型的做法是将声明放在<strong>头文件（.h）</strong>中，将实现放在<strong>源文件（.cpp）</strong>中：</p>

<pre class="language-cpp"><code>// math_utils.h —— 头文件（声明）
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

struct Point {
    double x;
    double y;
};

double distance(const Point&amp; a, const Point&amp; b);
Point midpoint(const Point&amp; a, const Point&amp; b);

#endif</code></pre>

<pre class="language-cpp"><code>// math_utils.cpp —— 源文件（实现）
#include "math_utils.h"
#include &lt;cmath&gt;

double distance(const Point&amp; a, const Point&amp; b) {
    double dx = a.x - b.x;
    double dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
}

Point midpoint(const Point&amp; a, const Point&amp; b) {
    return Point{(a.x + b.x) / 2, (a.y + b.y) / 2};
}</code></pre>

<div class="key-point">
  <p><strong>核心要点：</strong><code>#ifndef/#define/#endif</code>是头文件保护（include guard），防止同一头文件被多次包含导致重复定义错误。每个头文件都应添加这种保护。</p>
</div>

<h3>9.2 存储持续性</h3>
<p>C++变量有三种主要的<strong>存储持续性</strong>（storage duration）：</p>
<ul>
  <li><strong>自动存储（auto）</strong>：函数内部的局部变量，函数结束时自动销毁</li>
  <li><strong>静态存储（static）</strong>：程序运行期间一直存在，包括全局变量和static局部变量</li>
  <li><strong>动态存储（dynamic）</strong>：通过new分配，由delete手动释放</li>
</ul>

<pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

int globalVar = 100;           // 静态存储，全局变量

void counter() {
    static int count = 0;      // 静态局部变量，只初始化一次
    count++;
    cout &lt;&lt; "调用次数：" &lt;&lt; count &lt;&lt; endl;
}

int main() {
    int localVar = 10;         // 自动存储，局部变量
    int* dynVar = new int(50); // 动态存储

    counter();  // 输出：调用次数：1
    counter();  // 输出：调用次数：2
    counter();  // 输出：调用次数：3

    delete dynVar;
    return 0;
}</code></pre>

<h3>9.3 作用域与链接性</h3>
<p><strong>作用域</strong>决定了变量在程序中可见的范围。<strong>链接性</strong>决定了变量能否跨文件访问：</p>
<ul>
  <li><strong>局部作用域</strong>：变量只在定义它的代码块内可见</li>
  <li><strong>全局作用域</strong>：变量在整个文件中可见</li>
  <li><strong>外部链接性</strong>：变量可以被其他文件访问（全局变量默认）</li>
  <li><strong>内部链接性</strong>：变量只在当前文件中可见（使用<code>static</code>修饰全局变量）</li>
</ul>
<pre class="language-cpp"><code>int global = 10;           // 外部链接性，其他文件可用extern访问
static int fileOnly = 20;  // 内部链接性，仅当前文件可见

// 在另一个文件中访问global：
// extern int global;  // 声明（不是定义）</code></pre>

<h3>9.4 名称空间（namespace）</h3>
<p><strong>名称空间</strong>用于将代码组织到逻辑分组中，避免名称冲突。不同名称空间中可以有相同名称的函数或变量：</p>

<pre class="language-cpp"><code>#include &lt;iostream&gt;

namespace MathLib {
    double PI = 3.14159265;
    double circleArea(double r) {
        return PI * r * r;
    }
}

namespace PhysicsLib {
    double PI = 3.14159265;
    double kineticEnergy(double m, double v) {
        return 0.5 * m * v * v;
    }
}

int main() {
    // 使用作用域解析运算符
    std::cout &lt;&lt; MathLib::circleArea(5.0) &lt;&lt; std::endl;

    // using声明
    using MathLib::PI;
    std::cout &lt;&lt; PI &lt;&lt; std::endl;

    // using编译指令
    using namespace PhysicsLib;
    std::cout &lt;&lt; kineticEnergy(2.0, 3.0) &lt;&lt; std::endl;

    return 0;
}</code></pre>

<h3>9.5 new和delete的深入理解</h3>
<p>动态内存分配中需要注意的关键规则：</p>
<ul>
  <li>每个<code>new</code>必须配对一个<code>delete</code></li>
  <li><code>new[]</code>分配的数组必须用<code>delete[]</code>释放</li>
  <li>对空指针执行<code>delete</code>是安全的（无操作）</li>
  <li>不要对同一块内存释放两次（<strong>双重释放</strong>）</li>
  <li>释放后应将指针设为<code>nullptr</code>避免悬空指针</li>
</ul>
<pre class="language-cpp"><code>int* p = new int(42);
delete p;
p = nullptr;  // 推荐：释放后置空</code></pre>

<div class="key-point">
  <p><strong>记住：</strong>头文件中应包含：函数原型、<code>const</code>常量、结构体/类声明、模板定义、内联函数和<code>using</code>声明。头文件中不应包含：函数定义（非内联/非模板）和变量定义（非const）。</p>
</div>
`,
    questions: [
      {
        type: "choice",
        question: "头文件保护（include guard）的作用是什么？",
        options: ["加快编译速度", "防止头文件被多次包含导致重复定义", "保护源码不被查看", "限制头文件的访问权限"],
        answer: 1,
        explanation: "<code>#ifndef/#define/#endif</code>构成的头文件保护机制，确保同一头文件即使被多次<code>#include</code>，其内容也只会被编译一次，<strong>防止重复定义错误</strong>。"
      },
      {
        type: "output",
        question: "以下代码第三次调用<code>counter()</code>时输出什么？<pre class=\"language-cpp\"><code>void counter() {\n    static int n = 0;\n    n++;\n    cout &lt;&lt; n;\n}\n// 连续调用三次counter()</code></pre>",
        options: ["1", "2", "3", "0"],
        answer: 2,
        explanation: "<code>static</code>局部变量只初始化一次，函数结束后值保留。第一次输出1，第二次输出2，第三次输出<strong>3</strong>。"
      },
      {
        type: "choice",
        question: "以下哪种变量具有动态存储持续性？",
        options: ["全局变量", "局部变量", "static变量", "通过new分配的变量"],
        answer: 3,
        explanation: "通过<code>new</code>运算符分配的变量具有<strong>动态存储持续性</strong>，其生命周期由程序员通过<code>delete</code>手动控制。"
      },
      {
        type: "truefalse",
        question: "使用<code>static</code>修饰全局变量会将其链接性改为内部链接性。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "全局变量默认具有外部链接性。使用<code>static</code>修饰后，变为<strong>内部链接性</strong>，只在当前文件中可见，其他文件无法通过extern访问。"
      },
      {
        type: "choice",
        question: "在另一个文件中使用全局变量<code>int count;</code>，应该怎样声明？",
        options: ["int count;", "extern int count;", "static int count;", "global int count;"],
        answer: 1,
        explanation: "使用<code>extern int count;</code>来声明（而非定义）在其他文件中定义的全局变量。<code>extern</code>关键字表明该变量在别处定义。"
      },
      {
        type: "choice",
        question: "名称空间的主要作用是什么？",
        options: ["提高程序运行速度", "减少内存占用", "避免名称冲突", "自动管理内存"],
        answer: 2,
        explanation: "名称空间将标识符组织到独立的逻辑分组中，<strong>避免不同库或模块之间的名称冲突</strong>。例如std命名空间包含所有C++标准库组件。"
      },
      {
        type: "truefalse",
        question: "对空指针<code>nullptr</code>执行<code>delete</code>操作是安全的。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "C++标准规定对空指针执行<code>delete</code>是<strong>安全的</strong>，不会产生任何操作。这是释放内存后将指针置为nullptr的原因之一。"
      },
      {
        type: "choice",
        question: "以下哪项不应该放在头文件中？",
        options: ["函数原型", "类的声明", "非内联函数的定义", "const常量"],
        answer: 2,
        explanation: "头文件中不应包含<strong>非内联函数的定义</strong>（函数实现），否则当多个文件包含该头文件时会导致重复定义错误。函数实现应放在.cpp文件中。"
      }
    ]
  },

{
  id: 10,
  title: "对象和类",
  description: "学习面向对象编程基础、类的声明、构造函数与析构函数、this指针",
  content: `<h2>对象和类</h2>

<h3>面向对象编程概述</h3>
<p>C++最重要的特性之一是支持<strong>面向对象编程（OOP）</strong>。面向对象的核心思想是将数据和操作数据的方法捆绑在一起，形成一个<strong>对象</strong>。OOP有三大支柱：<strong>封装</strong>——将数据和方法包装在类中，隐藏实现细节；<strong>继承</strong>——从已有类派生新类，实现代码复用；<strong>多态</strong>——同一接口在不同对象上表现出不同行为。在C++中，<strong>类（class）</strong>是实现OOP的核心机制，它是用户自定义的数据类型，定义了对象拥有的属性和行为。</p>

<h3>类的声明与定义</h3>
<p>类的声明使用关键字<code>class</code>，在其中定义<strong>数据成员</strong>（成员变量）和<strong>成员函数</strong>（方法）。类声明通常放在头文件中，成员函数的具体实现放在源文件中。使用<strong>作用域解析运算符</strong><code>::</code>来标识成员函数属于哪个类。</p>
<pre class="language-cpp"><code>// stock.h —— 类声明
class Stock {
private:
    std::string company;
    int shares;
    double share_val;
    double total_val;
    void set_tot() { total_val = shares * share_val; }

public:
    Stock();  // 默认构造函数
    Stock(const std::string &amp; co, int n, double pr);
    ~Stock();  // 析构函数
    void show() const;
};

// stock.cpp —— 成员函数实现
Stock::Stock(const std::string &amp; co, int n, double pr) {
    company = co;
    shares = n;
    share_val = pr;
    set_tot();
}

void Stock::show() const {
    std::cout &lt;&lt; "公司: " &lt;&lt; company
              &lt;&lt; " 股份: " &lt;&lt; shares &lt;&lt; "\\n";
}</code></pre>

<h3>访问控制</h3>
<p>C++通过<strong>访问说明符</strong>实现封装：</p>
<ul>
<li><code>private</code>：私有成员，只能被类的成员函数和友元访问，这是类成员的<strong>默认</strong>访问权限。</li>
<li><code>public</code>：公有成员，可在任何位置通过对象访问，构成类的<strong>公共接口</strong>。</li>
<li><code>protected</code>：受保护成员，与private类似，但允许派生类访问（继承章节详述）。</li>
</ul>
<p>数据成员通常设为<code>private</code>以实现<strong>数据隐藏</strong>，外部通过公有成员函数间接访问和修改数据。这样做的好处是：修改内部实现不会影响使用该类的代码。</p>

<h3>构造函数与析构函数</h3>
<p><strong>构造函数</strong>是与类名相同的特殊成员函数，在创建对象时自动调用，用于初始化对象。构造函数没有返回类型（连<code>void</code>也没有），可以被重载。如果程序员没有提供任何构造函数，编译器会生成一个<strong>默认构造函数</strong>。但一旦定义了任何构造函数，就必须自己提供默认构造函数。</p>
<p><strong>析构函数</strong>名为<code>~类名()</code>，在对象销毁时自动调用。析构函数没有参数，不能被重载，每个类只能有一个析构函数。如果构造函数中使用了<code>new</code>分配内存，就应该在析构函数中使用<code>delete</code>释放。</p>
<pre class="language-cpp"><code>Stock::Stock() {
    company = "无名";
    shares = 0;
    share_val = 0.0;
    total_val = 0.0;
}

Stock::~Stock() {
    std::cout &lt;&lt; company &lt;&lt; " 对象被销毁\\n";
}</code></pre>

<h3>this指针</h3>
<p>每个成员函数都有一个隐含的指针参数<code>this</code>，它指向调用该函数的对象。当需要返回对象自身的引用时（如实现链式调用），<code>this</code>特别有用：</p>
<pre class="language-cpp"><code>const Stock &amp; Stock::topval(const Stock &amp; s) const {
    if (s.total_val &gt; total_val)
        return s;
    else
        return *this;  // *this 就是调用对象本身
}</code></pre>

<h3>const成员函数</h3>
<p>在成员函数声明和定义的括号后加<code>const</code>关键字，表示该函数不会修改调用对象的数据。<code>const</code>对象只能调用<code>const</code>成员函数。这是一个重要的设计原则：不修改对象状态的函数都应声明为<code>const</code>。</p>

<div class="key-point">
<p>类通过<code>private</code>实现数据隐藏，通过<code>public</code>成员函数提供接口。构造函数在创建对象时自动调用进行初始化，析构函数在对象销毁时自动调用进行清理。<code>this</code>指针指向调用对象本身。不修改对象的成员函数应声明为<code>const</code>。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "在C++类中，数据成员的默认访问权限是什么？",
      options: ["public", "private", "protected", "friend"],
      answer: 1,
      explanation: "在<code>class</code>中，成员的默认访问权限是<code>private</code>。只有<code>struct</code>的默认访问权限是<code>public</code>。"
    },
    {
      type: "choice",
      question: "关于构造函数，以下哪项说法是正确的？",
      options: ["构造函数的返回类型是void", "构造函数不能被重载", "构造函数的名称必须与类名相同", "构造函数只能有一个参数"],
      answer: 2,
      explanation: "构造函数的名称必须与类名完全相同。构造函数没有返回类型（连void也不是），可以被重载（支持多个参数列表不同的构造函数）。"
    },
    {
      type: "truefalse",
      question: "如果程序员为类定义了一个带参数的构造函数，编译器仍会自动生成默认构造函数。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "一旦程序员定义了任何构造函数，编译器就<strong>不会</strong>再自动生成默认构造函数。如果需要默认构造函数，必须自己显式定义。"
    },
    {
      type: "choice",
      question: "<code>this</code>指针在成员函数中指向什么？",
      options: ["指向类本身", "指向调用该函数的对象", "指向类的第一个数据成员", "指向函数的返回值"],
      answer: 1,
      explanation: "<code>this</code>是一个隐含的指针，指向<strong>调用该成员函数的对象</strong>。<code>*this</code>表示调用对象本身。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>class Counter {\npublic:\n    int val;\n    Counter(int v) : val(v) {}\n};\nint main() {\n    Counter a(5), b(10);\n    std::cout &lt;&lt; a.val + b.val;\n    return 0;\n}</code></pre>",
      options: ["5", "10", "15", "编译错误"],
      answer: 2,
      explanation: "<code>a.val</code>为5，<code>b.val</code>为10，两者相加为<strong>15</strong>。"
    },
    {
      type: "truefalse",
      question: "析构函数可以被重载，一个类可以有多个析构函数。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "析构函数<strong>不能被重载</strong>，每个类只能有一个析构函数。析构函数没有参数和返回值，形式固定为<code>~ClassName()</code>。"
    },
    {
      type: "choice",
      question: "将成员函数声明为<code>const</code>的正确语法是？",
      options: ["const void show();", "void const show();", "void show() const;", "void show(const);"],
      answer: 2,
      explanation: "<code>const</code>关键字放在成员函数的参数列表之后、函数体之前，表示该函数承诺不修改调用对象的数据成员。"
    },
    {
      type: "choice",
      question: "以下哪种方式可以正确创建Stock类的对象？",
      options: ["Stock s1 = Stock(\"Apple\", 100, 150.0);", "Stock s2;", "Stock *ps = new Stock(\"Google\", 50, 200.0);", "以上都正确"],
      answer: 3,
      explanation: "这三种方式都可以创建对象：显式调用构造函数、调用默认构造函数、使用<code>new</code>在堆上创建对象。"
    },
    {
      type: "truefalse",
      question: "const对象可以调用类中任何成员函数。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>const</code>对象只能调用<code>const</code>成员函数。非<code>const</code>成员函数可能修改对象状态，因此<code>const</code>对象调用它们会导致编译错误。"
    },
    {
      type: "choice",
      question: "作用域解析运算符<code>::</code>在类中的作用是什么？",
      options: ["表示继承关系", "用于访问全局变量", "标识成员函数属于哪个类", "定义命名空间"],
      answer: 2,
      explanation: "在类外定义成员函数时，使用<code>ClassName::functionName()</code>来表明该函数属于<code>ClassName</code>类。<code>::</code>也可用于访问全局变量和命名空间成员，但在此语境下是标识类的成员。"
    }
  ]
},
{
  id: 11,
  title: "使用类",
  description: "学习运算符重载、友元函数和类的类型转换",
  content: `<h2>使用类</h2>

<h3>运算符重载</h3>
<p><strong>运算符重载</strong>是C++中一种特殊形式的函数重载，允许为自定义类型赋予运算符新的含义。运算符重载使用关键字<code>operator</code>后跟运算符符号来定义。例如，<code>operator+</code>定义了加法运算符的行为。运算符重载使得类对象能像内置类型一样使用运算符，让代码更加直观自然。</p>
<p>重载运算符必须遵循以下限制：重载后的运算符至少有一个操作数是用户自定义类型；不能改变运算符的操作数个数；不能创建新的运算符；某些运算符不能被重载（如<code>sizeof</code>、<code>.</code>、<code>::</code>、<code>?:</code>等）。</p>

<pre class="language-cpp"><code>class Time {
private:
    int hours;
    int minutes;
public:
    Time() : hours(0), minutes(0) {}
    Time(int h, int m) : hours(h), minutes(m) {}

    // 运算符重载：Time + Time
    Time operator+(const Time &amp; t) const {
        Time sum;
        sum.minutes = minutes + t.minutes;
        sum.hours = hours + t.hours + sum.minutes / 60;
        sum.minutes %= 60;
        return sum;
    }

    // 运算符重载：Time * double
    Time operator*(double mult) const {
        long totalmin = (long)(hours * 60 + minutes) * mult;
        Time result;
        result.hours = totalmin / 60;
        result.minutes = totalmin % 60;
        return result;
    }
};</code></pre>
<p>使用时可以直接写<code>t3 = t1 + t2;</code>，编译器将其转换为<code>t3 = t1.operator+(t2);</code>。</p>

<h3>友元函数</h3>
<p><strong>友元函数</strong>不是类的成员函数，但有权访问类的私有成员。友元在类声明中用<code>friend</code>关键字声明。最常见的用途是重载<code>&lt;&lt;</code>运算符，使得类对象可以通过<code>cout</code>输出。由于<code>cout</code>是<code>&lt;&lt;</code>的左操作数，不能用成员函数实现（成员函数的左操作数必须是对象本身），所以必须用友元函数。</p>
<pre class="language-cpp"><code>class Time {
    // ... 省略其他成员 ...
    friend std::ostream &amp; operator&lt;&lt;(std::ostream &amp; os,
                                       const Time &amp; t);
};

// 友元函数定义（不需要 Time:: 前缀）
std::ostream &amp; operator&lt;&lt;(std::ostream &amp; os, const Time &amp; t) {
    os &lt;&lt; t.hours &lt;&lt; "小时, " &lt;&lt; t.minutes &lt;&lt; "分钟";
    return os;  // 返回ostream引用以支持链式输出
}

// 使用
Time t(3, 45);
std::cout &lt;&lt; "时间: " &lt;&lt; t &lt;&lt; "\\n";
// 输出: 时间: 3小时, 45分钟</code></pre>

<h3>类的类型转换</h3>
<p>C++允许定义类与其他类型之间的转换。有两种方向的转换：</p>
<ul>
<li><strong>其他类型 → 类</strong>：通过<strong>只接受一个参数的构造函数</strong>实现自动转换。如果不希望自动转换发生（可能导致意外错误），可以使用<code>explicit</code>关键字修饰构造函数，强制要求显式转换。</li>
<li><strong>类 → 其他类型</strong>：通过定义<strong>转换函数</strong>实现，形式为<code>operator TypeName()</code>，没有参数也没有返回类型声明。</li>
</ul>
<pre class="language-cpp"><code>class Stonewt {
private:
    double pounds;
public:
    explicit Stonewt(double lbs) : pounds(lbs) {}

    // 转换函数：Stonewt -&gt; double
    operator double() const { return pounds; }
};

Stonewt wt(150.5);
double d = wt;          // 调用 operator double()
// Stonewt w2 = 180.0;  // 错误！explicit禁止隐式转换
Stonewt w3 = Stonewt(180.0);  // 正确，显式转换</code></pre>

<div class="key-point">
<p>运算符重载使自定义类型可以使用运算符语法。友元函数用<code>friend</code>声明，虽非类成员却可访问私有数据，常用于重载<code>&lt;&lt;</code>运算符。<code>explicit</code>关键字可防止构造函数引起的隐式类型转换。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "运算符重载使用哪个关键字？",
      options: ["overload", "operator", "override", "redefine"],
      answer: 1,
      explanation: "运算符重载使用<code>operator</code>关键字后跟运算符符号来定义，例如<code>operator+</code>表示重载加法运算符。"
    },
    {
      type: "truefalse",
      question: "C++允许通过运算符重载创建全新的运算符（如<code>operator**</code>）。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "C++<strong>不允许</strong>创建新的运算符，只能重载已有的运算符。<code>**</code>不是C++的运算符，因此不能被重载。"
    },
    {
      type: "choice",
      question: "为什么重载<code>&lt;&lt;</code>运算符通常需要使用友元函数而非成员函数？",
      options: ["成员函数不能返回引用", "成员函数不能有两个参数", "成员函数的左操作数必须是对象本身，而<<的左操作数是ostream", "成员函数不能访问private成员"],
      answer: 2,
      explanation: "成员函数的左操作数隐含为<code>this</code>（调用对象），但<code>&lt;&lt;</code>的左操作数应该是<code>ostream</code>对象（如<code>cout</code>），所以不能用成员函数实现，必须用友元函数。"
    },
    {
      type: "choice",
      question: "友元函数的正确声明方式是？",
      options: ["在类外用friend关键字声明", "在类内用friend关键字声明", "在类内用virtual关键字声明", "在类外用static关键字声明"],
      answer: 1,
      explanation: "友元函数在<strong>类声明内部</strong>使用<code>friend</code>关键字声明，但它不是类的成员函数，定义时不需要类名前缀。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>class Num {\npublic:\n    int val;\n    Num(int v) : val(v) {}\n    Num operator+(const Num&amp; n) const {\n        return Num(val + n.val);\n    }\n};\nint main() {\n    Num a(3), b(7);\n    Num c = a + b;\n    std::cout &lt;&lt; c.val;\n}</code></pre>",
      options: ["3", "7", "10", "编译错误"],
      answer: 2,
      explanation: "<code>a + b</code>调用<code>a.operator+(b)</code>，返回<code>Num(3 + 7)</code>，即<code>val</code>为<strong>10</strong>。"
    },
    {
      type: "truefalse",
      question: "友元函数是类的成员函数。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "友元函数<strong>不是</strong>类的成员函数。它在类声明中用<code>friend</code>声明，有权访问类的私有成员，但不属于类的成员，不通过对象调用，也不拥有<code>this</code>指针。"
    },
    {
      type: "choice",
      question: "<code>explicit</code>关键字的作用是什么？",
      options: ["使构造函数成为虚函数", "防止构造函数进行隐式类型转换", "使构造函数成为友元", "让析构函数自动释放内存"],
      answer: 1,
      explanation: "<code>explicit</code>修饰构造函数后，禁止编译器使用该构造函数进行<strong>隐式类型转换</strong>，只允许显式调用。"
    },
    {
      type: "choice",
      question: "以下哪个运算符<strong>不能</strong>被重载？",
      options: ["+", "<<", ".", "[]"],
      answer: 2,
      explanation: "成员访问运算符<code>.</code>不能被重载。其他不能重载的运算符还有<code>::</code>、<code>sizeof</code>、<code>?:</code>和<code>.*</code>。"
    },
    {
      type: "choice",
      question: "转换函数<code>operator double() const</code>的特点是什么？",
      options: ["返回类型为double", "没有参数且没有显式的返回类型声明", "必须是友元函数", "可以有默认参数"],
      answer: 1,
      explanation: "转换函数的形式是<code>operator TypeName()</code>，它<strong>没有参数</strong>，也<strong>没有显式声明返回类型</strong>（返回类型由TypeName隐含）。它必须是成员函数。"
    },
    {
      type: "output",
      question: "以下代码中，<code>w2</code>的创建是否成功？<pre class=\"language-cpp\"><code>class Weight {\npublic:\n    double kg;\n    explicit Weight(double k) : kg(k) {}\n};\nint main() {\n    Weight w1(60.0);      // A\n    Weight w2 = 70.0;     // B\n}</code></pre>",
      options: ["A和B都成功", "A成功，B编译错误", "A编译错误，B成功", "A和B都编译错误"],
      answer: 1,
      explanation: "A行是直接初始化，成功。B行尝试隐式转换，但构造函数被<code>explicit</code>修饰，禁止隐式转换，因此<strong>B行编译错误</strong>。"
    }
  ]
},
{
  id: 12,
  title: "类和动态内存分配",
  description: "掌握new/delete在类中的使用、拷贝构造函数、赋值运算符与三法则",
  content: `<h2>类和动态内存分配</h2>

<h3>在类中使用动态内存</h3>
<p>当类成员需要管理动态分配的内存时（如需要存储可变长度的字符串），需要在<strong>构造函数</strong>中使用<code>new</code>分配内存，并在<strong>析构函数</strong>中使用<code>delete</code>释放内存。如果没有正确处理，就会导致<strong>内存泄漏</strong>或<strong>重复释放</strong>。</p>
<pre class="language-cpp"><code>class StringBad {
private:
    char * str;     // 指向动态分配的内存
    int len;
public:
    StringBad(const char * s) {
        len = std::strlen(s);
        str = new char[len + 1];  // 分配内存
        std::strcpy(str, s);
    }
    ~StringBad() {
        delete [] str;  // 释放内存（数组形式）
    }
};</code></pre>
<p>这个类看似正确，但存在严重问题：如果发生对象拷贝或赋值，默认行为是<strong>浅拷贝</strong>（只复制指针值），两个对象的<code>str</code>将指向同一块内存，析构时会<strong>重复释放</strong>，导致未定义行为。</p>

<h3>特殊成员函数</h3>
<p>C++会在必要时自动提供以下<strong>特殊成员函数</strong>：默认构造函数、析构函数、<strong>拷贝构造函数</strong>、<strong>赋值运算符</strong>。编译器自动生成的拷贝构造函数和赋值运算符执行的是<strong>逐成员复制</strong>（浅拷贝），对于包含指针成员的类，这通常是不够的。</p>

<h3>拷贝构造函数</h3>
<p><strong>拷贝构造函数</strong>用于将一个对象复制到新创建的对象中。它在以下情况被调用：用一个对象初始化另一个对象、函数按值传递对象、函数按值返回对象。拷贝构造函数的原型为<code>ClassName(const ClassName &amp;)</code>。对于包含动态内存的类，必须定义<strong>深拷贝</strong>版本。</p>

<h3>赋值运算符</h3>
<p>当已存在的对象被赋值为另一个对象的值时，调用<strong>赋值运算符</strong>。与拷贝构造函数不同，赋值运算符作用于<strong>已经创建</strong>的对象，因此需要先释放旧内存再分配新内存，并且需要处理<strong>自赋值</strong>的情况。</p>

<pre class="language-cpp"><code>class String {
private:
    char * str;
    int len;
public:
    // 构造函数
    String(const char * s) {
        len = std::strlen(s);
        str = new char[len + 1];
        std::strcpy(str, s);
    }

    // 拷贝构造函数（深拷贝）
    String(const String &amp; s) {
        len = s.len;
        str = new char[len + 1];   // 分配新内存
        std::strcpy(str, s.str);   // 复制内容
    }

    // 赋值运算符（深拷贝）
    String &amp; operator=(const String &amp; s) {
        if (this == &amp;s)            // 检查自赋值
            return *this;
        delete [] str;              // 释放旧内存
        len = s.len;
        str = new char[len + 1];   // 分配新内存
        std::strcpy(str, s.str);   // 复制内容
        return *this;
    }

    // 析构函数
    ~String() { delete [] str; }
};</code></pre>

<h3>三法则</h3>
<p><strong>三法则（Rule of Three）</strong>指出：如果一个类需要自定义<strong>析构函数</strong>、<strong>拷贝构造函数</strong>、<strong>赋值运算符</strong>中的任何一个，那么它几乎肯定需要自定义这三个全部。这是因为需要自定义其中一个通常意味着类管理了某种资源（如动态内存），而默认的浅拷贝行为对这种资源是不安全的。</p>

<div class="key-point">
<p><strong>深拷贝</strong>为每个对象分配独立的内存并复制内容，<strong>浅拷贝</strong>仅复制指针值导致多个对象共享同一块内存。类中使用<code>new</code>时，务必遵循三法则：提供析构函数、拷贝构造函数、赋值运算符。赋值运算符必须检查自赋值并释放旧内存。<code>new</code>对应<code>delete</code>，<code>new[]</code>对应<code>delete[]</code>。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "浅拷贝对包含指针成员的类有什么问题？",
      options: ["效率太低", "多个对象共享同一块内存，可能导致重复释放", "无法编译", "只能拷贝基本类型成员"],
      answer: 1,
      explanation: "浅拷贝只复制指针的值（地址），导致多个对象的指针指向<strong>同一块内存</strong>。当其中一个对象被销毁时释放该内存，另一个对象的指针变成野指针，再次析构时会<strong>重复释放</strong>。"
    },
    {
      type: "choice",
      question: "拷贝构造函数的原型是？",
      options: ["ClassName(ClassName c)", "ClassName(const ClassName & c)", "void ClassName(const ClassName & c)", "ClassName * copy(const ClassName & c)"],
      answer: 1,
      explanation: "拷贝构造函数的原型为<code>ClassName(const ClassName &amp;)</code>。参数必须是<strong>const引用</strong>，如果按值传递会导致无限递归调用拷贝构造函数。"
    },
    {
      type: "truefalse",
      question: "如果类中使用了new分配内存，只需要提供析构函数即可安全使用该类。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "根据<strong>三法则</strong>，如果类需要自定义析构函数，几乎肯定也需要自定义拷贝构造函数和赋值运算符。只提供析构函数，拷贝和赋值时仍然使用默认的浅拷贝，会导致重复释放问题。"
    },
    {
      type: "choice",
      question: "赋值运算符为什么需要检查自赋值（<code>this == &amp;s</code>）？",
      options: ["提高效率", "防止先释放内存后又从已释放内存复制数据", "语法要求", "防止编译器报错"],
      answer: 1,
      explanation: "如果不检查自赋值，<code>a = a</code>时会先<code>delete</code>释放<code>a</code>的内存，然后试图从已释放的内存复制数据，导致<strong>未定义行为</strong>。"
    },
    {
      type: "output",
      question: "以下哪种情况会调用拷贝构造函数？<pre class=\"language-cpp\"><code>String s1(\"Hello\");\nString s2 = s1;      // 情况A\nString s3;\ns3 = s1;             // 情况B</code></pre>",
      options: ["只有A", "只有B", "A和B都调用", "都不调用"],
      answer: 0,
      explanation: "情况A用<code>s1</code>初始化新对象<code>s2</code>，调用<strong>拷贝构造函数</strong>。情况B是对已存在的对象<code>s3</code>赋值，调用<strong>赋值运算符</strong>，不是拷贝构造函数。"
    },
    {
      type: "truefalse",
      question: "<code>new char[10]</code>分配的内存应该用<code>delete</code>释放。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "使用<code>new[]</code>分配的数组内存必须用<code>delete[]</code>释放，而不是<code>delete</code>。混用会导致未定义行为。"
    },
    {
      type: "choice",
      question: "三法则包含哪三个特殊成员函数？",
      options: ["构造函数、析构函数、拷贝构造函数", "析构函数、拷贝构造函数、赋值运算符", "默认构造函数、拷贝构造函数、移动构造函数", "构造函数、友元函数、转换函数"],
      answer: 1,
      explanation: "<strong>三法则</strong>指的是：如果需要自定义<strong>析构函数</strong>、<strong>拷贝构造函数</strong>、<strong>赋值运算符</strong>中的任何一个，就应该三个都定义。"
    },
    {
      type: "choice",
      question: "赋值运算符应该返回什么类型？",
      options: ["void", "ClassName", "ClassName &", "ClassName *"],
      answer: 2,
      explanation: "赋值运算符应返回<code>ClassName &amp;</code>（对象的引用），这样可以支持<strong>链式赋值</strong>，如<code>a = b = c;</code>。"
    },
    {
      type: "truefalse",
      question: "深拷贝比浅拷贝效率更高。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "深拷贝需要分配新内存并复制数据内容，效率比浅拷贝（只复制指针）<strong>更低</strong>。但对于管理动态内存的类，深拷贝是<strong>必要的</strong>，以保证正确性。"
    },
    {
      type: "output",
      question: "以下代码有什么问题？<pre class=\"language-cpp\"><code>class Data {\n    int * arr;\npublic:\n    Data(int n) { arr = new int[n]; }\n    ~Data() { delete [] arr; }\n};\nvoid func(Data d) { /* ... */ }\nint main() {\n    Data obj(10);\n    func(obj);\n}</code></pre>",
      options: ["没有问题", "内存泄漏", "函数参数按值传递导致浅拷贝，可能重复释放内存", "数组越界"],
      answer: 2,
      explanation: "<code>func(obj)</code>按值传递，使用默认拷贝构造函数进行<strong>浅拷贝</strong>。函数结束时形参析构释放内存，之后<code>obj</code>析构再次释放同一块内存，造成<strong>重复释放</strong>。该类缺少自定义拷贝构造函数。"
    }
  ]
},
{
  id: 13,
  title: "类继承",
  description: "学习公有继承、虚函数、多态、纯虚函数和抽象类",
  content: `<h2>类继承</h2>

<h3>继承的基本概念</h3>
<p><strong>继承</strong>是面向对象编程的核心机制之一，它允许从已有的类（<strong>基类</strong>）创建新的类（<strong>派生类</strong>）。派生类继承了基类的数据成员和方法，还可以添加自己的新成员。继承建立了类之间的层级关系，实现了代码复用。</p>
<p>C++支持三种继承方式：<strong>公有继承（public）</strong>、保护继承（protected）和私有继承（private）。最常用的是公有继承，它建立<strong>is-a</strong>（是一种）关系。例如，"香蕉是一种水果"，那么<code>Banana</code>可以公有继承<code>Fruit</code>。</p>

<pre class="language-cpp"><code>// 基类
class Player {
private:
    std::string name;
    int level;
public:
    Player(const std::string &amp; n, int lv)
        : name(n), level(lv) {}
    virtual void show() const {
        std::cout &lt;&lt; "玩家: " &lt;&lt; name
                  &lt;&lt; " 等级: " &lt;&lt; level &lt;&lt; "\\n";
    }
    virtual ~Player() {}
};

// 派生类
class Warrior : public Player {
private:
    int armor;
public:
    Warrior(const std::string &amp; n, int lv, int ar)
        : Player(n, lv), armor(ar) {}  // 调用基类构造函数
    void show() const override {
        Player::show();  // 调用基类方法
        std::cout &lt;&lt; "护甲值: " &lt;&lt; armor &lt;&lt; "\\n";
    }
};</code></pre>

<h3>protected访问控制</h3>
<p><code>protected</code>成员在类外不可直接访问（与<code>private</code>相同），但派生类的成员函数可以直接访问基类的<code>protected</code>成员。这在需要让派生类访问基类内部数据时很有用，但也会削弱封装性，因此应谨慎使用。</p>

<h3>派生类构造函数</h3>
<p>派生类不能直接访问基类的私有成员，必须通过基类的公有方法（包括构造函数）来初始化基类部分。在派生类构造函数的<strong>成员初始化列表</strong>中调用基类构造函数：<code>Derived(args) : Base(baseArgs), member(val) {}</code>。如果不显式调用，编译器会调用基类的默认构造函数。</p>

<h3>虚函数与多态</h3>
<p><strong>虚函数</strong>是实现<strong>多态</strong>的关键机制。在基类中用<code>virtual</code>关键字声明的函数，可以在派生类中被<strong>重写（override）</strong>。通过<strong>基类指针或引用</strong>调用虚函数时，程序会根据对象的<strong>实际类型</strong>（而非指针/引用的类型）来决定调用哪个版本，这就是<strong>动态绑定</strong>或<strong>运行时多态</strong>。</p>
<pre class="language-cpp"><code>void displayPlayer(const Player &amp; p) {
    p.show();  // 根据实际类型调用对应版本
}

int main() {
    Player p("法师", 10);
    Warrior w("战士", 15, 80);
    displayPlayer(p);  // 调用 Player::show()
    displayPlayer(w);  // 调用 Warrior::show()
    return 0;
}</code></pre>
<p>如果<code>show()</code>不是虚函数，则两次调用都会调用<code>Player::show()</code>（静态绑定）。</p>

<h3>纯虚函数与抽象类</h3>
<p><strong>纯虚函数</strong>在声明时使用<code>= 0</code>，表示该函数没有实现，强制派生类必须提供定义。包含纯虚函数的类称为<strong>抽象类</strong>，不能创建抽象类的对象，只能作为基类使用。抽象类定义了接口规范。</p>
<pre class="language-cpp"><code>class Shape {
public:
    virtual double area() const = 0;   // 纯虚函数
    virtual void draw() const = 0;     // 纯虚函数
    virtual ~Shape() {}
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
    void draw() const override {
        std::cout &lt;&lt; "绘制圆形，面积: " &lt;&lt; area() &lt;&lt; "\\n";
    }
};</code></pre>

<div class="key-point">
<p>公有继承表示<strong>is-a</strong>关系。虚函数通过<code>virtual</code>关键字实现多态——基类指针/引用根据实际对象类型调用对应方法。纯虚函数（<code>= 0</code>）使类成为抽象类，不能实例化。基类析构函数应声明为虚函数，确保通过基类指针删除派生类对象时正确调用派生类析构函数。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "公有继承表示什么关系？",
      options: ["has-a（有一个）", "is-a（是一种）", "uses-a（使用）", "like-a（像一个）"],
      answer: 1,
      explanation: "公有继承表示<strong>is-a</strong>关系。例如\"Warrior is a Player\"，派生类对象可以在任何需要基类对象的地方使用。"
    },
    {
      type: "truefalse",
      question: "派生类可以直接访问基类的private成员。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "派生类<strong>不能</strong>直接访问基类的<code>private</code>成员，必须通过基类的公有或保护成员函数间接访问。<code>protected</code>成员可以被派生类访问。"
    },
    {
      type: "choice",
      question: "如果在派生类构造函数中没有显式调用基类构造函数，会发生什么？",
      options: ["编译错误", "调用基类的默认构造函数", "不创建基类部分", "调用基类的拷贝构造函数"],
      answer: 1,
      explanation: "如果不显式调用基类构造函数，编译器会自动调用基类的<strong>默认构造函数</strong>。如果基类没有默认构造函数，则会编译错误。"
    },
    {
      type: "choice",
      question: "以下关于虚函数的说法，哪个是正确的？",
      options: ["虚函数不能有函数体", "虚函数不能被继承", "通过基类指针调用虚函数时使用动态绑定", "虚函数必须被派生类重写"],
      answer: 2,
      explanation: "虚函数通过基类指针或引用调用时，使用<strong>动态绑定</strong>，根据对象的实际类型决定调用哪个版本。虚函数可以有函数体，可以被继承，也不强制要求派生类重写。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>class Base {\npublic:\n    virtual void speak() const {\n        std::cout &lt;&lt; \"Base\";\n    }\n};\nclass Derived : public Base {\npublic:\n    void speak() const override {\n        std::cout &lt;&lt; \"Derived\";\n    }\n};\nint main() {\n    Derived d;\n    Base &amp; ref = d;\n    ref.speak();\n}</code></pre>",
      options: ["Base", "Derived", "BaseDerived", "编译错误"],
      answer: 1,
      explanation: "<code>speak()</code>是虚函数，通过基类引用<code>ref</code>调用时使用动态绑定。<code>ref</code>引用的实际对象是<code>Derived</code>类型，因此调用<code>Derived::speak()</code>，输出<strong>Derived</strong>。"
    },
    {
      type: "truefalse",
      question: "可以创建抽象类的对象。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "抽象类（包含纯虚函数的类）<strong>不能</strong>被实例化，只能作为基类使用。必须在派生类中实现所有纯虚函数后，才能创建派生类的对象。"
    },
    {
      type: "choice",
      question: "纯虚函数的声明语法是？",
      options: ["virtual void func() {}", "virtual void func() = 0;", "pure virtual void func();", "abstract void func();"],
      answer: 1,
      explanation: "纯虚函数在虚函数声明末尾加<code>= 0</code>，语法为<code>virtual void func() = 0;</code>。"
    },
    {
      type: "choice",
      question: "为什么基类的析构函数通常应声明为虚函数？",
      options: ["提高析构效率", "防止内存泄漏", "确保通过基类指针delete派生类对象时正确调用派生类析构函数", "语法规定"],
      answer: 2,
      explanation: "如果基类析构函数不是虚函数，通过基类指针<code>delete</code>派生类对象时，只会调用基类析构函数，派生类析构函数不会被调用，可能导致<strong>资源泄漏</strong>。"
    },
    {
      type: "truefalse",
      question: "<code>override</code>关键字是C++11中引入的，用于明确表示函数是重写基类虚函数。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "<code>override</code>是C++11引入的关键字，放在派生类重写函数声明的末尾，用于让编译器检查是否确实重写了基类的虚函数，防止因函数签名不匹配而意外创建新函数。"
    },
    {
      type: "output",
      question: "如果<code>speak()</code>不是虚函数（去掉virtual），上面代码的输出会变成什么？",
      options: ["Base", "Derived", "BaseDerived", "编译错误"],
      answer: 0,
      explanation: "如果不是虚函数，则使用<strong>静态绑定</strong>。编译器根据<code>ref</code>的声明类型（<code>Base &amp;</code>）决定调用<code>Base::speak()</code>，输出<strong>Base</strong>。"
    }
  ]
},
{
  id: 14,
  title: "C++中的代码重用",
  description: "掌握包含、私有继承、多重继承、虚基类和类模板",
  content: `<h2>C++中的代码重用</h2>

<h3>包含（has-a关系）</h3>
<p>除了公有继承（is-a关系），C++还通过<strong>包含（composition）</strong>实现代码重用。包含即在一个类中使用另一个类的对象作为成员，建立<strong>has-a</strong>（有一个）关系。例如，学生"有一个"名字（string类型）和"有一组"成绩（valarray类型）。包含是最简单、最常用的代码重用方式。</p>
<pre class="language-cpp"><code>#include &lt;string&gt;
#include &lt;valarray&gt;

class Student {
private:
    std::string name;                // 包含string对象
    std::valarray&lt;double&gt; scores;   // 包含valarray对象
public:
    Student(const std::string &amp; n,
            const std::valarray&lt;double&gt; &amp; s)
        : name(n), scores(s) {}

    double average() const {
        if (scores.size() &gt; 0)
            return scores.sum() / scores.size();
        return 0;
    }

    const std::string &amp; Name() const { return name; }
};</code></pre>

<h3>私有继承</h3>
<p><strong>私有继承</strong>也可以实现has-a关系。与包含不同的是，私有继承使基类的公有成员和保护成员在派生类中变为<strong>私有</strong>成员。这意味着基类方法不会成为派生类接口的一部分。在派生类成员函数中可以使用基类方法，但外部不能通过派生类对象访问它们。通常优先使用包含而非私有继承，除非需要访问基类的保护成员或重写虚函数。</p>

<h3>多重继承</h3>
<p><strong>多重继承（MI）</strong>允许一个类从多个基类继承。多重继承的典型问题是<strong>菱形继承</strong>（钻石问题）：如果两个基类都从同一个祖先类继承，派生类会包含该祖先类的两个副本。</p>
<pre class="language-cpp"><code>class Worker {
    std::string name;
public:
    Worker(const std::string &amp; n) : name(n) {}
    virtual void show() const {
        std::cout &lt;&lt; "姓名: " &lt;&lt; name &lt;&lt; "\\n";
    }
};

class Singer : public Worker {
    int voice;
public:
    Singer(const std::string &amp; n, int v)
        : Worker(n), voice(v) {}
};

class Waiter : public Worker {
    int skill;
public:
    Waiter(const std::string &amp; n, int s)
        : Worker(n), skill(s) {}
};

// SingerWaiter继承自Singer和Waiter
// 不使用虚基类时，包含两份Worker
class SingerWaiter : public Singer, public Waiter {
public:
    SingerWaiter(const std::string &amp; n, int v, int s)
        : Singer(n, v), Waiter(n, s) {}
};</code></pre>

<h3>虚基类</h3>
<p>使用<strong>虚基类</strong>可以解决菱形继承导致的重复问题。在继承声明中使用<code>virtual</code>关键字，使得从同一虚基类继承的多个类共享该基类的单一副本。使用虚基类时，由<strong>最终派生类</strong>负责调用虚基类的构造函数。</p>

<h3>类模板</h3>
<p><strong>类模板</strong>允许用通用类型参数定义类，实现与类型无关的代码。使用<code>template &lt;class T&gt;</code>或<code>template &lt;typename T&gt;</code>定义模板参数。使用时通过<code>ClassName&lt;Type&gt;</code>指定具体类型。</p>
<pre class="language-cpp"><code>template &lt;class T&gt;
class Stack {
private:
    T items[10];
    int top;
public:
    Stack() : top(0) {}
    bool push(const T &amp; item) {
        if (top &lt; 10) { items[top++] = item; return true; }
        return false;
    }
    bool pop(T &amp; item) {
        if (top &gt; 0) { item = items[--top]; return true; }
        return false;
    }
};

// 使用模板
Stack&lt;int&gt; intStack;
Stack&lt;std::string&gt; strStack;
intStack.push(42);
strStack.push("你好");</code></pre>

<div class="key-point">
<p>包含（composition）通过将对象作为成员实现<strong>has-a</strong>关系，是最常用的代码复用方式。多重继承可能导致菱形继承问题，使用<strong>虚基类</strong>（<code>virtual</code>继承）解决。类模板使用<code>template &lt;class T&gt;</code>定义泛型类，使用时用<code>ClassName&lt;Type&gt;</code>指定类型。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "包含（composition）表示什么关系？",
      options: ["is-a", "has-a", "uses-a", "like-a"],
      answer: 1,
      explanation: "包含表示<strong>has-a</strong>（有一个）关系。例如Student类包含string对象（学生「有一个」姓名），这不同于继承的is-a关系。"
    },
    {
      type: "truefalse",
      question: "私有继承和包含都可以实现has-a关系。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "这是正确的。<strong>私有继承</strong>和<strong>包含</strong>都可以实现has-a关系。通常优先使用包含，因为它更简单直观。私有继承在需要访问保护成员或重写虚函数时使用。"
    },
    {
      type: "choice",
      question: "菱形继承（钻石问题）的核心问题是什么？",
      options: ["编译速度太慢", "派生类包含间接基类的多个副本", "无法调用基类构造函数", "运算符无法重载"],
      answer: 1,
      explanation: "在菱形继承中，如果B和C都继承A，D继承B和C，则D中会有<strong>两份A的副本</strong>，导致访问A成员时产生歧义。"
    },
    {
      type: "choice",
      question: "如何解决菱形继承导致的重复基类问题？",
      options: ["使用友元", "使用纯虚函数", "使用虚基类（virtual继承）", "使用private继承"],
      answer: 2,
      explanation: "使用<strong>虚基类</strong>（在继承声明中加<code>virtual</code>关键字）可以让多个继承路径共享同一个基类副本，解决菱形继承的重复问题。"
    },
    {
      type: "output",
      question: "以下代码能正确编译运行吗？<pre class=\"language-cpp\"><code>template &lt;class T&gt;\nclass Box {\n    T value;\npublic:\n    Box(T v) : value(v) {}\n    T get() const { return value; }\n};\nint main() {\n    Box&lt;int&gt; b(42);\n    std::cout &lt;&lt; b.get();\n}</code></pre>",
      options: ["输出42", "编译错误：模板语法错误", "编译错误：类型不匹配", "运行时错误"],
      answer: 0,
      explanation: "代码正确。<code>Box&lt;int&gt;</code>将模板参数<code>T</code>替换为<code>int</code>，<code>b</code>的<code>value</code>为42，<code>get()</code>返回42。"
    },
    {
      type: "truefalse",
      question: "<code>template &lt;class T&gt;</code>和<code>template &lt;typename T&gt;</code>的作用完全相同。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "在模板参数声明中，<code>class</code>和<code>typename</code>可以互换使用，含义完全相同。两者都表示<code>T</code>是一个类型参数。"
    },
    {
      type: "choice",
      question: "使用虚基类时，谁负责调用虚基类的构造函数？",
      options: ["直接派生类", "最终（最底层）派生类", "编译器自动处理", "不需要调用"],
      answer: 1,
      explanation: "使用虚基类时，由<strong>最终派生类</strong>负责直接调用虚基类的构造函数，中间类对虚基类构造函数的调用会被忽略。"
    },
    {
      type: "choice",
      question: "以下关于私有继承的说法，哪个是正确的？",
      options: ["基类的public成员在派生类中仍为public", "基类的public成员在派生类中变为private", "派生类无法使用基类的任何成员", "私有继承与公有继承完全相同"],
      answer: 1,
      explanation: "私有继承使基类的<code>public</code>和<code>protected</code>成员在派生类中都变为<strong>private</strong>，外部无法通过派生类对象访问它们。"
    },
    {
      type: "choice",
      question: "类模板的正确使用方式是？",
      options: ["Stack stack;", "Stack<int> stack;", "Stack(int) stack;", "template Stack stack;"],
      answer: 1,
      explanation: "使用类模板时，必须在类名后用尖括号指定具体类型，如<code>Stack&lt;int&gt;</code>。编译器据此生成特定类型的类。"
    },
    {
      type: "truefalse",
      question: "通常情况下，包含（composition）比私有继承更优先使用。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "大多数情况下优先使用<strong>包含</strong>，因为它更容易理解和维护。只有在需要访问基类的<code>protected</code>成员或需要重写基类虚函数时，才考虑使用私有继承。"
    }
  ]
},
{
  id: 15,
  title: "友元、异常和其他",
  description: "学习友元类、嵌套类、异常处理、RTTI和类型转换运算符",
  content: `<h2>友元、异常和其他</h2>

<h3>友元类</h3>
<p>除了友元函数，C++还支持<strong>友元类</strong>。如果类A声明类B为友元，则B的所有成员函数都可以访问A的私有和保护成员。友元关系是<strong>单向的</strong>（A声明B为友元不意味着A能访问B的私有成员）且<strong>不可传递</strong>。也可以只将某个类的特定成员函数声明为友元。</p>

<h3>嵌套类</h3>
<p><strong>嵌套类</strong>是在另一个类的内部声明的类。嵌套类的作用域在外部类之内，外部类之外不能直接使用。嵌套类的访问权限取决于它在外部类中声明的位置（public、private或protected区域）。嵌套类常用于实现外部类的内部细节，如链表的节点类。</p>

<h3>异常处理</h3>
<p>C++通过<code>try-catch-throw</code>机制处理异常。<code>throw</code>抛出异常，<code>try</code>块中包含可能产生异常的代码，<code>catch</code>块捕获并处理异常。异常可以是任何类型的对象，通常使用类来表示异常，以携带更多错误信息。</p>
<pre class="language-cpp"><code>#include &lt;stdexcept&gt;

double divide(double a, double b) {
    if (b == 0)
        throw std::runtime_error("除数不能为零！");
    return a / b;
}

int main() {
    try {
        double result = divide(10.0, 0);
        std::cout &lt;&lt; result &lt;&lt; "\\n";
    }
    catch (const std::runtime_error &amp; e) {
        std::cerr &lt;&lt; "错误: " &lt;&lt; e.what() &lt;&lt; "\\n";
    }
    catch (...) {
        std::cerr &lt;&lt; "未知异常\\n";
    }
    return 0;
}</code></pre>
<p>异常被抛出后，程序沿调用栈<strong>向上回溯</strong>（栈展开），依次销毁局部对象，直到找到匹配的<code>catch</code>块。<code>catch(...)</code>可以捕获任何类型的异常。</p>

<h3>RTTI（运行时类型识别）</h3>
<p><strong>RTTI</strong>允许在运行时确定对象的实际类型。C++提供三个RTTI工具：</p>
<ul>
<li><code>dynamic_cast</code>：安全地将基类指针/引用转换为派生类指针/引用。转换失败时，指针返回<code>nullptr</code>，引用抛出<code>bad_cast</code>异常。</li>
<li><code>typeid</code>：返回对象的类型信息（<code>type_info</code>对象），可获取类型名称。</li>
<li><code>type_info</code>：存储类型信息的类，支持<code>==</code>和<code>!=</code>比较。</li>
</ul>
<pre class="language-cpp"><code>class Base { public: virtual ~Base() {} };
class Derived : public Base { public: void special() {} };

void process(Base * bp) {
    Derived * dp = dynamic_cast&lt;Derived *&gt;(bp);
    if (dp != nullptr)
        dp-&gt;special();  // 安全：确认是Derived类型
    std::cout &lt;&lt; typeid(*bp).name() &lt;&lt; "\\n";
}</code></pre>

<h3>类型转换运算符</h3>
<p>C++提供了四个命名的类型转换运算符，比C风格的强制转换更安全、更明确：</p>
<ul>
<li><code>static_cast</code>：用于编译时已知合理的类型转换（如int转double、基类指针转派生类指针）。</li>
<li><code>const_cast</code>：专门用于去除或添加<code>const</code>属性。</li>
<li><code>reinterpret_cast</code>：用于底层的、不安全的位级别转换（如指针转整数）。</li>
<li><code>dynamic_cast</code>：用于运行时安全的多态类型转换。</li>
</ul>

<div class="key-point">
<p>异常处理使用<code>throw</code>抛出、<code>try</code>检测、<code>catch</code>捕获。RTTI的<code>dynamic_cast</code>可以安全地进行多态类型转换。C++的四种命名转换（<code>static_cast</code>、<code>const_cast</code>、<code>reinterpret_cast</code>、<code>dynamic_cast</code>）比C风格强制转换更安全明确。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "友元关系具有什么特点？",
      options: ["双向且可传递", "单向且不可传递", "双向但不可传递", "单向且可传递"],
      answer: 1,
      explanation: "友元关系是<strong>单向的</strong>（A声明B为友元，B不一定声明A为友元）且<strong>不可传递</strong>（A的友元的友元不是A的友元）。"
    },
    {
      type: "choice",
      question: "以下哪个语句可以捕获所有类型的异常？",
      options: ["catch(all)", "catch(exception e)", "catch(void *)", "catch(...)"],
      answer: 3,
      explanation: "<code>catch(...)</code>使用省略号<code>...</code>作为参数，可以捕获<strong>任何类型</strong>的异常。通常作为最后一个catch块使用。"
    },
    {
      type: "truefalse",
      question: "<code>dynamic_cast</code>在转换失败时（指针形式），会返回<code>nullptr</code>。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "当<code>dynamic_cast</code>用于指针类型且转换失败时，返回<code>nullptr</code>。当用于引用类型且转换失败时，抛出<code>bad_cast</code>异常。"
    },
    {
      type: "choice",
      question: "哪个类型转换运算符专门用于去除<code>const</code>属性？",
      options: ["static_cast", "dynamic_cast", "const_cast", "reinterpret_cast"],
      answer: 2,
      explanation: "<code>const_cast</code>专门用于添加或去除<code>const</code>（或<code>volatile</code>）限定符。它是唯一能改变对象const属性的转换运算符。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>try {\n    throw 42;\n} catch (int e) {\n    std::cout &lt;&lt; \"整数: \" &lt;&lt; e;\n} catch (...) {\n    std::cout &lt;&lt; \"其他\";\n}</code></pre>",
      options: ["整数: 42", "其他", "整数: 42其他", "编译错误"],
      answer: 0,
      explanation: "<code>throw 42</code>抛出一个<code>int</code>类型的异常。第一个<code>catch(int e)</code>匹配该类型，输出<strong>整数: 42</strong>。匹配后不会继续执行后续catch块。"
    },
    {
      type: "truefalse",
      question: "<code>reinterpret_cast</code>是最安全的类型转换运算符。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>reinterpret_cast</code>是<strong>最不安全</strong>的转换，它执行底层的位级别重新解释，不进行任何类型检查。<code>dynamic_cast</code>是最安全的，因为它在运行时进行类型检查。"
    },
    {
      type: "choice",
      question: "<code>dynamic_cast</code>的使用前提是什么？",
      options: ["类必须有友元函数", "类必须有至少一个虚函数", "类必须使用多重继承", "类必须是模板类"],
      answer: 1,
      explanation: "<code>dynamic_cast</code>依赖RTTI信息，而RTTI只对包含<strong>虚函数</strong>的多态类型可用。基类必须至少有一个虚函数（通常是虚析构函数）。"
    },
    {
      type: "choice",
      question: "异常抛出后的栈展开过程中会发生什么？",
      options: ["直接终止程序", "依次销毁局部对象并寻找匹配的catch", "忽略所有局部对象", "重新执行try块"],
      answer: 1,
      explanation: "栈展开过程中，程序沿调用栈向上回溯，<strong>依次调用局部对象的析构函数</strong>进行清理，直到找到匹配的<code>catch</code>块。如果没有找到匹配的catch，程序调用<code>terminate()</code>终止。"
    }
  ]
},
{
  id: 16,
  title: "string类和标准模板库",
  description: "学习string类、智能指针、STL容器、迭代器、算法和函数对象",
  content: `<h2>string类和标准模板库</h2>

<h3>string类</h3>
<p><code>std::string</code>类是C++标准库提供的字符串类，定义在<code>&lt;string&gt;</code>头文件中。它封装了字符数组的管理，自动处理内存分配和释放，比C风格字符串安全得多。string支持<code>+</code>拼接、<code>==</code>比较、<code>[]</code>访问字符、<code>size()</code>获取长度等操作。</p>

<h3>智能指针</h3>
<p>C++提供了<strong>智能指针</strong>来自动管理动态内存，避免内存泄漏。智能指针定义在<code>&lt;memory&gt;</code>头文件中：</p>
<ul>
<li><code>auto_ptr</code>（C++98，已废弃）：所有权转移语义，赋值时原指针变为空，容易导致错误。</li>
<li><code>unique_ptr</code>（C++11）：独占所有权，不允许复制，但可以通过<code>std::move()</code>转移所有权。是<code>auto_ptr</code>的安全替代品。</li>
<li><code>shared_ptr</code>（C++11）：共享所有权，使用引用计数，最后一个<code>shared_ptr</code>销毁时释放内存。</li>
</ul>
<pre class="language-cpp"><code>#include &lt;memory&gt;

// unique_ptr：独占所有权
std::unique_ptr&lt;int&gt; up1(new int(42));
// std::unique_ptr&lt;int&gt; up2 = up1;  // 错误！不能复制
std::unique_ptr&lt;int&gt; up2 = std::move(up1);  // 正确，转移所有权

// shared_ptr：共享所有权
std::shared_ptr&lt;int&gt; sp1 = std::make_shared&lt;int&gt;(100);
std::shared_ptr&lt;int&gt; sp2 = sp1;  // 引用计数变为2
std::cout &lt;&lt; *sp2 &lt;&lt; "\\n";      // 输出 100</code></pre>

<h3>STL容器</h3>
<p><strong>标准模板库（STL）</strong>是C++标准库的核心部分，提供了通用的容器、迭代器和算法。常用容器包括：</p>
<ul>
<li><code>vector</code>：动态数组，支持快速随机访问，尾部插入/删除高效。</li>
<li><code>list</code>：双向链表，任意位置插入/删除高效，不支持随机访问。</li>
<li><code>map</code>：关联容器，存储键值对，按键排序，查找效率O(log n)。</li>
<li><code>set</code>：集合容器，存储唯一值，自动排序。</li>
</ul>

<h3>迭代器</h3>
<p><strong>迭代器</strong>是STL的粘合剂，提供了统一的方式遍历不同容器。迭代器类似指针，通过<code>*</code>解引用、<code>++</code>移动到下一元素。每种容器提供<code>begin()</code>和<code>end()</code>方法返回迭代器。</p>

<pre class="language-cpp"><code>#include &lt;vector&gt;
#include &lt;map&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;

int main() {
    // vector示例
    std::vector&lt;int&gt; nums = {5, 2, 8, 1, 9};

    // 使用迭代器遍历
    for (std::vector&lt;int&gt;::iterator it = nums.begin();
         it != nums.end(); ++it) {
        std::cout &lt;&lt; *it &lt;&lt; " ";
    }
    // 输出: 5 2 8 1 9

    // map示例
    std::map&lt;std::string, int&gt; ages;
    ages["张三"] = 25;
    ages["李四"] = 30;
    for (auto &amp; pair : ages) {
        std::cout &lt;&lt; pair.first &lt;&lt; ": "
                  &lt;&lt; pair.second &lt;&lt; "\\n";
    }
    return 0;
}</code></pre>

<h3>算法与函数对象</h3>
<p>STL算法定义在<code>&lt;algorithm&gt;</code>头文件中，通过迭代器操作容器中的数据。常用算法：<code>sort</code>排序、<code>find</code>查找、<code>for_each</code>遍历执行操作、<code>count</code>计数等。<strong>函数对象（仿函数）</strong>是重载了<code>operator()</code>的类的对象，可以像函数一样被调用，常作为算法的参数。</p>
<pre class="language-cpp"><code>// 排序
std::sort(nums.begin(), nums.end());
// nums: {1, 2, 5, 8, 9}

// 使用函数对象
struct IsEven {
    bool operator()(int n) const { return n % 2 == 0; }
};
int cnt = std::count_if(nums.begin(), nums.end(), IsEven());
std::cout &lt;&lt; "偶数个数: " &lt;&lt; cnt &lt;&lt; "\\n";  // 输出: 偶数个数: 2</code></pre>

<div class="key-point">
<p><code>unique_ptr</code>独占所有权（不可复制，可移动），<code>shared_ptr</code>共享所有权（引用计数）。STL三大组件：<strong>容器</strong>存储数据、<strong>迭代器</strong>提供统一遍历接口、<strong>算法</strong>通过迭代器操作数据。函数对象通过重载<code>operator()</code>可以像函数一样调用。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "以下哪个智能指针允许多个指针共享同一块内存？",
      options: ["auto_ptr", "unique_ptr", "shared_ptr", "weak_ptr"],
      answer: 2,
      explanation: "<code>shared_ptr</code>使用<strong>引用计数</strong>机制，允许多个<code>shared_ptr</code>指向同一对象。当最后一个<code>shared_ptr</code>销毁时，自动释放内存。"
    },
    {
      type: "truefalse",
      question: "<code>unique_ptr</code>可以通过赋值运算符直接复制。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>unique_ptr</code>独占所有权，<strong>禁止复制</strong>。如果需要转移所有权，必须使用<code>std::move()</code>。"
    },
    {
      type: "choice",
      question: "以下哪个容器支持O(1)时间复杂度的随机访问？",
      options: ["list", "map", "vector", "set"],
      answer: 2,
      explanation: "<code>vector</code>基于动态数组实现，支持通过下标进行<strong>O(1)随机访问</strong>。<code>list</code>是链表，<code>map</code>和<code>set</code>是树结构，都不支持O(1)随机访问。"
    },
    {
      type: "choice",
      question: "STL的三大核心组件是什么？",
      options: ["类、对象、方法", "容器、迭代器、算法", "模板、继承、多态", "指针、引用、数组"],
      answer: 1,
      explanation: "STL的三大组件是：<strong>容器</strong>（存储数据）、<strong>迭代器</strong>（提供统一遍历接口）、<strong>算法</strong>（通过迭代器操作容器数据）。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>std::vector&lt;int&gt; v = {3, 1, 4};\nstd::sort(v.begin(), v.end());\nfor (int x : v) std::cout &lt;&lt; x;\n</code></pre>",
      options: ["314", "134", "431", "143"],
      answer: 1,
      explanation: "<code>sort</code>默认升序排序，{3, 1, 4}排序后变为{1, 3, 4}，输出<strong>134</strong>。"
    },
    {
      type: "truefalse",
      question: "<code>map</code>容器中的元素是按键自动排序的。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "<code>std::map</code>内部使用红黑树实现，元素按<strong>键（key）自动排序</strong>。如果不需要排序，可以使用<code>unordered_map</code>。"
    },
    {
      type: "choice",
      question: "函数对象（仿函数）是通过重载哪个运算符实现的？",
      options: ["operator[]", "operator()", "operator*", "operator->"],
      answer: 1,
      explanation: "函数对象通过重载<code>operator()</code>（函数调用运算符）实现，使类的对象可以像函数一样被调用。"
    },
    {
      type: "choice",
      question: "<code>auto_ptr</code>在C++11中被什么替代？",
      options: ["shared_ptr", "unique_ptr", "weak_ptr", "raw pointer"],
      answer: 1,
      explanation: "<code>auto_ptr</code>因其不安全的所有权转移语义（赋值后原指针变空）在C++11中被废弃，由更安全的<code>unique_ptr</code>替代。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>std::string s1 = \"Hello\";\nstd::string s2 = \" World\";\nstd::string s3 = s1 + s2;\nstd::cout &lt;&lt; s3.size();\n</code></pre>",
      options: ["5", "6", "11", "12"],
      answer: 2,
      explanation: "<code>\"Hello\"</code>长度5，<code>\" World\"</code>长度6（含前导空格），拼接后<code>\"Hello World\"</code>长度为<strong>11</strong>。"
    },
    {
      type: "choice",
      question: "以下哪个算法用于对容器中的每个元素执行指定操作？",
      options: ["find", "count", "for_each", "sort"],
      answer: 2,
      explanation: "<code>for_each</code>算法对指定范围内的每个元素执行给定的函数或函数对象操作。<code>find</code>用于查找，<code>count</code>用于计数，<code>sort</code>用于排序。"
    }
  ]
},
{
  id: 17,
  title: "输入、输出和文件",
  description: "学习iostream格式化、文件I/O操作、二进制读写和字符串流",
  content: `<h2>输入、输出和文件</h2>

<h3>ostream与istream</h3>
<p>C++的I/O系统建立在<strong>流（stream）</strong>的概念上。<code>ostream</code>类处理输出，<code>istream</code>类处理输入。<code>cout</code>是<code>ostream</code>的预定义对象，连接标准输出；<code>cin</code>是<code>istream</code>的预定义对象，连接标准输入。<code>&lt;&lt;</code>是插入运算符（输出），<code>&gt;&gt;</code>是提取运算符（输入）。</p>

<h3>cout格式化输出</h3>
<p>C++提供了丰富的输出格式化工具，定义在<code>&lt;iomanip&gt;</code>头文件中：</p>
<ul>
<li><code>setw(n)</code>：设置下一个输出域的最小宽度，只影响紧随其后的一个输出项。</li>
<li><code>setprecision(n)</code>：设置浮点数精度（总有效位数，或与<code>fixed</code>配合时为小数位数）。</li>
<li><code>fixed</code>：以定点表示法输出浮点数。</li>
<li><code>left</code>/<code>right</code>：设置对齐方式。</li>
<li><code>setfill(c)</code>：设置填充字符。</li>
</ul>
<pre class="language-cpp"><code>#include &lt;iostream&gt;
#include &lt;iomanip&gt;

int main() {
    double pi = 3.14159265;
    int score = 95;

    // 设置精度和定点格式
    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(2);
    std::cout &lt;&lt; "圆周率: " &lt;&lt; pi &lt;&lt; "\\n";
    // 输出: 圆周率: 3.14

    // 设置宽度和填充
    std::cout &lt;&lt; std::setw(10) &lt;&lt; std::setfill('*')
              &lt;&lt; std::right &lt;&lt; score &lt;&lt; "\\n";
    // 输出: ********95

    return 0;
}</code></pre>

<h3>文件I/O</h3>
<p>C++通过<code>&lt;fstream&gt;</code>头文件提供文件操作类：</p>
<ul>
<li><code>ofstream</code>：输出文件流，用于向文件写入数据。</li>
<li><code>ifstream</code>：输入文件流，用于从文件读取数据。</li>
<li><code>fstream</code>：文件流，支持同时读写。</li>
</ul>
<p>使用文件流的基本步骤：创建流对象、打开文件（<code>open()</code>或构造函数）、检查是否成功、读写操作、关闭文件（<code>close()</code>）。</p>
<pre class="language-cpp"><code>#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    // 写入文件
    std::ofstream outFile("data.txt");
    if (outFile.is_open()) {
        outFile &lt;&lt; "姓名: 张三\\n";
        outFile &lt;&lt; "成绩: 92\\n";
        outFile.close();
    }

    // 读取文件
    std::ifstream inFile("data.txt");
    std::string line;
    while (std::getline(inFile, line)) {
        std::cout &lt;&lt; line &lt;&lt; "\\n";
    }
    inFile.close();
    return 0;
}</code></pre>

<h3>二进制I/O</h3>
<p>文本模式下数据以字符形式存储，而<strong>二进制模式</strong>直接存储数据的内存表示，更高效且精确。打开文件时使用<code>ios::binary</code>标志，使用<code>write()</code>和<code>read()</code>方法进行二进制读写。</p>

<h3>字符串流</h3>
<p><code>&lt;sstream&gt;</code>头文件提供了字符串流类：<code>ostringstream</code>（字符串输出流）和<code>istringstream</code>（字符串输入流）。它们允许像使用<code>cout</code>/<code>cin</code>一样操作字符串，常用于格式化字符串和解析文本。</p>
<pre class="language-cpp"><code>#include &lt;sstream&gt;

// 格式化字符串
std::ostringstream oss;
oss &lt;&lt; "分数: " &lt;&lt; 95 &lt;&lt; "/" &lt;&lt; 100;
std::string result = oss.str();  // "分数: 95/100"

// 解析字符串
std::string data = "42 3.14 hello";
std::istringstream iss(data);
int n; double d; std::string s;
iss &gt;&gt; n &gt;&gt; d &gt;&gt; s;
// n=42, d=3.14, s="hello"</code></pre>

<div class="key-point">
<p><code>setw</code>只影响下一个输出项，而<code>setprecision</code>和<code>fixed</code>持续有效。文件操作使用<code>ofstream</code>写入、<code>ifstream</code>读取，操作后应检查<code>is_open()</code>和关闭文件。<code>ostringstream</code>和<code>istringstream</code>将字符串当作流处理，是格式化和解析的利器。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "<code>setw(10)</code>操纵符的特点是什么？",
      options: ["影响后续所有输出", "只影响紧随其后的一个输出项", "设置小数位数为10", "设置填充字符"],
      answer: 1,
      explanation: "<code>setw(n)</code>只影响<strong>紧随其后的一个输出项</strong>，每次使用后自动重置。这与<code>setprecision</code>和<code>fixed</code>不同，后者持续有效。"
    },
    {
      type: "choice",
      question: "以下哪个类用于从文件读取数据？",
      options: ["ofstream", "ifstream", "ostringstream", "ostream"],
      answer: 1,
      explanation: "<code>ifstream</code>（input file stream）用于从文件<strong>读取</strong>数据。<code>ofstream</code>用于写入，<code>fstream</code>支持读写。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>double x = 3.14159;\nstd::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(3) &lt;&lt; x;\n</code></pre>",
      options: ["3.14", "3.141", "3.142", "3.1415"],
      answer: 2,
      explanation: "<code>fixed</code>启用定点格式，<code>setprecision(3)</code>设置3位小数。3.14159四舍五入到3位小数为<strong>3.142</strong>。"
    },
    {
      type: "truefalse",
      question: "文件流对象的<code>close()</code>方法是可选的，程序结束时会自动关闭。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "确实如此——文件流对象的析构函数会自动调用<code>close()</code>。但<strong>显式关闭</strong>是良好的编程习惯，尤其在同一作用域内需要重新打开文件或确保数据立即写入磁盘时。"
    },
    {
      type: "choice",
      question: "<code>ostringstream</code>的主要用途是什么？",
      options: ["从文件读取数据", "向控制台输出", "将数据格式化为字符串", "进行数学运算"],
      answer: 2,
      explanation: "<code>ostringstream</code>允许使用<code>&lt;&lt;</code>运算符将各种类型的数据写入内部字符串缓冲区，然后通过<code>str()</code>获取结果字符串。主要用于<strong>格式化字符串</strong>。"
    },
    {
      type: "choice",
      question: "打开二进制文件需要使用哪个标志？",
      options: ["ios::in", "ios::out", "ios::binary", "ios::ate"],
      answer: 2,
      explanation: "使用<code>ios::binary</code>标志以二进制模式打开文件。二进制模式下数据按内存中的原始字节形式读写，不进行文本格式转换。"
    },
    {
      type: "truefalse",
      question: "<code>cin &gt;&gt;</code>可以读取包含空格的完整字符串。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>cin &gt;&gt;</code>遇到空白字符（空格、换行、制表符）时停止读取。要读取整行（包含空格），应使用<code>std::getline(cin, str)</code>。"
    },
    {
      type: "output",
      question: "以下代码中<code>result</code>的值是什么？<pre class=\"language-cpp\"><code>std::ostringstream oss;\noss &lt;&lt; 2025 &lt;&lt; \"-\" &lt;&lt; \"01\" &lt;&lt; \"-\" &lt;&lt; \"15\";\nstd::string result = oss.str();\n</code></pre>",
      options: ["2025", "01-15", "2025-01-15", "编译错误"],
      answer: 2,
      explanation: "<code>ostringstream</code>将所有通过<code>&lt;&lt;</code>插入的数据依次拼接为字符串。<code>oss.str()</code>返回<strong>\"2025-01-15\"</strong>。"
    }
  ]
},
{
  id: 18,
  title: "探讨C++新标准",
  description: "学习C++11新特性：auto、范围for、右值引用、移动语义和lambda",
  content: `<h2>探讨C++新标准</h2>

<h3>auto与decltype</h3>
<p>C++11引入了<code>auto</code>关键字用于<strong>自动类型推导</strong>。编译器根据初始化表达式自动推断变量类型，减少冗长的类型声明，特别适合STL迭代器等复杂类型。<code>decltype</code>根据表达式推导类型但不求值，常用于模板编程中声明返回类型。</p>
<pre class="language-cpp"><code>auto x = 42;          // int
auto pi = 3.14;       // double
auto name = std::string("C++");  // std::string

std::vector&lt;int&gt; nums = {1, 2, 3};
auto it = nums.begin();  // std::vector&lt;int&gt;::iterator

// decltype：推导表达式的类型
int a = 10;
decltype(a) b = 20;  // b的类型与a相同，为int</code></pre>

<h3>基于范围的for循环</h3>
<p><strong>范围for循环</strong>提供了一种简洁的方式遍历容器或数组中的每个元素。语法为<code>for (declaration : container)</code>。如果需要修改元素，使用引用；只读遍历可使用const引用以提高效率。</p>
<pre class="language-cpp"><code>std::vector&lt;int&gt; scores = {90, 85, 92, 78};

// 只读遍历
for (const auto &amp; s : scores) {
    std::cout &lt;&lt; s &lt;&lt; " ";
}
// 输出: 90 85 92 78

// 修改元素
for (auto &amp; s : scores) {
    s += 5;  // 每个成绩加5分
}</code></pre>

<h3>nullptr</h3>
<p>C++11引入<code>nullptr</code>代替C风格的<code>NULL</code>（通常定义为0）。<code>nullptr</code>是一个专门的空指针字面值，类型为<code>std::nullptr_t</code>，不会与整数类型混淆，在函数重载时可正确匹配指针参数。</p>

<h3>右值引用与移动语义</h3>
<p>C++11引入了<strong>右值引用</strong>（<code>&amp;&amp;</code>），用于标识<strong>临时对象</strong>（右值）。基于右值引用，实现了<strong>移动语义</strong>：不再复制数据，而是"窃取"临时对象的资源（如指针），然后将临时对象置为安全状态。移动语义通过<strong>移动构造函数</strong>和<strong>移动赋值运算符</strong>实现，能显著提升涉及大量资源的操作效率。</p>
<pre class="language-cpp"><code>class Buffer {
    int * data;
    size_t size;
public:
    // 移动构造函数
    Buffer(Buffer &amp;&amp; other) noexcept
        : data(other.data), size(other.size) {
        other.data = nullptr;  // 将源对象置为安全状态
        other.size = 0;
    }

    // 移动赋值运算符
    Buffer &amp; operator=(Buffer &amp;&amp; other) noexcept {
        if (this != &amp;other) {
            delete [] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
            other.size = 0;
        }
        return *this;
    }
};</code></pre>
<p><code>std::move()</code>可以将左值转换为右值引用，从而触发移动语义。</p>

<h3>Lambda表达式</h3>
<p><strong>Lambda表达式</strong>允许定义匿名函数对象，语法为<code>[捕获列表](参数列表) -&gt; 返回类型 { 函数体 }</code>。捕获列表指定Lambda可以使用的外部变量：<code>[=]</code>按值捕获所有、<code>[&amp;]</code>按引用捕获所有、<code>[x, &amp;y]</code>指定x按值捕获、y按引用捕获。</p>
<pre class="language-cpp"><code>std::vector&lt;int&gt; nums = {5, 2, 8, 1, 9};

// Lambda作为算法参数
std::sort(nums.begin(), nums.end(),
    [](int a, int b) { return a &gt; b; });
// 降序排序: {9, 8, 5, 2, 1}

// 带捕获的Lambda
int threshold = 4;
auto count = std::count_if(nums.begin(), nums.end(),
    [threshold](int n) { return n &gt; threshold; });
std::cout &lt;&lt; "大于" &lt;&lt; threshold &lt;&lt; "的个数: "
          &lt;&lt; count &lt;&lt; "\\n";  // 输出: 3</code></pre>

<h3>其他C++11特性</h3>
<p><strong>可变参数模板</strong>允许模板接受任意数量的参数，使用<code>...</code>表示参数包。<strong>initializer_list</strong>（<code>&lt;initializer_list&gt;</code>头文件）支持使用花括号初始化列表，如<code>vector&lt;int&gt; v = {1, 2, 3};</code>。</p>

<div class="key-point">
<p><code>auto</code>让编译器推导类型，减少冗长声明。范围for循环简化容器遍历。<code>nullptr</code>是类型安全的空指针。<strong>移动语义</strong>通过"窃取"资源而非复制来提升性能，使用<code>&amp;&amp;</code>定义移动构造和移动赋值。Lambda表达式<code>[捕获](参数){函数体}</code>可作为简洁的内联函数对象使用。</p>
</div>`,
  questions: [
    {
      type: "choice",
      question: "以下代码中<code>x</code>的类型是什么？<pre class=\"language-cpp\"><code>auto x = 3.14;</code></pre>",
      options: ["int", "float", "double", "auto"],
      answer: 2,
      explanation: "字面值<code>3.14</code>默认类型为<code>double</code>，<code>auto</code>推导<code>x</code>的类型为<strong>double</strong>。如果要推导为<code>float</code>，需写<code>3.14f</code>。"
    },
    {
      type: "truefalse",
      question: "<code>nullptr</code>和<code>NULL</code>在所有情况下完全等价。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "它们不完全等价。<code>NULL</code>通常定义为<code>0</code>（整数），在函数重载时可能匹配<code>int</code>参数；而<code>nullptr</code>类型为<code>std::nullptr_t</code>，只会匹配<strong>指针类型</strong>参数。"
    },
    {
      type: "choice",
      question: "右值引用使用什么符号声明？",
      options: ["&", "&&", "*", "**"],
      answer: 1,
      explanation: "右值引用使用<code>&amp;&amp;</code>声明。例如<code>int&amp;&amp; rref = 42;</code>。左值引用使用单个<code>&amp;</code>。"
    },
    {
      type: "choice",
      question: "Lambda表达式中<code>[&amp;]</code>的含义是？",
      options: ["不捕获任何变量", "按值捕获所有外部变量", "按引用捕获所有外部变量", "捕获this指针"],
      answer: 2,
      explanation: "<code>[&amp;]</code>表示按<strong>引用</strong>捕获Lambda体内使用的所有外部变量。<code>[=]</code>表示按值捕获，<code>[]</code>表示不捕获。"
    },
    {
      type: "output",
      question: "以下代码的输出是什么？<pre class=\"language-cpp\"><code>std::vector&lt;int&gt; v = {10, 20, 30};\nfor (const auto &amp; x : v)\n    std::cout &lt;&lt; x &lt;&lt; \" \";\n</code></pre>",
      options: ["10 20 30 ", "102030", "10, 20, 30", "编译错误"],
      answer: 0,
      explanation: "范围for循环依次将<code>v</code>中的每个元素绑定到<code>x</code>并输出，元素之间有空格，输出<strong>10 20 30 </strong>。"
    },
    {
      type: "choice",
      question: "移动语义的核心思想是什么？",
      options: ["复制对象的所有数据", "将对象转换为指针", "窃取临时对象的资源而非复制", "自动释放对象内存"],
      answer: 2,
      explanation: "移动语义的核心是<strong>「窃取」临时对象的资源</strong>（如动态内存的指针），避免了昂贵的深拷贝操作。移动后源对象处于有效但未定义的状态。"
    },
    {
      type: "truefalse",
      question: "<code>std::move()</code>实际上会移动数据。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "<code>std::move()</code>本身<strong>不执行任何移动操作</strong>，它只是将左值转换为右值引用（一种类型转换）。真正的移动操作由移动构造函数或移动赋值运算符完成。"
    },
    {
      type: "output",
      question: "以下Lambda表达式的输出是什么？<pre class=\"language-cpp\"><code>int a = 10, b = 20;\nauto sum = [a, b]() { return a + b; };\nstd::cout &lt;&lt; sum();\n</code></pre>",
      options: ["10", "20", "30", "编译错误"],
      answer: 2,
      explanation: "Lambda按值捕获了<code>a</code>(10)和<code>b</code>(20)，调用<code>sum()</code>返回<code>a + b = 30</code>，输出<strong>30</strong>。"
    }
  ]
}
];
