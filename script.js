function getcomputerChoice () {
    let computerChoice = Math.floor(Math.random() * 4);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissoers"
    }

}

function getHumanChoice () {
    let humanChoice = prompt("please enter you choice (rock, paper, scissors)", "rock");
    return humanChoice
}

