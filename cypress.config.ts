import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://127.0.0.1:3001',
    supportFile: 'cypress/support/e2e.ts',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // ✅ You’re using Vite, not Webpack
    },
    supportFile: 'cypress/support/component.ts', // ✅ Ensures mount is loaded
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});
