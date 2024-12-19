(function () {

(function () {
  // Function to fetch a random dog image
  async function fetchDogImage() {
    try {
      // Making an HTTP GET request to the API
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      
      // Extracting the image URL from the response
      const { message: imageUrl } = response.data;

      // Updating the DOM with the fetched image
      const imageElement = document.getElementById('dog-image');
      imageElement.src = imageUrl;
      imageElement.alt = 'A random dog';
    } catch (error) {
      console.error('Error fetching the dog image:', error);
    }
  }

  // Setting up the DOM elements
  document.body.innerHTML = `
    <button id="fetch-button">Get Random Dog Image</button>
    <div>
      <img id="dog-image" src="" alt="No image yet" style="max-width: 100%; margin-top: 20px;">
    </div>
  `;

  // Adding the click event listener to the button
  const button = document.getElementById('fetch-button');
  button.addEventListener('click', fetchDogImage);
})();

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
})();
