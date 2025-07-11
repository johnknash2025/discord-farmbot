export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Discord Farmbot"} }],
  ["/TESTING.html", { loader: () => import(/* webpackChunkName: "TESTING.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/TESTING.html.js"), meta: {"title":"🧪 Discord Farmbot テストガイド"} }],
  ["/USER_GUIDE.html", { loader: () => import(/* webpackChunkName: "USER_GUIDE.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/USER_GUIDE.html.js"), meta: {"title":"🌱 Discord Farmbot ユーザーガイド"} }],
  ["/production-setup.html", { loader: () => import(/* webpackChunkName: "production-setup.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/production-setup.html.js"), meta: {"title":"🚀 本番環境セットアップ完了"} }],
  ["/setup-tunnel.html", { loader: () => import(/* webpackChunkName: "setup-tunnel.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/setup-tunnel.html.js"), meta: {"title":"🌐 外部アクセス用トンネル設定"} }],
  ["/deployment/production.html", { loader: () => import(/* webpackChunkName: "deployment_production.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/deployment/production.html.js"), meta: {"title":"本番環境デプロイ"} }],
  ["/developer-guide/api-reference.html", { loader: () => import(/* webpackChunkName: "developer-guide_api-reference.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/api-reference.html.js"), meta: {"title":"API リファレンス"} }],
  ["/developer-guide/setup.html", { loader: () => import(/* webpackChunkName: "developer-guide_setup.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/setup.html.js"), meta: {"title":"開発環境セットアップ"} }],
  ["/user-guide/commands.html", { loader: () => import(/* webpackChunkName: "user-guide_commands.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/commands.html.js"), meta: {"title":"コマンドリファレンス"} }],
  ["/user-guide/faq.html", { loader: () => import(/* webpackChunkName: "user-guide_faq.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/faq.html.js"), meta: {"title":"よくある質問（FAQ）"} }],
  ["/user-guide/getting-started.html", { loader: () => import(/* webpackChunkName: "user-guide_getting-started.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/user-guide/getting-started.html.js"), meta: {"title":"はじめに"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
