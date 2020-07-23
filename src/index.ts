import { ThreeObservable, TestObject } from './3observable/3observable'
import { interval, of } from 'rxjs'
import { tap, delay } from 'rxjs/operators'



let f = function(){

  console.log('ciao');
  let th = new ThreeObservable();
  of(1).pipe(delay(2000))
  .subscribe(value=>{
    th.next(1);
  })
  return th;

}

f().onOk(value=>{
  console.log('onok')
})

console.log('fine');



