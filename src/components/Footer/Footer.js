import template from "./template.html";
import "./style.css";

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;
  }

  connectedCallback() {
    this.appendChild(this.template.cloneNode(true));
  }
}
