describe('Project Form E2E Test', () => {
  beforeEach(() => {
    // Log in and store token
    cy.request('POST', 'http://localhost:3000/api/auth/signin', {
      email: 'admin@example.com',  // <-- Use a valid admin email
      password: 'examplepass' // <-- Use correct password
    }).then((response) => {
      const token = response.body.token;
      // Store token in localStorage before loading the page
      window.localStorage.setItem('token', token);
    });
  });

  it('submits new project data', () => {
    cy.visit('http://localhost:5173/admin/add-project');

    cy.get('input[name="title"]').type('E2E Test Project');
    cy.get('textarea[name="description"]').type('This is a Cypress E2E test project.');
    cy.get('input[name="technologies"]').type('Cypress, React');
    cy.get('input[name="githubLink"]').type('https://github.com/test/project');

    cy.get('form').submit();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Project saved');
    });
  });
});
