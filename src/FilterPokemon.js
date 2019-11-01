import Component from '../src/Component.js';

class FilterPokemon extends Component {
    renderHTML() {
        return `
        <section class="filter-section">
        <nav class="filter-controls">
            <a href="./home/index.html">Home Page</a>
            <a href="./index.html">Pokédex</a>
           <form>
               <section class="filter-toolbar">

                   <label class="text-input">
                       <input placeholder="Search Here" type="text">
                   </label>
                   <label class="dropdown-options-label">
                       Filter:
                       <select name="filters" class="dropdown-options">
                           <option value="name">Name</option>
                           <option value="type">Type</option>
                           <option value="attack">Attack</option>
                           <option value="defense">Defense</option>
                           <option value="weakness">Weakness</option>
                       </select>
                   </label>
                   <label class="search-button"><button>Search</button></label>
               </section>
           </form>
            
        </nav>
    </section>
     `;
    }
}

export default FilterPokemon;