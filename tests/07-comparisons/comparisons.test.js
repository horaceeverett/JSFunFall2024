import {
  isEqual,
  isNotEqual,
  isLargerNumber,
  isTeenager,
  isWeekend,
  isEven,
} from "./comparisons-test-helper.js";

describe("Comparisons", () => {
  describe("01-is-equal", () => {
    test('"isEqual" should be true when "userInput1" strictly equals "userInput2', () => {
      expect(isEqual(5, 5)).toBe(true);
      expect(isEqual("5", "5")).toBe(true);
    });
    test('"isEqual" should be false when "userInput1" does not strictly equal "userInput2', () => {
      expect(isEqual(5, -5)).toBe(false);
      expect(isEqual(5, "5")).toBe(false);
    });
  });

  describe("02-is-not-equal", () => {
    test('"isNotAtGoalWeight" should be false when "targetBMI" equals "actualBMI"', () => {
      expect(isNotEqual(20, 20)).toBe(false);
    });
    test('"isNotAtGoalWeight" should be true when "targetBMI" does not equal "actualBMI"', () => {
      expect(isNotEqual(20, 31)).toBe(true);
    });
  });

  describe("03-is-larger-number", () => {
    test('should contain a variable called "isLargerNumber"', () => {
      const isLargerNumberStr = isLargerNumber.toString();
      expect(isLargerNumberStr).toMatch(/let isLargerNumber/);
    });
    test('"isLargerNumber" should be true when "num2" is greater than "num1"', () => {
      expect(isLargerNumber(1, 999999)).toBe(true);
    });
    test('"isLargerNumber" should be false when "num1" is greater than "num2"', () => {
      expect(isLargerNumber(1.1, -555)).toBe(false);
    });
    test('"isLargerNumber" should be false when "num1" is equal to "num2"', () => {
      expect(isLargerNumber(3, 3)).toBe(false);
    });
  });

  describe("04-is-teenager", () => {
    test('should contain a variable called "isTeenager"', () => {
      const isTeenagerStr = isTeenager.toString();
      expect(isTeenagerStr).toMatch(/let isTeenager/);
    });
    test('"isTeenager" should be true when ages is between 13 and 19', () => {
      expect(isTeenager(13)).toBe(true);
      expect(isTeenager(15)).toBe(true);
      expect(isTeenager(19)).toBe(true);
    });
    test('"isTeenager" should be false when ages is less than 13', () => {
      expect(isTeenager(12)).toBe(false);
      expect(isTeenager(0)).toBe(false);
    });
    test('"isTeenager" should be false when ages is greater than 19', () => {
      expect(isTeenager(20)).toBe(false);
      expect(isTeenager(95)).toBe(false);
    });
    test("should use either the logical and (&&) or the logical or (||)", () => {
      const isTeenagerStr = isTeenager.toString();
      expect(isTeenagerStr).toMatch(/&&|\|\|/);
    });
  });

  describe("05-is-weekend", () => {
    test('should contain a variable called "isWeekend"', () => {
      const isWeekendStr = isWeekend.toString();
      expect(isWeekendStr).toMatch(/let isWeekend/);
    });
    test('"isWeekend" should be true if "day" is "Saturday" or "Sunday"', () => {
      expect(isWeekend("Saturday")).toBe(true);
      expect(isWeekend("Sunday")).toBe(true);
    });
    test('"isWeekend" should be false if "day" is any other day of the week', () => {
      expect(isWeekend("Monday")).toBe(false);
      expect(isWeekend("Tuesday")).toBe(false);
      expect(isWeekend("Wednesday")).toBe(false);
      expect(isWeekend("Thursday")).toBe(false);
      expect(isWeekend("Friday")).toBe(false);
    });
    test("should use either the logical and (&&) or the logical or (||)", () => {
      const isWeekendStr = isWeekend.toString();
      expect(isWeekendStr).toMatch(/&&|\|\|/);
    });
  });

  describe("06-is-even", () => {
    test('should contain a variable called "isEven"', () => {
      const isEvenStr = isEven.toString();
      expect(isEvenStr).toMatch(/let isEven/);
    });
    test('"isEven" should be true if "num" is even', () => {
      expect(isEven(22)).toBe(true);
    });
    test('"isEven" should be false if "num" is odd', () => {
      expect(isEven(9)).toBe(false);
    });
  });
});
