describe('User Login', () => {
    const baseUrl: string = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('Login successfully, return status 200 with token', () => {
      cy.get('@userEmail').then((userEmail) => {
        cy.get('@userPassword').then((userPassword) => {
  
          cy.request({
            method: 'POST',
            url: `${baseUrl}/users/login`,
            body: {
              email: userEmail,      
              password: userPassword 
            },

          failOnStatusCode: true, // The test will fail if the response status is not 2xx or 3xx
        }).then((response) => {
          console.log(response);
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.property('user');
          expect(response.body).to.have.property('token');
  
          // Save the token in an environment variable
          Cypress.env('authToken', response.body.token);
        });
      });
    });
  })
})