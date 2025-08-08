// This test can only pass if cypress-recurse is installed and configured

// Install the plugin, by running this command in your terminal
// npm i -D cypress-recurse

// Configure the plugin, by adding this line to your cypress/support/e2e.ts file
// import 'cypress-recurse/commands'

describe('cypress-recurse', () => {
  it('should pass when the recurse plugin is set up', () => {
    cy.visit('/');
    cy.recurse(
      () => cy.wrap(7),
      (n) => n === 7,
    );
  });

  before('Instructions', () => {
    Cypress.log({
      name: "Instructions:",
      message: "Follow the install instructions for the cypress-recurse plugin to make this test pass."
    })
  });
});

describe('cypress-grep', () => {
  // 1. Run the command below
  //    npm i -D @cypress/grep

  // 2. Load and register the grep feature in cypress/support/e2e.ts
  //    const registerCypressGrep = require('@cypress/grep')
  //    registerCypressGrep()

  // 3. Add to cypress.config.ts
  //    setupNodeEvents(on, config) {
  //      require('@cypress/grep/src/plugin')(config);
  //      return config;
  //    },

  // 4. On the commandline, run 
  //    npx cypress run --spec "cypress/e2e/assignments" --env grep="grep"

  it('should run this test only, with cypress-grep', () => {
    cy.visit('/');
    cy.get('[alt="Carved Rock Fitness"]').should('be.visible');
  });
});