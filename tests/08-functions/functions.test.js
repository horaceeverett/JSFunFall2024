import { consoleHelper } from "../getAnswer.js";
import functions from "./functions-test-helper.js";
const {
  invokeFunction,
  printGreeting,
  returnGreeting,
  multiply,
  lowerCaseString,
  isEvenOrOdd,
  countNumberOfDigits,
} = functions;

const readPrintGreeting = consoleHelper(printGreeting);

describe("Functions", () => {
  describe("01-invoke-function", () => {
    test('should invoke the function "calculateTotal", passing in the subtotal of 50 and tax of 0.2 as arguments', () => {
      const [, args] = invokeFunction();
      expect(args).toStrictEqual([50, 0.02]);
    });
    test('"total" should equal 51 when the subtotal is $50 and the tax is 2%', () => {
      const [total] = invokeFunction();
      expect(typeof total).toBe("number");
      expect(total).toBe(51);
    });
  });
  describe("02-print-greeting", () => {
    test('should contain a function called "printGreeting" in arrow syntax', () => {
      const greeter = readPrintGreeting(console.log);
      expect(typeof greeter).toBe("function");
      expect(greeter.toString().includes("=>")).toBe(true);
    });
    test('"printGreeting" should print "Hello ______!" with console.log', () => {
      let output;
      readPrintGreeting((value) => (output = value))("Tim");
      expect(output).toBe("Hello Tim!");
    });
  });
  describe("03-return-greeting", () => {
    test('should contain a function called "printGreeting" in arrow syntax', () => {
      expect(typeof returnGreeting).toBe("function");
      expect(returnGreeting.toString().includes("=>")).toBe(true);
    });
    test('"printGreeting" should return "Hello ______!"', () => {
      expect(returnGreeting("Tim")).toBe("Hello Tim!");
    });
  });
  describe("04-multiply", () => {
    test('should contain a function called "multiply" in arrow syntax', () => {
      expect(typeof multiply).toBe("function");
      expect(multiply.toString().includes("=>")).toBe(true);
    });
    test('"multiply" should have two numbers as parameters ("num1" and "num2") and return num1 multiplied by num2', () => {
      expect(multiply(5, 5)).toBe(25);
      expect(multiply(10, 0.3)).toBe(3);
      expect(multiply(2, -1)).toBe(-2);
    });
  });
  describe("05-lower-case-string", () => {
    test('should contain a function called "lowerCaseString" in arrow syntax', () => {
      expect(typeof lowerCaseString).toBe("function");
      expect(lowerCaseString.toString().includes("=>")).toBe(true);
    });
    test('"lowerCaseString" should lower case a string', () => {
      expect(lowerCaseString("HELLO WORLD")).toBe("hello world");
    });
    test('"lowerCaseString" should not throw an error is given a value that is not a string. (NOTE that this test will pass if you have not solved this problem yet.)', () => {
      const goodFn = () => lowerCaseString(null);
      expect(goodFn).not.toThrow();
      expect(lowerCaseString()).toBeFalsy();
      expect(lowerCaseString(null)).toBeFalsy();
    });
  });
  describe("06-is-even-or-odd", () => {
    test('should contain a function called "isEvenOrOdd" in arrow syntax', () => {
      expect(typeof isEvenOrOdd).toBe("function");
      expect(isEvenOrOdd.toString().includes("=>")).toBe(true);
    });
    test('"isEvenOrOdd" should return "even" if a number is even', () => {
      expect(isEvenOrOdd(100)).toBe("even");
    });
    test('"isEvenOrOdd" should return "odd" if a number is odd.', () => {
      expect(isEvenOrOdd(7)).toBe("odd");
    });
  });
  describe("07-count-number-of-digits", () => {
    test('should contain a function called "countNumberOfDigits" in arrow syntax', () => {
      expect(typeof countNumberOfDigits).toBe("function");
      expect(countNumberOfDigits.toString().includes("=>")).toBe(true);
    });
    test('"countNumberOfDigits" should count the number of digits', () => {
      expect(countNumberOfDigits(5000)).toBe(4);
    });
  });
});
