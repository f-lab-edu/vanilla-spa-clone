import App from "./components/App.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import FooterList from "./components/FooterList/FooterList.js";
import FooterIconList from "./components/FooterIconList/FooterIconList.js";
import ArticleList from "./components/ArticleList/ArticleList.js";
import ArticleItem from "./components/ArticleItem/ArticleItem.js";
import Router from "./router/router.js";

customElements.define("blog-app", App);
customElements.define("blog-header", Header);
customElements.define("blog-footer", Footer);
customElements.define("footer-list", FooterList);
customElements.define("footer-icon-list", FooterIconList);
customElements.define("article-list", ArticleList);
customElements.define("article-item", ArticleItem);

const router = new Router();
router.addRoute("/", "tech");
router.addRoute("/tech", "tech");
router.addRoute("/design", "design");
router.addRoute("/article/:id", "article");
router.start();
