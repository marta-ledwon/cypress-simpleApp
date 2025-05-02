import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '@faker-js/faker';

let contact: any;

Given("I am on the contact list page", () => {
  cy.visit("https://thinking-tester-contact-list.herokuapp.com/contactList");
  cy.url().should("include", "/contactList");
});

When("I add a new contact", () => {
  cy.get('#add-contact')
    .should('be.visible')
    .should('have.text', 'Add a New Contact')
    .click();

  cy.addContact().then((createdContact : any) => {
    contact = createdContact;
  });
});

Then("I should see the new contact in the table", () => {
  cy.get('.contactTableBodyRow > :nth-child(2)').should('contain.text', `${contact.firstName} ${contact.lastName}`);
  cy.get('.contactTableBodyRow > :nth-child(3)').should('contain.text', contact.birthdate);
  cy.get('.contactTableBodyRow > :nth-child(4)').should('contain.text', contact.email.toLowerCase());
  cy.get('.contactTableBodyRow > :nth-child(5)').should('contain.text', contact.phone);
  cy.get('.contactTableBodyRow > :nth-child(6)').should('contain.text', contact.street);
  cy.get('.contactTableBodyRow > :nth-child(7)').should('contain.text', `${contact.city} ${contact.stateProvince} ${contact.postalCode}`);
  cy.get(':nth-child(8)').should('contain.text', contact.country);
});