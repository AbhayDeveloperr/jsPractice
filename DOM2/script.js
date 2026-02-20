//getAttribute -->
// let div = document.querySelector("#box");    //for id
// console.log(div);
// let a = div.getAttribute("id");
// console.log(a);

// let para = document.querySelector(".line");    //for class
// console.log(para);
// let b = para.getAttribute("class");
// console.log(b);


//setAttribute -->
// let para1 = document.querySelector(".line");    //for class
// console.log(para1);
// let c = para1.setAttribute("class","guruClass");
// console.log(c);

//div.style
// let edit = document.querySelector("#box");
// console.log(edit);
// edit.style.backgroundColor = "green";
// edit.style.fontSize = "24px";
// edit.innerText = "abc";




//Insert Elements -->
//1.create
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
console.log(newbtn);

//2.Add
//append, prepend,before,after
let val = document.querySelector("div");        //accessing div
// val.append(newbtn);           //append

// val.prepend(newbtn);          //prepend

// val.before(newbtn);           //before

val.after(newbtn);           //after

//Example using above
let newHeading = document.createElement("h3");      //create
newHeading.innerText = "Hi Abhay";
console.log(newHeading);

let heading = document.querySelector("body");       //accessing div
heading.prepend(newHeading);



//Delete Element -->
let para = document.querySelector(".line");
// para.remove();


