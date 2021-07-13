import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    cy.fixture('credentials').as('userData')
})

Given("Customer portal app is opened", () => {
    cy.visit('/')
  })

And("user enters the login credentials", () => {
    cy.get('@userData').then((credentials) => {
        cy.get('#username')
            .clear()
            .type(credentials.user)
        cy.get('#password')
            .clear()
            .type(credentials.pass)
    })
})

And("user clicks on Login button", () => {
    cy.get('input[class="btn btn-block btn-submit btn-login form-button"]')
        .click()
})

When("user navigates to {string} tab", (tabName) => {
    cy.contains('Events')
        .click()
    
    cy.url().should('include', '/hunter')
})

And("user search by message ID {string}", (messageId) => {
    cy.get('#hunter-search-text')
            .clear()
            .type(messageId, {delay:100})
            .type('{enter}')
})

Then("{string} message is displayed", (expectedMessage) => {
    cy.get('div[class="css-1ago99h"]')
        .children('.css-n00usm')
    // cy.get('div[class="css-n00usm"]')
            .should('have.text', expectedMessage)
})

And("user logs out", () => {
    cy.get('.css-4wc02 > :nth-child(1) > [data-testid=navElement]')
        .click()

    cy.contains('Logout')
        .click()

    cy.get('.mb-10')
        .should('have.text', 'Logout successful')

})

And("{string} is displayed in Attempts label", (expectedMessage) => {
    cy.get('#attempts')
            .should('have.text', expectedMessage)
})

