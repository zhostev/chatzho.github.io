/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "vinsvison",
    repo: "chatzho.github.io",
    clientId: "2783a4b752f56c0ed912",
    clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
  },

  repoConfig: {
    owner: "vinsvison",
    repo: "chatzho.github.io",
    pushBranch: "master",
    email: "zhaoshijun@yeah.net",
    filterUsers: ['vinsvison']
  },

  title: "YiFei Zhang's Blog",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: "",
  base: "/chatzho.github.io/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/chatzho.github.io"
      },
      {
        name: "Github",
        link: "https://github.com/vinsvison"
      },
      {
        name: "CV",
        link: "/chatzho.github.io/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "@ 蜀 ICP 备 19000509 号 - 1",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
