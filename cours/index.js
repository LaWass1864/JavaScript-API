// XMLHttpRequest ANCIENNE VERSION
/**
 * La fonction enregistre le texte de réponse d'une requête HTTP.
 */
function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
/* `req.open("get", "data.txt", true)` ouvre une requête GET vers le fichier "data.txt" avec le mode
asynchrone défini sur true. */
// req.open("get", "data.json", true)
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// Nouvelle methode = FETCH = va chercher

/* Le code `fetch("monlien", "object d'options").then((response) => {
    //réponse
})` utilise l'API Fetch pour effectuer une requête HTTP vers l'URL spécifiée ("monlien") avec l'objet d'options donné. Then = tant que tu n'as pas la réponse , CATCH = si la requete n'est pas passé tu me log cette erreur */

// fetch("monurl", "object d'options").then((response) => {
//     console.log(response);
// })
// /* Le `.catch((err) => console.log(err));` est un bloc catch qui est utilisé pour gérer toutes les
// erreurs qui se produisent lors de la demande de récupération. S'il y a une erreur, elle sera
// transmise comme argument à la fonction de rappel `(err) => console.log(err)` et le message d'erreur
// sera enregistré sur la console. */
// .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json")
  // Il va falloir traiter cette DATA
  .then((res) => res.json())
  .then((data) => console.log(data));

const myHeaders = new Headers();
/* L'objet `const init` est utilisé comme argument dans la fonction `fetch` pour fournir des options
supplémentaires pour la requête HTTP. */
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// ---------------
// CRUD => Create (POST), read (GET), update (PUT), delete (DELETE)
// ---------------

/* L'objet `init2` est utilisé comme argument dans la fonction `fetch` pour fournir des options pour
une requête POST. */

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  // L'objet js que je te passe je vais le transformer en Json
  body: JSON.stringify({
    pseudo: "Wass",
    message: "Hello les gens !",
    age: 26,
  }),
  mode: "cors",
  credentials: "same-origin",
};

// Il faut envoyer le POST
/* Le code `document.querySelector('form').addEventListener('submit', () => {
  fetch('http://localhost:3000/posts/', init2).then(() =>
  console.log("données envoyées")
  );
});` ajoute un écouteur d'événement à l'événement de soumission d'un élément de formulaire. Lorsque
le formulaire est soumis, il exécutera la fonction de rappel. */
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts/", init2).then(() =>
    console.log("data envoyée")
  );
});

// --------------------
// Asynchrone: pouvoir dire a JS d'attendre avant de faire une logique
// --------------------
setTimeout(() => {
  console.log("test");
}, 2000);

// Promise
fetch("https://api.blablagues.net/?rub=blagues").then((res) => res);

// -----------------
// ASYNC AWAIT
// -----------------
/* La fonction fetchData récupère les données d'une URL spécifiée, puis exécute une autre fonction.
 */
async function fetchData() {
  await fetch("https://api.blablagues.net/?rub=blagues");
  executeFonction();
}

/** La fonction fetchData2 récupère les données de l'API 'https://api.blablagues.net/?rub=blagues' puis
 * exécute la fonctionexecuteFonction.
 */
const fetchData2 = async () => {
  await fetch("https://api.blablagues.net/?rub=blagues");

  executeFonction();
};

// -----------------
// LE JSON : format pour faire transiter des données
// -----------------

// Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Methode stringify
    let settings = JSON.stringify(data);
    // Methode Parse = transforme JSON en objet js
    // console.log(JSON.parse(settings));
  });

// -----------------
// Web API : API du navigteur
// -----------------

// ----------------
// CLIENT STORAGE
// ----------------

// LOCAL STORAGE (10 MO) > COOKIES (4 ko)

localStorage.data = "Je stock la data";
// Si on veut récuperer cette data pour l'afficher dans le Body
document.body.innerHTML +=  `<h1>${localStorage.data}</h1>`;
localStorage.removeItem("data");
localStorage.user = "Denis";

const obj = {
  name: "Denis",
  age: 22,
};
//  Il faut passer des chaines de caractères pour l'interprester en JSON
localStorage = JSON.stringify(obj);
document.body.innerHTML +=  `<h1>${localStorage.user}</h1>`;
// console.log(JSON.parse(localStorage.user))

// SESSION STORAGE (stocker des choses provisoires)

/* Le code `sessionStorage.dataSettings = "55px";` définit une valeur de "55px" pour la clé `dataSettings` dans l'objet sessionStorage. */
sessionStorage.dataSettings = "55px";
console.log(sessionStorage.dataSettings);
// pour supprimer
// sessionStorage.clear()

// ----------------
// COOKIES : verification de bcp de chose comme login d'un utilisateur
// ----------------

// Ajouter un cookie qui reste le temps d'une session

document.cookie = "username = Wass";

// Bonne pratique

document.cookie = "pseudo=Wass;path=/;expire=Thu, 31 dec 2023;secure;samesite"