function func7() {
    console.log("func7");
    setTimeout(() => {
        console.log("func7 setTimeout");
    }, 0);
}
function func8() {
    console.log("func8");
    new Promise((res) => {
        res("func8 promise");
    }).then((data) => {
        console.log(data);
    });
}
function func9() {
    console.log("fun9");
}
function func10() {
    console.log("func10");
}
function func11() {
    console.log("func11");
    setTimeout(() => {
        console.log("func11 setTimeout");
    }, 0);
}
function func12() {
    console.log("func12");
    new Promise((res) => {
        res("func12 promise");
    }).then((data) => {
        console.log(data);
    });
}

func7();
func8();
func9();
func10();
func11();
func12();

// func1
// func2
// func3
// func4
// func5
// func6
// func2 promise
// func6 promise
// func5 setTimeout
