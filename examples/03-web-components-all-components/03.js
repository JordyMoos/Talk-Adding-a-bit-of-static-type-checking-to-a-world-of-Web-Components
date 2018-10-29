

const template = document.createElement('template');
template.innerHTML = `
    <div>
      <span class="name"></span>
      <span class="price"></span>
      <div class="image"></div>
    </div>
`;

// Same library
var fancyAjaxLibrary = {};

class EpicCloudList extends HTMLElement {
  // ...

  _fetchCloudWords() {
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

window.customElements.define('epic-cloud-list', EpicCloudList);

