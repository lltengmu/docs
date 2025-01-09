import { defineConfig } from 'vitepress'
import sidebar from './sidebars'
import nav from './nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Eddie',
  description: '你怎么睡得着的...',
  srcDir: 'docs',
  outDir: 'public/pages',
  lastUpdated: true,
  markdown: { math: true },
  themeConfig: {
    nav,
    sidebar,
    aside: true,
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
