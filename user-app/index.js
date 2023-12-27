/* Le code envoie une requête GET au point de terminaison "https://randomuser.me/api/?results=24" à
l'aide de la fonction fetch. Il enchaîne ensuite deux méthodes .then() pour gérer la réponse. La première méthode .then() convertit la réponse au format JSON à l'aide de la méthode res.json(). La deuxième méthode .then() enregistre les données résultantes sur la console. */

/* La ligne `let userData = [];` déclare une variable nommée userData` et l'initialise comme un tableau vide. */
let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData[0]);
};

/*
 * La fonction `userDisplay` récupère les données utilisateur et affiche le prénom de chaque utilisateur sur la page Web.
 */
const userDisplay = async () => {
  await fetchUser();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };
  // Calculateur de jour
  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timestamp = Date.parse(date);

    return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
  };
  document.body.innerHTML = userData
    .map(
      (user) => `
      <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.last}">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
      <em> Membre depuis : ${dayCalc(user.registered.date)} jours </em>
    </div>`
    )
    .join("");
};

userDisplay();
