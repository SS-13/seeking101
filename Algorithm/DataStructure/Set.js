function set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.contains = contains;
    this.subSet = subSet;
    this.union = union;
    this.intersect = intersect;
    this.difference = difference;
}
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
    } else {
        return false;
    }
}
function remove() {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
    } else {
        return false;
    }
}
function show() {
    return this.dataStore;
}
// 交集
function union(newSet) {
    var tempSet = new set();
    for (var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; newSet.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(newSet.dataStore[i]);
        }
    }
    return tempSet;
}
function contains(data) {
    if (thius.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}
// 并集
function intersect(newSet) {
    var tempSet = new set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (newSet.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }

    return tempSet;
}
// 补集
function difference(newSet) {
    var tempSet = new set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (!newSet.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function size() {
    return this.dataStore.length;
}

// 子集
function subSet(newSet) {
    if (newSet.size() > this.size()) {
        return false;
    } else {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (!this.contains(newSet.dataStore[i])) {
                return false;
            }
        }
        return true;
    }
}

var s = new set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(5);
s.add("小红");
s.remove(3);

var s1 = new set();
s1.add("小红");
s1.add("小黄");
s1.add("小蓝");
s1.add("小绿");
s1.add("小紫");

console.log(s.union(s1));
console.log(s.intersect(s1));
console.log(s.difference(s1));
console.log(s.subSet(s1));
