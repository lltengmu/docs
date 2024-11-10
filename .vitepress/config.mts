import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eddie",
  description: "你怎么睡得着的...",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "技术文档",
        items: [
          {
            text: "Lunix",
            link: "/linux/index.md",
          },
          {
            text: "docker",
            link: "/docker/index.md",
          },
          {
            text: "zustand",
            link: "/zustand/index.md",
          },
        ],
      },
      { text: "内功心法", link: "/markdown-examples" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
