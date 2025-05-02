import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';


let testUser: { firstName: string; lastName: string; email: string; password: string };

Given("I open the registration page", () => {
  cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");
});

When("I register a new user", () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  Cypress.env('testUser', { firstName, lastName, email, password });


  cy.get("input#firstName").type(firstName);
  cy.get("input#lastName").type(lastName);
  cy.get("input#email").type(email);
  cy.get("input#password").type(password);
  cy.get("#submit").click();
});

Then("I should be redirected to the contact list page", () => {
  cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList");
});