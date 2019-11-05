const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export default async function getPokemon() {  
    let queryString = window.location.hash.slice(1);
    const url = `${URL}${queryString}`;


    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'False') {
        return {
            Search: [],
            totalResults: 0
        };
    }
    return data;
}