import Header from '../src/Header.js';

const header = new Header();
const element = header.renderDOM();
document.body.prepend(element);