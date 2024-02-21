import template from "./template.html";
import "./style.css";

export default class Footer extends HTMLElement {
  private template: DocumentFragment | undefined;

  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template")?.content;
  }

  connectedCallback(): void {
    if (this.template) {
      this.appendChild(this.template.cloneNode(true));
    }
  }
}
