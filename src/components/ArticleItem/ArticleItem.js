import template from "./template.html";
import style from "./style.css?shadow";

export default class ArticleItem extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    this.data = {};
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
      .querySelector("template").content;
    const styleElement = document.createElement("style");
    styleElement.textContent = style;

    HTMLTemplate.querySelector(".article-item__a").href =
      "article/" + this.data.id;
    HTMLTemplate.querySelector(".article-item__image").src = this.data.imageUrl;
    HTMLTemplate.querySelector(".article-item__title").textContent =
      this.data.title;
    HTMLTemplate.querySelector(".article-item__description").textContent =
      this.data.description;
    HTMLTemplate.querySelector(".article-item__date").textContent =
      this.formatDate(this.data.createdAt);

    this.shadowRoot.appendChild(HTMLTemplate.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  }
}
