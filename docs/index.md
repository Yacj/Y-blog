---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'm-home-layout'

hero:
  name: "Yacj Blog"
  text: ""
  tagline: Hello World
  actions:
    - theme: brand
      text: 网站导航
      link: /nav/
    - theme: alt
      text: 访问Githubb
      link: https://github.com/Yacj

features:
  - icon: 📖
    title: Web前端
    details: 整理前端常用知识点<small>（HTML/CSS/JavaScript/TypeScript等）</small><br />
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 前端常用知识
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: https://notes.fe-mm.com/workflow/utils/library
    linkText: 常用工具库
  - icon: 💻
    title: 记录生活
    details: 记录生活中的小事<small>（生活感悟/学习笔记等）</small><br />记录生活中的一切
    link: https://notes.fe-mm.com/life
    linkText: 生活感悟
---

<style>
.home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.home-layout .details small {
  opacity: 0.8;
}

.home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>

