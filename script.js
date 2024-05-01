//console.log("hello world");

function getComputerChoice() {
  let rock = "Rock";
  let scissors = "Scissors";
  let paper = "Paper";

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

  if (humanChoice.toLowerCase() === "rock") {
    alert(`You threw Rock. Computer threw ${getComputerChoice()}.`);
  } else if (humanChoice.toLowerCase() === "scissors") {
    return alert(`You threw Scissors. Computer threw ${getComputerChoice()}.`);
  } else if (humanChoice.toLowerCase() === "paper") {
    return alert(`You threw Paper. Computer threw ${getComputerChoice()}.`);
  } else {
    return prompt(
      `Invalid entry. Please enter only 'Rock', 'Paper' or 'Scissors'.`
    );
  }
}

console.log(getHumanChoice());
