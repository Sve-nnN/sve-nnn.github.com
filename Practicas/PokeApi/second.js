document.addEventListener("DOMContentLoaded", () => {
  getDeleteBtn().addEventListener("click", deleteEverything);
  submitOption.addEventListener("click", handleSubmit);
});
/* Crea el Botón para elegir pokemon */
const submitOption = document.getElementById("submit-option");
const deleteButton = document.getElementById("#delete-btn");

/* Hace que carguen los pokemones al cargar la pagina. */
window.onload = fetchKantoPokemon();

/**
 * It clears the container, then fetches the Kanto Pokemon.
 */

/**
 * It returns the element with the id of "delete-btn".
 * @returns The delete button.
 */
function getDeleteBtn() {
  return document.querySelector("#delete-btn");
}
function toggleHide() {
  submitOption.className.toggle("button-hide");
  submitOption.className.toggle("button");
  deleteButton.className.toggle("button-hide");
  deleteButton.className.toggle("button");
}
async function fetchKantoPokemon() {
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        pokemonToList(pokemon);
      });
    });
}
function pokemonToList(pokemon) {
  let pokeitem = document.createElement("option");
  pokeitem.classList.add("lista-pokemon");
  pokeitem.innerText = capitalizeFirstLetter(pokemon.name);
  pokeitem.value = pokemon.name;
  pokelist.append(pokeitem);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
  //Example: https://pokeapi.co/api/v2/pokemon/1/"
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      renderPokemon(pokeData);
    });
}

function renderPokemon(pokeData) {
  let poketarjeta = document.querySelector("#poketarjeta");

  createPokeImage(poketarjeta, pokeData.sprites.front_default);
  /*CREANDO TARJETA PARA LOS POKEMONES */

  let pokeName = document.createElement("p");
  pokeName.classList.add("poketarjeta-nombre");
  pokeName.innerText = pokeData.name;

  let pokeNumber = document.createElement("p");
  pokeNumber.classList.add("poketarjeta-numero");
  pokeNumber.innerText = `#${pokeData.id}`;

  let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types
  pokeTypes.classList.add("poketarjeta-tipo");

  createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

  poketarjeta.append(pokeName, pokeNumber, pokeTypes); //appending all details to the pokeContainer div
}
var pokelist = document.forms["pokemon-form"].pokemons;
let pokeprint = document.getElementById("pokeprint");
let pokeselected = pokelist.value;

// Function to display selected value on screen
function handleSubmit(event) {
  event.preventDefault();
  console.log(`Has elegido a: ${pokelist.value.toUpperCase()}!`);
  fetchIndividualPokemon(pokelist.value);
}
async function fetchIndividualPokemon(pokemon) {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((response) => response.json())
    .then((pokemon) => {
      renderPokemon(pokemon);
    });
}
function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement("li");
    typeLi.innerText = type["type"]["name"];
    switch (typeLi.innerText) {
      case "normal":
        typeLi.classList.add("normal");
        break;
      case "fire":
        typeLi.classList.add("fire");
        break;
      case "water":
        typeLi.classList.add("water");
        break;
      case "grass":
        typeLi.classList.add("grass");
        break;
      case "flying":
        typeLi.classList.add("flying");
        break;
      case "fighting":
        typeLi.classList.add("fighting");
        break;
      case "poison":
        typeLi.classList.add("poison");
        break;
      case "electric":
        typeLi.classList.add("electric");
        break;
      case "ground":
        typeLi.classList.add("ground");
        break;
      case "rock":
        typeLi.classList.add("rock");
        break;
      case "psychic":
        typeLi.classList.add("psychic");
        break;
      case "ice":
        typeLi.classList.add("ice");
        break;
      case "bug":
        typeLi.classList.add("bug");
        break;
      case "ghost":
        typeLi.classList.add("ghost");
        break;
      case "steel":
        typeLi.classList.add("steel");
        break;
      case "dragon":
        typeLi.classList.add("dragon");
        break;
      case "dark":
        typeLi.classList.add("dark");
        break;
      case "fairy":
        typeLi.classList.add("fairy");
        break;
    }
    ul.append(typeLi);
  });
}

function createPokeImage(containerDiv, pokedata) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("fondo-imagen");

  let pokeImage = document.createElement("img");
  pokeImage.classList.add("image");
  pokeImage.srcset = pokedata;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

function deleteEverything(event) {
  event.target.style = "none";
  let pokemonContainer = document.querySelector("#poke-container");
  pokemonContainer.innerText = "";
}
