import Component from '../src/Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return `
        <li>
        <div class="info-container">
            <h2>${pokemon.pokemon}</h2>
            <p class="image-type">${pokemon.type_1} Type</p>
        </div>

        <div class="image-container">
            <img src=${pokemon.url_image}
                alt=${pokemon.pokemon}
        </div>
        <p class="attack">Attack:${pokemon.attack}</p>
        <p class="attack">Defense:${pokemon.defense}</p><p class="attack">Speed:${pokemon.speed}</p>
        <p class="type-two">Type 2:${pokemon.type_2}</p>
    </li>
        `;
    }
}


export default PokemonItem;