
var theRealAjax = {};

class FancyAjaxLibrary extends HTMLElement {
  // ...
  static get observedAttributes() {
    return ['url'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._fetch();
  }

  fetch() {
    // Fetch the data and then throw event
    theRealAjax.fetch(this._url).andThen((data) => {
      this.dispatchEvent(new CustomEvent('onAjaxResponse', { detail: data }));
    });
  }
}

window.customElements.define('fancy-ajax-library', FancyAjaxLibrary);

