//Function with Parameter
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I love JS");


//Function to sum of two numbers
// function sum(x,y){
//     console.log(x+y);
// }
// sum(3,7);

//using Return
// function sum(a,b){
//     s = a+b;
//     return s;
// }
// let val = sum(3,2);
// console.log(val);


// //Arrow Function 
// const sum = (a,b) =>{
//     return a+b;
// }
// console.log(sum(3,5));



//Practice Q1
function countVowel(str){
    let count = 0;
    for(let char of str){
        if(char ==="a" || char === "e"  || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}
countVowel("abhay");





