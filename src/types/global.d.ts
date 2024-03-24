import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import ArticleList from "@/components/ArticleList/ArticleList";
import ArticleItem from "@/components/ArticleItem/ArticleItem";
import Footer from "@/components/Footer/Footer";
import FooterList from "@/components/FooterList/FooterList";
import FooterIconList from "@/components/FooterIconList/FooterIconList";

declare global {
  interface HTMLElementTagNameMap {
    "blog-header": Header;
    "blog-section": Section;
    "article-list": ArticleList;
    "article-item": ArticleItem;
    "blog-footer": Footer;
    "footer-list": FooterList;
    "footer-icon-list": FooterIconList;
  }

  interface WindowEventMap {
    pageNavigation: CustomEvent<{ path: string }>;
  }
}
