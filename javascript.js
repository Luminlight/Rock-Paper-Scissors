const choiceArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundAmount = parseInt(prompt("Choose an odd number, 5 is default", 5));
const computerSelection = computerPlay();

// Random value (0-1) multiplied by length of array (3)
function computerPlay() {
    let randomValue = Math.floor(Math.random() * choiceArray.length);
    return randomValue;
}

// Round is played, score is incremented, winner of game is displayed
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore++;
            console.log("You won the round!\nThe score is: " + playerScore + " - " + computerScore);
            if (playerScore == roundAmount) {
                console.log("You beat the computer!");
            }
        } else if (computerSelection == playerSelection) {
            console.log("Oh no, looks like a tie!\n" + playerScore + " - " + computerScore);
        } else {
            computerScore++;
            console.log("The computer won the round!\nThe score is: " + playerScore + " - " + computerScore);
            if (computerSelection == roundAmount) {
                console.log("The computer bested you.");
            }
        }
}