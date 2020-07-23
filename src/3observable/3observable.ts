import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";

export class ThreeObservable {

    private bsOk:BehaviorSubject<number> = new BehaviorSubject(2);
    private bsNo:BehaviorSubject<number> = new BehaviorSubject(2);
    private bsCancel:BehaviorSubject<number> = new BehaviorSubject(2);

    constructor() {

    }

    onOk(f) {
        this.bsOk
        .pipe(filter(value=>value!==2))
        .subscribe((value)=>{f(value)})
        return this;
    }

    onNo(f) {
        this.bsNo
        .pipe(filter(value=>value!==2))
        .subscribe((value)=>{f(value)})
        return this;
    }

    onCancel(f) {
        this.bsCancel
        .pipe(filter(value=>value!==2))
        .subscribe((value)=>{f(value)})
        return this;
    }


    next(value: number) {
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

export class TestObject {
    private name = 'pipppo';
    constructor(th: ThreeObservable) {

        th.onOk(
            (value) => {
                console.log(`${this.name} : onOk ${value}`)
            }
        )
            .onNo(
                (value) => {
                    console.log(`${this.name} : onNo ${value}`)
                }
            )
            .onCancel(
                (value) => {
                    console.log(`${this.name} : onCancel ${value}`)
                }
            )
    }
}