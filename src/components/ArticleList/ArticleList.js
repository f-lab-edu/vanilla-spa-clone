export default class ArticleList extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById("article-list");
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
  }
}
