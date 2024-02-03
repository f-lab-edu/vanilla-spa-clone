import template from "./template.html";
import "./style.css";

import { getTechArticleList, getDesignArticleList } from "@/api/articleList";

const TITLE_MAP = {
  tech: "개발",
  design: "디자인",
};

const FETCHER_MAP = {
  tech: getTechArticleList,
  design: getDesignArticleList,
};

export default class ArticleList extends HTMLElement {
  constructor(path) {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;

    this._articles = [];
    this._path = path;
  }

  notifyArticleListLoaded() {
    const event = new CustomEvent("articleListLoaded");

    this.dispatchEvent(event);
  }

  async getArticles() {
    const data = await FETCHER_MAP[this._path]();
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
    titleElement.textContent = TITLE_MAP[this._path];

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
