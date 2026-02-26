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
