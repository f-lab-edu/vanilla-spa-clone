import "./style.css";

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById("header");
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
  }
}
