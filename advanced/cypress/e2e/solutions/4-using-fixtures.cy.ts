//Modify the user initialState to take the state from the window object if running in Cypress
//Use cy.visit with onBeforeLoad to prepare user state on the window object
it('given there is a user in the state, when the page is loaded, the user is logged in', () => {

    //Modify the initialState in src/lib/userSlice.ts to look at window.initialUser
    // const initialState: UserState = (typeof window !== 'undefined' && window.Cypress && window.initialUser) || {
    //   username: '',
    // };

    cy.fixture('user').then((user) => { //Load the fixture data
        cy.visit('/', {
            onBeforeLoad: win => {      //Before loading the page, set the window.initialUser property to the fixture data
                win.initialUser = user
            }
        })
    })
    cy.get('.account')
        .should('contain', "john@contoso.com");
});

before('Instructions', () => {
    Cypress.log({
        name: "Instructions:",
        message: "Modify the Redux store to initialize from fixture data."
    })
});
