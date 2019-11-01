import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return `
 <section class="header">
    <header>
        <img class="header-logo" src="./assets/pokedex-logo.png" alt="pokédex logo">

    </header>
</section>
        `;
    }
}


export default Header;