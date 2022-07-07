const { defineConfig } = require("cypress");

// Todo las configuraciones de plugin que se usaban antes son realizadas aqui ahora ****NOTAAAAA****
module.exports = defineConfig({
  projectId: 'i9nzb8',
  e2e: {
    /*URL base que se usara cada vez que el visit se encuentre con el simbolo de root '/' */
    baseUrl: 'https://www.saucedemo.com',
    //Desabilitar alguans funciones que pueden bloquear el testing por seguridad de algunas funciones en Chrome
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
