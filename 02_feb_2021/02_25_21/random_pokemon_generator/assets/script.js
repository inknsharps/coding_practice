// Declare the PokeAPI as a const promise
const P = new Pokedex.Pokedex();

// Declare info that needs to be generated and created
let pokemonName;
let pokemonSprite;
let pokemonTypes;
let pokemonTypesArray;

// HTML declarations
let generateBtn = document.querySelector(".generate");
let pokemonFieldEl = document.querySelector(".pokemon-field");

// Randomly generate Pokemon data
// This is set up as an async function, because we're pulling data from the Pokemon API.
// If we don't set this up as an async function, you'll note that we return undefined for pokemonName when clicking generate (because everything else ran sychronously first).
async function generatePokemon(){
    await P.getPokemonByName(Math.floor(Math.random()*151))
        .then((response) => {
            pokemonTypesArray = []; // Clear out the types array from previous Pokemon
            pokemonName = response.name;
            pokemonSprite = response.sprites.front_default;
            pokemonTypes = response.types;
            // forEach function to pull all the types of the Pokemon
            pokemonTypes.forEach((index) => {
                pokemonTypesArray.push(index.type.name);
                console.log(pokemonTypesArray)
            });
            console.log(pokemonName);
        });
}

// Generate HTML elements
function generateHTML(){
    let pokemonCard = document.createElement("div");
    pokemonCard.setAttribute("class", "card");
    pokemonFieldEl.appendChild(pokemonCard);
    // Generate img tag
    let pokemonSpriteEl = document.createElement("img");
    pokemonSpriteEl.setAttribute("class", "card-img-top");
    pokemonSpriteEl.setAttribute("src", pokemonSprite);
    pokemonCard.appendChild(pokemonSpriteEl);
    // Generate h2 tag for Pokemon name
    let pokemonNameEl = document.createElement("h2");
    pokemonNameEl.setAttribute("class", "col-12 card-title text-light text-center text-capitalize bg-dark");
    let pokemonNameElText = document.createTextNode(pokemonName);
    pokemonNameEl.appendChild(pokemonNameElText);
    pokemonCard.appendChild(pokemonNameEl);
    // Generate flexbox row for Pokemon typing
    let pokemonTypings = document.createElement("div");
    pokemonTypings.setAttribute("class", "d-flex m-2");
    pokemonCard.appendChild(pokemonTypings);
    // Generate h4 tags for Pokemon typing
    pokemonTypesArray.forEach((index) => {
        let pokemonTypesEl = document.createElement("h4");
        pokemonTypesEl.setAttribute("class", "col-6 m-0 justify-content- card-text text-center text-capitalize bg-light")
        let pokemonTypesElText = document.createTextNode(index);
        pokemonTypesEl.appendChild(pokemonTypesElText);
        pokemonTypings.appendChild(pokemonTypesEl);
    })
}

function clearHTML(){
    while (pokemonFieldEl.firstChild) {
        pokemonFieldEl.removeChild(pokemonFieldEl.firstChild);
    }
}

// Generate the Pokemon entries into the DOM
// Again, this is set up as a async function, because generateHTML makes use of the pokemonName variable, which WILL be undefined at first.
async function generatePokeEntry(){
    clearHTML();
    await generatePokemon();
    generateHTML();
}

// Event listeners
generateBtn.addEventListener("click", generatePokeEntry);