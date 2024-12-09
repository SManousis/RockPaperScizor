function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const a = getRandomInt(3);
  if (a === 0) {
    return "rock";
  } else if (a === 1) {
    return "paper";
  } else {
    return "scizor";
  }
}

const ButtonRock = document.querySelector("#Rock");
const ButtonScizor = document.querySelector("#Scizor");
const ButtonPaper = document.querySelector("#Paper");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

function getHumanChoice() {
  return new Promise((resolve) => {
    ButtonRock.addEventListener("click", () => resolve("rock"));
    ButtonScizor.addEventListener("click", () => resolve("scizor"));
    ButtonPaper.addEventListener("click", () => resolve("paper"));
  });
}

let humanScore = 0;
let computerScore = 0;

function updateMessage(text) {
  message.textContent = text; // Update the message <p> in the results div
}

function updateScore() {
  score.textContent = `Current Score: Human ${humanScore} - Computer ${computerScore}`;
}

function updateWinner(text) {
  winner.textContent = text; // Update the winner <p> in the results div
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    updateMessage("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scizor") {
    updateMessage("You win! Rock beats Scizor");
    humanScore++;
  } else if (humanChoice === "scizor" && computerChoice === "paper") {
    updateMessage("You win! Scizor beats Paper");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    updateMessage("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "scizor" && computerChoice === "rock") {
    updateMessage("You lose! Rock beats Scizor");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scizor") {
    updateMessage("You lose! Scizor beats Paper");
    computerScore++;
  } else {
    updateMessage("It's a tie!");
  }
  updateScore();
}

async function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = await getHumanChoice();
    const computerSelection = getComputerChoice();

    updateMessage(`You chose: ${humanSelection}. Computer chose: ${computerSelection}.`);
    playRound(humanSelection, computerSelection);

    if (humanScore === 5) {
      updateWinner(`You won the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore === 5) {
      updateWinner(`You lost the game. Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }
  }
}

// Start the game
playGame();
