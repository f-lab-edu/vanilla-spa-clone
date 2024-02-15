export default class Router {
  constructor(section) {
    this._section = section;
    this._routes = [];
    this._currentPath = null;
    this._notFoundPage = null;
  }

  addRoute(path, page) {
    const params = [];

    const parsedPath = path.replace(/:(\w+)/g, (_, paramName) => {
      params.push(paramName);

      return "([^/]+)";
    });

    const regex = new RegExp(`^${parsedPath}$`);
    this._routes.push({ regex, page, params });
  }

  extractParams(route, pathname) {
    const match = route.regex.exec(pathname);

    const params = match.slice(1).reduce((params, value, index) => {
      params[route.params[index]] = value;
      return params;
    }, {});

    return params;
  }

  setNotFoundPage(page) {
    this._notFoundPage = page;
  }

  navigate(path) {
    history.pushState(null, null, path);
    this.checkRoutes();
  }

  checkRoutes() {
    const { pathname } = location;

    if (this._currentPath === pathname) return;

    this._currentPath = pathname;

    const route = this._routes.find(({ regex }) => regex.test(pathname));

    this._section.innerHTML = "";

    if (!route) {
      this._section.appendChild(this._notFoundPage());
      return;
    }

    const params = this.extractParams(route, pathname);

    this._section.appendChild(route.page(params));
  }

  start() {
    window.onpopstate = () => this.checkRoutes();
    this.checkRoutes();

    const a = document.querySelectorAll("a[data-navigation]");

    a.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigate(el.getAttribute("href"));
      });
    });
  }
}
