const selectionButtons = document.querySelectorAll("[data-selection]")
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-player-score]")
const options = ["rock", "paper", "scissors"]

function computerPlay() {
    const randomPick = options[Math.floor(Math.random() * options.length)]
    return randomPick
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    const computerSelection = computerPlay()

    playRound(selection, computerSelection)
    console.log("You: " + selection)
    console.log("Comp: " + computerSelection)
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            console.log("You win!")
        } else if (playerSelection === computerSelection) {
            console.log("A tie!")
        } else {
            console.log("You lost!")
        }
}

// Remove console logging, replace with appending to document?
// Append document with winner for round: span incremented +1?
// Append score each round: data-player-score & data-computer-score