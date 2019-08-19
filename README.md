# Generators and Iterators in JavaScript

## Main points covered in this document
- iterable objects and the iterator protocol
- generator functions and generator object
- generator functions with promises and their late ES8 edtion: async/await.


## 1. What are iterators?
--------------------
**"iterator is an object which defines a sequence and potentially a return value upon its termination." (MDN web docs)**

### Iterable protocol
- **for..in** loop is for enumerable properties (including Object data type) - they return their object keys.
- **for..of** loop is a method, introduced in ES2015, for iterating over "iterable collections" - they return their object values.
- These are the objects/ data-types that have a [Symbol.iterator] property:
    built-in iterables: Array, TypedArray, String, Map, Set. 
- **The for..of loop doesn't work with Objects because they are not "iterable", and therefore don't have a [Symbol.iterator] property.**

### Iterator protocol
An object is an iterator when it implements a next() method:
- next() - returns an object with at least two properties:
    - done(bool) - indicates if passed all iterables
    - value(any) - returns the current iterable value, undefined for the value of {done: true}.
   
"The yield keyword is used to pause and resume a generator function *()". (from: MDN web docs)

Reference:

- [https://bitsofco.de/for-in-vs-for-of/](https://bitsofco.de/for-in-vs-for-of/)


## 2. Generator object and generator functions
--------------------
- Generator functions are iterator protocol functions that can break the 'Run-to-completion' paradigm.
- Calling a generator function does not execute its body immediately, but retuns a Generator object instead.
    to execute its body, you have to call the .next() method by its object reference.
- Generator functions can get and pass values with a two-way communication using [yield] and [next()].
- The yield* expression is used to delegate to another generator or iterable object.
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

ES6 introduced us generators and promises, and ES8 introduced us a more elegant way to use it - async/await. 
### So, why do we need to understand promises and generators?
- supporting older platforms.
- running on older browser versions or older Node.js versions.

browsers also implement async functions in a similar way:
- they transform the async code to use generators and promises, quite similar to Babel.
Generator functions can yield promises.


References:

- [https://hackernoon.com/async-await-generators-promises-51f1a6ceede2](https://hackernoon.com/async-await-generators-promises-51f1a6ceede2)
- [https://hackernoon.com/using-javascript-generator-and-promises-77d7dc977](https://hackernoon.com/using-javascript-generator-and-promises-77d7dc977)
- [https://www.promisejs.org/generators/](https://www.promisejs.org/generators/)

## 4. Further reading:
[You-Dont-Know-JS, Async and Performance, Chapter4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch4.md)
