//import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import { html, LitElement } from '@web/lit-element.js';


export default class App extends LitElement {
    constructor() {
        super()
    }
    createRenderRoot() {
        return this;
    }
    render() {
        return html`
        <div>
            Hello Pika!
        </div>
        `;
    }
}

customElements.define('my-app',App);