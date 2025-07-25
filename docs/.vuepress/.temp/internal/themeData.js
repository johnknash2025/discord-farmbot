export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"ホーム\",\"link\":\"/\"},{\"text\":\"ユーザーガイド\",\"children\":[\"/user-guide/getting-started.md\",\"/user-guide/commands.md\",\"/user-guide/troubleshooting.md\"]},{\"text\":\"開発者ガイド\",\"children\":[\"/developer-guide/setup.md\",\"/developer-guide/api-reference.md\",\"/developer-guide/architecture.md\",\"/developer-guide/contributing.md\"]},{\"text\":\"デプロイ\",\"children\":[\"/deployment/local-development.md\",\"/deployment/production.md\",\"/deployment/monitoring.md\"]},{\"text\":\"GitHub\",\"link\":\"https://github.com/johnknash2025/discord-farmbot\"}],\"sidebar\":{\"/user-guide/\":[{\"text\":\"ユーザーガイド\",\"children\":[\"/user-guide/getting-started.md\",\"/user-guide/commands.md\",\"/user-guide/image-requirements.md\",\"/user-guide/analysis-results.md\",\"/user-guide/troubleshooting.md\",\"/user-guide/faq.md\"]}],\"/developer-guide/\":[{\"text\":\"開発者ガイド\",\"children\":[\"/developer-guide/setup.md\",\"/developer-guide/architecture.md\",\"/developer-guide/api-reference.md\",\"/developer-guide/testing.md\",\"/developer-guide/contributing.md\",\"/developer-guide/code-style.md\"]}],\"/deployment/\":[{\"text\":\"デプロイメント\",\"children\":[\"/deployment/local-development.md\",\"/deployment/production.md\",\"/deployment/environment-variables.md\",\"/deployment/monitoring.md\",\"/deployment/scaling.md\"]}]},\"repo\":\"johnknash2025/discord-farmbot\",\"repoLabel\":\"GitHub\",\"docsDir\":\"docs\",\"docsBranch\":\"main\",\"editLinks\":true,\"editLinkText\":\"このページを編集\",\"lastUpdated\":true,\"lastUpdatedText\":\"最終更新\",\"contributors\":true,\"contributorsText\":\"貢献者\",\"searchMaxSuggestions\":10,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
