let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "sum".
 * It should be equal to the sum of all the numbers in an array.
 */

// WRITE YOUR ANSWER BELOW THIS LINE


let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
