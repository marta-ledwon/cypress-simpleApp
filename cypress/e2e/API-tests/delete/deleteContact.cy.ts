describe('Delete Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
    
    it('Successfully delete the contact', () => {
     
      const contactId = Cypress.env('contactId');

      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/contacts/${contactId}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`
        }
      }).then((response) => {
        
        expect(response.status).to.eq(200);
  
        expect(response.body).to.include('Contact deleted');
      });
    });
  });
  