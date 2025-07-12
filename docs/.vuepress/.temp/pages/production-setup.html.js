import comp from "/Users/johnkhappy/github/bots/discord-farmbot/docs/.vuepress/.temp/pages/production-setup.html.vue"
const data = JSON.parse("{\"path\":\"/production-setup.html\",\"title\":\"🚀 本番環境セットアップ完了\",\"lang\":\"ja-JP\",\"frontmatter\":{},\"git\":{\"updatedTime\":1751270235000,\"contributors\":[{\"name\":\"admin\",\"username\":\"admin\",\"email\":\"admin@Johnkhappy-MacBook-Pro.local\",\"commits\":1,\"url\":\"https://github.com/admin\"}],\"changelog\":[{\"hash\":\"f2e0f08ce078d7df5940077c5501741cd5ea3ac3\",\"time\":1751270235000,\"email\":\"admin@Johnkhappy-MacBook-Pro.local\",\"author\":\"admin\",\"message\":\"🎉 Initial release v1.0.0\"}]},\"filePathRelative\":\"production-setup.md\"}")
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
