describe('User Registration API Test', () => {
  const baseUrl: string = 'https://thinking-tester-contact-list.herokuapp.com';

  it('Successfully register a new user', () => {

      // Generating random data
      const randomNumber: number = Math.floor(Math.random() * 100000);
      const userEmail: string = `testuser${randomNumber}@fake.com`;
      const userPassword: string = `Password${randomNumber}`;

    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      body: {
        firstName: 'Test',
        lastName: 'User',
        email: userEmail,
        password: userPassword
      }

    }).then((response) => {

      expect(response.status).to.eq(201);

      expect(response.body).to.have.property('user');
      expect(response.body.user).to.include.all.keys(
        '_id',
        'firstName',
        'lastName',
        'email',
        '__v'
      );
      expect(response.body).to.have.property('token');

      Cypress.env('userEmail', userEmail);
      Cypress.env('userPassword', userPassword);

      const userData = {
        email: userEmail,
        password: userPassword
      };
      
      cy.writeFile('cypress/fixtures/tempUser.json', userData);

    });
  });
})