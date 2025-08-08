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
  //Run this test and only this test from the commandline, using cypress-grep
  //Follow the instructions on https://github.com/cypress-io/cypress/tree/develop/npm/grep
  //Once installed and configured, use `npx cypress run` from the commandline, with the parameters needed to run just this test.
  it('should run this test only, with cypress-grep', () => {
    cy.visit('/');
    cy.get('[alt="Carved Rock Fitness"]').should('be.visible');
  });
});