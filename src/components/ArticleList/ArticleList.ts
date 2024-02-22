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
  private articles: Article[] = [];

  constructor(path: string) {
    super();
    this.template = new DOMParser()
      .parseFromString(template, "text/html")
      .querySelector("template")?.content;
    this.path = path;
  }

  async getArticles(): Promise<void> {
    const data = await FETCHER_MAP[this.path]();
    this.articles = data;
    this.dispatchEvent(new CustomEvent("articleListLoaded"));
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

  handleNavigationClick(event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const a = target.closest("a[data-navigation]");
    if (!a) return;

    event.preventDefault();
    const path = a.getAttribute("href");

    history.pushState("", "", path);
    window.dispatchEvent(new CustomEvent("pageNavigation"));
  }

  connectedCallback(): void {
    this.addEventListener("articleListLoaded", () => this.render());
    this.addEventListener("click", this.handleNavigationClick);
    this.getArticles();
  }

  disconnectedCallback(): void {
    this.removeEventListener("articleListLoaded", () => this.render());
    this.removeEventListener("click", this.handleNavigationClick);
  }
}
