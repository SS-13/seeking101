const curry = (fn, arr = []) => (...args) =>
    ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
        ...arr,
        ...args,
    ]);

const curry1 = function (fn, arr = []) {
    return function (...args) {
        return (function (arg) {
            return arg.length === fn.length ? fn(...arg) : curry(fn, arg);
        })(...arr, ...args);
    };
};

let curryTest = curry((a, b, c, d) => a + b + c + d);

curryTest(1, 2, 3)(4); // 10
curryTest(1, 2)(4)(3); // 10
curryTest(1, 2)(3, 4); // 10
