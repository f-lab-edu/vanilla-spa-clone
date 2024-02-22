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

  handleNavigationClick(event: Event): void {
    if (!(event.target instanceof HTMLAnchorElement)) return;

    event.preventDefault();
    const path = event.target.getAttribute("href");

    history.pushState("", "", path);
    window.dispatchEvent(new CustomEvent("pageNavigation"));
  }

  connectedCallback(): void {
    if (!this.template) return;

    this.appendChild(this.template.cloneNode(true));

    const aList: NodeListOf<HTMLAnchorElement> =
      this.querySelectorAll("a[data-navigation]");

    aList.forEach((a) => {
      a.addEventListener("click", this.handleNavigationClick);
    });
  }
}