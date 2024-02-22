import ArticleList from "@/components/ArticleList/ArticleList";

const ArticleListPage = (path = "tech") => {
  const articleList = new ArticleList(path);

  return articleList;
};

export default ArticleListPage;
