# Guessing Game

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

This is an assignment to prepare you for your first project. You will create a simple command-line "Guess the Number" game. The computer selects a random number and the player attempts to guess it based on feedback.

## Game Requirements

The game play is as follows:

1. The computer picks a number from 1 to 10 at random. (You will need to research how to do this.)
2. The game should then ask the user to guess a number from 1 to 10.
3. The user will type in their answer and type _ENTER_.
4. The computer will check to see if the user guessed the number. If they did, the computer will let the user know they won and stop the game.
5. If the user guessed a number that is too low, the game should tell them that is too low.
6. If the user guessed a number that is too high, the game should tell them that is too high.
7. If the number is lower than 1 or higher than 10, the game should tell them they must pick a number between 1 and 10.
8. If the user guessed the wrong number, repeat steps 3 to 8.

## Getting Started

We are using the [_picoprompt_](https://www.npmjs.com/package/picoprompt) library to prompt the user for input. To install, navigate to this project in your terminal and use the install command.

```bash
cd exercises/15-guessing-game
npm install
```

To start the game, enter `node .` in your terminal. To exit the game, press `ctrl + c` in your terminal.

Write your code inside of _solutions/15-guessing-game/index.solution.js_.

To print text to the screen:

```js
console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop\n");
```

The new line character (`\n`) is like pressing "enter" in text editors like Microsoft Word or Visual Studio Code. Use this to make your text output easier to read.

To ask the user a question:

```js
// This pauses and asks the user a question over the command line.
// The user will type an answer and hit ENTER.
// What they typed will be stored in the constant "answer".
const answer = prompt("Please guess a number between 1 through 10: ");
```

## Hints

Research how you can generate a random number in JavaScript with `Math.random()`.

To get started, we recommend creating an outline or writing pseudocode.

You can use a `while` loop to solve this problem. Think about what needs to repeat and how the loop should stop.

Use clear prompts and messages for a good user experience.
