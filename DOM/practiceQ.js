//Practice Q1-->
let h2 = document.querySelector("h2");
console.dir(h2);

console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College students";
console.dir(h2.innerText);



//Practice Q2-->
let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    console.dir(div.innerText);
    idx++;
}