function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue; // 向队尾增加一个元素
    this.dequeue = dequeue; // 删除队首元素
    this.front = front; // 读取队首的元素
    this.back = back; // 读取队尾的元素
    this.toString = toString; // 显示队列中的所有元素
    this.empty = empty; // 判断队列是否为空
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function empty() {
    return this.dataStore.length === 0;
}

function toString() {
    var reStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        reStr += this.dataStore[i] + "\n";
    }
    return reStr;
}

var q = Queue();
q.enqueue("小王");
q.enqueue("小明");
q.enqueue("小红");
console.log(q.toString());

// ========== 实现方块舞的舞伴分配问题 ==========
var manDancers = new Queue();
manDancers.enqueue("老张");
manDancers.enqueue("老王");
var womanDancers = new Queue();
womanDancers.enqueue("小红");
womanDancers.enqueue("小绿");
function getDancers() {
    return "♂" + manDancers.dequeue() + "♀" + womanDancers.dequeue();
}
console.log("第一对舞伴", getDancers());
console.log("第二对舞伴", getDancers());

// ========== 急诊 ==========
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = 0;
    for (var i = 1; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code > this.dataStore[priority].code) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var reStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        reStr +=
            this.dataStore[i].name + " code:" + this.dataStore[i].code + "\n";
    }
    return reStr;
}

var pa = new Patient("小王", 1);
var pa1 = new Patient("小张", 4);
var pa2 = new Patient("小明", 9);
var pa3 = new Patient("小红", 3);
var pa4 = new Patient("小慌", 5);

var quePatient = new Queue();
quePatient.enqueue(pa);
quePatient.enqueue(pa1);
quePatient.enqueue(pa2);
quePatient.enqueue(pa3);
quePatient.enqueue(pa4);

console.log("第一个被诊治的是：" + quePatient.dequeue());
console.log(quePatient.toString());
