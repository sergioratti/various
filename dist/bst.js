"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    insert(value, data) {
        if (this.root === null) {
            this.root = new Node(value, data);
            return this.root;
        }
        else
            return this.root.insert(value, data);
    }
    traverse(list) {
        return this.root.traverse(list);
    }
    remove(value) {
        this.root = this.root.remove(value);
    }
    pop() {
        if (this.root === null)
            return null;
        if (this.root.prev === null) {
            let head = this.root;
            this.root = this.root.next;
            return head;
        }
        let head = this.root;
        let prev = head.prev;
        while (prev !== null) {
            if (prev.prev === null) {
                head.prev = prev.next;
                break;
            }
            head = prev;
            prev = head.prev;
        }
        return prev;
    }
    getMinNode() {
        if (this.root === null)
            return null;
        return this.root.minNode();
    }
    getNode(value) {
        return this.root.getNode(value);
    }
    getNextNode(value) {
        if (this.root === null)
            return null;
        let n = this.root.getNode(value);
        if (n === null)
            return null;
        if (n.next !== null)
            return n.next.minNode();
        else {
            let succ = null;
            let head = this.root;
            // Start from root and search for successor down the tree 
            while (head !== null) {
                if (value < head.value) {
                    succ = head;
                    head = head.prev;
                }
                else if (value > head.value)
                    head = head.next;
                else
                    break;
            }
            return succ;
        }
    }
    getPrevNode(value) {
        if (this.root === null)
            return null;
        let n = this.root.getNode(value);
        if (n === null)
            return null;
        if (n.prev !== null)
            return n.prev.maxNode();
        else {
            let prev = null;
            let head = this.root;
            // Start from root and search for successor down the tree 
            while (head !== null) {
                if (value > head.value) {
                    prev = head;
                    head = head.next;
                }
                else if (value < head.value)
                    head = head.prev;
                else
                    break;
            }
            return prev;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
class Node {
    constructor(value, obj) {
        this.value = value;
        this.next = null;
        this.prev = null;
        this.data = [];
        if (obj !== undefined && obj !== null)
            this.data.push(obj);
    }
    clone() {
        let n = new Node(this.value, null);
        n.data = [...this.data];
        return n;
    }
    getNode(value) {
        if (this.value === value)
            return this;
        let n = null;
        if (this.prev !== null)
            n = this.prev.getNode(value);
        if (n !== null)
            return n;
        if (this.next !== null)
            n = this.next.getNode(value);
        return n;
    }
    insert(value, obj) {
        if (value === this.value) {
            this.data.push(obj);
            return this;
        }
        else if (value > this.value) {
            if (this.next === null) {
                this.next = new Node(value, obj);
                return this.next;
            }
            else
                return this.next.insert(value, obj);
        }
        else {
            if (this.prev === null) {
                this.prev = new Node(value, obj);
                return this.prev;
            }
            else
                return this.prev.insert(value, obj);
        }
    }
    traverse(list) {
        if (this.prev !== null)
            this.prev.traverse(list);
        list.push({ value: this.value, data: this.data });
        if (this.next !== null)
            this.next.traverse(list);
    }
    minNode() {
        if (this.prev !== null)
            return this.prev.minNode();
        else
            return this;
    }
    maxNode() {
        if (this.next !== null)
            return this.next.maxNode();
        else
            return this;
    }
    remove(value) {
        if (value < this.value) {
            this.prev = this.prev.remove(value);
            return this;
        }
        else if (value > this.value) {
            this.next = this.next.remove(value);
            return this;
        }
        else {
            if (this.prev === null && this.next === null)
                return null;
            else if (this.prev === null)
                return this.next;
            else if (this.next === null)
                return this.prev;
            else {
                let minNode = this.next.minNode();
                let v = minNode.value;
                let d = Object.assign({}, minNode.data);
                let n = new Node(v, d);
                n.prev = this.prev;
                n.next = this.next.remove(v);
                return n;
            }
        }
    }
}
exports.Node = Node;
//# sourceMappingURL=bst.js.map