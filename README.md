# Generators and Iterators in JavaScript

## Main points covered in this document
- iterable data types and objects and the iterator protocol
- generator functions and generator object
- generator functions with promises and their late ES8 edtion: async/await.


## 1. What are iterators?
--------------------
**"iterator is an object which defines a sequence and potentially a return value upon its termination." (MDN web docs)**

### Iterable data types and objects
- **for..in** loop is for enumerable properties (including Object data type) - they return their object *keys*.
- **for..of** loop is a method, introduced in ES2015, for iterating over "iterable collections" - they return their object *values*.
- These are the objects/data-types that have a [Symbol.iterator] function built-in: Array, TypedArray, String, Map, Set. 
- *for..of* loop won't work with Objects because they are not "iterable", hence, don't have the [Symbol.iterator] property by default.

### Iterator protocol
An object is an iterator when it implements a next() method:
- next() - returns an object with at least two properties:
    - done(bool) - indicates if passed all iterables
    - value(any) - returns the current iterable value, undefined for the value of {done: true}.
    ```js
    {value: "someValue", done: false}   // Example for iterator's return object while in sequence.
    {value: undefined, done: true}  // Example for iterator's return object when the sequence is done no more values to yield).

Reference:

- [https://bitsofco.de/for-in-vs-for-of/](https://bitsofco.de/for-in-vs-for-of/)


## 2. Generator object and generator functions
--------------------
- Generator functions are iterator protocol functions that can break the 'Run-to-completion' paradigm.
- Calling a generator function does not execute its body immediately, but retuns a Generator object instead.
    to execute its body, you have to call the .next() method by its object reference, like so:
    ```js
    //gen(), A.K.A the generator function, will return a generator object rather than executing the function's body:
    let iterator = gen(); 
    // calling the .next() method will start the generator function's body execution until it will hit the next yield expression.
    iterator.next();    
    ```
- Generator functions can get and pass values with a two-way communication using *yield* and *next()*.
"The yield keyword is used to pause and resume a generator function *()". (from: MDN web docs)
- The *yield** expression is used to delegate to another generator or iterable object. 
- A return statement in the function generator will make it finish (done: true).
- A throw exception in the function generator will make it finish (done: true).
  
**Question: Is a generator object an iterator or an iterable?**

**Answer: An iterator object is both iterator and iterable**

References:

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [https://medium.com/javascript-scene/](https://medium.com/javascript-scene/)
- [the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435](the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435)


## 3. Async/Await vs. Generators with Promises
**"Without generators, async functions are very difficult to handle."**

ES6 introduced us generators and promises, and ES8 introduced us a more elegant way to use it with *async/await*. 
### Why do we need to understand promises and generators?
- Supporting older platforms.
- Running on older browser versions or older Node.js versions.
- Debugging potentially backwards compatibility compilers (like 'babel') issues with async functions.

browsers also implement async functions in a similar way:
- they transform the async code to use generators and promises, quite similar to Babel.
The early use of async/await iES6 was done by using Generator functions that yielded promises.

**The ES6 way to use async functions was by combining genrator functions with promises:**
```js
const gen = function* generator() {
    const a = yield Promise.resolve(1);
    const b = yield Promise.resolve(2);

    return a + b;
};

const iterator = gen();
console.log(iterator.next()); // { value: Promise(1), done: false }
console.log(iterator.next()) // { value: Promise(2), done: false }
console.log(iterator.next()) // { value: NaN, done: true }
```

**In ES8 it can be translated to a more elegant code with async/await**
```js
const promisory = async function test() {
    const a = await Promise.resolve(1);
    const b = await Promise.resolve(2);

    return a + b;

};
```


References:

- [https://hackernoon.com/async-await-generators-promises-51f1a6ceede2](https://hackernoon.com/async-await-generators-promises-51f1a6ceede2)
- [https://hackernoon.com/using-javascript-generator-and-promises-77d7dc977](https://hackernoon.com/using-javascript-generator-and-promises-77d7dc977)
- [https://www.promisejs.org/generators/](https://www.promisejs.org/generators/)

## 4. Further reading:
[You-Dont-Know-JS, Async and Performance, Chapter4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch4.md)
