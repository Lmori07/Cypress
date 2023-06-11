// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//to enable all command that cypress have to offer, use this reference on commands.js to be globally available
/// <reference types="Cypress" />

Cypress.Commands.add('selectProduct', (productName) => { 
  cy.get('h4.card-title').each(($element, index, $list) => {
      if($element.text().includes(productName)) {
        cy.get('button.btn.btn-info').eq(index).click()
      }
  })
})