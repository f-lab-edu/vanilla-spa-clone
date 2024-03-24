import "./style.css";

interface FooterItem {
  content: string;
  link: string;
}

interface FooterItemList {
  title: string;
  item: FooterItem[];
}

const FOOTER_ITEM_LIST: FooterItemList[] = [
  {
    title: "토스테크",
    item: [
      {
        content: "의견 보내기",
        link: "mailto:techblog@toss.im",
      },
    ],
  },
  {
    title: "토스",
    item: [
      {
        content: "홈페이지",
        link: "https://toss.im",
      },
      {
        content: "회사 소개",
        link: "https://toss.im/team",
      },
      {
        content: "채용",
        link: "https://toss.im/career",
      },
    ],
  },
  {
    title: "고객센터",
    item: [
      {
        content: "전화: 1599-4905 (24시간 연중무휴)",
        link: "tel:1599-4905",
      },
      {
        content: "이메일: support@toss.im",
        link: "mailto:support.toss.im",
      },
      {
        content: "카카오톡: @toss",
        link: "https://goto.kakao.com/@toss",
      },
    ],
  },
];

export default class FooterList extends HTMLElement {
  createTitle(title: string): string {
    return `
      <li class="footer__list-item">
        <h3 class="footer__list-title">${title}</h3>
      </li>
    `;
  }

  createContent(item: FooterItem): string {
    return `
      <li class="footer__list-item">
        <a class="footer__list-a" href="${item.link}">${item.content}</a>
      </li>
    `;
  }

  connectedCallback(): void {
    this.innerHTML = `
      <div class="footer__list-wrap">
        ${FOOTER_ITEM_LIST.map(
          (list) => `
          <ul class="footer__list">
            ${this.createTitle(list.title)}
            ${list.item.map((item) => this.createContent(item)).join("")}
          </ul>
        `
        ).join("")}
      </div>
    `;
  }
}
