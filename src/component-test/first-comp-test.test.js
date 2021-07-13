import React from "react";
import App from "../App";
import {mount} from '@cypress/react'

it('component test demo', () => {

    // Mount the application
    mount(<App />);

    cy.get('select').should('have.text', 'CypressSeleniumPlaywrightTestProject')
    cy.get('select').select('TestProject');

    cy.get('#textarea').should('have.text', 'Cypress component tests!!!');

})