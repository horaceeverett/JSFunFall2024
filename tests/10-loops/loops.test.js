import {
  arrayLength,
  logWithWhile,
  logArrayWithFor,
  add,
  highestNumber,
  isPalindrome,
} from "./loops-test-helper.js";

describe("Loops", () => {
  describe("01-array-length", () => {
    test("should return the length of the array supplied as an argument", () => {
      expect(arrayLength([1, 2, 3, 4, 5, 6])).toBe(6);
    });
  });

  describe("02-while-loop", () => {
    test("should log each of these numbers, one-by-one: 10, 20, 30, 50, 60, 70, 80, 90, 100", () => {
      let output = [];
      logWithWhile((item) => output.push(item));
      const expected = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      expect(output).toStrictEqual(expected);
    });
    test("should use a while loop", () => {
      const funcStr = logWithWhile.toString();
      expect(funcStr).toMatch(/while\s*\(/);
    });
  });

  describe("03-for-loop", () => {
    test("should log each value in an array with console.log", () => {
      const array = ["Python", "JavaScript", "TypeScript", "Golang"];
      let output = [];
      logArrayWithFor(array, (item) => output.push(item));
      expect(output).toStrictEqual(array);
    });
    test("should use a for loop", () => {
      const funcStr = logArrayWithFor.toString();
      expect(funcStr).toMatch(/for\s*\(/);
    });
  });

  describe("05-add-an-array", () => {
    test('should return a sum of all of the numbers within the array "numbers"', () => {
      expect(add([-1, 0.5, 2, 5])).toBe(6.5);
    });
  });

  describe("06-highest-number", () => {
    test("should return the highest number in the array", () => {
      const number1 = highestNumber([1, 10, 2, 3, 4]);
      expect(number1).toBe(10);
      const number2 = highestNumber([-1, -5, -4]);
      expect(number2).toBe(-1);
    });
  });

  describe("07-is-palidrome", () => {
    test("should return true if a word is a palindrome", () => {
      expect(isPalindrome("rotator")).toBe(true);
      expect(isPalindrome("noon")).toBe(true);
    });
    test("should return false if a word is not a palindrome", () => {
      expect(isPalindrome("difference")).toBe(false);
      expect(isPalindrome("wedding")).toBe(false);
    });
    test("should use split", () => {
      expect(isPalindrome.toString().includes("split")).toBe(true);
    });
  });
});
