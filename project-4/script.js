const API_KEY = "e40b7bc8caaa4ac29ff393cc77ca8bdb";
const apiUrl = `https://api.spoonacular.com/recipes/random?number=24&apiKey=${API_KEY}`;

const recipesList = document.getElementById("recipeList");
const recipesDetails = document.getElementById("recipeDetails");

// check path

document.addEventListener("DOMContentLoaded", () => {
  console.log("....tttttt")
  const path = window.location.pathname;
  if (path.endsWith("index.html")) {
    console.log("path")

    initIndexPage();
  } else if (path.endsWith("recipe.html")) {
    initRecipePage();
  }
});

function initIndexPage() {

  const API_KEY = "e40b7bc8caaa4ac29ff393cc77ca8bdb";
  const apiUrl = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`;
  const recipesList = document.getElementById("recipeList");   
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      displayRecipeCard(data.recipes);
    })
    .catch((error) => {
      console.log(error, "error fetching");
      recipesList.innerHTML =
        "<p>Failed to load recipes. Please try again later.</p>";
    });
}

// // build recipe card
function displayRecipeCard(recipe) {
  recipe.forEach((r) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `<img src="${r.image}" alt="${r.title}"/>
        <h3>${r.title}</h3>
<a href="recipe.html?id=${r.id}">           
<button>Recipes</button>
</a>        
        `;
    recipesList.appendChild(card);
  });
}

function initRecipePage() {
  const recipeId = getQueryParam("id");

  if (recipeId) {
    const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const { title, image, extendedIngredients, instructions } = data;
        recipeDetails.innerHTML = `
              <h2>${title}</h2>
              <img src="${image}" alt="${title}" style="max-width:300px; border-radius:8px;">
              <h4>Ingredients:</h4>
              <ul>
                ${extendedIngredients
                  .map((ing) => `<li>${ing.original}</li>`)
                  .join("")}
              </ul>
              <h4>Instructions:</h4>
              <p>${instructions || "No instructions provided."}</p>
            `;
      })
      .catch((error) => {
        recipeDetails.innerHTML = "<p>Error fetching recipe details.</p>";
        console.error("Error:", error);
      });
  } else {
    recipeDetails.innerHTML = "<p>No recipe ID provided in the URL.</p>";
  }
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
