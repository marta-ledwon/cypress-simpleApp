describe('Registration new User and Login', () => {
    it('Successfully opens the Add User page', () => {
      cy.createUser().then((user) => {
        cy.get('#logout').click();
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/');

        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('#submit').click();
  
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
      });
    })
  })
