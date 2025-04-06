describe('Delete Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
    
    it('Successfully delete the contact', () => {
     
      cy.fixture('idContact.json').then((idContact) => {
      const contactId = idContact.id;

      cy.fixture('tempToken.json').then((auth) => {

        cy.request({
          method: 'DELETE',
          url: `${baseUrl}/contacts/${contactId}`,
          headers: {
            Authorization: auth.token
          }
        }).then((response) => {
        
          expect(response.status).to.eq(200);
          expect(response.body).to.include('Contact deleted');
        });
      });
    });
  });
})