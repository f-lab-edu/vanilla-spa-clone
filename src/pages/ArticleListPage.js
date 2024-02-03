import ArticleList from "@/components/ArticleList/ArticleList.js";

const ArticleListPage = (path = "tech") => {
  const articleList = new ArticleList(path);

  return articleList;
};

export default ArticleListPage;
