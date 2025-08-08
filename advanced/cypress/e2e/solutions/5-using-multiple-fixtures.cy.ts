// Make sure the user is logged in AND there's an item in their cart before opening the page

// Modify src/lib/cartSlice.ts initial state
// const initialState: CartState = (typeof window != 'undefined' && window.Cypress && window.initialCart) || {
//   items: [],
// };

// Modify src/lib/userSlice.ts initial state (if you haven't already)
// const initialState: UserState = (typeof window != 'undefined' && window.Cypress && window.initialUser) || {
//   username: '',
// };

beforeEach('prepare state', () => {
    // Load fixture data + store as property
    cy.fixture('user').as('user').then((user) => {
        this.user = user;
    });
    cy.fixture('cart').as('cart').then((cart) => {
        this.cart = cart;
    });

    // Set the window properties with the fixture data
    cy.visit('/cart', {
        onBeforeLoad: (win) => {
            win.initialUser = this.user;
            win.initialCart = this.cart;
        }
    });
});

it('given user and cart state, when opening the page, the state is visible', () => {
    cy.get('.account')
        .should('contain', "john@contoso.com");

    cy.get('tbody tr').should('have.length', 1);
});

before('Instructions', () => {
    Cypress.log({
        name: "Instructions:",
        message: "Make sure the user is logged in AND there's an item in their cart before opening the page"
    })
});