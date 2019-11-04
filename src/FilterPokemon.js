import Component from '../src/Component.js';

class FilterPokemon extends Component {
    onRender(form) {
        const filterInput = form.querySelector('input[name=search]');
        const typeDropdown = form.querySelector('input[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            filterInput.value = searchParams.get('s') || '';
            const type = searchParams.get('type');
            if (type) {
                typeDropdown.value === type;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });


        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('sort', formData.get('filters'));
            searchParams.set('pokemon', formData.get('search'));
            searchParams.set('page', 1);
            window.location.hash = searchParams.toString();

        });
    }





    renderHTML() {
        return `
           <form>
               <section class="filter-toolbar">

                   <label class="text-input">
                       <input placeholder="Search Here" name="search" type="text">
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
     `;
    }
}

export default FilterPokemon;