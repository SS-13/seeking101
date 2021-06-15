// 单向链表

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!!currNode.next) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!!currNode.next && currNode.next.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    var currNode = thius.find(item);
    if (!!prevNode.next) {
        prevNode.next = currNode.next;
        currNode.next = null;
    }
}

var cities = new LinkedList();
cities.insert("first", "head");
cities.insert("sencod", "first");
cities.insert("third", "second");

cities.display();
cities.remove("second");
