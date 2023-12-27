// XMLHttpRequest ANCIENNE VERSION

/**
 * La fonction enregistre le texte de réponse d'une requête HTTP.
 */
function reqListener() {
  // console.log(this.responseText);
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

  
