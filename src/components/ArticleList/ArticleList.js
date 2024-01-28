import template from "./template.html";
import "./style.css";

import { getArticleList } from "@/api/articleList";

// 임시 현재 경로
const CURRENT_PATH = "tech";

const TITLE_MAP = {
  tech: "개발",
  design: "디자인",
};

export default class ArticleList extends HTMLElement {
  constructor() {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;

    this._articles = [];
  }

  notifyArticleListLoaded() {
    const event = new CustomEvent("articleListLoaded");

    this.dispatchEvent(event);
  }

  async getArticles() {
    const data = await getArticleList();
    this._articles = data.results;

    this.notifyArticleListLoaded();
  }

  addArticles(ulElement) {
    this._articles.forEach((item) => {
      const articleItemElement = document.createElement("article-item");
      articleItemElement.setArticleData(item);
      ulElement.appendChild(articleItemElement);
    });
  }

  render() {
    const titleElement = this.template.querySelector(".article-list__title");
    titleElement.textContent = TITLE_MAP[CURRENT_PATH];

    const ulElement = this.template.querySelector(".article-list__ul");

    this.addArticles(ulElement);
    this.appendChild(this.template.cloneNode(true));
  }

  connectedCallback() {
    this.addEventListener("articleListLoaded", () => {
      this.render();
    });

    this.getArticles();
  }
}
