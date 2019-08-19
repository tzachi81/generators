# Generators and Iterators in JavaScript


## What are iterators?
--------------------
**Iterator -  "iterator is an object which defines a sequence and potentially a return value upon its termination." (MDN web docs)**

1. Iterable protocol:
    - for..in  - for enumerable properties (including Object data type).
    - for..of is a method, introduced in ES2015, for iterating over "iterable collections".
        These are the objects/ data-types that have a [Symbol.iterator] property:
        - built-in iterables: Array, TypedArray, String, Map, Set.
        The for..of loop doesn't work with Objects because they are not "iterable", and therefore don't have a [Symbol.iterator] property
2. Iterator protocol:
    An object is an iterator when it implements a next() method:
    next() - returns an object with at least two properties:
        done(bool) - indicates if passed all iterables
        value(any) - returns the current iterable value, undefined for the value of {done: true}

Reference: 
    [https://bitsofco.de/for-in-vs-for-of/](https://bitsofco.de/for-in-vs-for-of/)


## Generator object and generator functions
--------------------
1.  Generator functions are iterator protocol functions that can break the 'Run-to-completion' paradigm.
    Their context will be saved across the program runtime.
    Calling a generator function does not execute its body immediately, but retuns a Generator object instead.
    to execute its body, you have to call the .next() method by its object reference.
    * show Example1 in generators.js
2.  generator functions can get and pass values with a two-way communication using [yield] and [next()] :
    "The yield keyword is used to pause and resume a generator function *()". (from: MDN web docs)
    yield returns an IteratorResult object with two properties, value and done:
        yield passes its next value to next() method or gets a value, if calling next() with an argument: next(arg).
    next() calls the first function body's yield expression and returns an object with the yielded value and done boolean value.
    * show Example2 in generators.js
3.  The yield* expression is used to delegate to another generator or iterable object.
    * show Example3 in generators.js 
4.  A return statement in the function generator will make it finish (done: true).
    A throw exception in the function generator will make it finish (done: true).

References:
    [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
    [https://medium.com/javascript-scene/](https://medium.com/javascript-scene/)[the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435](the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435)


## Async/Await vs. Generators with Promises
**Without generators, async functions are very difficult to handle**

1.  ES6 introduced us generators and promises, and ES8 introduced us async/await.
2.  So, why do we need to understand promises and generators?
    - supporting older platforms.
    - running on older browser versions or older Node.js versions.
3.  browsers also implement async functions in a similar way:
    they transform the async code to use generators and promises, quite similar to Babel.
4. generator functions can yield promises


Reference: 
    [https://hackernoon.com/async-await-generators-promises-51f1a6ceede2](https://hackernoon.com/async-await-generators-promises-51f1a6ceede2)
    [https://hackernoon.com/using-javascript-generator-and-promises-77d7dc977](https://hackernoon.com/using-javascript-generator-and-promises-77d7dc977)
    [https://www.promisejs.org/generators/](https://www.promisejs.org/generators/)
