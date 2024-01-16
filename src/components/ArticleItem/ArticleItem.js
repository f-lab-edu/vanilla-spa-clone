import "./style.css";

export default class ArticleItem extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById("article-item");
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
  }
}
