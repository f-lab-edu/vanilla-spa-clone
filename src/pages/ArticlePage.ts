import NotFoundPage from "./NotFoundPage";

const ArticlePage = (params?: Record<string, string>) => {
  if (!params) {
    return NotFoundPage();
  }

  const div: HTMLDivElement = document.createElement("div");
  div.textContent = `아티클 ID: ${params.id}`;

  return div;
};

export default ArticlePage;
