describe('exposing the state store', () => {
    //In order to make this test pass you have to expose the Redux store on the window object, as a property called *store*.
    it('given the store is exposed, when verifying against the state, the state is accessible', () => {
        cy.visit('/');
        cy.window()
            .its('store')
            .invoke('getState').then(state => {
                expect(state.user).is.not.null
                expect(state.cart).is.not.null
                expect(state.cart.items).has.length(0)
            })
    });

    before('Instructions', () => {
        Cypress.log({
            name: "Instructions:",
            message: "In order to make this test pass you have to expose the Redux store on the window object, as a property called *store*."
        })
    });
});