const choiceArray = ["rock", "paper", "scissors"];
const playerSelection = "rock";
const computerSelection = computerPlay();

// Random value (0-1) multiplied by length of array (3)
function computerPlay() {
    let randomValue = Math.floor(Math.random() * choiceArray.length);
    // console.log(randomValue);
}

// Single round is played, takes 2 parameters, returns outcome as a string
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You LOSE:\nPaper beats rock!";
    } else {
        return "You WIN:\nRock beats scissors!";
    }
}