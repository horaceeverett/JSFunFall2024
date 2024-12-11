import prompt from "picoprompt";
import wordBank from "./word-bank.js";

const MAX_INCORRECT_GUESSES = 6;

const getRandomWord = () => wordBank[Math.floor(Math.random() * wordBank.length)];

const displayWord = (word, guessedLetters) =>
  word
    .split("")
    .map(letter => (guessedLetters.includes(letter.toLowerCase()) ? letter : "_"))
    .join(" ");

const checkGuess = (word, guess) => word.toLowerCase().includes(guess);

const isGameOver = (word, guessedLetters, incorrectGuesses) => {
  return (
    !displayWord(word, guessedLetters).includes("_") ||
    incorrectGuesses >= MAX_INCORRECT_GUESSES
  );
};

const playRound = () => {
  const word = getRandomWord();
  let guessedLetters = [];
  let incorrectGuesses = 0;

  console.clear();
  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  while (true) {
    console.log(`\nWord: ${displayWord(word, guessedLetters)}`);
    console.log(`Incorrect guesses: ${incorrectGuesses}/${MAX_INCORRECT_GUESSES}`);
    console.log(`Guessed letters: ${guessedLetters.join(", ") || "None"}`);

    const guess = prompt("Please guess a letter: ").toLowerCase();

    if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
      console.log("Invalid input. Please enter a single letter.");
      continue;
    }

    if (guessedLetters.includes(guess)) {
      console.log("You already guessed that letter.");
      continue;
    }

    guessedLetters.push(guess);

    if (checkGuess(word, guess)) {
      console.log("Correct guess!");
    } else {
      incorrectGuesses++;
      console.log("Incorrect guess.");
    }

    if (isGameOver(word, guessedLetters, incorrectGuesses)) {
      const hasWon = !displayWord(word, guessedLetters).includes("_");
      console.log(
        hasWon
          ? `\nCongratulations! You guessed the word: ${word}`
          : `\nGame over! The word was: ${word}`
      );
      return hasWon; // Return true if the user won, false otherwise
    }
  }
};

const main = () => {
  let wins = 0;
  let losses = 0;

  while (true) {
    const hasWon = playRound();

    if (hasWon) {
      wins++;
    } else {
      losses++;
    }

    console.log(`\nWins: ${wins} | Losses: ${losses}`);

    const playAgain = prompt("Would you like to play again? (yes/no): ").toLowerCase();
    if (playAgain !== "yes") {
      console.log("\nThanks for playing! Final score:");
      console.log(`Wins: ${wins} | Losses: ${losses}`);
      break;
    }
  }
};

main();
