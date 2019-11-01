import Component from '../src/Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        return `
        <li>
        <div class="info-container">
            <h2>${capitalize(pokemon.pokemon)}</h2>
            <p class="image-type"> ${capitalize(pokemon.type_1)} Type</p>
        </div>

        <div class="image-container">
            <img src=${pokemon.url_image}
                alt=${pokemon.pokemon}
        </div>
        <p class="attack">Attack:${pokemon.attack}</p>
        <p class="attack">Defense:${pokemon.defense}</p><p class="attack">Speed:${pokemon.speed}</p>
        <p class="type-two">Type 2:${capitalize(pokemon.type_2)}</p>
    </li>
        `;
    }
}


export default PokemonItem;