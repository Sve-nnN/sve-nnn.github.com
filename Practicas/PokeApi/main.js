let miscelaneous = [
  "berry",
  "contest-type",
  "contest-effect",
  "super-contest-effect",
  "encounter-method",
  "encounter-condition",
  "encounter-condition-value",
  "encounter-condition-value",
  "evolution-trigger",
  "generation",
  "pokedex",
  "version",
  "version-group",
  "item",
  "item-attribute",
  "item-category",
  "item-fling-effect",
  "item-pocket",
  "location",
];
let pokemon = [
  "pokemon",
  "ability",
  "characteristic",
  "egg-group",
  "gender",
  "growth-rate",
  "nature",
  "pokeathlon-stat",
  "pokemon-color",
  "pokemon-form",
  "pokemon-habitat",
  "pokemon-species",
  "stat",
  "type",
];
let concatenacion = (base, id = 1) => {
  return `${base}/${id}`;
};
let pokeRequest = async function (endpoint) {
  let result = await fetch(`https://pokeapi.co/api/v2/${endpoint}`)
    .then((respuesta) => respuesta.json())
    .then((ready) => console.log(ready))
    .catch((error) => console.log(`Ha ocurrido este error ${error}`))
    .finally("Se ha finalizado la operacion asincrona");
  return result;
};
pokeRequest(concatenacion(pokemon[0], 700));
