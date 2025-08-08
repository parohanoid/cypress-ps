//Use cy.window to verify the product is stored in the state
it('when adding an item to the cart, the item is in the state', () => {
    cy.visit('/footwear/boots-2');
    cy.contains('Buy').click();
    cy.get('[data-testid="buyButton"]').should('have.text', "Added to cart");

    cy.window()                     //Get the window object
        .its('store')               //Make the window.store property the subject
        .invoke('getState')         //Call window.store.getState()
        .its('cart.items[0].name')  //Get the first item's name from the cart state
        .should('contain', "Mountaineering Boots Beta");
});

//Emit Redux Actions to add two items to the cart
import { addToCart } from "../../../src/lib/cartSlice"; //Load the redux action as used by the application

it('when visiting the cart, items from the state are shown there', () => {
    cy.visit('/');
    cy.contains('Login').click();
    cy.get('input[placeholder="Email"]').type('jim@contoso.com');
    cy.get('input[placeholder="Password"]').type('AnYP@ssWord');
    cy.get('input[type="submit"]').click();

    //Get the store from the window and call the dispatch method with the Redux Action addToCart
    cy.window().its('store').invoke('dispatch', addToCart({
        id: "123",
        name: "Climbing shoes #1",
        price: 10,
        amount: 1
    }));

    cy.window().its('store').invoke('dispatch', addToCart({
        id: "321",
        name: "Imaginary backpack",
        price: 33,
        amount: 1
    }));

    cy.contains('Cart').click();
    cy.get('tbody tr').should('have.length', 2); //Make sure the cart page is showing 2 items
});

//Dispatch a Redux Action to login as billy@contoso.com
import { setUser } from "../../../src/lib/userSlice"; // Import the Redux action to set the user
it('when visiting the page, the user is logged in', () => {
    cy.visit('/');

    cy.window().its('store').invoke('dispatch', setUser({ // Dispatch the Redux action
        username: "billy@contoso.com"
    }));

    cy.get('.account')
        .should('contain', "billy@contoso.com");
});

before('Instructions', () => {
    Cypress.log({
        name: "Note:",
        message: "All tests beyond this point assume the state store is exposed as per assignment 2."
    })
});
