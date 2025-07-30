import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false, // set to true if you use support file
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
