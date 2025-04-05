describe('Patch Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
    
    it('Successfully update the firstName field of the contact', () => {

      const contactId = Cypress.env('contactId');
      
      // New firstName
      const updatedFirstName = 'Anna';

      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/contacts/${contactId}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('authToken')}`
        },
        body: {
          firstName: updatedFirstName
        }

      }).then((response) => {

        expect(response.status).to.eq(200);
  
        expect(response.body.firstName).to.eql(updatedFirstName);
      });
    });
  });
  