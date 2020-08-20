/********************************
每日算法一练
#002 斐波那契数列

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。

f(n) = f(n-1)+ f(n-2)

解题提示
1、基本解法是递归，注意避免递归的缺陷
2、可以试试动态规划解法
********************************/ 

//解法一：递归
const Fibonacci = (n) => {
    if (n < 0) return -1;
    if (n === 1 || n === 0) return n;

    return Fibonacci(n - 1) + Fibonacci(n - 2);
};

//解法二：递归加记忆化，使用一个数组缓存计算过的值
const FibonacciMemory = (n, memory = []) => {
    if (n < 0) return -1;
    if (n === 1 || n === 0) return n;

    if (!memory[n]) {
        memory[n] =
            FibonacciMemory(n - 1, memory) + FibonacciMemory(n - 2, memory);
    }
    return memory[n];
};

//解法三：动态规划
const FibonacciDynamic = (n) => {
    if (n <= 1) {
        return n;
    }
    let i = 1,
        pre = 0,
        current = 1,
        result = 0;

    while (i++ < n) {
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
};

const num = 50;

console.time("Fibonacci");
console.log(Fibonacci(num), "Fibonacci");
console.timeEnd("Fibonacci");
console.time("FibonacciMemory");
console.log(FibonacciMemory(num), "FibonacciMemory");
console.timeEnd("FibonacciMemory");
console.time("FibonacciDynamic");
console.log(FibonacciDynamic(num), "FibonacciDynamic");
console.timeEnd("FibonacciDynamic");
