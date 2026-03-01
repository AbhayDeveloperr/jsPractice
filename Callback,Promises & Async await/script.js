//Synchronous Programming -->            //Runs Sequentially
// console.log("one");                    
// console.log("two");                    
// console.log("three");                    
// console.log("four");    


//Asynchronous Programming ----->
// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("Hello");
// },3000);

// console.log("3");
// console.log("4");




//callback ---->
// const hello = ()=>{
//     console.log("hello guys");
// }

// setTimeout(hello,4000);          //here, Hello is a callback fn 


//Callback Hell ---->         nested callback
// function getId(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data =",dataId);
//         if(getNextData){
//             getNextData();
//         };
//     },5000)
// };

// getId(1,()=>{                        //calling getId function
//     getId(2,()=>{
//         getId(3,()=>{
//             getId(4);
//         })
//     });
// });



//Promises ---->
// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a Promise");
//     resolve("success")          //fulfilled 
// })
// console.log(promise);          //Pending status dikhayega agr bina Resolve ya Reject ke call krenge to

//Promises Example ---->
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//            console.log("data =",dataId);
//            resolve("success");
//            if(getNextData){
//              getNextData();
//            }
//         },5000);
//     });
// };

// let finalVal = getData(123);
// console.log(finalVal);              //Is time state pending aayega, aur 5sec time hone ke bad jb data print hoke aayega tb fullfilled dikhayega jb console pe dubara finalVal print kraenge tb


//Promises Uses ----->
// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise");
//         resolve("success");
         //reject("error");
//     });
// };

// let promise = getPromise();

// //for resolve-->
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });


//for reject-->
// promise.catch((err)=>{
//     console.log("promise rejected",err);
// });


//Promises working example ----->
// function asyncFunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1 ....");
// let p1 = asyncFunction1();
// p1.then((res)=>{
//     console.log("fetching data 2");             //chaining
//     let p2 = asyncFunction2();                  //chaining aur bdhiya se copy me hai
//     p2.then((res)=>{
//     });
// });




//async await ------>
//ex async
async function hello(){
    console.log("hello")
}

console.log(hello());                    //automatically returns a promise

//ex async await
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);              //200 means success in programming lang
        },2000);
    });
}

async function getWeatherData(){
    await api();                         //calling api fn     1st call
    await api();                         //calling api fn     2nd call
}

console.log(getWeatherData());          //pehle 1st call complete ho jayega tbhi 2nd call run hoga



//Async-Await Uses with Example (Proper ex)---------->
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",dataId);
            resolve("success");
        },4000);
    });
}

async function getAllData(){
    console.log("getting data1......");
    await getData(1);                  //pehle 1st call complete hoga tbhi next call run hoga
    console.log("getting data2......");
    await getData(2);                  //fir 2nd call complete ho jayega tbhi next call run hoga....aise hi
    console.log("getting data3......");
    await getData(3);
}
console.log(getAllData()); 


//upr wala ex through IIFE ---->
// (async function(){
//     console.log("getting data1......");
//     await getData(1);                  
//     console.log("getting data2......");
//     await getData(2);                  
//     console.log("getting data3......");
//     await getData(3);
// })();









