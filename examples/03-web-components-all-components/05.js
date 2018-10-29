
import './fancyAjaxLibrary';

const template = document.createElement('template');
template.innerHTML = `
    <fancy-ajax-library></fancy-ajax-library>
    <div>
      <span class="name"></span>
      <span class="price"></span>
      <div class="image"></div>
    </div>
`;

class EpicCloudList extends HTMLElement {
  constructor() {
    super();
    // ...
    this.$ajax = this._shadowRoot.querySelector('fancy-ajax-library');
    this.$ajax.addEventListener('onAjaxResponse', this._handleData.bind(this));
  }

  connectedCallback() {
    this.$ajax.setAttribute('url', this.apiUrl);
  }

  _handleData(data) {
    // ..
    _redraw();
  }

  // ...
}

window.customElements.define('epic-cloud-list', EpicCloudList);

