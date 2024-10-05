import {
  getBookTitleConcat,
  getBookTitleTemplate,
  replaceLastName,
} from "./combine-strings-helper.js";

describe("Combine Strings", () => {
  describe("01-concatenate-operator", () => {
    test('should contain a variable "bookInfo" that is bookTitle + by + author (e.g. Harry Potter and the Sorcerer\'s Stone by J. K. Rowling)', () => {
      const title = getBookTitleConcat(
        "The Lord of the Rings",
        "J.R.R. Tolkien"
      );
      expect(typeof title).toBe("string");
      expect(title).toBe("The Lord of the Rings by J.R.R. Tolkien");
    });
    test("should use the concatenation operator (the plus sign) to combine values into a string", () => {
      const funcStr = getBookTitleConcat.toString();
      const parts = funcStr.split("+");
      expect(parts.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("02-template-literals", () => {
    test('should contain a variable "bookInfo" that is bookTitle + by + author (e.g. Harry Potter and the Sorcerer\'s Stone by J. K. Rowling)', () => {
      const title = getBookTitleTemplate(
        "The Lord of the Rings",
        "J.R.R. Tolkien"
      );
      expect(typeof title).toBe("string");
      expect(title).toBe("The Lord of the Rings by J.R.R. Tolkien");
    });
    test("should use the concatenation operator (the plus sign) to combine values into a string", () => {
      const funcStr = getBookTitleTemplate.toString();
      const parts = funcStr.split("`");
      expect(parts.length).toBeGreaterThanOrEqual(3);
      const pieces = funcStr.split("$");
      expect(pieces.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("03-replace-last-name", () => {
    test('"fullName" should be equal to a person\'s new name', () => {
      expect(replaceLastName("Gordon Ramsey", "Smith")).toBe("Gordon Smith");
    });
  });
});
