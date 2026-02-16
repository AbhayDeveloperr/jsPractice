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
// function countVowel(str){
//     let count = 0;
//     for(let char of str){
//         if(char ==="a" || char === "e"  || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowel("abhay");



//forEach Loop 
// let arr = ["Lucknow","Deoria"];
// arr.forEach((val)=>{
//     console.log(val)
// });


//Practice Que on forEach Loop 
// let arr = [1,2,3,4,5];
// arr.forEach((num)=>{
//     console.log(num*num)
// });

//Practice Que
let num = 20;
let guess = prompt("Guess your no.");
while(num!=guess){
    guess= prompt("you guessed wrong number,guess again")
}
console.log("Congrats, you guessed right no");


