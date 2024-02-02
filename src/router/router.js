export default class Router {
  constructor() {
    this._routes = [];
    this._currentPath = null;
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

  checkRoutes() {
    const { pathname } = location;

    if (this._currentPath === pathname) return;

    this._currentPath = pathname;

    const route = this._routes.find(({ regex }) => regex.test(pathname));

    if (!route) {
      // TODO: Not Found
      return;
    }

    const params = this.extractParams(route, pathname);
  }

  start() {
    this.checkRoutes();
  }
}
