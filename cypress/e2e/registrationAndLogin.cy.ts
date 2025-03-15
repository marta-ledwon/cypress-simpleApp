import { faker } from '@faker-js/faker';

describe('Registration new User and Login', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')
    })  
  
    it('Successfully opens the Add User page', () => {
      cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/addUser')
    })

    it('Create a new user with random data and Log in', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const email = faker.internet.email()
        const password = faker.internet.password()

        cy.get('input#firstName').type(firstName)
        cy.get('input#lastName').type(lastName)
        cy.get('input#email').type(email)
        cy.get('input#password').type(password)

        cy.get('#submit').click()

        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList')
    })
})