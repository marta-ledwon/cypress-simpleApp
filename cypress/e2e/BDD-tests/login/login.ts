import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit page', () => {
    cy.visit('/');
  });