// dopisać weryfikację elementów na stronie!!!

describe('Go to Add User page and verify elements', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com')
    })

    it('Open thinking-tester-contact-list',() => {
      cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')
    })

    it('Go to Add User page and verify URL', () => { 
      cy.get('#signup').click()
      cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/addUser')

      cy.checkFooter()
    })
})

