function func1() {
    console.log("func1");
    setTimeout(() => {
        console.log("func1 setTimeout");
    }, 0);
}
function func2() {
    console.log("func2");
    new Promise((res) => {
        res("func2 promise");
    }).then((data) => {
        console.log(data);
    });
}
function func3() {
    console.log("func3");
}
function func4() {
    console.log("func4");
}
function func5() {
    console.log("func5");
    setTimeout(() => {
        console.log("func5 setTimeout");
    }, 0);
}
function func6() {
    console.log("func6");
    new Promise((res) => {
        res("func6 promise");
    }).then((data) => {
        console.log(data);
    });
}

func1();
func2();
func3();
func4();
func5();
func6();

// func1
// func2
// func3
// func4
// func5
// func6
// func2 promise
// func6 promise
// func5 setTimeout
