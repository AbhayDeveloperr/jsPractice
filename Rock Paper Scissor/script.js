let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#computerScore");

const drawGame = () =>{
    console.log("It's a draw!");
    msg.innerText = "It's a draw!,Play again!";
    msg.style.backgroundColor = "gray";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
       compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
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
        showWinner(userWin,userChoice,compChoice);
   }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});