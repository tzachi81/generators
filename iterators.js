
/*  Example1: the built-in Symbole.iterator method under the hood   */
//  let str = 'abc';
//  console.log(...str); //outputs "a b c"

// stringIterator = () => {
//         let str = 'abc';
//         console.log( `The type of str[Symbol.iterator] is: ${typeof str[Symbol.iterator]}` ); //"function" (factory)
//         let iterator = str[Symbol.iterator](); //Symbol.iterator is a factory
//         debugger;
//         console.log(iterator + ''); // "[object String Iterator]"
//         console.log(iterator.next()); // { value: "a", done: false }
//         console.log(iterator.next()); // { value: "b", done: false }
//         console.log(iterator.next()); // { value: "c", done: false }
//         console.log(iterator.next()); // { value: undefined, done: true }
//     }
// stringIterator();









/*  Example2: Can object be iterable?   */
/*  ---------------------------------   */

// let obj = { "a": 1, "b": 2, "c": 3 };

// let obj = {
//     *[Symbol.iterator]() {
//         yield "a";
//         yield "b";
//         yield "c";
//     }
// }

// for (let value of obj) {
//     console.log(value);
// }