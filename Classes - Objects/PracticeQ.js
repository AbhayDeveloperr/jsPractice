//Que 1 -->
let DATA = "This is some data";
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =",DATA)
    }
}

let user1 = new User("Abhay","abhay@gmail.com");
console.log(user1);
user1.viewData();

// let user2 = new User("Guru","guru@gmail.com");
// console.log(user2);
// user2.viewData();



//Que 2 -->
class Admin extends User{
    constructor(name,email){
        super(name,email);     //to call the constructor of parent class
    }
    editData(){
        DATA = "some new Data";
    }
}

let admin1 = new Admin("Admin","admin@gmail.com");
console.log(admin1);
admin1.viewData();
admin1.editData();
admin1.viewData();