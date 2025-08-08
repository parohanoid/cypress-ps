describe('using cy.intercept and cy.wait', () => {
    //Use cy.intercept and cy.wait to make this test pass
    it('when the user clicks get discount code, then the code is displayed', () => {
        cy.intercept('/api/promotions').as('promoEndpoint'); //Intercept calls and set alias
        cy.get('[data-testid="get-promo-code"]').click(); //Starts the request to /api/promotions
        cy.wait('@promoEndpoint') //Wait for the response
        cy.get('[data-testid="promo-code"]').should('be.visible'); //Continue the test
    });

    //Use cy.intercept with stubbing to make this test pass
    it('when the user clicks get discount code, the code is PS2025', () => {
        cy.intercept('/api/promotions', { discountCode: 'PS2025' }); //Whenever /api/promotions is called, return this JSON
        cy.get('[data-testid="get-promo-code"]').click(); //Click the button, which calls the endpoint
        cy.get('[data-testid="promo-code"]').should('have.value', 'Your code: PS2025');
    });

    before('Instructions', () => {
        Cypress.log({
            name: "Instructions:",
            message: "Use cy.intercept and cy.wait to make these tests pass."
        })
    });

    beforeEach(() => {
        cy.visit('/');
    });
});