import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("I visit the login page", () => {
  cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
});

When("I log in with the user's credentials", () => {

  const testUser = Cypress.env('testUser');

  cy.get("#email").type(testUser.email);
  cy.get("#password").type(testUser.password);
  cy.get("#submit").click();
});

Then("I should see the contact list page", () => {
  cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList");
});