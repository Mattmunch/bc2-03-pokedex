import Component from './Component.js';
import Header from './Header.js';
import FilterPokemon from './FilterPokemon.js';
import PokemonList from './PokemonList.js';
import Paging from './Paging.js';
import getPokemon from '../services/pokemon-api.js';



class App extends Component {
    async onRender(element) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        element.prepend(headerDOM);
       
        const pokemonList = new PokemonList({ allPokemon: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        
        const pokemonSection = element.querySelector('.pokemon-section');
        pokemonSection.appendChild(pokemonListDOM);

        const response = await getPokemon();
        const allPokemon = response.results;
        pokemonList.update({ allPokemon });
        
        const filterSection = element.querySelector('.filter-section');
        const pagingSection = document.querySelector('.paging-section');
        const paging = new Paging({ totalResults: 0 });
        pagingSection.appendChild(paging.renderDOM());
        
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
        const filterPokemon = new FilterPokemon(filterPokemonProps);
        const filterPokemonDOM = filterPokemon.renderDOM();
        filterSection.appendChild(filterPokemonDOM);
        async function loadPokemon() {
            const response = await getPokemon();
            const allPokemon = response.search;
            const totalResults = response.totalResults;
            pokemonList.update({ allPokemon });
            paging.update({ totalResults });
        }
        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
        
    }
    renderHTML(){
        return `
        <main>
            <section class="filter-section">
         
            </section>
            <section class='pokemon-section'>
      
            </section>
            <section class="paging-section">

            </section>
        </main>
        `;
        
    }
}




export default App;