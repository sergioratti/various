"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SweepEvent {
    constructor(point, segment) {
        this.point = point;
        if (segment)
            this.from = [segment];
    }
}
exports.default = SweepEvent;
//# sourceMappingURL=sweepevent.js.map