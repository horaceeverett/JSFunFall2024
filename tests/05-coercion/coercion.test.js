import {
  convertStringToInt,
  fixCoercionError,
} from "./coercion-test-helper.js";

describe("Coercion", () => {
  describe("01-convert-string-to-int", () => {
    test('"answer" should be cast as (converted to) an integer', () => {
      const num = convertStringToInt("5");
      expect(typeof num).toBe("number");
      expect(num).toBe(5);
    });
  });

  describe("02-fix-coercion-error", () => {
    test('"sum" should be a number that is equal to "num1" plus "num2". It should not be a string.', () => {
      const sum = fixCoercionError("3", 5);
      expect(typeof sum).toBe("number");
      expect(sum).toBe(8);
    });
  });
});
