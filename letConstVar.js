// let and const are block scoped and var is functional scope
//scope a region of a where a defined variable exists and can be recognised
//global ,functional block scopes are different types 
// {
//     var a =10 // when logs outside block gives result
//     let b=5  // same with when logs outside block gives error referenceError: b is not defined
// }
// console.log(a)
// console.log(b)

// variable shadowing

// {
//     var a=10
//     let b=22
//     if(true){
//         let a="HII"
//         var b="Helloo" // b has already declared
//         console.log(a)
//         console.log(b) // b has already declared 
//     }
// }

// var a =0;
var a =9;
// we can re-dclare var variable as many time but cannot redclare let and for const will get missing declaration
// let a=88;
// let a;

console.log(a)

let b;  // can declare let with out initializing 
// re initialization can be done for var and let but not for const  will get type error assignment to a const variable
// const c; // cannot declare const without initializing 
//temporal dead zone is the time between declaration and initialization for let and const 
// for let and const it runs a seperate script which you can see in sources and for var the value will come from global scope