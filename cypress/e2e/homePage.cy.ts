describe('Visit the Thinking Tester Contact List page', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com') //cy.visit - open page
  })

  it('Successfully opens the Contact List App page', () => {
    //cy.url() - command returning current URL; should('eq', ...) - checks if the result of the cr.url() command equals the given URL
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')
  })

    // 'contain' is case insensitive,
    // didn't notice the difference between "Ap" and "App", hence the use of 'have.text'
  it('Page header verification', () => { 
    cy.get('h1').should('have.text', 'Contact List App')
  })

  it('Verification welcome message', () => {
    cy.get('div.welcome-message').should('have.text', '\n        Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.\n    \n        The API documentation can be found here.\n    ')
  })

  it('Checks the link', () => {
    cy.get('div.welcome-message')
      .find('a') // find <a> tag in this element
      .should('contain.text', 'here') // is the link text 'here'
      .should('have.attr', 'href', 'https://documenter.getpostman.com/view/4012288/TzK2bEa8') // if it has an href attribute (contains a URL)
  })

  it('Verify Log In content and button', () => {
    cy.get('.main-content > :nth-child(1)').should('have.text', 'Log In:')

    cy.get('#submit').should('be.visible') //button Log In
                      .should('have.text', 'Submit')    
  })

  it('Verify Sign Up content and button', () => {
    cy.contains('Not yet a user? Click here to sign up!').should('be.visible')
      cy.get('.main-content > :nth-child(4)').should('have.text', 'Not yet a user? Click here to sign up!')

    cy.get('#signup').should('be.visible') //button Sign Up
                            .should('have.text', 'Sign up')
                            .should('have.attr', 'onclick', "location.href='/addUser'"); // check if the button has an attribute that redirects to the page
})

  it('Verify Footer content', () => {
    cy.checkFooter();
})

})
