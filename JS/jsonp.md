# 了解跨域吗，一般什么情况下会导致跨域

## 跨域行为
- **同源策略**限制、安全性考虑
- `协议`、`IP`和`端口`不一致都是跨域行为

## JSONP
> 小提示：如果你提到JSONP，面试官肯定会问你整个详细的实现过程，所以一定要搞懂JSONP的实现原理，如果不是很理解可以自己起一个Express服务实践一下。

Web前端事先定义一个用于获取跨域响应数据的回调函数，并通过没有同源策略限制的script标签发起一个请求（将回调函数的名称放到这个请求的query参数里），然后服务端返回这个回调函数的执行，并将需要响应的数据放到回调函数的参数里，前端的script标签请求到这个执行的回调函数后会立马执行，于是就拿到了执行的响应数据。

缺点： JSONP只能发起GET请求

### 如何实现一个JSONP
这里给出几个链接：
[https://segmentfault.com/a/1190000015597029](https://segmentfault.com/a/1190000015597029)
[https://zhangguixu.github.io/2016/12/02/JSONP/](https://zhangguixu.github.io/2016/12/02/JSONP/)
[https://www.cnblogs.com/iovec/p/5312464.html](https://www.cnblogs.com/iovec/p/5312464.html)

### JSONP安全性问题
#### CSRF攻击
前端构造一个恶意页面，请求JSONP接口，收集服务端的敏感信息。如果JSONP接口还涉及一些敏感操作或信息（比如登录、删除等操作），那就更不安全了。
解决方法：验证JSONP的调用来源（Referer），服务端判断Referer是否是白名单，或者部署随机Token来防御。
#### XSS漏洞
不严谨的 content-type导致的 XSS 漏洞，想象一下 JSONP 就是你请求 `http://youdomain.com?callback=douniwan`, 然后返回 `douniwan({ data })`，那假如请求 `http://youdomain.com?callback=<script>alert(1)</script>` 不就返回 `<script>alert(1)</script>({ data })`了吗，如果没有严格定义好 Content-Type（ Content-Type: application/json ），再加上没有过滤 callback 参数，直接当 html 解析了，就是一个赤裸裸的 XSS 了。

解决方法：严格定义 Content-Type: application/json，然后严格过滤 callback 后的参数并且限制长度（进行字符转义，例如<换成&lt，>换成&gt）等，这样返回的脚本内容会变成文本格式，脚本将不会执行。

#### 服务器被黑，返回一串恶意执行的代码
可以将执行的代码转发到服务端进行校验JSONP内容校验，再返回校验结果。

## CORS（跨域资款共享）

> 小提示：如果你回答跨域解决方案CORS，那么面试官一定会问你实现CORS的响应头信息`Access-Control-Allow-Origin`。

### 什么是CORS
CORS（跨域资源共享 Cross-origin resource sharing）允许浏览器向跨域服务器发出XMLHttpRequest请求，从而克服跨域问题，它需要浏览器和服务器的同时支持。

- 浏览器端会自动向请求头添加origin字段，表明当前请求来源。
- 服务器端需要设置响应头的Access-Control-Allow-Methods，Access-Control-Allow-Headers，Access-Control-Allow-Origin等字段，指定允许的方法，头部，源等信息。
- 请求分为简单请求和非简单请求，非简单请求会先进行一次OPTION方法进行预检，看是否允许当前跨域请求。

#### 简单请求
请求方法是以下三种方法之一：
- HEAD
- GET
- POST

HTTP的请求头信息不超出以下几种字段：
- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

后端的响应头信息：
- Access-Control-Allow-Origin：该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。
- Access-Control-Allow-Credentials：该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。
- Access-Control-Expose-Headers：该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。

#### 非简单请求
非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

- Access-Control-Request-Method：该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。
- Access-Control-Request-Headers：该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是X-Custom-Header。

如果浏览器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。

## JSONP和CORS的对比
- JSONP只支持GET请求，CORS支持所有类型的HTTP请求
- JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据

## 其他跨域解决方案
- Nginx反向代理
- postMessage
- document.domain
