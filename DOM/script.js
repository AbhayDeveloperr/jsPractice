// console.dir(document.body)    //Print Properties and Methods of body tag
// console.log(document.body);   //Print the tags Of Body tag

//We can change the color of HTML in JS
//document.body.style.background = "purple";

//We can Change the Elements of a tag in JS
//document.body.childNodes[1].innerText = "abcd";


//DOM Manipulation

// Selecting with id
// let heading= document.getElementById("header");
// console.dir(heading);

// Selecting with class
// let heading= document.getElementsByClassName("header-class");
// console.dir(heading);

// Selecting with class
// let paras= document.getElementsByTagName("p");
// console.dir(paras);

//Query Selector
// let firstEL = document.querySelector("p");     //for 1st element
// console.dir(firstEL);

// let allEL = document.querySelectorAll("p");    //for Nodelist
// console.dir(allEL);

// let element = document.querySelectorAll("#header");    //for ID
// console.dir(element);                               


//Properties
//.tagName
let el = document.querySelector("p");
console.dir(el);
console.dir(el.tagName);

//.innerText
let el1= document.querySelector("div");
console.dir(el1);
console.dir(el1.innerText);
// el1.innerText = "abcde";      //To update anything
// console.log(el1.innerText);


//.innerHTML
let el2= document.querySelector("div");
console.dir(el2);
console.dir(el2.innerHTML);

