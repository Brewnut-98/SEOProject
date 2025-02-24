import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里自定义布局
    })
  },
  enhanceApp({ app }) {
    // 注册组件等
  }
} 