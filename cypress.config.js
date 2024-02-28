const { defineConfig } = require("cypress");

module.exports = defineConfig({	watchForFileChanges: false,
	downloadsFolder: 'cypress/downloads',
	retries: process.env.CI ? 2 : 0,
	video: process.env.CI ? true : false,
	videosFolder: 'cypress/videos',
	screenshotOnRunFailure: true,
	scrollBehavior: 'center',
  e2e: {baseUrl: 'https://demoblaze.com',
  specPattern: ['**/*.test.cy.js', '**/*.api.cy.js'],
  experimentalRunAllSpecs: true,
  chromeWebSecurity: false,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    reporter: 'cypress-mochawesome-reporter',
    charts: true,
    embeddedScreenshots: true,   
     
    
  },
});
