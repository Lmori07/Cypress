const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  projectId: "i9nzb8",
  env:{
    //There is restricted name that need to be respected in order to make it work "baseURL" was one of it, that is why we need to replace it with "url" instead
    url:"https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
