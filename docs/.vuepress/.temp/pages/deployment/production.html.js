import comp from "/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/deployment/production.html.vue"
const data = JSON.parse("{\"path\":\"/deployment/production.html\",\"title\":\"本番環境デプロイ\",\"lang\":\"ja-JP\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752224864000,\"contributors\":[{\"name\":\"johnknash2025\",\"username\":\"johnknash2025\",\"email\":\"johnknash2025@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/johnknash2025\"}],\"changelog\":[{\"hash\":\"92f867bc6838fcefa17514194ea308febd602c6b\",\"time\":1752224864000,\"email\":\"johnknash2025@users.noreply.github.com\",\"author\":\"johnknash2025\",\"message\":\"feat: VuePress + GitHub Pages + Google Analytics ドキュメントサイト構築\"}]},\"filePathRelative\":\"deployment/production.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
