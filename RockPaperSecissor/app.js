let userscore = 0;
let computerscore = 0;


const choices = document.querySelectorAll(".choice");


const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score") ;
const computercorepara = document.querySelector("#computer-score") ;



const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
    // rock,paper,scissors
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "game was draw!. play again";
        msg.style.backgroundColor = "#081b31";

}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        // console.log("you win!");
        userscorepara.innerText = userscore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
    }else{
        // console.log("you lose!");
        computercorepara.innerText = computerscore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerscore++;

    }
};


const playGame = (userChoice) => {
     console.log("user choice = ", userChoice);
     const compChoice = generateComputerChoice();
     console.log("comp choice = ", compChoice);


 if(userChoice === compChoice){
   drawGame();
 }else{
    let userwin = true;
    if(userChoice === "rock") {
        //scissor, paper
      userwin =  compChoice === "paper" ? false : true;
    }
   else if(userChoice === "paper") {
    // rock, scissor
      userwin =   compChoice === "scissor" ? false : true;
   }
   else{
     // rock, paper
     userwin = compChoice === "rock" ? false : true;
   }
   showWinner(userwin,userChoice, compChoice);
 }

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",choiceId);
        playGame(userChoice);
    });
});