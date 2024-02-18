import template from "./template.html";
import "./style.css";

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;
  }

  connectedCallback() {
    this.appendChild(this.template.cloneNode(true));

    const a = this.querySelectorAll("a[data-navigation]");

    a.forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const path = a.getAttribute("href");
        history.pushState(null, null, path);
        window.dispatchEvent(new Event("popstate"));
      });
    });
  }
}
