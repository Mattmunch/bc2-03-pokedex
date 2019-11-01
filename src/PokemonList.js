import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    renderHTML() {
        return `
        <ul class="pokemon-list"></ul>
        `;
    }
    onRender(element) {
        const allPokemon = this.props.allPokemon;

        allPokemon.forEach(pokemon => {
            const props = { pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            element.appendChild(pokemonItemDOM);
        });
    }
}


export default PokemonList;