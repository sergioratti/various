"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heap {
    constructor(f, size) {
        this.f = f;
        this.size = size ? size : Infinity;
        this.list = [];
    }
    insert(value) {
        this.list.push(value);
        let childId = this.list.length;
        let parentId = (childId - childId % 2) / 2;
        while (this.f(this.list[childId - 1], this.list[parentId - 1]) === true && childId > 1) {
            let tmp = this.list[childId - 1];
            this.list[childId - 1] = this.list[parentId - 1];
            this.list[parentId - 1] = tmp;
            childId = parentId;
            parentId = (childId - childId % 2) / 2;
        }
        if (this.list.length > this.size) {
            this.list.pop();
        }
    }
    getSize() {
        return this.list.length;
    }
    remove() {
        if (this.list.length === 0)
            return null;
        let retValue = this.list.shift();
        if (this.list.length > 0) {
            let headValue = this.list.shift();
            this.insert(headValue);
        }
        return retValue;
    }
    getList() {
        return this.list;
    }
}
exports.Heap = Heap;
//# sourceMappingURL=maxheap.js.map