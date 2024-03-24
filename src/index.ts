import App from "@/components/App";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import ArticleList from "@/components/ArticleList/ArticleList";
import ArticleItem from "@/components/ArticleItem/ArticleItem";
import Footer from "@/components/Footer/Footer";
import FooterList from "@/components/FooterList/FooterList";
import FooterIconList from "@/components/FooterIconList/FooterIconList";

customElements.define("blog-app", App);
customElements.define("blog-header", Header);
customElements.define("blog-section", Section);
customElements.define("article-list", ArticleList);
customElements.define("article-item", ArticleItem);
customElements.define("blog-footer", Footer);
customElements.define("footer-list", FooterList);
customElements.define("footer-icon-list", FooterIconList);
