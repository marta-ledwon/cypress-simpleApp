import { faker } from '@faker-js/faker';

describe('Registration new User, Login Create new Contact', () => {
    it('Successfully opens the Add User page', () => {
      cy.createUser().then((user) => {
        cy.get('#logout').click();
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/');

        // logowanie użytkownika
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('#submit').click();
  
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
        
        // dodaj nowy kontakt
        cy.get('#add-contact').should('be.visible')
                              .should('have.text', 'Add a New Contact')
                              .click();
        
        cy.addContact().then((contact) =>{
          cy.get('.contactTableBodyRow > :nth-child(2)').should('contain.text', `${contact.firstName} ${contact.lastName}`);
          cy.get('.contactTableBodyRow > :nth-child(3)').should('contain.text', contact.birthdate);
          cy.get('.contactTableBodyRow > :nth-child(4)').should('contain.text', contact.email.toLowerCase());
//        cy.get('.contactTableBodyRow > :nth-child(5)').should('contain.text', contact.phone);
          cy.get('.contactTableBodyRow > :nth-child(6)').should('contain.text', contact.street);
          cy.get('.contactTableBodyRow > :nth-child(7)').should('contain.text', `${contact.city} ${contact.stateProvince} ${contact.postalCode}`);
          cy.get(':nth-child(8)').should('contain.text', contact.country);
        })

        // czy kontakt jest w tabeli?

        cy.get('.contactTableBodyRow > :nth-child(2)').click()
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactDetails');

        // edytuj kontakt
        cy.get('#edit-contact').click();
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/editContact');

        const newLastName = faker.person.lastName();
        // usuń nazwisko i podaj nowe
        cy.get('input#lastName').clear().type('{selectall}{backspace}').type(newLastName);
        cy.get('button#submit').click();

        // czy zmieniono nazwisko?
        cy.get('#lastName').should('have.text', newLastName)

        cy.get('#return').click()
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');

        cy.get('.contactTableBodyRow > :nth-child(2)').should('contain.text', `${newLastName}`);

        // usuń kontakt
        cy.get('.contactTable').contains(`${newLastName}`).click();
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactDetails');
        cy.get('#delete').click()
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
        
        // sprawdzenie czy usunięto kontakt z tabeli
        cy.get('.contactTable').should('not.contain.text', `${newLastName}`);
      });
    })
  })
