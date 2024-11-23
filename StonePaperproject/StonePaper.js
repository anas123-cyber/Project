let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //rock,paper,scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    //generating strings randomly is not possible but we can generate whole numbers and assign that value to the array index.so we need 0-2 numbers.
}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw.Try again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`You win!.`);
        msg.innerText = `You win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("computer won");
        msg.innerText = `You loose!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice = ",userChoice);
    //generate computer choice
    const  compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,sccissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //userChoice = scissors
            // compChoice = rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        // console.log("choice was clicked");
        playGame(userChoice);
    });
});
