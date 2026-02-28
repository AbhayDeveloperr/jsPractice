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
//     resolve("success")       //fulfilled 
// })
// console.log(promise);       //Pending status dikhayega agr bina Resolve ya Reject ke call krenge to

//Promises Example ---->
function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
           console.log("data =",dataId);
           resolve("success");
           if(getNextData){
             getNextData();
           }
        },5000);
    });
};

let finalVal = getData(123);
console.log(finalVal);          //Is time state pending aayega, aur 5sec time hone ke bad jb data print hoke aayega tb fullfilled dikhayega jb console pe dubara finalVal print kraenge tb


//Promises Uses ----->
const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
        resolve("success");
        //reject("error");
    });
};

let promise = getPromise();
//for resolve
promise.then((res)=>{
    console.log("promise fulfilled",res);
});

//for reject
// promise.catch((err)=>{
//     console.log("promise rejected",err);
// });








