const selectionButtons = document.querySelectorAll("[data-selection]")
const choices = ["rock", "paper", "scissors"]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}