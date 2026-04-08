import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Slay the Spire 2 技术分析与 Mod 笔记',
  description: '基于发布包、资源提取与结构化代码骨架整理的学习站。',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon01.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/getting-started' },
      { text: '项目分析', link: '/analysis/runtime-architecture' },
      { text: 'Mod 制作', link: '/modding/mod-overview' },
      { text: '参考', link: '/reference/file-map' },
      { text: 'GitHub', link: 'https://github.com/KonshinHaoshin/sts2document' },
      { text: 'B站', link: 'https://space.bilibili.com/296330875' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '开始阅读', link: '/guide/getting-started' },
            { text: '项目概览', link: '/guide/project-overview' },
            { text: '研究工作区', link: '/guide/research-workspace' }
          ]
        }
      ],
      '/analysis/': [
        {
          text: '项目分析',
          items: [
            { text: '运行时架构', link: '/analysis/runtime-architecture' },
            { text: '资源结构', link: '/analysis/resource-structure' },
            { text: '场景与 UI', link: '/analysis/scenes-and-ui' },
            { text: '卡牌渲染', link: '/analysis/card-rendering' },
            { text: '卡牌职业分类', link: '/analysis/cards-by-class' },
            { text: 'Spine 资源', link: '/analysis/spine-assets' },
            { text: 'Spine 版本兼容', link: '/analysis/spine-version-compatibility' },
            { text: '音频与原生扩展', link: '/analysis/audio-and-native-extensions' },
            { text: '代码结构', link: '/analysis/code-structure' }
          ]
        }
      ],
      '/modding/': [
        {
          text: 'Mod 制作',
          items: [
            { text: 'Mod 概览', link: '/modding/mod-overview' },
            { text: '当前模组布局', link: '/modding/current-mod-layout' },
            { text: '开发工作流', link: '/modding/modding-workflow' },
            { text: 'PCK Mod', link: '/modding/pck-modding' },
            { text: 'DLL Mod', link: '/modding/dll-modding' },
            { text: '调试与风险', link: '/modding/debugging-and-risks' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '文件地图', link: '/reference/file-map' },
            { text: '已知限制', link: '/reference/known-limitations' },
            { text: '术语表', link: '/reference/glossary' }
          ]
        }
      ]
    }
  }
})