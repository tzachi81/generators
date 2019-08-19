
/*  Example1: ES6: generator functions with Promises */
/*  ------------------------------------------------- */

const gen = function* generator() {
    const a = yield Promise.resolve(1);
    const b = yield Promise.resolve(2);

    return a + b;
};

const iterator = gen();
iterator.next(); // { value: Promise(1), done: false }
iterator.next(); // { value: Promise(2), done: false }
iterator.next(); // { value: NaN, done: true }










/*  Example2: ES8 async/await */
/*  ------------------------------------------------- */

// const promisory = async function test() {
//     const a = await Promise.resolve(1);
//     const b = await Promise.resolve(2);

//     return a + b;
// };

// console.log ( promisory() );