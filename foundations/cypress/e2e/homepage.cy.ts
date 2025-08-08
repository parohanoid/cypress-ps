// best practice - add data-testid attribute to the targeted attributes

// Asynchronous by nature, for example, get or should retries until the timeout
// Cypress commands are enqueued to be executed asynchronously just like how web applications work
// Actions commands are not retried
// Chaining practice - get > action ; get > assertion

import { createTypeReferenceDirectiveResolutionCache } from "typescript";

describe("Bethany's Pie Shop Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("renders the home container", () => {
        cy.get('[data-testid="home-container"]').should("exist");
    });

    it("renders the pies section", () => {
        cy.get('[data-testid="pies-section"]').should("exist");
        cy.get('[data-testid="pie-item"]').should("have.length.greaterThan", 0);
    });

    it("renders the hero carousel with all slides", () => {
        cy.get('[data-testid="hero-carousel"]').should("exist");
        cy.get('[data-testid="carousel-slide"]').should("have.length", 3);
    });

    it("all pie menu items are displayed with name and price", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).find('h3').should('exist');
            cy.wrap($el).find('p').contains('$').should('exist');
        });
    });

    it("add items to cart and correct count is displayed", () => {
        cy.get('[data-testid="pie-item"]').each(($el) => {
            cy.wrap($el).contains("button", 'Add to Cart').click();            
        });
        
        cy.get('[data-testid="pie-item"]').its("length").then((len) => {
            cy.get('[data-testid="cart-count"]').should("have.text", len);
        });
        
    });

    it("navigate to shop page", () => {
        cy.get('[data-testid="carousel-shop-btn"]').first().click();
        cy.url().should("include", "/shop");
    });
})