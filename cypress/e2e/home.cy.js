describe('Home Page', () => {
  it('Validar se o site está online', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.title("Demo Web Shop")
  })
})