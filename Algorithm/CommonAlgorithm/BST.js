// 二叉树（左节点比右节点小）

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMinimum = getMinimum;
    this.getMaxmun = getMaxmum;
    this.find = find;
    this.remove = remove;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }
}

function getMinimum(root) {
    var current = this.root || root;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function getMaxmum(root) {
    var current = this.root || root;
    while (current.right !== null) {
        current = current.right;
    }
    return current;
}

function find(data) {
    var current = this.root;
    while (current !== null) {
        if (current.data === data) {
            return current;
        } else if (data < current.data) {
            current = currnet.left;
        } else {
            current = current.right;
        }
    }

    return null;
}
function remove(data) {
    removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }

    if (data === node.data) {
        if (node.left === null) {
            return null;
        }
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }

        var tempNode = getMinimum(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("遍历节点");
nums.inOrder(nums.root);
console.warn("最小节点", nums.getMinimum());
console.warn("最小节点", nums.getMaxmun());

nums.remove(16);
nums.inOrder(nums.root);
