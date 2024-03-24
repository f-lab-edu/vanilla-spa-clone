import ArticleList from "@/components/ArticleList/ArticleList";

const ArticleListPage = (path: string = "tech"): ArticleList => {
  const articleList: ArticleList = new ArticleList(path);

  return articleList;
};

export default ArticleListPage;
