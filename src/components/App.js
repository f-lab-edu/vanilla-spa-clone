import "./reset.css";
import "./style.css";

export default class App extends HTMLElement {
  constructor() {
    super();
    this._root = document.getElementById("root");
  }

  render(component) {
    window.requestAnimationFrame(() => {
      const header = document.createElement("blog-header");
      const footer = document.createElement("blog-footer");

      this.appendChild(header);
      this.appendChild(component);
      this.appendChild(footer);

      this._root.appendChild(this);
    });
  }
}
