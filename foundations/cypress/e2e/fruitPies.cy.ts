// aliases are reset before each test / it

// e2e best practices
// isolated user journeys and prevent side effects
// realistic user data
// user's goal in mind

describe("Fruit Pies", () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/pies?category=fruit').as('getFruitPies');
        cy.visit('/shop/fruit');
        cy.wait('@getFruitPies').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body).to.have.length.greaterThan(0);
        });
    });
    
    it('render the fruit pies page', () => {
        cy.get('h1').contains("Fruit Pies").should('exist');
    });

    it('check the number of fruit pies', () => {
        cy.get('@pie-item').should('have.length', 3);
    });

    it("all pie menu items are displayed with name and price", () => {
        cy.get('@pie-item').each(($el) => {
            cy.wrap($el).find('h3').should('exist');
            cy.wrap($el).find('p').contains('$').should('exist');
        });
    });

});