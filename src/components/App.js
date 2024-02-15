import "./reset.css";
import "./style.css";

export default class App extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const header = document.createElement("blog-header");
      const section = document.createElement("blog-section");
      const footer = document.createElement("blog-footer");

      this.appendChild(header);
      this.appendChild(section);
      this.appendChild(footer);
    });
  }
}
