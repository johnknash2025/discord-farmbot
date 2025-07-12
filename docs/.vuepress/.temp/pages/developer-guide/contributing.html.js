import comp from "/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/developer-guide/contributing.html.vue"
const data = JSON.parse("{\"path\":\"/developer-guide/contributing.html\",\"title\":\"コントリビューションガイド\",\"lang\":\"ja-JP\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752283682000,\"contributors\":[{\"name\":\"johnknash2025\",\"username\":\"johnknash2025\",\"email\":\"johnknash2025@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/johnknash2025\"}],\"changelog\":[{\"hash\":\"03a7562d693429e87c589e6767a16f2b65ca25f0\",\"time\":1752283682000,\"email\":\"johnknash2025@users.noreply.github.com\",\"author\":\"johnknash2025\",\"message\":\"docs: Add missing documentation files and update GitHub Actions\"}]},\"filePathRelative\":\"developer-guide/contributing.md\"}")
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
