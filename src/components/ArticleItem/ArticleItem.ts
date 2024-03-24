import "./style.css";

import { formatDate } from "@/utils/formatDate";
import { Article } from "@/types/types";

export default class ArticleItem extends HTMLElement {
  private article: Article | null = null;

  setArticleData(data: Article): void {
    this.article = data;
    this.render();
  }

  render(): void {
    if (!this.article) return;

    this.innerHTML = `
      <li>
        <a class="article-item__a" data-navigation href="article/${
          this.article.id
        }">
          <img class="article-item__image" src="${
            this.article.imageUrl
          }" alt="" />
          <div>
            <h3 class="article-item__title">${this.article.title}</h3>
            <p class="article-item__description">${this.article.description}</p>
            <span class="article-item__date">${formatDate(
              this.article.createdAt
            )}</span>
          </div>
        </a>
      </li>
    `;
  }
}
