"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ThreeObservable {
    constructor() {
        this.bsOk = new rxjs_1.BehaviorSubject(2);
        this.bsNo = new rxjs_1.BehaviorSubject(2);
        this.bsCancel = new rxjs_1.BehaviorSubject(2);
    }
    onOk(f) {
        this.bsOk
            .pipe(operators_1.filter(value => value !== 2))
            .subscribe((value) => { f(value); });
        return this;
    }
    onNo(f) {
        this.bsNo
            .pipe(operators_1.filter(value => value !== 2))
            .subscribe((value) => { f(value); });
        return this;
    }
    onCancel(f) {
        this.bsCancel
            .pipe(operators_1.filter(value => value !== 2))
            .subscribe((value) => { f(value); });
        return this;
    }
    next(value) {
        switch (value) {
            case 1:
                this.bsOk.next(1);
                break;
            case 0:
                this.bsNo.next(1);
                break;
            case -1:
                this.bsCancel.next(1);
                break;
        }
    }
}
exports.ThreeObservable = ThreeObservable;
class TestObject {
    constructor(th) {
        this.name = 'pipppo';
        th.onOk((value) => {
            console.log(`${this.name} : onOk ${value}`);
        })
            .onNo((value) => {
            console.log(`${this.name} : onNo ${value}`);
        })
            .onCancel((value) => {
            console.log(`${this.name} : onCancel ${value}`);
        });
    }
}
exports.TestObject = TestObject;
//# sourceMappingURL=3observable.js.map