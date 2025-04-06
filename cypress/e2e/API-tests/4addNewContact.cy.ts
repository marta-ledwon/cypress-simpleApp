describe('Add New contact', () => {
    const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
    
    it('Successfully add a new contact', () => {
      // Generating random data
      const randomContactFirstName = `TestFirst${Math.floor(Math.random() * 1000)}`;
      const randomContactLastName = `TestLast${Math.floor(Math.random() * 1000)}`;
      const randomContactBirthdate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];
      const randomContactEmail = `test${Math.floor(Math.random() * 1000)}@example.com`;
      const randomContactPhone = `800${Math.floor(Math.random() * 10000000)}`;
      const randomContactStreet1 = `Street ${Math.floor(Math.random() * 1000)}`;
      const randomContactStreet2 = `Apt ${Math.floor(Math.random() * 100)}`;
      const randomContactCity = `City${Math.floor(Math.random() * 100)}`;
      const randomContactStateProvince = `State${Math.floor(Math.random() * 50)}`;
      const randomContactPostalCode = Math.floor(Math.random() * 100000);
      const randomContactCountry = `Country${Math.floor(Math.random() * 50)}`;
    
      cy.fixture('tempToken.json').then((auth) => {
        cy.request({
          method: 'POST',
          url: `${baseUrl}/contacts`,
          headers: {
            Authorization: auth.token
          },
        body: {
          firstName: randomContactFirstName,
          lastName: randomContactLastName,
          birthdate: randomContactBirthdate,
          email: randomContactEmail,
          phone: randomContactPhone,
          street1: randomContactStreet1,
          street2: randomContactStreet2,
          city: randomContactCity,
          stateProvince: randomContactStateProvince,
          postalCode: randomContactPostalCode,
          country: randomContactCountry
        }
        
      }).then((response) => {

        expect(response.status).to.eq(201);
  
        expect(response.body).to.have.property('_id');
        expect(response.body).to.have.property('firstName');
        expect(response.body).to.have.property('lastName');
        expect(response.body).to.have.property('birthdate');
        expect(response.body).to.have.property('email');
        expect(response.body).to.have.property('phone');
        expect(response.body).to.have.property('street1');
        expect(response.body).to.have.property('street2');
        expect(response.body).to.have.property('city');
        expect(response.body).to.have.property('stateProvince');
        expect(response.body).to.have.property('postalCode');
        expect(response.body).to.have.property('country');
        expect(response.body).to.have.property('owner');
        expect(response.body).to.have.property('__v');

        const idContact = {
          id: response.body._id
        };

    cy.writeFile('cypress/fixtures/idContact.json', idContact);
    
      });
    });
  });
})
  