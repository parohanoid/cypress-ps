//Modify the user initialState to take the state from the window object if running in Cypress
//Use cy.fixture to load user data (fixtures/user.json)
//Use cy.visit with onBeforeLoad to prepare user state on the window object

it('given there is a user in the state, when the page is loaded, the user is logged in', () => {
    
    cy.fixture('user').then((user) => {
        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.initialUser = user;
            }
        });
    });

    cy.get('.account')
        .should('contain', "john@contoso.com");
});

before('Instructions', () => {
    Cypress.log({
        name: "Instructions:",
        message: "Modify the Redux store to initialize from fixture data."
    })
});