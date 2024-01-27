import "./style.css";
import facebookIcon from "@assets/facebook-icon.svg";
import blogIcon from "@assets/blog-icon.svg";
import naverIcon from "@assets/naver-icon.svg";
import twitterIcon from "@assets/twitter-icon.svg";
import instagramIcon from "@assets/instagram-icon.svg";

const FOOTER_ICON_LIST = [
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
  createIcon(item) {
    const li = document.createElement("li");
    li.classList.add("footer__icon-item");

    const a = document.createElement("a");
    a.classList.add("footer__icon-a");
    a.href = item.url;

    const img = document.createElement("img");
    img.classList.add("footer__icon-image");
    img.src = item.icon;
    img.alt = item.alt;

    a.appendChild(img);
    li.appendChild(a);

    return li;
  }

  connectedCallback() {
    const ul = document.createElement("ul");
    ul.classList.add("footer__icon-list");

    FOOTER_ICON_LIST.forEach((item) => {
      const li = this.createIcon(item);
      ul.appendChild(li);
    });

    this.appendChild(ul);
  }
}
