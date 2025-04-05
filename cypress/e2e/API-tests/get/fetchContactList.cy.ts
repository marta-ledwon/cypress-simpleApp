describe('Fetch Contacts List', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('Return status 200 and a list of contacts', () => {
      // Retrieving the token from the environment variable
      const authToken = Cypress.env('authToken');
  
      cy.request({
        method: 'GET',
        url: `${baseUrl}/contacts/`,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        
        expect(response.status).to.eq(200);
  
        expect(response.body).to.be.an('array');

        expect(response.body.length).to.eq(0)
      });
    });
  });