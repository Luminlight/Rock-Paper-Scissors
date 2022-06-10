const selectionButtons = document.querySelectorAll("[data-selection]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-player-score]");
const roundResult = document.querySelector("[data-round-result]");
const gameWinner = document.querySelector("[data-game-winner]");
const options = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick;
}

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  const computerSelection = computerPlay();

  playRound(selection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    roundResult.innerHTML = "You won the round!";
    incrementScore(yourScoreSpan);
  } else if (playerSelection === computerSelection) {
    roundResult.innerHTML = "Tied!";
  } else {
    roundResult.innerHTML = "You lost this round!";
    incrementScore(computerScoreSpan);
  }
}

function incrementScore(scoreSpan) {
  scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
}

function appendGameWin() {
  if (yourScoreSpan === "5" || computerScoreSpan === "5") {
    gameWinner.innerHTML = "Done";
  }
}

function resetGame() {
  yourScoreSpan.innerHTML = "0";
  computerScoreSpan.innerHTML = "0";
  roundResult.innerHTML = "0";
  gameWinner.innerHTML = "0";
}

// Stop incrementing after player or computer score = 5: How?
// Display game winner: How to set winner in 1 line `${scoreSpan} wins`? (this doesn't work)
// Reset game after button click? Find elegant solution to restarting the game/values
