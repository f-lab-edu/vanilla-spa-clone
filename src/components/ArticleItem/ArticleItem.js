import template from "./template.html";
import "./style.css";

import { formatDate } from "@/utils/formatDate";

export default class ArticleItem extends HTMLElement {
  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;

    this._articleData = {
      id: "",
      title: "",
      description: "",
      imageUrl: "",
      createdAt: "",
    };
  }

  setArticleData(data) {
    this._articleData = {
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      createdAt: data.createdAt,
    };

    this.render();
  }

  render() {
    this.template.querySelector(".article-item__a").href =
      "article/" + this._articleData.id;
    this.template.querySelector(".article-item__image").src =
      this._articleData.imageUrl;
    this.template.querySelector(".article-item__title").textContent =
      this._articleData.title;
    this.template.querySelector(".article-item__description").textContent =
      this._articleData.description;
    this.template.querySelector(".article-item__date").textContent = formatDate(
      this._articleData.createdAt
    );

    const liElement = document.createElement("li");
    liElement.appendChild(this.template.cloneNode(true));

    this.appendChild(liElement);
  }
}
