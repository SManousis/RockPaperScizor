function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    a = getRandomInt(3);
    if (a == 0){
        return "rock";
    }
    else if( a == 1){
        return "paper";
    }
    else {
        return "scizor";
    }
}

function getHumanChoice(){
    let answer = prompt("Please enter Rock, Paper  Scizor!");
    answerToLower = answer.toLowerCase();
    if ((answerToLower != "rock") && (answerToLower == "paper") && (answerToLower == "scizor")) {
        console.log("Please enter a valid answer");
    }
    return answerToLower;
}

let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scizor") {
      console.log("You win! Rock beats Scizor");
      humanScore++;
    } else if (humanChoice === "scizor" && computerChoice === "paper") {
      console.log("You win! Scizor beats Paper");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "scizor" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scizor");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scizor") {
      console.log("You lose! Scizor beats Paper");
      computerScore++;
    } else {
      console.log("It's a tie!");
    }
  }

function playGame() {
    for (let i = 0; i < rounds; i++) {
      console.log(`Round ${i + 1}`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      console.log(`You chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      playRound(humanSelection, computerSelection);
      console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);
    }
  
    // Announce the final winner
    if (humanScore > computerScore) {
      console.log(`You won the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You lost the game. Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // Start the game
  playGame();