# React 理念

> React 是用 JavaScript 构建快速响应的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。

## 制约快速响应的场景

-   当遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。
-   发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应

可以概括为

-   CPU 的瓶颈
-   IO 的瓶颈

## CPU 的瓶颈怎么解决的

主流浏览器刷新频率为 60Hz，即每（1000ms / 60Hz）16.6ms 浏览器刷新一次。

JS 可以操作 DOM，`GUI渲染线程`与`JS线程`是互斥的。所以 `JS 脚本执行`和`浏览器布局`、绘制不能同时执行。

在每 16.6ms 时间内，需要完成如下工作：

> JS 脚本执行 ----- 样式布局 ----- 样式绘制

当 JS 执行时间过长，超出了 16.6ms，这次刷新就没有时间执行样式布局和样式绘制了。

### 解决办法

在浏览器每一帧的时间中，预留一些时间给 JS 线程，React 利用这部分时间更新组件[源码](https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119)中，预留的初始时间是 5ms）。

当预留的时间不够用时，React 将线程控制权交还给浏览器使其有时间渲染 UI，React 则等待下一帧时间到来继续被中断的工作

## IO 的瓶颈

网络延迟是前端开发者无法解决的。如何在网络延迟客观存在的情况下，减少用户对网络延迟的感知？

React 给出的答案是将人机交互研究的结果整合到真实的 UI 中[Concurrent](https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#putting-research-into-production)

## 总结

React 为了践行“构建快速响应的大型 Web 应用程序”理念做出的努力。

其中的关键是解决 CPU 的瓶颈与 IO 的瓶颈。而落实到实现上，则需要将同步的更新变为可中断的异步更新。
