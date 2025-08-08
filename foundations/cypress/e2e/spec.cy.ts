describe('navigation spec', () => {

  // Hooks
  before(() => {
    cy.visit('http://localhost:3000');
  });
  beforeEach(() => {

  });
  afterEach(() => {

  });
  after(() => {

  });

  // // Core commands
  // cy.get('selector').click();
  // cy.get('selector').should('be.disabled');

  // cy.contains('text'); // yields the first element that contains 'text'
  // cy.get('.nav').contains('text'); // yields the nav element that contains 'text'

  // action commands
  // .click()
  // .dblclick()
  // .rightclick()
  // .type()
  // .clear()
  // .check()
  // .uncheck()
  // .select()
  // .selectFile()
  // .trigger()

  // Parent Commands - the commands that begin a new chain of commands (cannot be chained and do not depend on another command)
  // .visit, .get, 
  
  // Child Commands - Chained off of a parent / child command
  // cy.get('form').find('input[name="email"]').type('email@corp.com');

  // Dual Commands - can be parent or a child
  // contains, wait, scrollTo



  it('passes', () => {
    
  })
})