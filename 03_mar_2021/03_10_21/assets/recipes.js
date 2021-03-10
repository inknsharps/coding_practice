// Spoonacular API overview
// Much more powerful and organized compared to Recipe Puppy, but is a little limited since we can only make a certain number of calls per day
// Documentation is here: https://spoonacular.com/food-api/docs

/* Other options:
https://www.themealdb.com/api.php - The partner API to the cocktails API

https://developer.edamam.com/edamam-docs-recipe-api - Still limited in number of calls but much better overage than spoonacular
Edamam can return calories, health labels (dairy free, gluten free, etc.), ingredient lists and measurements, as well as source URLs
*/

// Async function that calls the Spoonacular API with ingredients, these can be separated by commas
async function callSpoonacularRecipes(ingredients){
    let recipeAPI = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&number=10&type=main%20course&apiKey=${spoonacularKey}`
    let fetchedRecipes = await fetch(recipeAPI);
    let recipeList = await fetchedRecipes.json();
    console.dir(recipeList);
}

// Async function that calls the Edamam API with ingredients, these can be separated by commas
async function callEdamamRecipes(ingredients){
    let recipeAPI = `https://api.edamam.com/search?q=${ingredients}&app_id=${edamamID}&app_key=${edamamKey}`
    let fetchedRecipes = await fetch(recipeAPI);
    let recipeList = await fetchedRecipes.json();
    console.dir(recipeList);
}
