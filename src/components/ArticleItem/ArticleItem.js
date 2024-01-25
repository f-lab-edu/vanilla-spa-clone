import template from "./template.html";
import style from "./style.css?shadow";

export default class ArticleItem extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.attachShadow({ mode: "open" });
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}. ${month}. ${day}`;
  }

  render() {
    const HTMLTemplate = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template");
    const styleElement = document.createElement("style");
    styleElement.textContent = style;

    HTMLTemplate.content.querySelector(".article-item__a").href =
      "article/" + this.data.id;
    HTMLTemplate.content.querySelector(".article-item__image").src =
      this.data.imageUrl;
    HTMLTemplate.content.querySelector(".article-item__title").textContent =
      this.data.title;
    HTMLTemplate.content.querySelector(
      ".article-item__description"
    ).textContent = this.data.description;
    HTMLTemplate.content.querySelector(".article-item__date").textContent =
      this.formatDate(this.data.createdAt);

    this.shadowRoot.appendChild(HTMLTemplate.content.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  }
}
