const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  //retries: 1, //reintentos de ejecucion cuando falla el caso de prueba
  video: false, //inhabilita la generacion del video luego de la ejecucion de los casos.. se cambia a true cuando se requiera
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
