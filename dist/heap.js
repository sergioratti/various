"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heap {
    constructor(f, size) {
        this.f = f;
        this.size = size ? size : Infinity;
        this.list = [];
        this.dataList = [];
    }
    push(value, data) {
        this.list.push(value);
        this.dataList.push(data);
        let childId = this.list.length;
        let parentId = (childId - childId % 2) / 2;
        while (this.f(this.list[childId - 1], this.list[parentId - 1]) === true && childId > 1) {
            this._swap(childId - 1, parentId - 1);
            childId = parentId;
            parentId = (childId - childId % 2) / 2;
        }
        if (this.list.length > this.size) {
            this.list.pop();
            this.dataList.pop();
        }
    }
    _swap(index1, index2) {
        let tmp = this.list[index1];
        this.list[index1] = this.list[index2];
        this.list[index2] = tmp;
        tmp = this.dataList[index1];
        this.dataList[index1] = this.dataList[index2];
        this.dataList[index2] = tmp;
    }
    getSize() {
        return this.list.length;
    }
    pop() {
        if (this.list.length === 0)
            return null;
        let retValue = this.list.shift();
        let retData = this.dataList.shift();
        if (this.list.length > 0) {
            let headValue = this.list.shift();
            let headData = this.dataList.shift();
            this.push(headValue, headData);
        }
        return { value: retValue, data: retData };
    }
    getList() {
        return this.list;
    }
}
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map