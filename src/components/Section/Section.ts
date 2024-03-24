import Router from "@/router/router";
import ArticleListPage from "@/pages/ArticleListPage";
import ArticlePage from "@/pages/ArticlePage";
import NotFoundPage from "@/pages/NotFoundPage";

export default class Section extends HTMLElement {
  private router: Router;

  constructor() {
    super();
    this.router = new Router(this);
    this.configureRouting();
  }

  configureRouting(): void {
    this.router.addRoute("/", () => ArticleListPage("tech"));
    this.router.addRoute("/tech", () => ArticleListPage("tech"));
    this.router.addRoute("/design", () => ArticleListPage("design"));
    this.router.addRoute("/article/:id", (params: Record<string, string>) =>
      ArticlePage(params)
    );
    this.router.setNotFoundPage(() => NotFoundPage());
  }

  connectedCallback(): void {
    this.router.start();
  }

  disconnectedCallback(): void {
    this.router.stop();
  }
}
