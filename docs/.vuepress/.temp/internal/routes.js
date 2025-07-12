export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Discord Farmbot"} }],
  ["/README_DEPLOYMENT.html", { loader: () => import(/* webpackChunkName: "README_DEPLOYMENT.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/README_DEPLOYMENT.html.js"), meta: {"title":"🚀 Discord Farmbot ドキュメントサイト デプロイガイド"} }],
  ["/TESTING.html", { loader: () => import(/* webpackChunkName: "TESTING.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/TESTING.html.js"), meta: {"title":"🧪 Discord Farmbot テストガイド"} }],
  ["/USER_GUIDE.html", { loader: () => import(/* webpackChunkName: "USER_GUIDE.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/USER_GUIDE.html.js"), meta: {"title":"🌱 Discord Farmbot ユーザーガイド"} }],
  ["/production-setup.html", { loader: () => import(/* webpackChunkName: "production-setup.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/production-setup.html.js"), meta: {"title":"🚀 本番環境セットアップ完了"} }],
  ["/setup-tunnel.html", { loader: () => import(/* webpackChunkName: "setup-tunnel.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/setup-tunnel.html.js"), meta: {"title":"🌐 外部アクセス用トンネル設定"} }],
  ["/deployment/production.html", { loader: () => import(/* webpackChunkName: "deployment_production.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/deployment/production.html.js"), meta: {"title":"本番環境デプロイ"} }],
  ["/developer-guide/api-reference.html", { loader: () => import(/* webpackChunkName: "developer-guide_api-reference.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/api-reference.html.js"), meta: {"title":"API リファレンス"} }],
  ["/developer-guide/architecture.html", { loader: () => import(/* webpackChunkName: "developer-guide_architecture.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/architecture.html.js"), meta: {"title":"アーキテクチャ"} }],
  ["/developer-guide/contributing.html", { loader: () => import(/* webpackChunkName: "developer-guide_contributing.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/contributing.html.js"), meta: {"title":"コントリビューションガイド"} }],
  ["/developer-guide/setup.html", { loader: () => import(/* webpackChunkName: "developer-guide_setup.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/setup.html.js"), meta: {"title":"開発環境セットアップ"} }],
  ["/user-guide/analysis-results.html", { loader: () => import(/* webpackChunkName: "user-guide_analysis-results.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/analysis-results.html.js"), meta: {"title":"解析結果の詳細ガイド"} }],
  ["/user-guide/commands.html", { loader: () => import(/* webpackChunkName: "user-guide_commands.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/commands.html.js"), meta: {"title":"コマンドリファレンス"} }],
  ["/user-guide/faq.html", { loader: () => import(/* webpackChunkName: "user-guide_faq.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/faq.html.js"), meta: {"title":"よくある質問（FAQ）"} }],
  ["/user-guide/getting-started.html", { loader: () => import(/* webpackChunkName: "user-guide_getting-started.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/getting-started.html.js"), meta: {"title":"はじめに"} }],
  ["/user-guide/image-requirements.html", { loader: () => import(/* webpackChunkName: "user-guide_image-requirements.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/image-requirements.html.js"), meta: {"title":"画像要件ガイド"} }],
  ["/user-guide/troubleshooting.html", { loader: () => import(/* webpackChunkName: "user-guide_troubleshooting.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/troubleshooting.html.js"), meta: {"title":"トラブルシューティング"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
