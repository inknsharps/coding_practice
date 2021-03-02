// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => {
//         console.log("PokeAPI was fetched.", response);
//         return response.blob()})
//     .then(blob => {
//         consoles.log("Blob was fetched.", blob)})
//     .catch(error => {console.log("PokeAPI was NOT fetched.", error)});

async function catchPokeAPI(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log("PokeAPI was fetched.", response);
    const blob = await response.blob();
    console.log("Blob was fetched.", blobs);
}

// TIL, async functions return PROMISES when called. Yowza.
catchPokeAPI()
    .catch(error => {console.log("PokeAPI was NOT fetched.", error)});