let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");

const drawGame = () =>{
    console.log("It's a draw!");
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win!");
    }else{
        console.log("You Lose!");
    }
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            compChoice === "paper"? userWin = false : userWin = true;
        }else if(userChoice === "paper"){
            //rock,scissor
            compChoice === "scissor"? userWin = false : userWin = true;
        }else if(userChoice === "scissor"){
            //rock, paper
            compChoice === "rock"? userWin = false : userWin = true;
        }
        showWinner(userWin);
   }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});