function List() {
    this.listSize = 0; // 列表元素个数
    this.pos = 0; // 列表当前位置
    this.dataStore = []; // 初始化一个空数组用来保存列表元素
    this.clear = clear; // 清空列表中的所有元素
    this.find = find; // 查找元素
    this.toString = toString; // 返回列表字符串形式
    this.insert = insert; // 在现有元素后面插入新元素
    this.append = append; // 在列表元素末尾增加新元素
    this.remove = remove; // 从列表中删除元素
    this.front = front; // 从列表的当前位置移动到第一个元素
    this.end = end; // 从列表的当前位置移动到最后一个元素
    this.prev = prev; // 将当前位置后移一位
    this.next = next; // 将当前位置前移一位
    this.length = length; // 列表包含元素个数
    this.currPos = currPos; // 返回列表当前位置
    this.moveTo = moveTo; // 将当前位置移动到指定位置
    this.getElement = getElement; // 显示当前元素
    this.contains = contains; // 是否包含元素
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    // 此处++应置于之前，以使返回正确索引
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataSource.slice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0; // 创建一个空数组
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

var names = new List();
names.append("小红");
names.append("小王");
names.append("小丽");
names.next();
console.log(names.getElement());

for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}
