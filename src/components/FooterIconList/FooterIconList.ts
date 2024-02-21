import "./style.css";
import facebookIcon from "../../../public/assets/facebook-icon.svg";
import blogIcon from "../../../public/assets/blog-icon.svg";
import naverIcon from "../../../public/assets/naver-icon.svg";
import twitterIcon from "../../../public/assets/twitter-icon.svg";
import instagramIcon from "../../../public/assets/instagram-icon.svg";

interface IconItem {
  url: string;
  icon: string;
  alt: string;
}

const FOOTER_ICON_LIST: IconItem[] = [
  {
    url: "https://www.facebook.com/toss.official",
    icon: facebookIcon,
    alt: "페이스북 아이콘",
  },
  {
    url: "https://blog.toss.im/",
    icon: blogIcon,
    alt: "블로그 아이콘",
  },
  {
    url: "https://post.naver.com/tossblog",
    icon: naverIcon,
    alt: "네이버 아이콘",
  },
  {
    url: "https://twitter.com/toss__official",
    icon: twitterIcon,
    alt: "트위터 아이콘",
  },
  {
    url: "https://www.instagram.com/toss.im/",
    icon: instagramIcon,
    alt: "인스타그램 아이콘",
  },
];

export default class FooterIconList extends HTMLElement {
  createIcon(item: IconItem): string {
    return `
      <li class="footer__icon-item">
        <a class="footer__icon-a" href="${item.url}">
          <img class="footer__icon-image" src="${item.icon}" alt="${item.alt}">
        </a>
      </li>
    `;
  }

  connectedCallback(): void {
    this.innerHTML = `
      <ul class="footer__icon-list">
        ${FOOTER_ICON_LIST.map((item) => this.createIcon(item)).join("")}
      </ul>
    `;
  }
}
