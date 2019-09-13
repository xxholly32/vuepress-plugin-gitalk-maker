const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vuepress gitalk',
  base: '/vuepress-plugin-gitalk-maker/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Github',
        link: 'https://github.com/xxholly32/vuepress-plugin-gitalk-maker',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [''],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      require('../../libs'),
      {
        gitalkConfig: {
          clientID: 'f5e984a2a3997e75b5eb',
          clientSecret: 'd5622db390c540dd11b148f6437559ddbfc5b0e5',
          repo: 'vuepress-plugin-gitalk-maker',
          owner: 'xxholly32',
          admin: ['xxholly32'],
          // id: location.pathname, // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
        },
      },
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
};
