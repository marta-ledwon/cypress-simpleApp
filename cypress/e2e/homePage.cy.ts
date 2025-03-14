describe('Visit the Thinking Tester Contact List page', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com') //cy.visit - otwiera stronę
  })

  it('Successfully opens the Contact List App page', () => {
    //cy.url() - komenda zwracająca aktualny URL; should('eq', ...) - sprawdza czy wynik komendy cr.url() = podanemu URL
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')
  
    // 'contain' jest niewrażliwie na wielkość liter, nie zauważał też różnicy między "Ap", a "App"
    cy.get('h1').should('have.text', 'Contact List App') 
  })

  it('Verify headline content and color', () => {
    cy.get('body > :nth-child(2)').should('have.text', '\n        Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.\n    ')
                                  .should('have.css', 'color', 'rgb(66, 135, 245)')
  })
 
  it('Verify the second paragraph text and color', () => {
    cy.get('body > :nth-child(3)').should('have.text', '\n        The API documentation can be found here.\n    ')
                                  .should('have.css', 'color', 'rgb(66, 135, 245)')
  })

  it('Checks the link in the third paragraph', () => {
    cy.get('body > :nth-child(3)')
      .find('a') // tag <a> w tym elemencie
      .should('contain.text', 'here') // czy tekst linku to 'here'
      .should('have.css', 'color', 'rgb(0, 0, 238)')
     .should('have.attr', 'href', 'https://documenter.getpostman.com/view/4012288/TzK2bEa8') // czy ma atrybut href (zawiera adres URL)
     .and('not.be.empty') // czy href nie jest pusty
     
  })

})



