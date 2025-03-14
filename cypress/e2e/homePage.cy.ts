describe('Visit the Thinking Tester Contact List page', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com') //cy.visit - otwiera stronę
  })

  it('Successfully opens the Contact List App page', () => {
    //cy.url() - komenda zwracająca aktualny URL; should('eq', ...) - sprawdza czy wynik komendy cr.url() równa się podanemu URL
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/')
  })

    // 'contain' jest niewrażliwie na wielkość liter, 
    // nie zauważał różnicy między "Ap", a "App", stąd użycie 'have.text'
  it('Page header verification', () => { 
    cy.get('h1').should('have.text', 'Contact List App')
                .should('have.css', 'color', 'rgb(51, 51, 51)')
                .should('have.css', 'font-family', 'arial')
                .should('have.css', 'font-size', '48px')
  })

  it('Verification welcome message', () => {
    cy.get('div.welcome-message').should('have.text', '\n        Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.\n    \n        The API documentation can be found here.\n    ')
                                  .should('have.css', 'color', 'rgb(66, 135, 245)')
                                  .should('have.css', 'font-family', 'arial')
                                  .should('have.css', 'font-size', '16px')
  })

  it('Checks the link', () => {
    cy.get('div.welcome-message')
      .find('a') // znajdź tag <a> w tym elemencie
      .should('contain.text', 'here') // czy tekst linku to 'here'
      .should('have.css', 'color', 'rgb(0, 0, 238)')
      .should('have.css', 'text-decoration-line', 'underline') // podkreślenie tekstu
      .should('have.attr', 'href', 'https://documenter.getpostman.com/view/4012288/TzK2bEa8') // czy ma atrybut href (zawiera adres URL)
  })

  it('Verify Log In content and button', () => {
    cy.get('.main-content > :nth-child(1)').should('have.text', 'Log In:')
                              .should('have.css', 'color', 'rgb(51, 51, 51)')
                              .should('have.css', 'font-family', 'arial')
                              .should('have.css', 'font-size', '16px')
    cy.get('#submit').should('be.visible') //button Log In
                      .should('have.text', 'Submit')
                      .should('have.css', 'color', 'rgb(0, 0, 0)')
                      .should('have.css', 'background-color', 'rgb(240, 240, 240)')
                      .should('have.css', 'font-family', 'Arial')
                      .should('have.css', 'font-size', '13.3333px')
    //                .should('have.attr', 'onclick', ????);       
  })

  it('Verify Sign Up content and button', () => {
    cy.get('.main-content > :nth-child(4)').should('have.text', 'Not yet a user? Click here to sign up!')
                              .should('have.css', 'color', 'rgb(51, 51, 51)')
                              .should('have.css', 'font-family', 'arial')
                              .should('have.css', 'font-size', '16px')
    cy.get('#signup').should('be.visible') //button Sign Up
                            .should('have.text', 'Sign up')
                            .should('have.css', 'color', 'rgb(0, 0, 0)')
                            .should('have.css', 'background-color', 'rgb(240, 240, 240)')
                            .should('have.css', 'font-family', 'Arial')
                            .should('have.css', 'font-size', '13.3333px')
                            .should('have.attr', 'onclick', "location.href='/addUser'"); // sprawdzamy czy button ma atrybut przekierowujący na stronę
})

it('Verify Footer content', () => {
  cy.get('footer > p').should('be.visible')
                      .should('have.text', 'Created by Kristin Jackvony, Copyright 2021 ')
                      .should('have.css', 'color', 'rgb(136, 136, 136)')
                      .should('have.css', 'font-family', 'arial')
                      .should('have.css', 'font-size', '16px')
  cy.get('footer img')
    .should('be.visible')
    .should('have.attr', 'src', '/img/thinkingTesterLogo.png') // sprawdzenie czy to właściwy obrazek 
    // a może dodatkowo weryfikacja obrazka ze screenshotem?
})

})
