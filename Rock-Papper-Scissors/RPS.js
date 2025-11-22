// ROCK-PAPPER-SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerMove = document.getElementById("playerDisplay");
const computerMove = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if(playerChoice === computerChoice){
    result = "It's Tie!"
  }else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
        break;
    }
  }
  playerMove.textContent = `PLAYER: ${playerChoice}`;
  computerMove.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  //to back their original colors
  resultDisplay.classList.remove("greenText", "redText");
  //to set the colors with You lose and win!
  if(result === "YOU WIN!"){
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore
  }else if(result === "YOU LOSE!"){
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
  // switch(result){
  //   case "YOU WIN!":
  //     resultDisplay.classList.add("greenText");
  //     break;
  //   case "YOU LOSE!":
  //     resultDisplay.classList.add("redText");
  //     break;
  // }

}