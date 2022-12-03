import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { gungnirTheme } from 'vuepress-theme-gungnir'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  title: '零向量',
  description: 'Xiaohan Zou (Renovamen) is a dragon lost in human world.',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ['meta', { name: 'application-name', content: 'Xiaohan Zou' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Xiaohan Zou' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/img/logo/apple-touch-icon.png` }],
    ['meta', { name: 'theme-color', content: '#377bb5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    docsDir: 'blog',
    docsBranch: 'master',
    navbarTitle: '零向量',
    hitokoto: 'https://v1.hitokoto.cn?c=i', // enable hitokoto (一言) or not?
    // 个人信息配置
    personalInfo: {
      name: '零向量',
      avatar: '/img/avatar.jpg',
      description: '山行野宿，孑然万里'
    },
    // 首页轮播图
    homeHeaderImages: [
      {
        path: '/img/home-bg/1.jpg',
        mask: 'rgba(40, 57, 101, .4)'
      },
      {
        path: '/img/home-bg/5.jpg'
      }
    ],

    // 标签页/链接页
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    },
    // 主题配置
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mdPlus: {
        all: true
      },
      ga: 'G-HCQSX53XFG',
      ba: '75381d210789d3eaf855fa16246860cc',
      rss: {
        siteURL: 'https://blog.zxh.io',
        copyright: 'Renovamen 2018-2022'
      }
    },

    navbar: [
      {
        text: '首页',
        link: '/',
        icon: 'fa-fort-awesome'
      },
      {
        text: '标签',
        link: '/tags/',
        icon: 'fa-tag'
      },
      {
        text: '链接',
        link: '/links/',
        icon: 'fa-satellite-dish'
      },
      {
        text: '文档总览',
        icon: 'fa-paw',
        children: [
          {
            text: '代码规范',
            children: [
              { text: 'Css', link: '/docs/code-specification/code/css/' },
              { text: 'Html', link: '/docs/code-specification/code/html/' },
              {
                text: 'Javascript',
                link: '/docs/code-specification/code/javascript/'
              },
              { text: 'Es6', link: '/docs/code-specification/code/es6/' },
              { text: 'React', link: '/docs/code-specification/code/react/' }
            ]
          },
          {
            text: '命名规范',
            children: [{ text: '命名规范', link: '/docs/code-specification/name/' }]
          }
          // {
          //   text: '前端工程化',
          //   children: [
          //     { text: '简介', link: '/front_end_engineering/' },
          //     { text: '技术选型', link: '/front_end_engineering/01.html' },
          //     { text: '统一规范', link: '/front_end_engineering/02.html' },
          //     { text: '前端组件化', link: '/front_end_engineering/03.html' },
          //     { text: '测试', link: '/front_end_engineering/04.html' },
          //     { text: '构建工具', link: '/front_end_engineering/05.html' },
          //     { text: '自动化部署', link: '/front_end_engineering/06.html' },
          //     { text: '前端监控', link: '/front_end_engineering/07.html' },
          //     { text: '性能优化(一)', link: '/front_end_engineering/08.html' },
          //     { text: '性能优化(二)', link: '/front_end_engineering/09.html' },
          //     { text: '重构', link: '/front_end_engineering/10.html' },
          //     { text: '微服务', link: '/front_end_engineering/11.html' },
          //     { text: 'Serverless', link: '/front_end_engineering/12.html' }
          //   ]
          // }
        ]
      }
    ],

    footer: `
      &copy; magege 2018-2022
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
})
