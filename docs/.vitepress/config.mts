import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site title
  title: 'Fun Games Collection',
  
  // Site description
  description: 'A Collection of Fun Online Games',

  // GitHub Pages configuration
  base: '/fun-games-collection/',

  // Theme configuration
  themeConfig: {
    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Games', link: '/games/' },
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Game List',
        items: [
          { text: 'Colorbox Mustard', link: '/games/colorbox-mustard' },
          { text: 'Block Blast', link: '/games/block-blast' },
          { text: 'Happy Glass', link: '/games/happy-glass' },
        ]
      }
    ],

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/fun-games-collection' }
    ],

    // 添加主题相关配置
    appearance: true, // 启用暗黑模式切换
    lastUpdated: true, // 显示最后更新时间
  },

  // 添加 head 配置
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
}) 