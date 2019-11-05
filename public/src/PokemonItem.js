import Component from './Component.js.js';

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
        <div class="stats">
        <div class="attack-defense">
        <p>Attack:${pokemon.attack}</p>
        <p>Defense:${pokemon.defense}</p>
        </div>
        <div class="speed-type"
        <p>Speed:${pokemon.speed}</p>
        <p>Type 2:${capitalize(pokemon.type_2)}</p>
        </div>
        </div>
    </li>
        `;
    }
}


export default PokemonItem;