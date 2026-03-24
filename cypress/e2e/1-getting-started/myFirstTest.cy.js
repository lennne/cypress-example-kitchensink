context('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('has an h1 on the page', () => {
  //   cy.get('h1').should('exist')
  // })

  // it('renders the correct h1 text', () => {
  //   cy.get('h1').should('contain.text', 'todos')
  // })

  // it('renders a todo item under the input', () => {
  //   cy.get('.view').eq(1).find('label').should('exist')
  // })

  // it('renders a section with the correct elements', () => {
  //   cy.get('.view').eq(1).within(() => {
  //     cy.get('label').should('exist')
  //   })
  // })

  it('currently renders the todo website link', () => {
    cy.findByText('todos').should('exist')
    cy.findByPlaceholderText('What needs to be done?').type('exist')
    // eslint-disable-line no-console
    cy.wait(5000)
    // non-cypress code runs first
    console.log('first to execute')
  })
})
