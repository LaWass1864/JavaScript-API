//https://api.blablagues.net/?rub=blagues

// Premiere chose a faire c'est tester l'URL dans un navigateur ensuite on lance un fetch

const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  /* Le code effectue une requête GET à l'URL "https://api.blablagues.net/?rub=blagues" à l'aide de la
fonction fetch. */
  fetch("https://api.blablagues.net/?rub=blagues")
    /* Le code utilise la fonction « fetch » pour effectuer une requête GET à l'URL spécifiée. La partie
`.then((res) => res.json())` enchaîne une promesse qui convertit la réponse du serveur au format
JSON. La partie `.then((data) => {` est une autre promesse qui gère les données JSON renvoyées par
le serveur. */
    .then((res) => res.json())
    .then((data) => {
   
  /* Ce code extrait l'objet `content` de l'objet `data` renvoyé par l'API. Il enregistre ensuite
  l'objet « content » sur la console. */
      const { content } = data.data;
      console.log(content);

      header.textContent = content.text_head;
      // Pour le text.hidden = devinette. On va faire une ternaire
      content.textContent = content.text !== "" ? content.text : content.text_hidden;
    });
}

getJoke();

/* `document.body.addEventListener("click", getJoke);` is adding an event listener to the body element
of the HTML document. It listens for a click event on the body, and when the click event occurs, it
calls the `getJoke` function. This means that whenever the body is clicked, the `getJoke` function
will be executed, fetching a new joke from the API and updating the content on the page. */
document.body.addEventListener("click", getJoke);
