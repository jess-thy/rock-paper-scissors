//console.log("hello world");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rock = "rock";
  let scissors = "scissors";
  let paper = "paper";

  function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  if (getRandom(1, 3) === 1) {
    return rock;
  } else if (getRandom(1, 3) === 2) {
    return scissors;
  } else {
    return paper;
  }
}

//console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");

  if (
    humanChoice.toLowerCase() === "rock" ||
    humanChoice.toLowerCase() === "scissors" ||
    humanChoice.toLowerCase() === "paper"
  ) {
    return humanChoice;
  } else {
    alert(`Invalid entry. Please enter only 'Rock', 'Paper' or 'Scissors'.`);
    return getHumanChoice();
  }
}

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  humanChoice = humanSelection.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else {
    console.log("It's a draw! Please play again.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
