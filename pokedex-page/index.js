import App from '../src/App.js';

const app = new App();
const element = app.renderDOM();
document.body.prepend(element);