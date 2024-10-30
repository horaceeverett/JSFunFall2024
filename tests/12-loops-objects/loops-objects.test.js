import {
  generateLinks,
  returnObjectValues,
} from "./loops-objects-test-helper.js";

describe("Loops with Objects", () => {
  describe("01-loop-through-object", () => {
    test('should contain an string called "html"', () => {
      const html = generateLinks("");
      expect(typeof html).toBe("string");
    });
    test("should return a string of <a> tags", () => {
      const anchors = generateLinks({
        Google: "https://www.google.com",
        Facebook: "https://www.facebook.com",
      });
      expect(anchors).toMatch(/(<a.*){2}/);
      expect(anchors).toMatch(/href=("|')?https:\/\/www.google.com/);
      expect(anchors).toMatch(/href=("|')?https:\/\/www.facebook.com/);
      expect(anchors).toMatch(/>\s?Google\s?</);
      expect(anchors).toMatch(/>\s?Facebook\s?</);
    });
  });

  describe("03-return-object-values", () => {
    test('should contain an array called "values"', () => {
      const arr = returnObjectValues({});
      expect(Array.isArray(arr)).toBe(true);
    });
    test("should return all the values in an object", () => {
      const objectValues = returnObjectValues({
        title: "Best CSS Tricks of the Year",
        author: "Mark Marshall",
        date: "2021-12-31",
        content: "1. Elegant Shadow ...",
      });
      expect(objectValues).toStrictEqual([
        "Best CSS Tricks of the Year",
        "Mark Marshall",
        "2021-12-31",
        "1. Elegant Shadow ...",
      ]);
    });
  });
});
