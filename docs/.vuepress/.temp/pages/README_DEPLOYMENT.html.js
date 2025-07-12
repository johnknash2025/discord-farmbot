import comp from "/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/README_DEPLOYMENT.html.vue"
const data = JSON.parse("{\"path\":\"/README_DEPLOYMENT.html\",\"title\":\"🚀 Discord Farmbot ドキュメントサイト デプロイガイド\",\"lang\":\"ja-JP\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752225481000,\"contributors\":[{\"name\":\"johnknash2025\",\"username\":\"johnknash2025\",\"email\":\"johnknash2025@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/johnknash2025\"}],\"changelog\":[{\"hash\":\"b82d3fe920292568213e0162cf571c6db54525a3\",\"time\":1752225481000,\"email\":\"johnknash2025@users.noreply.github.com\",\"author\":\"johnknash2025\",\"message\":\"feat: Google Analytics統合完了\"}]},\"filePathRelative\":\"README_DEPLOYMENT.md\"}")
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
