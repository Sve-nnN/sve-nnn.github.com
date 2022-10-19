const pokeTarjeta = document.querySelector("[pokeTarjeta]");
const pokeImgContainer = document.querySelector("[pokeImgContainer]");
const pokeImg = document.querySelector("[pokeImg]");
const pokeName = document.querySelector("[pokeName]");
const pokeId = document.querySelector("[pokeId]");
const pokeInfo = document.querySelector("[pokeInfo]");
const pokeTypes = document.querySelector("[pokeTypes]");
const pokeStats = document.querySelector("[pokeStats]");
const pokeDataList = document.querySelector("[pokemons]");
const pokeIconImg = document.querySelector("[pokeIconImg] ");
const pokeAbility = document.querySelector("[pokeAbility] ");
const pokeAbilityDescription = document.querySelector(
  "[pokeAbilityDescription] "
);
const pokeInput = document.querySelector("[pokeInput] ");

const Colors = {
  normal: `#D6D6D6`,
  fire: `#ED3F27`,
  water: `#1357F4`,
  grass: `#6ddf6f`,
  electric: `#b5a81b`,
  ice: `#6FF6FF`,
  fighting: `#CD4800`,
  poison: `#8000FF`,
  ground: `#CA9C46`,
  flying: `#899ADA`,
  psychic: `#C722DE`,
  bug: `#8BAE3C`,
  rock: `#987B45`,
  ghost: `#37135A`,
  dark: `#4A3924`,
  dragon: `#783EB2`,
  steel: `#7C7C7C`,
  fairy: `#F6B3FF`,
  default: `#eaeeae`,
};
window.onload = fetchKantoPokemon();

const searchPokemon = (event) => {
  event.preventDefault();
  const { value } = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}/`)
    .then((data) => data.json())
    .then((response) => renderPokemonData(response))
    //.catch((err) => renderNotFound())
    .finally(console.log("LISTO"));
};
const renderPokemonData = (data) => {
  const sprite = data.sprites.other.home.front_default;
  const pixel_sprite = data.sprites.front_default;
  const { stats, types, abilities } = data;

  pokeName.textContent = data.name;
  pokeImg.setAttribute("src", sprite);
  pokeIconImg.setAttribute("src", pixel_sprite);
  pokeId.textContent = `# ${data.id}`;
  setCardColor(types);
  renderPokemonTypes(types);
  renderPokemonStats(stats);
  renderAbilities(abilities);
  pokeInput.innerHTML = "";
};

const setCardColor = (types) => {
  const colorOne = Colors[types[0].type.name];
  const colorTwo = types[1] ? Colors[types[1].type.name] : Colors.default;

  pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
  pokeImg.style.backgroundSize = "5px 5px";
};
const renderAbilities = (abilities) => {
  pokeAbility.innerHTML = "";
  pokeAbilityDescription.innerHTML = "";
  abilities.forEach((url) => {
    let abilityUrl = url.ability.url;
    fetch(abilityUrl)
      .then((response) => response.json())
      .then((response) =>
        response.flavor_text_entries.find(
          (language) => language.language.name == "es"
        )
      )
      .then((response) => {
        const abilityDescriptionTextElement = document.createElement("div");
        abilityDescriptionTextElement.textContent = response.flavor_text;
        abilityDescriptionTextElement.classList.add("ability_description");
        pokeAbilityDescription.appendChild(abilityDescriptionTextElement);
      });
  });
  abilities.forEach((ability) => {
    const abilityTextElement = document.createElement("div");
    abilityTextElement.textContent = ability.ability.name;
    abilityTextElement.classList.add("ability");
    pokeAbility.appendChild(abilityTextElement);
  });
};

const renderPokemonTypes = (types) => {
  pokeTypes.innerHTML = "";
  types.forEach((type) => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.backgroundColor = Colors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTypes.appendChild(typeTextElement);
  });
};
const renderPokemonStats = (stats) => {
  pokeStats.innerHTML = "";
  stats.forEach((stat) => {
    const statElement = document.createElement("div");
    const statElementName = document.createElement("div");
    const statElementAmount = document.createElement("div");
    statElementName.textContent = stat.stat.name;
    statElementAmount.textContent = stat.base_stat;
    statElement.appendChild(statElementName);
    statElement.appendChild(statElementAmount);
    pokeStats.appendChild(statElement);
  });
};
const renderNotFound = () => {
  pokeName.textContent = "No he encontrado a ese Pokémon, intentalo de nuevo";
  pokeImg.setAttribute("src", "./img/pokeball-icon.webp");
  pokeImg.style.backgroundColor = "#fffff";
  pokeIconImg.setAttribute("src", "./img/pokeball-icon.webp");
  pokeTypes.innerHTML = "";
  pokeStats.innerHTML = "";
  pokeId.innerHTML = "";
};
function fetchKantoPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        pokemonToList(pokemon.name);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
function pokemonToList(pokemon) {
  let pokeOption = document.createElement("option");
  pokeOption.classList.add("lista-pokemon");
  pokeOption.value = pokemon;
  pokeOption.textContent = pokemon;
  console.log(pokeOption);

  pokeDataList.appendChild(pokeOption);
}
