import "./reset.css";

export default class App extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById("app");
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const callback = function (child) {
        this.appendChild(child.cloneNode(true));
      }.bind(this);

      Array.from(this.template.content.children).forEach(callback);
    });
  }
}
