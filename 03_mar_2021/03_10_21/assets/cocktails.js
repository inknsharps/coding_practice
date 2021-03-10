// Initial notes on The Cocktail DB API
// You can provide parameters
/* The most useful ones will likely be: 
Search by ingredient
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

Filter by alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

Lookup a random cocktail
https://www.thecocktaildb.com/api/json/v1/1/random.php
*/

// Async function that calls all recipes using the argument "ingredient", and makes a console directory for that object
async function callCocktailIngredients(ingredient){
    let ingredientFilter = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    let fetchedCocktails = await fetch(ingredientFilter);
    let cocktailsList =  await fetchedCocktails.json();
    console.dir(cocktailsList);
};