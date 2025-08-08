describe('using cy.intercept and cy.wait', () => {
  before('Instructions', () => {
    Cypress.log({
      name: "Instructions:",
      message: "Use cy.intercept and cy.wait to make these tests pass."
    })
  });

  beforeEach(() => {
    cy.visit('/');
  });

  //Use cy.intercept and cy.wait to make this test pass
  it('when the user clicks get discount code, then the code is displayed', () => {
    cy.intercept('GET', '/api/promotions').as('promoEndpoint');
    cy.get('[data-testid="get-promo-code"]').click();
    cy.wait('@promoEndpoint');
    cy.get('[data-testid="promo-code"]').should('be.visible');
  });

  //Use cy.intercept with stubbing to make this test pass
  it('when the user clicks get discount code, the code is PS2025', () => {
    cy.intercept('GET', '/api/promotions');
    cy.get('[data-testid="get-promo-code"]').click();
    cy.get('[data-testid="promo-code"]').should('have.value', 'Your code: PS2025');
  });
});