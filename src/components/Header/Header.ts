import { parseTemplate } from "@/utils/parseTemplate";
import template from "./template.html";
import "./style.css";

export default class Header extends HTMLElement {
  private readonly template: DocumentFragment;

  constructor() {
    super();
    this.template = parseTemplate(template);
  }

  handleNavigationClick(event: Event): void {
    if (!(event.target instanceof HTMLAnchorElement)) return;

    event.preventDefault();
    const path = event.target.getAttribute("href");

    window.dispatchEvent(
      new CustomEvent("pageNavigation", { detail: { path } })
    );
  }

  connectedCallback(): void {
    this.appendChild(this.template.cloneNode(true));

    const aList: NodeListOf<HTMLAnchorElement> =
      this.querySelectorAll("a[data-navigation]");

    aList.forEach((a) => {
      a.addEventListener("click", this.handleNavigationClick);
    });

    const menuButton = this.querySelector(".header__menu-button");
    const nav = this.querySelector(".nav");

    menuButton?.addEventListener("click", () => {
      nav?.classList.toggle("active");

      const img = menuButton?.querySelector("img");

      if (nav?.classList.contains("active")) {
        menuButton?.setAttribute("aria-label", "메뉴 닫기");
        img?.setAttribute("src", "./assets/close.svg");
      } else {
        menuButton?.setAttribute("aria-label", "메뉴 열기");
        img?.setAttribute("src", "./assets/hamburger-icon.svg");
      }
    });
  }
}
