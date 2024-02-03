export default class Router {
  constructor() {
    this._routes = [];
    this._currentPath = null;
    this._notFound = () => {};
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

  setNotFound(page) {
    this._notFound = page;
  }

  checkRoutes() {
    const { pathname } = location;

    if (this._currentPath === pathname) return;

    this._currentPath = pathname;

    const route = this._routes.find(({ regex }) => regex.test(pathname));

    if (!route) {
      this._notFound();
      return;
    }

    const params = this.extractParams(route, pathname);

    route.page(params);
  }

  start() {
    this.checkRoutes();
  }
}
