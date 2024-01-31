import template from "./template.html";
import "./style.css";

import { formatDate } from "../../utils/formatDate";

export default class ArticleItem extends HTMLElement {
  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;

    this.data = {};
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.template.querySelector(".article-item__a").href =
      "article/" + this.data.id;
    this.template.querySelector(".article-item__image").src =
      this.data.imageUrl;
    this.template.querySelector(".article-item__title").textContent =
      this.data.title;
    this.template.querySelector(".article-item__description").textContent =
      this.data.description;
    this.template.querySelector(".article-item__date").textContent = formatDate(
      this.data.createdAt
    );

    const liElement = document.createElement("li");
    liElement.appendChild(this.template.cloneNode(true));

    this.appendChild(liElement);
  }
}
