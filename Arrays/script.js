//Arrays
// let marks = [98,96,87,89,78];
// console.log(marks[0]);   //indexing
// marks[4] = 66;
// console.log(marks);




//Looping in Arrays

//for loop
// let heroes = ["Hulk","Spiderman","Ironman","Thor","Krishh"];
// for(i=0; i<heroes.length;i++){
//     console.log(heroes[i]);
// }

//for of loops
// let heroes = ["Hulk","Spiderman","Ironman","Thor","Krishh"];
// for(let item of heroes){
//     console.log(item);
// }



//Practice Que on Loop in Array
//Q1
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);


//Q2
// let price = [250,645,300,900,50];
// for(let i=0; i<price.length; i++){
//     let offer = price[i] / 10;
//     price[i] = price[i] - offer;
// }
// console.log(`final price after offer is ${price}`);



//Array Methods
//push()
// let foodItems = ["Potato","Apple","tomato"];
// foodItems.push("orange","Mango");    //Add elements at End
// console.log(foodItems);

//pop()
// let foodItems = ["Potato","Apple","tomato"];
// foodItems.pop();                   //deletes elements from end
// console.log(foodItems);

//concat()
// let heroes1 = ["Krishh","Kick","FlyingJatt"];
// let heroes2 = ["Hulk","Thor"];
// let result = heroes1.concat(heroes2);
// console.log(result);

//slice()
// let heroes1 = ["Krishh","Kick","FlyingJatt","Hulk"];
// console.log(heroes1.slice(1,3));     //3 include nahi hoga



//Practice Ques ArrayMethods
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//a
// companies.shift();
// console.log(companies);

//b
// companies.splice(2,1,"Ola");
// console.log(companies);

//c
companies.push("Amazon");
console.log(companies);
console.log("Maintaining Streaks");
