describe('Incorrect User Login', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('Return 401 when login with incorrect password', () => {
      const userEmail = Cypress.env('userEmail'); // Downloaded email from correctUserRegistration
      const userPassword = '123'; // Wrong password
  
      // Login attempt
      cy.request({
        method: 'POST',
        url: `${baseUrl}/users/login`,
        body: {
          email: userEmail,
          password: userPassword
        },
        failOnStatusCode: false 
      }).then((response) => {

        cy.log('Odpowiedź:', JSON.stringify(response.body)); // what does the API return?
        // Response assertion - status 401 (Unauthorized)
        expect(response.status).to.eq(401);
    });
  });
});