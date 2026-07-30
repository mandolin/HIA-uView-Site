import { defineConfig } from 'vitepress';

/**
 * @module hia-uview-site-vitepress-config
 * @lang zh-CN 定义 HIA-uView 官方站的本地静态 VitePress 配置、双语导航与受限内容入口；不声明线上地址、部署或外部服务。
 * @lang en Defines local-static VitePress configuration, bilingual navigation, and bounded content entry points for the HIA-uView official site; it declares no live URL, deployment, or external service.
 */

export default defineConfig({
  appearance: false,
  description: 'HIA-uView 官方文档 / Official documentation',
  ignoreDeadLinks: false,
  lang: 'zh-Hans',
  lastUpdated: false,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',
      themeConfig: {
        docFooter: {
          next: '下一页',
          prev: '上一页'
        },
        nav: [
          { text: '开始使用', link: '/getting-started/introduction' },
          { text: '组件', link: '/components/overview' },
          { text: '兼容性', link: '/compatibility-and-releases/compatibility-evidence' },
          { text: 'GitHub', link: 'https://github.com/mandolin/HIA-uView' }
        ],
        outline: {
          label: '本页目录',
          level: [2, 3]
        },
        returnToTopLabel: '返回顶部',
        sidebar: {
          '/getting-started/': [
            { text: '开始使用', items: [{ text: '项目介绍', link: '/getting-started/introduction' }] }
          ],
          '/components/': [
            { text: '组件', items: [{ text: '组件概览', link: '/components/overview' }, { text: 'UButton', link: '/components/u-button' }] }
          ],
          '/design-system/': [
            { text: '设计系统', items: [{ text: 'Token 与主题', link: '/design-system/tokens-and-theme' }] }
          ],
          '/tool/': [
            { text: '工具', items: [{ text: 'HIA-uView-Tool', link: '/tool/overview' }] }
          ],
          '/migration-and-source/': [
            { text: '迁移与来源', items: [{ text: '从 uView 迁移', link: '/migration-and-source/migration-from-uview' }] }
          ],
          '/compatibility-and-releases/': [
            { text: '兼容性与发布', items: [{ text: '兼容性证据', link: '/compatibility-and-releases/compatibility-evidence' }] }
          ]
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/mandolin/HIA-uView' }]
      },
      title: 'HIA-uView'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        docFooter: {
          next: 'Next page',
          prev: 'Previous page'
        },
        nav: [
          { text: 'Get started', link: '/en/getting-started/introduction' },
          { text: 'Components', link: '/en/components/overview' },
          { text: 'Compatibility', link: '/en/compatibility-and-releases/compatibility-evidence' },
          { text: 'GitHub', link: 'https://github.com/mandolin/HIA-uView' }
        ],
        outline: {
          label: 'On this page',
          level: [2, 3]
        },
        returnToTopLabel: 'Return to top',
        sidebar: {
          '/en/getting-started/': [
            { text: 'Get started', items: [{ text: 'Introduction', link: '/en/getting-started/introduction' }] }
          ],
          '/en/components/': [
            { text: 'Components', items: [{ text: 'Overview', link: '/en/components/overview' }, { text: 'UButton', link: '/en/components/u-button' }] }
          ],
          '/en/design-system/': [
            { text: 'Design system', items: [{ text: 'Tokens and theme', link: '/en/design-system/tokens-and-theme' }] }
          ],
          '/en/tool/': [
            { text: 'Tooling', items: [{ text: 'HIA-uView-Tool', link: '/en/tool/overview' }] }
          ],
          '/en/migration-and-source/': [
            { text: 'Migration and source', items: [{ text: 'Migrating from uView', link: '/en/migration-and-source/migration-from-uview' }] }
          ],
          '/en/compatibility-and-releases/': [
            { text: 'Compatibility and releases', items: [{ text: 'Compatibility evidence', link: '/en/compatibility-and-releases/compatibility-evidence' }] }
          ]
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/mandolin/HIA-uView' }]
      },
      title: 'HIA-uView'
    }
  },
  themeConfig: {
    footer: {
      copyright: 'MIT License',
      message: 'Pre-release documentation; only documented evidence is claimed.'
    }
  },
  title: 'HIA-uView'
});
