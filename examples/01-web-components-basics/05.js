

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

    this._message = '';
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector('button');
    this.$button.addEventListener('click', (e) => {
      this.dispatchEvent(new CustomEvent('onBestButtonEverClicked', { detail: this._message }));
    });
  }


  static get observedAttributes() {
    return ['message'];
  }

  set message(value) {
    this._message = value;
    this._redraw();
  }

  get message() {
    return this._message;
  }

  connectedCallback() {
    this._message = 'Click Me';
    this._redraw();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._redraw();
  }

  _redraw() {
    this.$button.innerHTML = this._message;
  }

  disconnectedCallback() {

  }
}

window.customElements.define('my-element', MyElement);

