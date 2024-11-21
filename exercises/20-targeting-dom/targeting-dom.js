


/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  console.log("1. Single Elements:");
  const firstLi = document.querySelector("section ul li");
  console.log(firstLi);

  const myIdElement = document.querySelector("#myId");
  console.log(myIdElement);

  console.log("\nGroups of Elements:");

  const yellowElements = document.querySelectorAll(".bg-warning");
  yellowElements.forEach(el => console.log(el));

  console.log("\nStructuring HTML for JavaScript:");

  const socialLinks = document.querySelectorAll("a.social-link");
  socialLinks.forEach(link => console.log(link));

  console.log("\nNested Elements:");

  const targetCells = document.querySelectorAll("#myRow .col");
  targetCells.forEach(cell => console.log(cell));
})();
