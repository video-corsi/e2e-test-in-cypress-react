import { defineConfig } from "cypress";

// # NOTE: needed if you want get APIKEY from .env file
// import * as dotenv from 'dotenv'

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",

    // # define environment variables
    env: {
      APIKEY: 123,

      // NOTE: don't do this in this project!!!
      // # Get APIKEY from file .env
      // # NOTE: you must create a .env file in root with
      // MY_API_KEY=12345
      // APIKEY: process.env.MY_API_KEY
    },

    // # enable experimentalStudio
    // experimentalStudio: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
