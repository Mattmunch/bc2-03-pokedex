const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export default async function getPokemon() {  
    const response = await fetch(URL);
    return await response.json();
}