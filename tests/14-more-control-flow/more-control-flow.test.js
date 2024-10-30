import {
  isEvenOrOdd,
  getErrorMessage,
} from "./more-control-flow-test-helper.js";

describe("More Control Flow", () => {
  describe("01-ternary-operator", () => {
    test('"isEvenOrOdd" should equal "even" if "num" is even', () => {
      expect(isEvenOrOdd(22)).toBe("even");
    });
    test('"isEvenOrOdd" should equal "odd" if "num" is odd', () => {
      expect(isEvenOrOdd(9)).toBe("odd");
    });
    test("solve this problem with the ternary operator", () => {
      const str = isEvenOrOdd.toString();
      expect(str).toMatch(/=[\S\s]*\?[\S\s]*\:/);
    });
  });

  describe("02-short-circuiting", () => {
    test('"errorMessage" should equal "Username already exists." when message equals "Username already exists."', () => {
      const result = getErrorMessage("Username already exists.");
      expect(result).toBe("Username already exists.");
    });
    test('"errorMessage" should equal "An unexpected error occurred." when message equals "" or another falsey value', () => {
      const result = getErrorMessage("");
      expect(result).toBe("An unexpected error occurred.");
    });
    test("solve this problem with short circuiting (either || or &&)", () => {
      const str = getErrorMessage.toString();
      expect(str).toMatch(/\|\|/);
    });
  });
});
