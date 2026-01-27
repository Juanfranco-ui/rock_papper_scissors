function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "It's a tie! You both chose " + humanChoice;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    playerScoreDisplay.textContent = humanScore;
    resultsDiv.textContent =
      "You win! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultsDiv.textContent =
      "You lose! " + computerChoice + " beats " + humanChoice;
  }

  if (humanScore === 5) {
    resultsDiv.textContent = " Congratulations! Player Wins! ";
    buttons.forEach((button) => (button.disabled = true));
  } else if (computerScore === 5) {
    resultsDiv.textContent = " You lose! Computer wins! ";
    buttons.forEach((button) => (button.disabled = true));
  }
};

let buttons = document.querySelectorAll("button");
let resultsDiv = document.querySelector("#results");
let playerScoreDisplay = document.querySelector("#human-score");
let computerScoreDisplay = document.querySelector("#computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.id;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  });
});
