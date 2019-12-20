# 浏览器工作原理
## 简介
[参考原文](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
### 浏览器的主要功能
浏览器的主要功能就是向服务器发出请求，在浏览器窗口中展示您选择的网络资源。

### 浏览器的高层结构
1. 用户界面 
2. 浏览器引擎
3. 呈现引擎
4. 网络
5. 用户界面后端
6. JavaScript 解释器
7. 数据存储

![浏览器主要组建](../Assets/how_browser_work/browser_main_component.png)

Chrome 浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程。


## 呈现引擎
渲染引擎
浏览器（Firefox、Chrome 浏览器和 Safari）是基于两种呈现引擎构建的。Firefox 使用的是 Gecko，这是 Mozilla 公司“自制”的呈现引擎。而 Safari 和 Chrome 浏览器使用的都是 WebKit。

### 主流程

![呈现引擎的基本流程](../Assets/how_browser_work/render_engine_basic_flow.png)

解析html语句转化成DOM树，样式转化成渲染树 -> 布局 -> 绘制，是一个渐进的过程，逐步渲染页面
![webkit主流程](../Assets/how_browser_work/webkit_flow.png)
![gecko主流程](../Assets/how_browser_work/gecko.jpg)

## 解析和DOM树构建
### 解析
解析 2 + 3 - 1 这个表达式，会返回下面的树：
![数学表达式树节点](../Assets/how_browser_work/math_express_tree_node.png)

### 语法
解析是以文档所遵循的语法规则（编写文档所用的语言或格式）为基础的。所有可以解析的格式都必须对应确定的**语法**（由词汇和语法规则构成）。这称为与上下文无关的语法。人类语言并不属于这样的语言，因此无法用常规的解析技术进行解析。

### 解析器和词法分析器的组合
解析过程分为两步：词法分析和语法分析。
词法分析是将输入内容分割成大量标记的过程。
语法分析是应用语言的语法规则的过程。

**词法分析器**（有时也称为标记生成器），负责将输入内容分解成一个个有效标记；而**解析器**负责根据语言的语法规则分析文档的结构，从而构建解析树。
![从源文档到解析树](../Assets/how_browser_work/analysis_parse_tree.png)
解析是一个迭代的过程

### 翻译
![编译过程](../Assets/how_browser_work/parsing_progress.png)

### DOM
解析器的输出“解析树”是由 DOM 元素和属性节点构成的树结构。
DOM 是文档对象模型 (Document Object Model) 的缩写。
它是 HTML 文档的对象表示，同时也是外部内容（例如 JavaScript）与 HTML 元素之间的接口。
解析树的根节点是“Document”对象。
![DOM树](../Assets/how_browser_work/DOM_tree.png)

### 解析算法
![HTML解析流程](../Assets/how_browser_work/HTML_parsing.png)
### 标记化算法
```html
<html>
  <body>
    Hello world
  </body>
</html>
```
初始状态是数据状态。遇到字符 < 时，状态更改为“标记打开状态”。接收一个 a-z 字符会创建“起始标记”，状态更改为“标记名称状态”。这个状态会一直保持到接收 > 字符。在此期间接收的每个字符都会附加到新的标记名称上。在本例中，我们创建的标记是 html 标记。

遇到 > 标记时，会发送当前的标记，状态改回“数据状态”。<body> 标记也会进行同样的处理。目前 html 和 body 标记均已发出。现在我们回到“数据状态”。接收到 Hello world 中的 H 字符时，将创建并发送字符标记，直到接收 </body> 中的 <。我们将为 Hello world 中的每个字符都发送一个字符标记。

现在我们回到“标记打开状态”。接收下一个输入字符 / 时，会创建 end tag token 并改为“标记名称状态”。我们会再次保持这个状态，直到接收 >。然后将发送新的标记，并回到“数据状态”。</html> 输入也会进行同样的处理。
![对示例输入进行标记化](../Assets/how_browser_work/input_label.png)
### 树构建算法
![HTML构建树](../Assets/how_browser_work/HTML_tree_build.png)
### 解析结束后的操作
浏览器会将文档标注为交互状态，并开始解析那些处于“deferred”模式的脚本
### 浏览器的容错机制
您在浏览 HTML 网页时从来不会看到“语法无效”的错误。这是因为浏览器会纠正任何无效内容，然后继续工作。

### CSS 解析
这表示一个规则集就是一个选择器，或者由逗号和空格（S 表示空格）分隔的多个（数量可选）选择器。规则集包含了大括号，以及其中的一个或多个（数量可选）由分号分隔的声明。
### WebKit CSS 解析器
![解析CSS](../Assets/how_browser_work/parsing_CSS.png)
### 处理脚本和样式表的顺序
#### 脚本
网络的模型是同步的。网页作者希望解析器遇到 <script> 标记时立即解析并执行脚本。文档的解析将停止，直到脚本执行完毕。如果脚本是外部的，那么解析过程会停止，直到从网络同步抓取资源完成后再继续。此模型已经使用了多年，也在 HTML4 和 HTML5 规范中进行了指定。作者也可以将脚本标注为“defer”，这样它就不会停止文档解析，而是等到解析结束才执行。HTML5 增加了一个选项，可将脚本标记为异步，以便由其他线程解析和执行。
#### 预解析
WebKit 和 Firefox 都进行了这项优化。在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。请注意，预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。

#### 样式表
Firefox 在样式表加载和解析的过程中，会禁止所有脚本。而对于 WebKit 而言，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，它才会禁止该脚本。

## 呈现树构建
在 DOM 树构建的同时，浏览器还会构建另一个树结构：呈现树。这是由可视化元素按照其显示顺序而组成的树，也是文档的可视化表示。它的作用是让您按照正确的顺序绘制内容。
```TS
// WebKits RenderObjec
class RenderObject{
  virtual void layout();
  virtual void paint(PaintInfo);
  virtual void rect repaintRect();
  Node* node;  //the DOM node
  RenderStyle* style;  // the computed style
  RenderLayer* containgLayer; //the containing z-index layer
}
```
```TS
RenderObject* RenderObject::createObject(Node* node, RenderStyle* style)
{
    Document* doc = node->document();
    RenderArena* arena = doc->renderArena();
    ...
    RenderObject* o = 0;

    switch (style->display()) {
        case NONE:
            break;
        case INLINE:
            o = new (arena) RenderInline(node);
            break;
        case BLOCK:
            o = new (arena) RenderBlock(node);
            break;
        case INLINE_BLOCK:
            o = new (arena) RenderBlock(node);
            break;
        case LIST_ITEM:
            o = new (arena) RenderListItem(node);
            break;
       ...
    }

    return o;
}
```

### 呈现树和 DOM 树的关系
![呈现树](../Assets/how_browser_work/render_tree.png)

## 布局
呈现器在创建完成并添加到呈现树时，并不包含位置和大小信息。计算这些值的过程称为布局或重排。

### Dirty 位系统
如果某个呈现器发生了更改，或者将自身及其子代标注为“dirty”，则需要进行布局。

### 全局布局和增量布局
全局布局是指触发了整个呈现树范围的布局，触发原因可能包括：
1. 影响所有呈现器的全局样式更改，例如字体大小更改。
2. 屏幕大小调整

![增量布局](../Assets/how_brower_work/dirty_render.png)
### 布局处理
1. 父呈现器确定自己的宽度。
2. 父呈现器依次处理子呈现器，并且：
    1. 放置子呈现器（设置 x,y 坐标）。
    2. 如果有必要，调用子呈现器的布局（如果子呈现器是 dirty 的，或者这是全局布局，或出于其他某些原因），这会计算子呈现器的高度。
3. 父呈现器根据子呈现器的累加高度以及边距和补白的高度来设置自身高度，此值也可供父呈现器的父呈现器使用。
4. 将其 dirty 位设置为 false。



## 绘制
在绘制阶段，系统会遍历呈现树，并调用呈现器的“paint”方法，将呈现器的内容显示在屏幕上。绘制工作是使用用户界面基础组件完成的。

### 全局绘制和增量绘制
绘制也分为全局（绘制整个呈现树）和增量两种。在增量绘制中，部分呈现器发生了更改，但是不会影响整个树。更改后的呈现器将其在屏幕上对应的矩形区域设为无效，这导致 OS 将其视为一块“dirty 区域”，并生成“paint”事件。OS 会很巧妙地将多个区域合并成一个。在 Chrome 浏览器中，情况要更复杂一些，因为 Chrome 浏览器的呈现器不在主进程上。

### 绘制顺序
1. 背景颜色
2. 背景图片
3. 边框
4. 子代
5. 轮廓

## 动态变化
在发生变化时，浏览器会尽可能做出最小的响应。因此，元素的颜色改变后，只会对该元素进行重绘。元素的位置改变后，只会对该元素及其子元素（可能还有同级元素）进行布局和重绘。添加 DOM 节点后，会对该节点进行布局和重绘。一些重大变化（例如增大“html”元素的字体）会导致缓存无效，使得整个呈现树都会进行重新布局和绘制。

## 呈现引擎的线程
呈现引擎采用了单线程。几乎所有操作（除了网络操作）都是在单线程中进行的。在 Firefox 和 Safari 中，该线程就是浏览器的主线程。而在 Chrome 浏览器中，该线程是标签进程的主线程。
网络操作可由多个并行线程执行。并行连接数是有限的（通常为 2 至 6 个，以 Firefox 3 为例是 6 个）。

### 事件循环
浏览器的主线程是事件循环。它是一个无限循环，永远处于接受处理状态，并等待事件（如布局和绘制事件）发生，并进行处理。这是 Firefox 中关于主事件循环的代码：
```TS
while (!mExiting)
    NS_ProcessNextEvent(thread);
```

## CSS2 可视化模型

### 画布
“画布”这一术语是指“用来呈现格式化结构的空间”，也就是供浏览器绘制内容的区域。画布的空间尺寸大小是无限的，但是浏览器会根据视口的尺寸选择一个初始宽度。

### CSS 框模型
针对文档树中的元素而生成，并根据可视化格式模型进行布局的矩形框。
![css2框模型](../Assets/how_browser_work/css2_frame_module.jpg)

### 定位方案

1. 普通：根据对象在文档中的位置进行定位，也就是说对象在呈现树中的位置和它在 DOM 树中的位置相似，并根据其框类型和尺寸进行布局。
2. 浮动：对象先按照普通流进行布局，然后尽可能地向左或向右移动。
3. 绝对：对象在呈现树中的位置和它在 DOM 树中的位置不同。


