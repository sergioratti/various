"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let contentDiv = document.getElementById('content');
let list = document.createElement('ul');
contentDiv.appendChild(list);
let s = undefined;
let start = 1;
let obs = rxjs_1.interval(1000);
let on = function () {
    start = 0;
    s = obs.subscribe((value) => {
        let li = document.createElement('li');
        li.innerHTML = `Value = ${value}`;
        list.appendChild(li);
    });
};
let off = function () {
    start = 1;
    s.unsubscribe();
    s = undefined;
};
let button = document.createElement('button');
button.innerHTML = 'Ciao';
button.onclick = function () {
    if (start === 1)
        on();
    else
        off();
};
contentDiv.appendChild(button);
//# sourceMappingURL=index.js.map