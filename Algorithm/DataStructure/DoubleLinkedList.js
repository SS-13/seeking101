function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.displayReverse = displayReverse;
    this.findLast = findLast;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newNode);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;

    if (newNode.next) {
        noeNode.next.prev = newNode;
    }
}
function display() {
    var currNode = this.head;
    while (!!currNode.next) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function remove(item) {
    var currNode = this.find(item);
    if (!!currNode.next) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.prev = null;
        currNOde.next = null;
    } else {
        currNode.prev.next = null;
        currNode.prev = null;
    }
}

function findLast() {
    var currNode = this.head;
    while (!currNode.next) {
        currNode = currNode.next;
    }
    return currNode;
}

function displayReverse() {
    var currNode = this.findLast();
    while (!currNode.prev) {
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}

var cities = new LinkedList();
cities.insert("first", "head");
cities.insert("sencod", "first");
cities.insert("third", "second");
cities.display();

cities.remove("second");
cities.display();

cities.displayReverse();
