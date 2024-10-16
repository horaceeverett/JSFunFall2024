import {
  createAnArray,
  accessingAnItem,
  destructure,
  getPositionInArray,
  addItemToArray,
  combineArrays,
} from "./arrays-helper.js";

describe("Arrays", () => {
  describe("01-create-an-array", () => {
    test('should contain an array called "restaurants"', () => {
      const restaurants = createAnArray();
      expect(Array.isArray(restaurants)).toBe(true);
    });
    test('"restaurants" should have at least 3 items', () => {
      const restaurants = createAnArray();
      expect(restaurants).toHaveLength(3);
    });
  });

  describe("02-accessing-an-item", () => {
    test('should contain a let or variable called "myCar"', () => {
      const accessingAnItemStr = accessingAnItem.toString();
      expect(accessingAnItemStr).toMatch(/(const)|(let)/);
      expect(accessingAnItemStr).toMatch(/myCar/);
    });
    test('"myCar" should be equal to the first item in an array', () => {
      const cars = ["Mercedes", "Kia", "Toyota"];
      const myCar = accessingAnItem(cars);
      expect(myCar).toBe("Mercedes");
    });
  });

  describe("03-destructuring", () => {
    test('"myCar" should be equal to the first item in an array', () => {
      const cars = ["Mercedes", "Kia", "Toyota"];
      const myCar = destructure(cars);
      expect(myCar).toBe("Mercedes");
    });
    test("should use destructuring to solve this problem", () => {
      const destructureStr = destructure.toString();
      expect(destructureStr).toMatch(/(const\s*\[)|(let\s*\[)/);
    });
  });

  describe("04-position-in-array.js", () => {
    test('"place" should equal 3 if "Jian Hou" is the 3rd value in the array', () => {
      const place = getPositionInArray([
        "Aaminata Kamau",
        "Claire O'Hannigan",
        "Jian Hou",
        "María Rosales",
        "Fathima Kaur",
      ]);
      expect(place).toBe(3);
    });
    test('"place" should equal 1 if "Jian Hou" is the 1st value in the array', () => {
      const place = getPositionInArray([
        "Jian Hou",
        "Aaminata Kamau",
        "Claire O'Hannigan",
        "María Rosales",
        "Fathima Kaur",
      ]);
      expect(place).toBe(1);
    });
  });

  describe("05-add-item-to-array", () => {
    test('"languages" should contain three more items', () => {
      const languages = addItemToArray(["C++"]);
      expect(languages).toHaveLength(4);
    });
  });

  describe("06-combine-arrays.js", () => {
    test('should contain a new array called "newArray"', () => {
      const newArray = combineArrays(["HTML"], ["CSS"]);
      expect(Array.isArray(newArray)).toBe(true);
    });
    test('"newArray" should merge two arrays into one', () => {
      const newArray = combineArrays(["HTML"], ["CSS"]);
      expect(newArray).toStrictEqual(["HTML", "CSS"]);
    });
    test('"newArray" should combine two arrays by using the spread operator', () => {
      expect(combineArrays.toString().includes("...")).toBe(true);
    });
  });
});
