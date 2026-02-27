//Simple way to create an Object -->
const student = {
    name : "Abhay",            //properties
    marks : 90,
    printMarks(){             //method
        console.log("marks =",this.marks);
    }
};
console.log(student);



//Prototypes in JS -->
//Setting a prototype
const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};

const Guru = {
    salary : 50000,
};
//for multiple objects
const Guru2 = {
    salary : 50000,
};

//setting prototype
Guru.__proto__ = employee;
Guru2.__proto__ = employee;

console.log(Guru.calcTax());
console.log(Guru2.calcTax());




//Classes in JS -->
class ToyotaCar{
    //constructer
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage= mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortunerLegender",15);
console.log(fortuner);
// fortuner.start();

let supra = new ToyotaCar("supraaa",8);
console.log(supra);



// Inheritance -->
// example
class Person {
    constructor(){
        this.species ="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");''
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems,build something");
    }
}

let abhayObj = new Engineer();
console.log(abhayObj);
abhayObj.work();
abhayObj.eat();
abhayObj.sleep();