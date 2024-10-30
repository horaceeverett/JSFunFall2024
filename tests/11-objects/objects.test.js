import {
  createDogObject,
  createGraduateObject,
  updateStudentObject,
  accessAnItemObject,
  combineObjects,
} from "./objects-test-helper.js";

describe("Objects", () => {
  describe("01-create-object", () => {
    test('should contain an object called "myDog"', () => {
      const myDog = createDogObject();
      expect(typeof myDog).toBe("object");
      expect(Array.isArray(myDog)).toBe(false);
    });
    test('the "owners" property should be an array', () => {
      const [name, breed, age, owners] = Object.values(createDogObject());
      expect(typeof name).toBe("string");
      expect(typeof breed).toBe("string");
      expect(typeof age).toBe("number");
      expect(Array.isArray(owners)).toBe(true);
    });
  });

  describe("02-create-nested-object.js", () => {
    test("should return an object", () => {
      const graduateObject = createGraduateObject(
        "Eddie Willard",
        2020,
        ["JavaScript", "React", "CSS"],
        "https://github.com/example/profile",
        "https://linkedin.com/profile"
      );
      expect(typeof graduateObject).toBe("object");
      expect(Array.isArray(graduateObject)).toBe(false);
    });
    test("the object it returns should have the properties name (string), graduationYear (number), skills (array), links (object of strings)", () => {
      const graduateObject = createGraduateObject(
        "Eddie Willard",
        2020,
        ["JavaScript", "React", "CSS"],
        "https://github.com/example/profile",
        "https://linkedin.com/profile"
      );
      expect(graduateObject).toStrictEqual({
        name: "Eddie Willard",
        graduationYear: 2020,
        skills: ["JavaScript", "React", "CSS"],
        links: {
          github: "https://github.com/example/profile",
          linkedIn: "https://linkedin.com/profile",
        },
      });
    });
  });

  describe("03-accessing-item-in-object", () => {
    test('should return the value of "hat"', () => {
      const hat = accessAnItemObject({
        hat: "fedora",
        shirt: "button down vest",
        shoes: "dress shoes",
      });
      expect(hat).toBe("fedora");
    });
  });

  describe("04-update-object", () => {
    test('should change the "name" property in the "student" object', () => {
      const student = updateStudentObject({
        name: "Cary Grant",
        skills: [],
      });
      expect(student.name).not.toBe("Cary Grant");
      expect(typeof student.name).toBe("string");
      expect(student.name).toBeTruthy();
    });
    test('should add a new skill to the "skills" array inside of the "student" object', () => {
      const student = updateStudentObject({
        name: "Judy Garland",
        skills: ["Acting", "Singing"],
      });
      expect(student.skills.length).toBe(3);
    });
  });

  describe("05-combine-object", () => {
    test('should contain an object called "myObject"', () => {
      const obj = combineObjects({}, {});
      expect(typeof obj).toBe("object");
      expect(Array.isArray(obj)).toBe(false);
    });
    test("should combine two objects and return a single object", () => {
      const obj1 = {
        firstName: "Clark",
      };
      const obj2 = {
        lastName: "Kent",
      };
      const combinedObj = combineObjects(obj1, obj2);
      expect(combinedObj).toStrictEqual({
        firstName: "Clark",
        lastName: "Kent",
      });
    });
  });
});
