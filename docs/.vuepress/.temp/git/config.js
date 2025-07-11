import { GitContributors } from "/Users/johnkhappy/github/bots/discord-farmbot/docs/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/johnkhappy/github/bots/discord-farmbot/docs/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
