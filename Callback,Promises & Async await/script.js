//Synchronous Programming -->            //Runs Sequentially
console.log("one");                    
console.log("two");                    
console.log("three");                    
console.log("four");    


//Asynchronous Programming-->
console.log("1");
console.log("2");
setTimeout(()=>{
    console.log("Hello");
},3000);

console.log("3");
console.log("4");



//callback -->
const hello = ()=>{
    console.log("hello guys");
}

setTimeout(hello,4000);          //here, Hello is a callback fn 


//Callback Hell -->       nested callback
function getId(dataId,getNextData){
    setTimeout(()=>{
        console.log("data =",dataId);
        if(getNextData){
            getNextData();
        };
    },5000)
};

getId(1,()=>{
    getId(2,()=>{
        getId(3,()=>{
            getId(4);
        })
    });
});