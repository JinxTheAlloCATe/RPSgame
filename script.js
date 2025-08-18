let humanScore = 0;
let computerScore = 0;

function getcomputerChoice () {
    let computerChoice = Math.floor(Math.random() * 4);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice () {
    let humanChoice = prompt("please enter you choice (rock, paper, scissors)", "rock");
    return humanChoice.toLowerCase()
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "paper") {
        return "Draw! You both chose Paper."
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win! Paper beats Rock."
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper."
    } else if (humanChoice === "rock" && computerChoice ==="rock") {
        return "Draw! You both chose Rock."
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerChoice++;
        return "You Lose! Paper beats Rock."
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You Win! Rock beats Scissors."
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "Darw! You both chose Scissors."
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win! Scissors beats Paper."
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors."
    } else {
        return "Error to calculate round!"
    }
}

console.log(playRound(getHumanChoice(), getcomputerChoice()));