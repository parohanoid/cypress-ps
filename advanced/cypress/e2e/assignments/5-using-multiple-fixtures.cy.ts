import { addToCart } from "@/lib/cartSlice";
import { setUser } from "@/lib/userSlice";

// Make sure the user is logged in AND there's an item in their cart before opening the page
it('given user and cart state, when opening the page, the state is visible', () => {
    // cy.fixture('user').then((user) => {
    //     cy.visit('/', {
    //         onBeforeLoad(win) {
    //             win.initialUser = user
    //         },
    //     })
    // });

    cy.fixture('user').then((user) => {
        cy.window().its('store').invoke('dispatch', 
            setUser(user)
        )
    });

    cy.get('.account')
        .should('contain', "john@contoso.com");

    cy.fixture('cart').then((cart) => {
        cy.window().its('store').invoke('dispatch', 
            addToCart(cart.items[0])
        )
    });

    cy.get('tbody tr').should('have.length', 1);
});

before('Instructions', () => {
    Cypress.log({
        name: "Instructions:",
        message: "Make sure the user is logged in AND there's an item in their cart before opening the page"
    })
})

beforeEach('prepare state', () => {
    // cy.fixture('user').then((user) => {
    //     cy.visit('/cart', {
    //         onBeforeLoad(win) {
    //             win.initialUser = user
    //         },
    //     })
    // });
    cy.visit('/cart');
});