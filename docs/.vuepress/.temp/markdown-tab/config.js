import { CodeTabs } from "/Users/johnkhappy/github/bots/discord-farmbot/docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/johnkhappy/github/bots/discord-farmbot/docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/johnkhappy/github/bots/discord-farmbot/docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
