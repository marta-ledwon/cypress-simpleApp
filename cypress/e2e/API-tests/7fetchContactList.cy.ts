describe('Fetch Contacts List', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
  
    it('Return status 200 and a list of contacts', () => {

      cy.fixture('tempToken.json').then((auth) => {

      cy.request({
        method: 'GET',
        url: `${baseUrl}/contacts/`,
        headers: {
          'Authorization': auth.token
        }

      }).then((response) => {
        
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.eq(1)
      });
    });
  });
})