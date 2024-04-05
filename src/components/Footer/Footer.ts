import { parseTemplate } from "@/utils/parseTemplate";
import template from "./template.html";
import "./style.css";

export default class Footer extends HTMLElement {
  private readonly template: DocumentFragment;

  constructor() {
    super();
    this.template = parseTemplate(template);
  }

  connectedCallback(): void {
    this.appendChild(this.template.cloneNode(true));

    const sectionButton = this.querySelector(".footer__section-button");

    sectionButton?.addEventListener("click", () => {
      window.location.href = "https://toss.im/career/jobs";
    });
  }
}
