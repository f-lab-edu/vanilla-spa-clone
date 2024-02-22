import template from "./template.html";
import "./style.css";

import { getTechArticleList, getDesignArticleList } from "@/api/articleList";
import { Article } from "@/types/types";

const TITLE_MAP: Record<string, string> = {
  tech: "개발",
  design: "디자인",
};

const FETCHER_MAP: Record<string, () => Promise<Article[]>> = {
  tech: getTechArticleList,
  design: getDesignArticleList,
};

export default class ArticleList extends HTMLElement {
  private readonly template: DocumentFragment | undefined;
  private readonly path: string;
  private articles: Article[];

  constructor(path: string) {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template")?.content;
    this.articles = [];
    this.path = path;
  }

  notifyArticleListLoaded(): void {
    const event = new CustomEvent("articleListLoaded");
    this.dispatchEvent(event);
  }

  async getArticles(): Promise<void> {
    const data = await FETCHER_MAP[this.path]();
    this.articles = data;

    this.notifyArticleListLoaded();
  }

  addArticles(ulElement: HTMLUListElement): void {
    this.articles.forEach((item) => {
      const articleItemElement = document.createElement("article-item");
      articleItemElement.setArticleData(item);
      ulElement.appendChild(articleItemElement);
    });
  }

  render(): void {
    if (!this.template) return;

    const titleElement = this.template.querySelector(".article-list__title");

    if (titleElement) {
      titleElement.textContent = TITLE_MAP[this.path];
    }

    const ulElement = this.template.querySelector(".article-list__ul");

    if (ulElement instanceof HTMLUListElement) {
      this.addArticles(ulElement);
    }

    this.appendChild(this.template.cloneNode(true));
  }

  connectedCallback(): void {
    this.addEventListener("articleListLoaded", () => {
      this.render();
    });

    this.getArticles();
  }
}
