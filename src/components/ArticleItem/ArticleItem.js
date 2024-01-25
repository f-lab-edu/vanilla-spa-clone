import template from "./template.html";
import style from "./style.css?shadow";

export default class ArticleItem extends HTMLElement {
  constructor() {
    super();
    this.data = {};

    const HTMLTemplate = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template");
    const styleElement = document.createElement("style");
    styleElement.textContent = style;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(HTMLTemplate.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.shadowRoot.querySelector(".article-item__a").href =
      "article/" + this.data.id;
    this.shadowRoot.querySelector(".article-item__image").src =
      this.data.imageUrl;
    this.shadowRoot.querySelector(".article-item__title").textContent =
      this.data.title;
    this.shadowRoot.querySelector(".article-item__description").textContent =
      this.data.description;
    this.shadowRoot.querySelector(".article-item__date").textContent =
      this.data.createdAt;
  }
}
