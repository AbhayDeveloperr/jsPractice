// // for loop
// let i;
// for(i=1; i<=5; i++){
//     console.log("Hello World")
// }

// //Q. Calculate Sum of 1 to n using for
// let sum = 0;
// let n = 7;
// for(let i = 1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("Sum =",sum);




// While Loop
// let i = 1;
// while(i<=10){
//     console.log("Apna College");
//     i++;
// }

//calculate sum of 1 to 6 using While
// let i = 1;
// sum = 0;
// while(i<=6){
//     sum = sum+i;
//     i++;
// }
// console.log(sum);



//do while
// let i = 1;
// do{
//     console.log("Apna College");
//     i++;
// }while(i <= 5);



//for of loop
// let str = "JavaScript";
// let size = 0;
// for(let val of str){
//     console.log("val =",val);
//     size++;
// }
// console.log("string size=",size);



// for in loop
// let student = {
//     name: "Abhay",
//     age: 18,
//     cgpa:8.5,
//     isPass:true,
// };
// for(let key in student){
//     console.log("key=",key, "value=",student[key]);
// }



//Practice Q1
// for(let i=0; i<=10; i++){
//     if(i%2 === 0){
//         console.log("i =",i);
//     }
// }


// Practice Q2
// let gameNum = 25;
// let userNum = prompt("Guess the Game number");
// while(gameNum != userNum){
//     userNum = prompt("You entered Wrong number, Guess again");
// }
// console.log("Congrats, You Guessed the right Number!!");


// Strings
//Template Literals
// let obj = {
//     item : "pen",
//     price : 10,
// };
//Simple Method
// console.log("the price of the",obj.item,"is",obj.price,"rupees");   //Simple Method

//Template Literals
let output = `the price of the ${obj.item} is ${obj.price} rupees`;  //ye sbko ek string manta hai
console.log(output);


