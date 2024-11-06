
import prompt from "picoprompt";

// Change the code below this line

// This pauses and asks the user a question over the command line.
// The user will type an answer and hit ENTER.
// What they typed will be stored in the constant "answer".
//const answer = await prompt("How are you today?: ");
// This prints "answer" on to the screen.
//console.log(answer);

const randomNumber = Math.floor(Math.random() * 10) + 1;

const askGuess = async () => {
  while (true) {
    // Prompt the user to guess the number
    const answer = await prompt("Guess a number between 1 and 10: ");
    const guess = parseInt(answer, 10);

    if (guess === randomNumber) {
      console.log("Congratulations! You guessed the right number.");
      break;
    } else {
      console.log("Wrong guess. Try again!");
    }
  }
};

askGuess();

