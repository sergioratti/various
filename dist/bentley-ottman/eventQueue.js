"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const splaytree_1 = __importDefault(require("splaytree"));
function createEventQueue(byY) {
    const q = new splaytree_1.default(byY);
    return {
        isEmpty: isEmpty,
        size: size,
        pop: pop,
        find: find,
        insert: insert
    };
    function find(p) {
        return q.find(p);
    }
    function size() {
        return q.size;
    }
    function isEmpty() {
        return q.isEmpty();
    }
    function insert(event) {
        // debugger;
        q.add(event.point, event);
    }
    function pop() {
        var node = q.pop();
        return node && node.data;
    }
}
exports.default = createEventQueue;
//# sourceMappingURL=eventQueue.js.map