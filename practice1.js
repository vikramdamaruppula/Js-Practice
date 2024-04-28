// console.log("hiiii")
// const promise1 = new Promise((res,rej)=>{
//     // function subscribe(){
//         setTimeout(()=>{
//             let res1 =false
//             res1 ? res("you have subscribed") : rej(new Error("please do it"))       
//         },1000)
//     // }
// })

// promise1.then((response)=>{
//     console.log(response,"this is the response")
// }).catch((err)=>{
//     console.error(err);
// })
// console.log("bye")
let nums =[1,2,3,4,5,6]
//Array.map((num,i,arr)=>{})

//map will not change original array ,returns a new array having the result by itearting through original array

// forEach is used iterate through elements of an array and returns nothing,but can modify original array

const forEachRes = nums.forEach((num,i)=>{
    // return i+5 // undefined
    return nums[i] =num+2 // changing original array
})
// console.log(nums)

Array.prototype.myMap = function(cb){
    let temp = []
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
} //polyfil for map

Array.prototype.myFilter =function(cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            temp.push(this[i])
        }
    }
    return temp 
} //polyfil for filter

// let filteredNums = nums.myFilter((i)=>i>2)
// console.log(filteredNums)

// const multiply = nums.myMap((num,i,arr)=>{
//     return num *2
// })
// console.log(multiply)


let filterNums = nums.filter((i)=>{
    return i>2
})
// console.log(filterNums)


const students =[
    {name:"vikram",rollNo:31,marks:25},
    {name:"venkatesh",rollNo:32,marks:58},
    {name:"laddu",rollNo:33,marks:57}
]


const add20 = students.map((i)=>{
    return i.marks +20
}).filter((i)=>{
    return i>70
}).reduce((acc,curr)=>{
    return acc+curr
})

console.log(add20,"added 20")






let capStn = students.map((student)=>{
    return student.name.toUpperCase()
})

let scored = students.filter((i)=>i.marks >55 && i.rollNo>32)
console.log(scored,"filter")
let totalSum = students.reduce((acc,curr)=>{
    return acc +curr.marks
},0)
// console.log(totalSum)
let names =[]
let sum = 0 
for(let i=0;i<students.length;i++){
    let name= students[i].name.toUpperCase()
    let score = students[i].marks
    sum += score
    // if(score >55 && students[i].rollNo>32){
    //     names.push(students[i])
    // }
    // names.push(name)
}
// console.log(sum,"sum")
// console.log(names,"names")

// anagrom logic for strings

// let str1="hpkello"
// let str2="ollehpk"
// let res= false
// if(str1.length === str2.length){
//     for(let i=0;i<str1.length;i++){
//         if(str2.includes(str1[i])){
//             res =true
//         }
//     }
// }else{
//     res =false
// }
// console.log(res,"result")

//some shortcuts
// let st="hello\n".repeat(5)
// console.log(st)
let ar1=[90,80,99]
let arr2 =[...ar1,67,44] // arr1.concat(arr2)
console.log(arr2)