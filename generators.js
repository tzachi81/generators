/* Exapmle1: pass value from yield to .next();*/
/*-------------------------------------------*/
function countToX(x) {
    for (let i = 0; i < x; i++) {
        console.log('From countToX function: ' + (i + 1));
    }
}

function* gen() {
    var num = 0;
    while (num < 2) {
        yield num + 1; // yield holds the next value and pauses its generator function until next() is called.
        num++;
    }
}

const iterator = gen(); // [Generator object gen] from the function * gen().
console.log(iterator.next()); //{ value: 0, done: false }
countToX(5);
console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next()); //{ value: undefined, done: true }










/* Exapmle2: pass value from next() to yield */
// /*-------------------------------------------*/
// function* gen() {
//     let num = 0;
//     console.log(yield, num);
//     console.log(yield, num + 1);
// }

// const iterator = gen();
// iterator.next();
// iterator.next("Number zero").value;
// iterator.next("Number one").value;
// debugger;










/* Exapmle3: using yield* to point another generator function's yield value */
/*--------------------------------------------------------------------------*/

// function* func1() {
//     yield 42;
// }

// function* func2() {
//     yield* func1();
// }

// const iterator = func2();
// console.log(iterator.next().value); // outputs: 42