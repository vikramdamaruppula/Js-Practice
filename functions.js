// // function declaration  
// function multiply(nums){  // function declaration 
//     return nums * nums 
// }
 // //function expression :-- when we assign a function to a variable 
// const multiplyAgain = function(fn){ // the part after = is called anonymous function  the function which has no name
//     console.log(`the square displayed is ${fn(6)}`)
//     return `return the square displayed is ${fn(6)}`

// }

// console.log(multiplyAgain(multiply)) // multiply() calling or invoking  
// example for first class functions 
// first class functions means ==> in a language where functions can be treated as variables, what all the variables can do functions can also perform 
// ex reassigning, manipulating etc

// for(var i=0;i<5;i++){
//     console.log(i,"outside block")
//     setTimeout(()=>{
//         console.log(i,"iiiii")
//     },i*1000)
// }

// var x=22;
// function nums(){
//     console.log(x)
//     var x=90;
// }
// nums()

// function fn(){
//     console.log(arguments) //gives object format of arguments provided but cannot be done with arrow functions
//     // logs like this {'0':4,'1':4}
// }
// fn(4,4,5,5,6)


// function createBase(num){
//     return function(addFunc){
//         return num +addFunc
//     }
// }

// function createBase(num){
//     function adding(addNum){ // anonymous function i.e function which has no name
//         return (num +addNum)
//     }
//     return adding
// }

// var addSix = createBase(6)
// console.log(addSix)
// console.log(addSix(45))
// console.log(addSix(5))
// console.log(addSix(4))

// function sum(a){
//     return function(b){
//         return function(c){
//             return `the sum is ${a+b+c}`
//         }
//     }
// }

// let ans = sum(3)(8)(7)
// console.log(ans)

// function evaluate(operator){
//     return function(a){
//         return function(b){
//             if(operator ==="sum"){
//                 return a+b;
//             } else if(operator ==="sub"){
//                 return `$the substracted valu is${a-b}`;
//             }else if(operator ==="mul"){
//                 return `The multiplication is ${a*b}`;
//             }else if(operator ==="div"){
//                 return`division is ${a/b}`;
//             }else{
//                 return "invalid operation"
//             }
//         }
//     }
// }
// let res = evaluate("sum")(66)(88)
// console.log(res)
// let multiply = evaluate("mul")
// let divide = evaluate("div")
// console.log(multiply(6)(9))
// console.log(divide(999)(9))


//Infinite currying 
// function infiniteCurrrying(a){
//     return function(b){
//         if(b) return infiniteCurrrying(a+b) 
//         else return a
//     }
// }

// let res = infiniteCurrrying(55)(56)(33)()
// console.log(res)

// let qustion ="the hui rkjm"
// const aer = Array.from(qustion)
// console.log(aer)
// let arr1 = qustion.split(" ")
// // console.log(arr)
// for (let i=0;i<arr1.length;i++){
//     arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1)
// }
// console.log(arr1.join(" "))

// let arr2 = [2,2,334,,,,,,55,5555,,,,,,,]
// console.log(arr2)

// let arr = [1,2,3,[4,4,5,6,['a','b','c']]]

// function deepRevers(elements){
//     let plainArr =[]
//     elements.reverse().forEach((element)=>{
//         if(Array.isArray(element)){
//            plainArr= plainArr.concat(deepRevers(element))
//         }else{
//             plainArr.push(element)

//         }
//     })
//     return plainArr
// }

// console.log(deepRevers(arr))

// var myFunc = function(){
//     console.log("hello expression1")
// }
// myFunc()
// myFunc()

// function myFunc(){
//     console.log("jajjananka jaii")
// }

// myFunc()
// var variable = 10;
// (()=>{
//     console.log(variable);
//     variable = 20 ;
//     console.log(variable)
// })()

// console.log(variable)
// var variable =30;


// function counter(){
//     let count = 0 
//     function innerFunc(){
//         return count ++
//     }
//     return innerFunc
// }
// let res = counter()

// console.log(res())
// console.log(res())
// console.log(res())

let string1 = "madam0954" 
let reverse = ""
for(let i=string1.length -1 ; i >=0; i--){
    reverse += string1[i] 
}
console.log(reverse)
