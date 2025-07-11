import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // バンドラー設定
  bundler: viteBundler({}),
  // サイト設定
  lang: 'ja-JP',
  title: 'Discord Farmbot',
  description: '農作物画像解析Discord Bot - 詳細ドキュメント',
  
  // ベースURL（GitHub Pagesの場合）
  base: '/discord-farmbot/',
  
  // ヘッド設定
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:title', content: 'Discord Farmbot Documentation' }],
    ['meta', { property: 'og:description', content: '農作物画像解析Discord Botの完全ドキュメント' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/images/farmbot-og.png' }],
  ],

  // テーマ設定
  theme: defaultTheme({
    // ナビゲーション
    navbar: [
      {
        text: 'ホーム',
        link: '/',
      },
      {
        text: 'ユーザーガイド',
        children: [
          '/user-guide/getting-started.md',
          '/user-guide/commands.md',
          '/user-guide/troubleshooting.md',
        ],
      },
      {
        text: '開発者ガイド',
        children: [
          '/developer-guide/setup.md',
          '/developer-guide/api-reference.md',
          '/developer-guide/architecture.md',
          '/developer-guide/contributing.md',
        ],
      },
      {
        text: 'デプロイ',
        children: [
          '/deployment/local-development.md',
          '/deployment/production.md',
          '/deployment/monitoring.md',
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/yourusername/discord-farmbot',
      },
    ],

    // サイドバー
    sidebar: {
      '/user-guide/': [
        {
          text: 'ユーザーガイド',
          children: [
            '/user-guide/getting-started.md',
            '/user-guide/commands.md',
            '/user-guide/image-requirements.md',
            '/user-guide/analysis-results.md',
            '/user-guide/troubleshooting.md',
            '/user-guide/faq.md',
          ],
        },
      ],
      '/developer-guide/': [
        {
          text: '開発者ガイド',
          children: [
            '/developer-guide/setup.md',
            '/developer-guide/architecture.md',
            '/developer-guide/api-reference.md',
            '/developer-guide/testing.md',
            '/developer-guide/contributing.md',
            '/developer-guide/code-style.md',
          ],
        },
      ],
      '/deployment/': [
        {
          text: 'デプロイメント',
          children: [
            '/deployment/local-development.md',
            '/deployment/production.md',
            '/deployment/environment-variables.md',
            '/deployment/monitoring.md',
            '/deployment/scaling.md',
          ],
        },
      ],
    },

    // リポジトリ設定
    repo: 'yourusername/discord-farmbot',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'このページを編集',

    // 最終更新時刻
    lastUpdated: true,
    lastUpdatedText: '最終更新',

    // 貢献者
    contributors: true,
    contributorsText: '貢献者',

    // 検索
    searchMaxSuggestions: 10,
  }),

  // プラグイン
  plugins: [
    // Google Analytics
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX', // 実際のGoogle Analytics IDに置き換え
    }),
  ],

  // Markdown設定
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
})