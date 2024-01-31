import template from "./template.html";
import "./style.css";

// 임시 정적 데이터
import data from "../../data/mockArticle.json";

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
  }

  addArticles(ulElement, articles) {
    articles.forEach((item) => {
      const articleItemElement = document.createElement("article-item");
      articleItemElement.setData(item);
      ulElement.appendChild(articleItemElement);
    });
  }

  connectedCallback() {
    console.log(this.template);
    const titleElement = this.template.querySelector(".article-list__title");
    titleElement.textContent = TITLE_MAP[CURRENT_PATH];

    const ulElement = this.template.querySelector(".article-list__ul");

    this.addArticles(ulElement, data.results);
    this.appendChild(this.template.cloneNode(true));
  }
}
