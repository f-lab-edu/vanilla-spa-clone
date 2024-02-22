import template from "./template.html";
import "./style.css";

export default class Header extends HTMLElement {
  private readonly template: DocumentFragment | undefined;

  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template")?.content;
  }

  connectedCallback(): void {
    if (!this.template) return;

    this.appendChild(this.template.cloneNode(true));

    const aList: NodeListOf<HTMLAnchorElement> =
      this.querySelectorAll("a[data-navigation]");

    aList.forEach((a) => {
      a.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const path = a.getAttribute("href");

        if (path) {
          history.pushState("", "", path);
          window.dispatchEvent(new CustomEvent("pageNavigation"));
        }
      });
    });
  }
}
