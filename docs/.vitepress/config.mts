import { defineConfig } from 'vitepress'
import {nav} from "./config/nav";
import {sidebar} from "./config/sidebar";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/Y-blog",
  title: "Yacj Blog",
  description: "blog",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
