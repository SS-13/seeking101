# 深入 call、apply 和bind
> 一些问题：
怎么利用call、apply来求一个数组中最大或者最小值
如何利用call、apply来做继承
apply、call、bind的区别和主要应用场景

## 作用
> 首先问个问题，这三个函数的存在意义是什么？答案是改变函数执行时的上下文，再具体一点就是改变函数运行时的this指向。有了这个认识，接下来我们来看一下,怎么使用这三个函数。

```javascript
function Person(name){
  this.name = name;
  }
Person.prototype = {
  constructor: Person,
  showName: function(){
    console.log(this.name);
  }
}
var person = new Person('qianlong');
person.showName(); // qianlong
```

```javascript

var animal = {
  name: 'cat'
}

// 1 call
person.showName.call(animal);
// 2 apply
person.showName.apply(animal);
// 3 bind
person.showName.bind(animal)();
```

我们拿别人的showName方法，并动态改变其上下文帮自己输出了信息，说到底就是实现了复用

## 区别

> 上面看起来三个函数的作用差不多，干的事几乎是一样的，那为什么要存在3个家伙呢，留一个不就可以。所以其实他们干的事从本质上讲都是一样的动态的改变this上下文,但是多少还是有一些差别的..

### call、apply与bind的差别
call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。

### call、apply的区别
他们俩之间的差别在于参数的区别，call和aplly的第一个参数都是要改变上下文的对象，而call从第二个参数开始以参数列表的形式展现，apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。
```javascript
fn.call(obj, arg1, arg2, arg3...);
fn.apply(obj, [arg1, arg2, arg3...]);
```

## 应用

>知道了怎么使用和他们之间的区别，接下来我们来了解一下通过call、apply、bind的常见应用场景。

### 求数组中的最大和最小值
```javascript

var arr = [34,5,3,6,54,6,-67,5,7,6,-8,687];
Math.max.apply(Math, arr);
Math.max.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);
Math.min.apply(Math, arr);
Math.min.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);
```

### 将伪数组转化为数组
> js中的伪数组(例如通过`document.getElementsByTagName`获取的元素)具有`length`属性，并且可以通过0、1、2…下标来访问其中的元素，但是没有Array中的push、pop等方法。我们可以利用call、apply来将其转化为真正的数组这样便可以方便地使用数组方法了。

```javascript
var arrayLike = {
  0: 'qianlong',
  1: 'ziqi',
  2: 'qianduan',
  length: 3
}

var arr = Array.prototype.slice.call(arrayLike);
// es6
let arr2 = Array.from(arrayLike);
```
上面arr便是一个包含arrayLike元素的真正的数组啦( 注意数据结构必须是以数字为下标而且一定要有length属性 )

### 数组追加
> 在js中要往数组中添加元素，可以直接用push方法，

```javascript
var arr1 = [1,2,3];
var arr2 = [4,5,6];
[].push.apply(arr1, arr2);
// arr1 [1, 2, 3, 4, 5, 6]
// arr2 [4,5,6]
```

### 判断变量类型
> 对于对象型的数据类型，我们可以借助call来得知他的具体类型，例如数组

```javascript
function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
  }
isArray([]) // true
isArray('qianlong') // false
```


