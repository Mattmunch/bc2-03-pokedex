import Component from '../Component.js';
import Header from './Header.js';
import allPokemon from '../services/pokemon-api.js';
import FilterPokemon from './FilterPokemon';
import PokemonList from './PokemonList';

class App extends Component {
    onRender(element) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        element.prepend(headerDOM);
        const props = {
            allPokemon
        };
        const imageList = new PokemonList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = element.querySelector('.pokemon-section');
        listSection.appendChild(imageListDOM);

        const filterPokemonProps = {
            allPokemon,
            onFilter: (imageType) => {
                let filteredPokemon;
                if (!imageType) {
                    filteredPokemon = allPokemon;
                }
                else {
                    filteredPokemon = allPokemon.filter(image => {
                        return image.keyword === imageType;
                    });
                }
                const updateProps = { allPokemon: filteredPokemon };
                imageList.update(updateProps);
            }
        };
        const filterPokemon = new FilterPokemon(filterPokemonProps);
        const filterPokemonDOM = filterPokemon.renderDOM();

        const optionSection = element.querySelector('.filter-section');
        optionSection.appendChild(filterPokemonDOM);
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