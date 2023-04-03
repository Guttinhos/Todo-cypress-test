const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://phpauloreis.github.io/todo-list-alpine-js/',
  },
});
