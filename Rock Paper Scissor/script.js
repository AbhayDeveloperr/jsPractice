let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        let choiceId = choice.getAttribute("id");
        console.log("choice was clicked", choiceId);
    })
})