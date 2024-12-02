/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {

  // JavaScript for transforming the DOM

document.addEventListener("DOMContentLoaded", () => {
  // Task 1: Display an image in the <img> tag
  const imgElement = document.querySelector("img");
  imgElement.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  imgElement.alt = "Funny GIF";

  // Task 2: Change the link URL
  const linkElement = document.querySelector("a[href='https://www.w3schools.com/js/default.asp']");
  linkElement.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  linkElement.textContent = "Read the (official) JavaScript manual";

  // Task 3: Change text to "I am victorious!"
  const successDiv = document.querySelector(".alert-success");
  successDiv.textContent = "I am victorious!";

  // Task 4: Change background color using inline styles
  const infoDiv = document.querySelector(".alert-info");
  infoDiv.style.backgroundColor = "lightblue";

  // Task 5: Change text color using a class
  const dangerDiv = document.querySelector(".alert-danger:nth-of-type(2)");
  dangerDiv.classList.remove("alert-danger");
  dangerDiv.classList.add("alert-primary");

  // Task 6: Hide the warning <div> using inline styles
  const warningDiv = document.querySelector(".alert-warning:nth-of-type(2)");
  warningDiv.style.display = "none";

  // Task 7: Show the hidden <div> by modifying its class
  const hiddenDiv = document.querySelector(".alert-success.hidden");
  hiddenDiv.classList.remove("hidden");

  // Task 8: Conditional logic to modify <div> text
  const button = document.querySelector(".btn-primary");
  const conditionalDiv = document.querySelector(".alert-info .text-dark");
  if (button.classList.contains("btn-primary")) {
    conditionalDiv.innerHTML = "&check; blue";
  }
});

  // Put your answers in here
})();
