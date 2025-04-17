describe('Go to Add User page and verify elements', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com')
    })

    it('Open thinking-tester-contact-list',() => {
      cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')
    })

    it('Go to Add User page and verify URL', () => { 
      cy.get('#signup').should('be.visible').click()
      cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/addUser')
    
      // Page header verification
        cy.get('h1').should('have.text', 'Add User')
        cy.get('p').contains('Sign up to begin adding your contacts!')

      // Verify add user form
        cy.get('#firstName').should('be.visible')
                            .should('have.attr', 'placeholder', 'First Name')
        cy.get('#lastName').should('be.visible')
                           .should('have.attr', 'placeholder', 'Last Name')
        cy.get('#email').should('be.visible')
                        .should('have.attr', 'placeholder', 'Email')
        cy.get('#password').should('be.visible')
                           .should('have.attr', 'placeholder', 'Password')
      
      // Buttons
      cy.get('#submit').should('be.visible')
                       .should('have.text', 'Submit')
      cy.get('#cancel').should('be.visible')
                       .should('have.text', 'Cancel')

      // Footer
      cy.checkFooter()
    })
})
