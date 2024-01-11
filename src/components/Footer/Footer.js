import "./style.css";

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById("footer");
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
  }
}
