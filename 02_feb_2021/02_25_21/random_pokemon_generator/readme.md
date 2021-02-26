# Random Pokemon Generator

This is a super quick exercise that makes use of the <a href="https://pokeapi.co/">PokeAPI</a>. Click the button to randomly generate a Pokemon and display some basic information on it.
Makes use of <a href="https://getbootstrap.com/">Bootstrap</a> for basic HTML and styling.

## A few things I (sort of) learned

* `const P = new Pokedex.Pokedex();` is a promise, in which the resolution was fetching the PokeAPI.
* Since `const P` is a promise, I had to use some `async function`s to make sure that certain things were *not* running synchronously when calle. Some early test console logs showed that in fact, certain parts of the `generatePokeEntry()` were running before `const P` was resolved, causing some issues with data loading.
* `forEach()` is another way you can iterate through an array. Basically, `forEach(callback)` runs a callback/function for each index of an array.
    * In my example, `let pokemonTypes` at this point is an array with key-value pairs in it for the type(s). I use `forEach()` to call an anonymous function, which uses the index as the argument. We then use that argument, to push a specific key-value pair into the `pokemonTypesArray`. Since `forEach()` will call that function through all indices of the array, this generates the types needed for the card element.
* You can indeed just use Bootstrap classes when appending elements to the DOM to style them directly.

