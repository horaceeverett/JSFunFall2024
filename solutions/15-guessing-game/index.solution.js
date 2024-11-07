import prompt from "picoprompt";

const randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

let hasWon = false;

while (hasWon === false) {
  const guess = parseInt(prompt("Pick a number: "));

  if (guess === randomNum) {
    console.log("Congratulations! The number was", randomNum);
    hasWon = true;
  } else if (isNaN(guess)) {
    console.log("Please guess a number");
  } else if (guess < 1 || guess > 10) {
    console.log("Please guess a number between 1 and 10");
  } else if (guess > randomNum) {
    console.log("Number is too high. Please guess again.");
  } else if (guess < randomNum) {
    console.log("Number is too low. Please guess again.");
  }
}
