// JS is designed on a simple object-object paradigm. An object is a collection of properties
// property is an association between name(or key) and value
// A property's value can be function in which case the property is known as a method
// used to store keyed collection of various data and more complex utilities

// const person ={
//     name:"vikram",
//     profession:"Front end developer",
//     "technical skills":"HTML,CSS,JAVA SCRIPT"
// }
// person["name"]="venkatesh"
// delete person.name  // delete person['name'] if you want to use [] notation access object names in quotes only

// console.log(person)
// for(key in person){ // looping through objects 
//     // console.log(key) // logs all keys of the object
//     console.log(person[key],"values") //  logs values of each key
// }
// const obj1 = {
//     a:"one",
//     b:"two",
//     a:"three"
// }  // gives {a:"three",b:"two"}
// if two keys with same name are declared it will be in the first position where it is declared
// and it takes the last specified value
// console.log(obj1)

// to add objects dynamically
// let property1 = "firstName"
// let val = "job description"
// let user={
//     [property1]:val  // assigning properties and values dynamically 
// }
// console.log(user)

const persons={
    first:"vikram",
    last:"dams",
    mapKeys:"map through al;l keys and print"
}

// for (keys in persons){
//     const values = persons[keys]
//     console.log(keys,values)
// }

const arr1=[1,3,2,2,2,6,4,6,[5,8,7],0,9]
function flattenArray(elements){
    let flatArray = []
    elements.forEach((eachElm)=>{
        if(Array.isArray(eachElm)){
            flatArray = flatArray.concat(flattenArray(eachElm))
        }else{
            flatArray.push(eachElm)
        }
    })
    return flatArray
}
let singleArray=flattenArray(arr1)
const uniqueArr = [...new Set(singleArray)]
console.log(singleArray)
// let d= a.flat() //[1,3,2,4,6,5,8,7,0,9]
// const e =[10,20,30]
// console.log(b.sort().reverse()) // [1,2,3,4,5,6,7,8,9,0]
// console.log(d+","+e,"deee")

const nums={
    a:100,
    b:200,
    c:"multiply nums"
}

multiplyNums(nums)
function multiplyNums(nums){
    for (let keys in nums){
        if(typeof nums[keys] ===Number){
            nums[keys] = nums[keys] * 2
        }
    }
}
// console.log(nums)
// multiplyByTwo(nums)
// function multiplyByTwo(obj){
//     for(let key in obj){
//         if( typeof obj[key]==="number"){
//             obj[key] = obj[key] *2
//         }
//     }
// }

// console.log(nums)

// let a={}
// let b={key:"b"}
// let c = {key:"c"}

// a["b"] =123; // this notation works good but a[b] or a[c] will not work if you do so it will assign ["object object"]
// a["c"]  =456 // same here
// a[b] =123;
// a[c]= 456
// console.log(a[b]) //456 
// a.b=123 // this works as expected  but a[b] will not work to work we have to do like a["b"]
// a.c=456  //as expected 
// console.log(a["b"])

// a[b]=123 //when you try to assign object as a key which is not in string to another object it will assign it as["object Object"]
// // when you try to convert to string forcefully it will throw ["object Object"]
// a[c] =456 // same happens here ,now both keys are same it will assign the most updated value
// console.log(a[b])  // 456

// let user ={
//     name:"vikram",
//     age:28,
// }  //{"name":"vikram","age":28} converts keys into string format 
// let stringifiedUser = JSON.stringify(user)
// console.log(stringifiedUser) // converts keys into string format 
// console.log(JSON.parse(stringifiedUser)) // into an object

// const calculate ={
//     radius:10,
//     diameter:function(){
//         return this.radius *10 //for normal funcs this keyword refers to calculate object 
//     },
//     perimeter:()=>2*Math.PI*this.radius // for arrow funcs this key word refers to window object
// }
// console.log(calculate.diameter())
// console.log(calculate.perimeter())

const destructure ={
    radius:10,
    name:"vikram",
    adressObj:{
        city:"chennai",
        state:"chennai"
    }
}

const {radius:radius1,adressObj:{city}} =destructure  // giving name or altering the name of original key
// console.log(radius1,city)
// let a=30;
// let b=90;
// let c=a;
// // a=b
// // b=c 
// //  console.log(b,"bbb")
// //  console.log(a,"aaaa")
// // let {a,b} = {b,a}
// [a,b] = [b,a]
// console.log(a,"aaaaa",b,"bbbbb")



























































