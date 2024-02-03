const ArticlePage = (params) => {
  const div = document.createElement("div");
  div.textContent = `아티클 ID: ${params.id}`;

  return div;
};

export default ArticlePage;
