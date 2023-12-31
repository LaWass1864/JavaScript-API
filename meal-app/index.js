// Tester le lien de l'API
const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");

/* La ligne `let repas = [];` déclare une variable nommée `meals` et l'initialise comme un tableau vide. */
let meals = [];

/* La fonction fetchMeals récupère les données de repas à partir d'une API et enregistre les repas sur la console. */
async function fetchMeals(search) {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    /* `.then((res) => res.json())` est une chaîne de méthodes utilisée pour gérer la réponse de la requête API. */
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}

// Fonction pour afficher

/* La fonction `.map` est utilisée pour parcourir chaque élément du tableau `meals` et créer un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément. Dans ce cas, il est utilisé pour créer un nouveau tableau de chaînes HTML pour chaque repas du tableau
    `meals`. */
function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h1>Aucun résulat</h2";
  } else {
    meals.length = 12;
    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];
        for (let i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];
            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }
        console.log(ingredients);
        return `<li class="card">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
            <ul>${ingredients.join('')}</ul>
        </li>
      `;
      })
      .join("");
  }
}

/* Le code `input.addEventListener("input", (e) => { console.log(e.target.value); });` ajoute un écouteur d'événement à l'élément `input`. */
input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
