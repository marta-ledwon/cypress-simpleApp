import {faker} from '@faker-js/faker'

declare global{
  namespace Cypress{
    interface Chainable{
      checkFooter():void
    }
  }
}

export{}

// FOOTER VERIFICATION
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

  // CREATE A NEW USER
  Cypress.Commands.add('createUser', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
  
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
    cy.get('input#firstName').type(firstName);
    cy.get('input#lastName').type(lastName);
    cy.get('input#email').type(email);
    cy.get('input#password').type(password);
    cy.get('#submit').click();
  
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
  
    return cy.wrap({ firstName, lastName, email, password });
  });

  // ADD CONTACT
  Cypress.Commands.add('addContact', () =>{
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/addContact');

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const birthdate = faker.date.birthdate({min: 1900, max: 2024, mode: 'year' }).toISOString().split('T')[0];
    const email = faker.internet.email();
    let phone = faker.phone.number().slice(0, 15)
    phone = phone.replace(/\D/g, '')
    console.log(phone)
    const street = faker.address.streetAddress();
    const city = faker.address.city();
    const stateProvince = faker.address.state();
    const postalCode = faker.address.zipCode();
    const country = faker.address.country();

    cy.get('input#firstName').type(firstName);
    cy.get('input#lastName').type(lastName);
    cy.get('input#birthdate').type(birthdate);
    cy.get('input#email').type(email);
    cy.get('input#phone').type(phone);
    cy.get('input#street1').type(street);
    cy.get('input#street2').type('Kredowa');
    cy.get('input#city').type(city);
    cy.get('input#stateProvince').type(stateProvince);
    cy.get('input#postalCode').type(postalCode);
    cy.get('input#country').type(country);

    cy.get('button#submit').click();
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');

    return cy.wrap({firstName, lastName, birthdate, email, phone, street, city, stateProvince, postalCode, country})
  })

  declare global {
    namespace Cypress {
      interface Chainable {
        checkFooter(): Chainable<void>
        createUser(): Chainable<{firstName: string; lastName: string; email: string; password: string }>
        addContact(): Chainable<{firstName: string, lastName: string, birthdate: string, email: string, phone: string, street: string, city: string, stateProvince: string, postalCode: string, country: string}>
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