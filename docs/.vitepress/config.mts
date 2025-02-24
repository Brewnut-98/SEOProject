import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site title
  title: 'Fun Games Collection',
  
  // Site description
  description: 'A Collection of Fun Online Games',

  // GitHub Pages configuration
  base: '/SEOProject/',

  // Theme configuration
  themeConfig: {
    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/brewnut-98/SEOProject' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Powered by VitePress'
    }
  },

  // 添加 head 配置
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
}) 