describe('Patch Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
    
    it('Successfully update the firstName field of the contact', () => {

      cy.fixture('idContact.json').then((idContact) => {
      const contactId = idContact.id;
      
      // New firstName
      const updatedFirstName = 'Anna';

      cy.fixture('tempToken.json').then((auth) => {
        cy.request({
          method: 'PATCH',
          url: `${baseUrl}/contacts/${contactId}`,
          headers: {
            Authorization: auth.token
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
  });
}) 