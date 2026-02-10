console.log("Welocme to Apna College")
console.log("Abhay")

// Variables
name = "Abhay";
Age = 24;
isFollow = true;  //Bollean Value
name = 18;  //Ye bhi Js me Allowed hai, aur agr do variable same hai to last wala print hoga
console.log(name);
console.log(Age);
console.log(isFollow);

// var,let,const keywords (kisi v variable ke aage koi n loi keyword use krte hai)
let fullName = "Abhay";
const age = 24;

// Data Types of JS

// Non Primitive
const student = {
    fullName: "Abhay",
    age: 24,
    cgpa: 8.5,
    isPass: true,
};
console.log (student);
typeof student;

console.log(student.age);  //keval age print hoga student variable ke andar ka

student.cgpa = student.cgpa + 1;   //hm const keyword ke andar ke key ko update kar rhe hai
console.log(student.cgpa);

student["fullName"] = "Guru";      // aise bhi ham kisi object ke key ke andar ja skte hai
console.log(student["fullName"]);

//Practice Q1
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);
typeof product;
