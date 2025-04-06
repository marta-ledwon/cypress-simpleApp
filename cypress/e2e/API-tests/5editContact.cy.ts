describe('Edit Contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
    
    it('Successfully edit the contact', () => {


      cy.fixture('idContact.json').then((idContact) => {
        const contactId = idContact.id;
      
      // New data Contct
      const updatedContact = {
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        birthdate: '2025-01-12',
        email: 'updatedemail@example.com',
        phone: '8005551234',
        street1: 'Updated Street',
        street2: 'Updated Apt',
        city: 'Updated City',
        stateProvince: 'Updated State',
        postalCode: '12345',
        country: 'Updated Country'
      };
      cy.fixture('tempToken.json').then((auth) => {
        cy.request({
          method: 'PUT',
          url: `${baseUrl}/contacts/${contactId}`,
          headers: {
            Authorization: auth.token 
          },
          body: updatedContact
        }).then((response) => {

          expect(response.status).to.eq(200);
  
          expect(response.body.firstName).to.eql(updatedContact.firstName);
          expect(response.body.lastName).to.eql(updatedContact.lastName);
          expect(response.body.birthdate).to.eql(updatedContact.birthdate);
          expect(response.body.email).to.eql(updatedContact.email);
          expect(response.body.phone).to.eql(updatedContact.phone);
          expect(response.body.street1).to.eql(updatedContact.street1);
          expect(response.body.street2).to.eql(updatedContact.street2);
          expect(response.body.city).to.eql(updatedContact.city);
          expect(response.body.stateProvince).to.eql(updatedContact.stateProvince);
          expect(response.body.postalCode).to.eql(updatedContact.postalCode);
          expect(response.body.country).to.eql(updatedContact.country);
        });
      });
    });
  });
})