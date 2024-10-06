import { addDrink, addTip } from "./control-flow-test-helper.js";

describe("Control Flow", () => {
  describe("01-if-statement.js", () => {
    test('should add "drink" to the variable "total" if "isBuyingDrink" is true"', () => {
      const total = addDrink(6.95, 1.99, true);
      expect(typeof total).toBe("number");
      expect(total).toBe(8.94);
    });

    test('should only change the value of "total" if "isBuyingDrink" is true', () => {
      const total = addDrink(6.95, 1.99, false);
      expect(typeof total).toBe("number");
      expect(total).toBe(6.95);
    });
  });

  describe("02-if-statement.js", () => {
    test('"total" should equal to "subtotal" + ("subtotal" * "tip") if tip is greater than 0', () => {
      const total = addTip(25, 0.1);
      expect(typeof total).toBe("number");
      expect(total).toBe(27.5);
    });

    test('"total" should equal "subtotal" if "tip" is 0', () => {
      const total = addTip(25.78, 0);
      expect(typeof total).toBe("number");
      expect(total).toBe(25.78);
    });
  });
});
