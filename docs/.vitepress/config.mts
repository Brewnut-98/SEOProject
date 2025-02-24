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
    ]
  }
}) 