//random choice from computer
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

//receive input from human and log
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

let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function playGame() {
  let roundOne = playRound(humanSelection, computerSelection);

  if (roundOne === "You win") {
    humanScore += 1;
  } else if (roundOne === "You lose") {
    computerScore += 1;
  } else {
    humanScore + 0;
    computerScore + 0;
  }

  console.log(`Round 1 - You: ${humanScore}, Computer: ${computerScore}`);

  let humanSelectionR2 = getHumanChoice();
  let computerSelectionR2 = getComputerChoice();
  let roundTwo = playRound(humanSelectionR2, computerSelectionR2);

  if (roundTwo === "You win") {
    humanScore += 1;
  } else if (roundTwo === "You lose") {
    computerScore += 1;
  } else {
    humanScore + 0;
    computerScore + 0;
  }

  console.log(`Round 2 - You: ${humanScore}, Computer: ${computerScore}`);

  let humanSelectionR3 = getHumanChoice();
  let computerSelectionR3 = getComputerChoice();
  let roundThree = playRound(humanSelectionR3, computerSelectionR3);
  if (roundThree === "You win") {
    humanScore += 1;
  } else if (roundThree === "You lose") {
    computerScore += 1;
  } else {
    humanScore + 0;
    computerScore + 0;
  }

  console.log(`Round 3 - You: ${humanScore}, Computer: ${computerScore}`);

  let humanSelectionR4 = getHumanChoice();
  let computerSelectionR4 = getComputerChoice();
  let roundFour = playRound(humanSelectionR4, computerSelectionR4);
  if (roundFour === "You win") {
    humanScore += 1;
  } else if (roundFour === "You lose") {
    computerScore += 1;
  } else {
    humanScore + 0;
    computerScore + 0;
  }

  console.log(`Round 4 - You: ${humanScore}, Computer: ${computerScore}`);

  let humanSelectionR5 = getHumanChoice();
  let computerSelectionR5 = getComputerChoice();
  let roundFive = playRound(humanSelectionR4, computerSelectionR4);
  if (roundFive === "You win") {
    humanScore += 1;
  } else if (roundFive === "You lose") {
    computerScore += 1;
  } else {
    humanScore + 0;
    computerScore + 0;
  }

  console.log(`Round 5 - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congrats! You are the ultimate winner of this game!");
  } else if (humanScore < computerScore) {
    console.log("Bad Luck :( Computer is the ultimate winner of this game.");
  } else {
    console.log("No winner, it's a tie!");
  }

  function playRound(humanChoice, computerChoice) {
    let roundResult = result();

    console.log(
      `You threw ${humanChoice}. Computer threw ${computerChoice}. ${roundResult}!`
    );

    return roundResult;

    function result() {
      if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        return "You win";
      } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "rock" && computerChoice === "paper")
      ) {
        return "You lose";
      } else {
        return "It's a draw";
      }
    }
  }
}

playGame();
