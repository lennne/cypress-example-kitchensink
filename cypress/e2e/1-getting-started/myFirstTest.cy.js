context('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/todo')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'todos')
  })

  it('renders a todo item under the input', () => {
    cy.get('.view').eq(1).find('label').should('exist')
  })

  it('renders a section with the correct elements', () => {
    cy.get('.view').eq(1).within(() => {
      cy.get('label').should('exist')
    })
  })
})
