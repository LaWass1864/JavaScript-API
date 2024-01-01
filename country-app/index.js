// Déclaration des variables
const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");


// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

let countries = [];
let sortMethod = "maxToMin"

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    /* `.then((res) => res.json())` est une chaîne de méthodes utilisée pour gérer la réponse de la requête API. */
    .then((res) => res.json())
    .then((data) => (countries = data));

  console.log(countries);
  countriesDisplay();
}

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
function countriesDisplay() {
  countriesContainer.innerHTML = countries
    /* Le `.filter((country) => country.translations.fra.common.includes(inputSearch.value)` filtre les pays en fonction de la valeur d'entrée saisie dans le champ de saisie de recherche. */
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a,b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax"){
        return a.population - b.population;
      } else if (sortMethod === "alpha"){
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
          )
      }
    })
    /* Le `.slice(0, inputRange.value)` est utilisé pour limiter le nombre de pays affichés en fonction de la valeur du inputRange. */
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
           <div class="card">
                <img src=${country.flags.svg} alt="drapeau ${
          country.translations.fra.common
        }">
                <h2>Pays : ${country.translations.fra.common}</h2>
                <h4>Capitale : ${country.capital}</h4>
                <p>Population : ${country.population.toLocaleString()}</p>
            </div>
        `
    )
    .join("");
}

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
window.addEventListener("load", fetchCountries);
/* La ligne `inputSearch.addEventListener("input", countryDisplay);` ajoute un écouteur d'événement à l'élément `inputSearch`. Il écoute l'événement "input", qui est déclenché chaque fois que la valeur
du champ de saisie change. Lorsque l'événement est déclenché, il appelle la fonction «countryDisplay », qui filtre les pays en fonction de la valeur d'entrée et met à jour l'affichage en conséquence. Cela permet à l'utilisateur de rechercher dynamiquement des pays au fur et à mesure
qu'il saisit dans le champ de saisie. */
inputSearch.addEventListener("input", countriesDisplay);
inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});

btnSort.forEach((btn) => {
btn.addEventListener('click', (e)=> {
 sortMethod = e.target.id;
 countriesDisplay();
});
});

