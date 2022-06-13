const selectionButtons = document.querySelectorAll("[data-selection]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-player-score]");
const roundResult = document.querySelector("[data-round-result]");
const gameWinner = document.querySelector("[data-game-winner]");
const replayButton = document.querySelector("[data-replay");
const options = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomPick = options[Math.floor(Math.random() * options.length)];
  return randomPick;
}

// buttons
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    makeSelection(selectionName);
  });
});

function disableButtons() {
  selectionButtons.forEach((e) => {
    e.disabled = true;
  });
}

replayButton.addEventListener("click", () => {
  selectionButtons.forEach((e) => {
    e.disabled = false;
  });

  yourScoreSpan.innerHTML = "0";
  computerScoreSpan.innerHTML = "0";
  roundResult.innerHTML = "";
  gameWinner.innerHTML = "";
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

  appendGameWin();
}

function appendGameWin() {
  if (yourScoreSpan.innerHTML === "5") {
    gameWinner.innerHTML = "You won!";
    disableButtons();
  }

  if (computerScoreSpan.innerHTML === "5") {
    gameWinner.innerHTML = "The computer won!";
    disableButtons();
  }
}
