import Section from "@/components/Section/Section";

interface Routes {
  regex: RegExp;
  page: (params: Record<string, string>) => HTMLElement;
  params: string[];
}

export default class Router {
  private section: Section;
  private routes: Routes[] = [];
  private currentPath: string | null = null;
  private notFoundPage: any = null;

  constructor(section: Section) {
    this.section = section;
  }

  addRoute(path: string, page: any): void {
    const params: string[] = [];

    const parsedPath = path.replace(/:(\w+)/g, (substring, paramName) => {
      params.push(paramName);

      return "([^/]+)";
    });

    const regex = new RegExp(`^${parsedPath}$`);
    this.routes.push({ regex, page, params });
  }

  extractParams(route: Routes, pathname: string): Record<string, string> {
    const match = route.regex.exec(pathname);

    const params =
      match?.slice(1).reduce((acc: Record<string, string>, value, index) => {
        acc[route.params[index]] = value;
        return acc;
      }, {}) ?? {};

    return params;
  }

  setNotFoundPage(page: any): void {
    this.notFoundPage = page;
  }

  navigate(path: string): void {
    history.pushState("", "", path);
    this.checkRoutes();
  }

  checkRoutes(): void {
    const { pathname } = location;

    if (this.currentPath === pathname) return;

    this.currentPath = pathname;

    const route = this.routes.find(({ regex }) => regex.test(pathname));

    this.section.innerHTML = "";

    if (!route) {
      this.section.appendChild(this.notFoundPage());
      return;
    }

    const params = this.extractParams(route, pathname);

    this.section.appendChild(route.page(params));
  }

  handlePopState(): void {
    this.checkRoutes();
  }

  handlePageNavigation(event: CustomEvent): void {
    this.navigate(event.detail.path);
  }

  start(): void {
    window.addEventListener("popstate", this.handlePopState);
    window.addEventListener("pageNavigation", this.handlePageNavigation);
    this.checkRoutes();
  }

  stop(): void {
    window.removeEventListener("popstate", this.handlePopState);
    window.removeEventListener("pageNavigation", this.handlePageNavigation);
  }
}
