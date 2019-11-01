import Component from '../src/Component.js';

class Paging extends Component {
    renderHTML() {
        return `
        <section class="paging-section">
            <p class="paging">
                    <button class="prev" disabled>◀</button>
                    <span>Page 1 of 5</span>
                    <button class="next">▶</button>
                </p>
        </section>
        `;
    }
}

export default Paging;