

// // doc get elem
// //doc get query sel doesn't work



// // node index.toJSON()
// console.log('Hello from Node.js')
// let a;
// a = 9
// console.log(a)

// function test() {
//     console.log(11111)
// }

// test()

// const b = () => console.log('work')

// b()

// const c = [1, 3, 5, 7];
// console.log(c[2])




// modules
// can attach objects and arrays
// functions and classes are put separately
const config = require('./config');     // can do without .js because we can add JSON files too
const config2 = require('./config2')
const fun = require('./fun')
const fun2 = require('./folder/index')
console.log('node --------------------- ok')
console.log(config)     // { a: 3, d: 6 } from config.js

console.log(config2)    // [ 5, 6, 7, 8 ]

console.log(fun(2, 3)) // 9 (a++ * b)

console.log(config.fun(3,4)) // -1


// bad idea to put everything in one folder

console.log(fun2(4))    // 36