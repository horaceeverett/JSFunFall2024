
import prompt from "picoprompt";

// Change the code below this line

// This pauses and asks the user a question over the command line.
// The user will type an answer and hit ENTER.
// What they typed will be stored in the constant "answer".
//const answer = await prompt("How are you today?: ");
// This prints "answer" on to the screen.
//console.log(answer);

const randomNumber = Math.floor(Math.random() * 10) + 1;

let guessedCorrectly = false;

while (!guessedCorrectly) {
  
  const userGuess = parseInt(prompt("Guess a number from 1 to 10:"), 10);

  if (isNaN(userGuess)) {
    console.log("Please enter a valid number.");
    continue;
  }

  if (userGuess < 1 || userGuess > 10) {
    console.log("Please pick a number between 1 and 10.");
    continue;
  }

  if (userGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number!");
    guessedCorrectly = true;
  } else if (userGuess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (userGuess > randomNumber) {
    console.log("Too high! Try again.");
  }
}



