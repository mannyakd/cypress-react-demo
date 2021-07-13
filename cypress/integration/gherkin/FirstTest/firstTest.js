import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("{string} is displayed in Status updated label", (expectedMessage) => {
    cy.get('#statusUpdated')
            .should('have.text', expectedMessage)
})

