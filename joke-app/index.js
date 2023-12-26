//https://api.blablagues.net/?rub=blagues

// Premiere chose a faire c'est tester l'URL dans un navigateur ensuite on lance un fetch

const header = document.getElementById("header");
const content = document.getElementById("content");


/* Le code effectue une requête GET à l'URL "https://api.blablagues.net/?rub=blagues" à l'aide de la
fonction fetch. */
fetch("https://api.blablagues.net/?rub=blagues")
  /* Le code utilise la fonction « fetch » pour effectuer une requête GET à l'URL spécifiée. La partie
  `.then((res) => res.json())` enchaîne une promesse qui convertit la réponse du serveur au format
  JSON. La partie `.then((data) => {` est une autre promesse qui gère les données JSON renvoyées par
  le serveur. */
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.content);
    header.textContent = data.data.content.text_head;
    // Pour le text.hidden = devinette. On va faire une ternaire
    content.textContent =
      data.data.content.text !== ""
        ? data.data.content.text
        : data.data.content.text_hidden;
  });
