describe('User Login', () => {
    const baseUrl: string = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('Login successfully, return status 200 with token', () => {
      cy.fixture('tempUser.json').then((user) => {
  
          cy.request({
            method: 'POST',
            url: `${baseUrl}/users/login`,
            body: {
              email: user.email,      
              password: user.password
            },

          failOnStatusCode: true,
        }).then((response) => {
          console.log(response);
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.property('user');
          expect(response.body).to.have.property('token');

          const bearAuthToken = {
            authToken: response.body.token,
          };
  
          cy.writeFile('cypress/fixtures/tempUser.json', bearAuthToken);
        });
      });
    });
  })