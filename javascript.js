const selectionButtons = document.querySelectorAll("[data-selection]")
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

    console.log("You: " + selection)
    console.log("Comp: " + computerSelection)
    playRound(selection, computerSelection)
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
