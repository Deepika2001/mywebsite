// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Select all recipe buttons
  const recipeButtons = document.querySelectorAll(".recipe-button");

  recipeButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Get the ID of the target recipe details from the button's data-target attribute
      const targetId = this.getAttribute("data-target");
      const recipeDetails = document.getElementById(targetId);

      // Toggle visibility of the recipe details
      if (recipeDetails.style.display === "none" || recipeDetails.style.display === "") {
        recipeDetails.style.display = "block"; // Show the recipe
        this.innerText = "Hide Recipe"; // Change button text
      } else {
        recipeDetails.style.display = "none"; // Hide the recipe
        this.innerText = "View Recipe"; // Change button text back
      }
    });
  });
});
