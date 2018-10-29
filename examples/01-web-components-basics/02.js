

const template = document.createElement('template');
template.innerHTML = `
    <style>
        button {
            border: none;
            cursor: pointer;
            background-color: orange;
        }
    </style>
    <div>
      <span>Awesome button ahead:</span>
      <button>Click Me</button>
    </div>
`;


class MyElement extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector('button');
  }

  connectedCallback() {

  }

  disconnectedCallback() {

  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed!`);
  }
}

window.customElements.define('my-element', MyElement);

