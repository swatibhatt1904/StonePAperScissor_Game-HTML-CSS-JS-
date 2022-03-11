let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); //'_span', bcoz userScore is under span tag.
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//we're storing these things in variables for using later.

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore; //displaying the scores on screen
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord}  beats   ${convertToWord(
    computerChoice
  )}${smallCompWord}. You Win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 400);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore; //displaying the scores on screen
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord}  loses to   ${convertToWord(
    computerChoice
  )}${smallCompWord}. YOU LOST!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 400);
}
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord}  equals   ${convertToWord(
    computerChoice
  )}${smallCompWord}. IT'S A DRAW...!`;
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 400);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
    console.log("hey you clicked on Rock");
  }); //show the statement in console.

  paper_div.addEventListener("click", function () {
    game("p");
    console.log("hey you clicked on Paper");
  });

  scissor_div.addEventListener("click", function () {
    game("s");
    console.log("hey you clicked on Scissor");
  });
}

main();