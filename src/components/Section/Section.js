import Router from "@/router/router.js";
import ArticleListPage from "@/pages/ArticleListPage.js";
import ArticlePage from "@/pages/ArticlePage.js";
import NotFoundPage from "@/pages/NotFoundPage.js";

export default class Section extends HTMLElement {
  constructor() {
    super();
    this.router = new Router(this);

    this.router.addRoute("/", () => new ArticleListPage("tech"));
    this.router.addRoute("/tech", () => new ArticleListPage("tech"));
    this.router.addRoute("/design", () => new ArticleListPage("design"));
    this.router.addRoute("/article/:id", (params) => new ArticlePage(params));
    this.router.setNotFoundPage(() => new NotFoundPage());
  }

  connectedCallback() {
    this.router.start();
  }
}
