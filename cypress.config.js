const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space'
  },
});
