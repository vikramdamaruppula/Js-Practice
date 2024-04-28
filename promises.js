// console.log("start")
// const prom1= new Promise((res,rej)=>{
    
// })
// function callMessage(name){
//     return new Promise((resolve,rej)=>{
//         setTimeout(()=>{
//             resolve(`Hiii ${name}`)
//         },1000)
//  
//    })
// }

// function importantMSg(alertMsg){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve (`check ${alertMsg}`)
//         },1000)
//     })  
// }

// const result = async ()=>{  //widely used way of handling async functions
//     try{
//         let res1 = await callMessage("vikram")
//         let res2 = await importantMSg("did you catch it")
//         let res3 = await importantMSg("check it aagain dude")
//         console.log("\n",res1 ,"\n",res2,"\n",res3)
//     }catch(err){
//         console.log(err,"error")
//     }   
//  }
// //  result()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise Resolved");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Second Promise Rejected");
    }, 500);
});

promise1.then((result) => {
    console.log(result);
    return promise2;
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("Error:", error);
});

console.log("End");


// Promise.all([  // returns all the promises when all are resolved and fails all when one of them fails
//     importantMSg("allow as important message"),
//     callMessage("call him once"),
//     callMessage("call him twice")
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err,"error")
// })

// Promise.race([  // returns the promises whichever first resolved or  failed
//     importantMSg("allow as important message"),
//     callMessage("call him once"),
//     callMessage("call him twice")
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err,"error")
// })

// Promise.allSettled([  // returns all the promises resolved  and failed ones as fails
//     importantMSg("allow as important message"),
//     callMessage("call him once"),
//     callMessage("call him twice")
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err,"error")
// })

// Promise.any([  // returns  the first resolved promises
//     importantMSg("allow as important message"),
//     callMessage("call him once"),
//     callMessage("call him twice")
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err,"error")
// })
// callMessage("vikram").then((res)=>{ // promise chaining more organised way 
//     console.log(res,"response1")
//     return importantMSg("this first important msg1")
// }).then((res)=>{
//     console.log(res,"response 22")
//     return importantMSg("this second important msg2")
// }).then((res)=>{
//     console.log(res,"respnse 333")
// }).catch((err)=>{
//     console.log(err,"error of all")
// })

// callMessage("vikram").then((res)=>{ // normal way of handling promises may again mess up with pyramid
//     console.log(res,"response 1")
//     importantMSg("please acknowldge it's important").then((res)=>{
//         console.log(res,"response22")
//         importantMSg("check again ").then((res)=>{
//             console.log(res,"response 333")
//         })
//     })
// }).catch((err)=>{
//     console.error(err,"error1")
// })



// function callMessage(name,cb){
//     setTimeout(()=>{
//         cb(`Hiii ${name}`)
//     },2000)
// }

// function importantMSg(alertMsg,cb2){
//     setTimeout(()=>{
//         cb2(`check ${alertMsg}`)
//     },3000)
// }
// callMessage("vikram",function(callCb){  //this way it will create doom or pyramid structure when you perform multiple actions inside call backs
//     console.log(callCb)
//     importantMSg("this is important",(callCb2)=>{ // one way to handle this is using promises
//         console.log(callCb2)
//         importantMSg("this is done ",(callCb2)=>{
//             console.log(callCb2)
//         })
//     })
// })


// function callMessage2(name){
//     setTimeout(()=>{
//         return (`Hiii ${name}`)
//     },1000)
// }
// let msg2  = callMessage2("vikram") 
// console.log(msg2) // undefined
// when you call async function directly it will return undefined
// because async function will return nothing when you call it in a usual manner
// to handle or invoke async functions we use callbacks which is nothing but we pass another function as an argument to the main function which will inturn calls the async function  
// console.log("stop")
