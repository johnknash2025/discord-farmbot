import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  // バンドラー設定
  bundler: webpackBundler({}),
  
  // ベースURL（GitHub Pagesの場合）
  base: '/discord-farmbot/',
  
  // 多言語設定
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'Discord Farmbot',
      description: '農作物画像解析Discord Bot - 詳細ドキュメント',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Discord Farmbot',
      description: 'AI-powered crop image analysis Discord Bot - Complete documentation',
    },
  },
  
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
    // Google Analytics (gtag.js)
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-HPC9WP899Q' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HPC9WP899Q');
    `],
  ],

  // テーマ設定
  theme: defaultTheme({
    // 多言語ナビゲーション
    locales: {
      '/': {
        // 日本語ナビゲーション
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
            link: 'https://github.com/johnknash2025/discord-farmbot',
          },
        ],
        selectLanguageName: '日本語',
        selectLanguageText: '言語を選択',
        editLinkText: 'このページを編集',
        lastUpdatedText: '最終更新',
        contributorsText: '貢献者',
      },
      '/en/': {
        // 英語ナビゲーション
        navbar: [
          {
            text: 'Home',
            link: '/en/',
          },
          {
            text: 'User Guide',
            children: [
              '/en/user-guide/getting-started.md',
              '/en/user-guide/commands.md',
              '/en/user-guide/troubleshooting.md',
            ],
          },
          {
            text: 'Developer Guide',
            children: [
              '/en/developer-guide/setup.md',
              '/en/developer-guide/api-reference.md',
              '/en/developer-guide/architecture.md',
              '/en/developer-guide/contributing.md',
            ],
          },
          {
            text: 'Deployment',
            children: [
              '/en/deployment/local-development.md',
              '/en/deployment/production.md',
              '/en/deployment/monitoring.md',
            ],
          },
          {
            text: 'GitHub',
            link: 'https://github.com/johnknash2025/discord-farmbot',
          },
        ],
        selectLanguageName: 'English',
        selectLanguageText: 'Select Language',
        editLinkText: 'Edit this page',
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
      },
    },

    // 多言語サイドバー
    sidebar: {
      // 日本語サイドバー
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
      // 英語サイドバー
      '/en/user-guide/': [
        {
          text: 'User Guide',
          children: [
            '/en/user-guide/getting-started.md',
            '/en/user-guide/commands.md',
            '/en/user-guide/image-requirements.md',
            '/en/user-guide/analysis-results.md',
            '/en/user-guide/troubleshooting.md',
            '/en/user-guide/faq.md',
          ],
        },
      ],
      '/en/developer-guide/': [
        {
          text: 'Developer Guide',
          children: [
            '/en/developer-guide/setup.md',
            '/en/developer-guide/architecture.md',
            '/en/developer-guide/api-reference.md',
            '/en/developer-guide/testing.md',
            '/en/developer-guide/contributing.md',
            '/en/developer-guide/code-style.md',
          ],
        },
      ],
      '/en/deployment/': [
        {
          text: 'Deployment',
          children: [
            '/en/deployment/local-development.md',
            '/en/deployment/production.md',
            '/en/deployment/environment-variables.md',
            '/en/deployment/monitoring.md',
            '/en/deployment/scaling.md',
          ],
        },
      ],
    },

    // 共通設定
    repo: 'johnknash2025/discord-farmbot',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,

    // 最終更新時刻
    lastUpdated: true,

    // 貢献者
    contributors: true,

    // 検索
    searchMaxSuggestions: 10,
  }),

  // プラグイン
  plugins: [
    // Google Analytics
    googleAnalyticsPlugin({
      id: 'G-HPC9WP899Q', // 実際のGoogle Analytics ID
    }),
  ],

  // Markdown設定は削除（警告対応）
})