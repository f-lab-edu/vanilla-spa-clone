export default class Router {
  constructor(app) {
    this._app = app;
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

  checkRoutes() {
    const { pathname } = location;

    if (this._currentPath === pathname) return;

    this._currentPath = pathname;

    const route = this._routes.find(({ regex }) => regex.test(pathname));

    if (!route) {
      this._app.render(this._notFound());
      return;
    }

    const params = this.extractParams(route, pathname);

    this._app.render(route.page(params));
  }

  start() {
    this.checkRoutes();
  }
}
