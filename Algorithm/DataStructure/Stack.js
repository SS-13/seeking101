function Stack() {
    this.dataStore = []; // 保存栈内元素
    this.top = 0; // 标记可以插入新元素的位置，栈内压入元素该变量变大，弹出元素变量减小
    this.push = push; // 入栈操作
    this.pop = pop; // 出栈操作
    this.peek = peek; // 返回栈顶元素
    this.clear = clear; // 清空栈
    this.length = length; // 栈的长度
}

// 向栈中压入元素，同时让指针top+1，一定注意++
function push(element) {
    this.dataStore[this.top++] = element;
}

// 出栈操作，同时将top-1
function pop() {
    return this.dataStore[--this.top];
}

// 返回栈顶元素，变量top值减1，返回不删除
function peek() {
    return this.dataStore[this.top - 1];
}

// 返回栈内元素个数
function length() {
    return this.top;
}

// 清空一个栈
function clear() {
    this.top = 0;
}

var s = new Stack();
s.push("小红第一");
s.push("小李第二");
s.push("小芳第三");
console.log("栈的长度", s.length());
console.log("栈顶", s.peek());

// ============ 回文算法 1001 racecar ============ //
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = "";
    console.log(s);
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (rword === word) {
        return true;
    } else {
        return false;
    }
}

var word = "racecar";
console.log("是否回文：", isPalindrome(word));
