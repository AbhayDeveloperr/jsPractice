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
let price = [250,645,300,900,50];
for(let i=0; i<price.length; i++){
    let offer = price[i] / 10;
    price[i] = price[i] - offer;
}
console.log(`final price after offer is ${price}`);