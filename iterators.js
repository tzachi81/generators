
/*  Example1: the built-in Symbole.iterator method under the hood   */
/*  ---------------------------------   */
var str = new String("Hello World!");
for (let c of str){
    console.log(c); //output
}

/*  Example1.2: */
/*  ---------------------------------   */
 var str = 'Hello World';
 console.log(...str); // outputs: "H e l l o  W o r l d !"

/*  Example1.3: */
var iterator = str[Symbol.iterator]();

console.log(iterator.next().value);	// "H"
console.log(iterator.next().value);	// "e"
console.log(iterator.next().value);	// "l"
// //.. and so on until done: true


/*  Example2: Can object be iterable? (yes)  */
/*  ---------------------------------   */
// let obj = { 1: "a", 2: "b", 3: "c" };
// for (let value of obj) {
//     console.log(value);
// }


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