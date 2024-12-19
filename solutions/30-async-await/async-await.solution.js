(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use async and await in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   *
   * NOTE: If you see a red squiggly line underneath axios for the error
   * "axios is not defined", ignore it. This is an issue with the linter.
   */

  // Targeting the buttons and image on the page so I can use them below
  const button = document.querySelector("button");
  const image = document.querySelector("#image");

  // Reacting to when the user clicks on the button
  button.addEventListener("click", async () => {
    // Making an AJAX request to get a random dog photo
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    // Displaying the image on the screen
    image.src = response.data.message;
  });
})();
