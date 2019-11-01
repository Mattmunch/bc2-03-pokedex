import Component from '../Component.js';
import Header from './Header.js';
import allPokemon from '../services/pokemon-api.js';
import FilterPokemon from './FilterPokemon';
import PokemonList from './PokemonList';


const allPokemon = [
    {
        pokemon: 'charizard',
        type_1: '2011',
        attack: '100',
        defense: '100',
        url_image: 'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
    }
];

class App extends Component {
    onRender(element) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        element.prepend(headerDOM);
       
        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.renderDOM();
        
        const pokemonSection = element.querySelector('.pokemon-section');
        pokemonSection.appendChild(pokemonListDOM);
        
        const filterSection = element.querySelector('.filter-section');
        filterSection.appendChild(filterPokemonDOM);

        const filterPokemon = new FilterPokemon(filterPokemonProps);
        const filterPokemonDOM = filterPokemon.renderDOM();
        
        const filterPokemonProps = {
            allPokemon,
            onFilter: (pokemonType) => {
                let filteredPokemon;
                if (!pokemonType) {
                    filteredPokemon = allPokemon;
                }
                else {
                    filteredPokemon = allPokemon.filter(pokemon => {
                        return pokemon.keyword === pokemonType;
                    });
                }
                const updateProps = { allPokemon: filteredPokemon };
                pokemonList.update(updateProps);
            }
        };

    }
    renderHTML(){
        return `
        <main>
            <section class="filter-section">
         
            </section>
            <section class='pokemon-section'>
      
            </section>
        </main>
        `;
        
    }
}




export default App;