class Hello extends HTMLElement {
  _shadowRoot;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `
<h2>Hello!</h2>
        `;
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

globalThis.customElements.define('x-hello', Hello);

export default Hello;
