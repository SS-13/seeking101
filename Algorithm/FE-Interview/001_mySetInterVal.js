/*
第 1 题：
写一个 mySetInterVal(fn, a, b)，
每次间隔 a,a+b,a+2b,...,a+nb 的时间，
然后写一个 myClear，停止上面的 mySetInterVal
*/

function mySetInterVal(fn, a, b) {
    let count = 0;
    let timer = {
        t: null,
    };
    function start() {
        timer.t = setTimeout(function () {
            fn();
            count++;

            if (timer.t) {
                start();
            }
        }, a + (count - 1) * b);
    }
    start();
    return timer;
}

function myClear(t) {
    clearTimeout(t.t);
}

const timer = mySetInterVal(
    function () {
        console.log(1);
    },
    1000,
    1000
);

setTimeout(function () {
    myClear(timer);
}, 15000);

const timer1 = mySetInterVal(
    function () {
        console.log(2);
    },
    2000,
    500
);
