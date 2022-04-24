const choiceArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();

// Random value (0-1) multiplied by length of array (3)
function computerPlay() {
    let randomValue = Math.floor(Math.random() * choiceArray.length);
    console.log(randomValue);
}

// Single round is played, takes 2 parameters, returns outcome as a string
function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose, paper beats rock.";
            // Incriment comp
        } else if ( computerSelection == "scissors") {
            return "You win, rock beats scissors";
            // incriment player
        } else {
            return "Tie";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose, scissors beats paper.";
        } else if (computerSelection == "rock") {
            return "You win, paper beats rock";
        } else {
            return "Tie";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose, rock beats scissors";
        } else if (computerSelection == "paper") {
            return "You win, scissors beats paper";
        } else {
            return "Tie";
        }
    }
}

// 
function game() {
    // playRound till computer/player score = 5
}

// 5 rounds