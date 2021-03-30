// Using the NYC Open Data API - https://data.cityofnewyork.us/browse
// Overall pretty easy to access endpoints, there's a large amount of filters and datasets that one can use
// Specifically, it appears to utilise the Socrata Open Data API structure - https://dev.socrata.com/
// We should aim for only year round markets since the API provides a lot of old ones 

async function callGreenmarkets(){
    let greenmarketList = `https://data.cityofnewyork.us/resource/8vwk-6iz2.json`
    let greenmarketJSON = await fetch(greenmarketList);
    let greenmarketData = await greenmarketJSON.json();
    console.dir(greenmarketData);
};

async function callGreenmarketsBorough(borough){
    let greenmarketList = `https://data.cityofnewyork.us/resource/if26-z6xq.json?borough=${borough}`
    let greenmarketJSON = await fetch(greenmarketList);
    let greenmarketData = await greenmarketJSON.json();
    console.dir(greenmarketData);
};