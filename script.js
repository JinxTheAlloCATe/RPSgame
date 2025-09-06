let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const roundResultDiv = document.querySelector("#round-result");
const scoreDive = document.querySelector("#score");

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResultDiv.textContent = `Draw! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResultDiv.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResultDiv.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore()
}

function updateScore() {
    scoreDive.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        roundResultDiv.textContent = "CONGRATULATIONS! YOU WON THE GAME!";
        disableButtons();
    } else if (computerScore === 5) {
        roundResultDiv.textContent = "GAME OVER! THE COMPUTER WINS.";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));