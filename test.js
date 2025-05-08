function displayRecipeCard(recipes) {
    recipes.forEach((r) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="${r.image}" alt="${r.title}" />
        <h3>${r.title}</h3>
      `;
      card.addEventListener("click", () => showDetails(r));
      recipesList.appendChild(card);
    });
  }
  