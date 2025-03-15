Cypress.Commands.add('checkFooter', () => {
    cy.get('footer > p')
      .should('be.visible')
      .should('have.text', 'Created by Kristin Jackvony, Copyright 2021 ')
      .should('have.css', 'color', 'rgb(136, 136, 136)')
      .should('have.css', 'font-family', 'arial')
      .should('have.css', 'font-size', '16px');
  
    cy.get('footer img')
      .should('be.visible')
      .should('have.attr', 'src', '/img/thinkingTesterLogo.png');
  });


  declare global {
    namespace Cypress {
      interface Chainable {
        checkFooter(): Chainable<void>;
      }
    }
  }

  export {};

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