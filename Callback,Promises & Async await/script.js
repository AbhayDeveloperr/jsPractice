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
},5000);

console.log("3");
console.log("4");



