

const template = document.createElement('template');
template.innerHTML = `
    <div>
      <span class="name"></span>
      <span class="price"></span>
      <div class="image"></div>
    </div>
`;

var fancyAjaxLibrary = {};

class AwesomeProductDetails extends HTMLElement {
  // ...

  _fetchProduct() {
    // Fetch product data and update then redraw
    fancyAjaxLibrary.andThen((data) => {
      this._data = data;
      this._redraw();
    });
  }
  _redraw() {
    // Some templating stuff
  }

  // ...
}

window.customElements.define('awesome-product-details', AwesomeProductDetails);

