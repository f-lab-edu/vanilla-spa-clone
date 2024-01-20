import "./style.css";

const FOOTER_LIST = [
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
  constructor() {
    super();
  }

  createTitle(title) {
    const li = document.createElement("li");
    li.classList.add("footer__list-item");

    const h3 = document.createElement("h3");
    h3.classList.add("footer__list-title");
    h3.textContent = title;

    li.appendChild(h3);

    return li;
  }

  createContent(item) {
    const li = document.createElement("li");
    li.classList.add("footer__list-item");

    const a = document.createElement("a");
    a.classList.add("footer__list-a");
    a.href = item.link;
    a.textContent = item.content;

    li.appendChild(a);

    return li;
  }

  connectedCallback() {
    const wrap = document.createElement("div");
    wrap.classList.add("footer__list-wrap");

    FOOTER_LIST.forEach((list) => {
      const ul = document.createElement("ul");
      ul.className = "footer__list";

      const title = this.createTitle(list.title);
      ul.appendChild(title);

      list.item.forEach((item) => {
        const content = this.createContent(item);
        ul.appendChild(content);
      });

      wrap.appendChild(ul);
    });

    this.appendChild(wrap);
  }
}
