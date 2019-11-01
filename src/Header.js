import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return `
 <section class="header">
    <header>
        <img class="header-logo" src="../assets/pokedex-logo.png" alt="pokédex logo">
        <nav class="filter-controls">
            <a href="./home/index.html">Home Page</a>
            <a href="../index.html">Pokédex</a>
        </nav>

    </header>
</section>
        `;
    }
}


export default Header;