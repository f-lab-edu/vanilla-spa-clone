import ArticleList from "@/components/ArticleList/ArticleList";
import { ArticlePath } from "@/types/types";

const ArticleListPage = (path: ArticlePath = "tech") => {
  const articleList: ArticleList = new ArticleList(path);

  return articleList;
};

export default ArticleListPage;
