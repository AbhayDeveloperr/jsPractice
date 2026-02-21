//Event handling using JS -->
// let btn1 = document.querySelector("#btn1");       //accesing btn1

// btn1.onclick = () =>{
//     console.log("btn1 was clicked")
//     let a = 25;
//     a++;
//     console.log(a);
// }

//div ke liye
let div = document.querySelector("div");      //accesing div
div.onmouseover = () =>{
    console.log("You are inside div");
}



//Event Object -->
// let btn1 = document.querySelector("#btn1");       //accesing btn1

// btn1.onclick = (evt) =>{
    //     console.log(evt);
    //     console.log(evt.type);
    //     console.log(evt.target);
    // };
    
    
    
//Event Listeners -->
let btn1 = document.querySelector("#btn1");       //accesing btn1

btn1.addEventListener("click",(evt) =>{
    console.log("button was clicked handler1");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
})

//We can create multiple events using Event Listeners
btn1.addEventListener("click",() =>{
    console.log("button was clicked handler2");
})

btn1.addEventListener("click",() =>{
    console.log("button was clicked handler3");
})



