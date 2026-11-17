
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: 'list',

  use: {
    browserName: 'chromium',
    headless: true
  },

  webServer: {
    command: 'npx http-server ./ShopEasy-Demo-Store -p 4173 -c-1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI
  }
});
