import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("{string} is displayed in Submission attempted label", (expectedMessage) => {
    cy.get('#submissionAttempted')
            .should('have.text', expectedMessage)
})