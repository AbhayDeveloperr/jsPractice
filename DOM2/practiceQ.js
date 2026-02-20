//Pracice Q1 -->
let newbtn = document.createElement("button");    //create
newbtn.innerText = "click me";

newbtn.style.color = "white";                     //style
newbtn.style.backgroundColor = "red";

let btn = document.querySelector("body");         //accessing body tag
btn.prepend(newbtn);                              //inserting 



// Practice Q2 -->
let para = document.querySelector("p");           //accesing p tag
console.log(para);

console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));

//agar ham set attribute ka use kar rhe hai to purani wali style change ho ja rhi hai aur ham chahte hai do styling ek sath mile to isliye use karte hai 

//classList -->
para.classList.add("newClass");
console.log(para.classList);

