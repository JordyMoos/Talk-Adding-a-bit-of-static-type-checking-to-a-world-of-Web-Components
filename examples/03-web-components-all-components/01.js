

const template = document.createElement('template');
template.innerHTML = `
    <div>
      <span class="name"></span>
      <span class="price"></span>
      <div class="image"></div>
    </div>
`;

class AwesomeProductDetails extends HTMLElement {
  constructor() {
    super();
    this._productId = null;
  }
  static get observedAttributes() {
    return ['product-id'];
  }
  _fetchProduct() {
    // Fetch product data and update then redraw
  }
  _redraw() {
    // Some templating stuff
  }
}

window.customElements.define('awesome-product-details', AwesomeProductDetails);

