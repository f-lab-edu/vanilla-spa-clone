import template from "./template.html";
import style from "./style.css?shadow";

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

    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
  }

  addArticles(ulElement, articles) {
    articles.forEach((item) => {
      const articleItemElement = document.createElement("article-item");
      articleItemElement.setData(item);
      ulElement.appendChild(articleItemElement);
    });
  }

  connectedCallback() {
    const HTMLTemplate = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template").content;
    const styleElement = document.createElement("style");
    styleElement.textContent = style;

    const titleElement = HTMLTemplate.querySelector(".article-list__title");
    titleElement.textContent = TITLE_MAP[CURRENT_PATH];

    const ulElement = HTMLTemplate.querySelector(".article-list__ul");

    this.addArticles(ulElement, data.results);

    this.shadowRoot.appendChild(HTMLTemplate.cloneNode(true));
    this.shadowRoot.appendChild(styleElement);
  }
}
