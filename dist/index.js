"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _3observable_1 = require("./3observable/3observable");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let f = function () {
    console.log('ciao');
    let th = new _3observable_1.ThreeObservable();
    rxjs_1.of(1).pipe(operators_1.delay(2000))
        .subscribe(value => {
        th.next(1);
    });
    return th;
};
f().onOk(value => {
    console.log('onok');
});
console.log('fine');
//# sourceMappingURL=index.js.map