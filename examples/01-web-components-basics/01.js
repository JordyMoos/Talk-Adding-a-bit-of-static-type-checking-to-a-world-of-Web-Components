
class MyElement extends HTMLElement {
  constructor() {
    super();
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

