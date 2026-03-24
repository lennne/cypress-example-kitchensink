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
    cy.visit('/todo')
    cy.findByText('todos').should('exist')
    // remember that we didn't have to type should.('exist') before we type into it
    // this is some ofthe default assertions provided by cypress in the background
    cy.findByPlaceholderText('What needs to be done?').type('exist')
    /* eslint-disable */
    
    cy.wait(5000).then(() => {
      fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      console.log('test is finished')
    })
    /* eslint-enable */
    // non-cypress code runs first
    console.log('first to execute')
    cy.log('Cypress log used')
  })

  // it('shows an active class for the current page', () => {
  //   cy.visit('/utilities')
  //   cy.get('.navbar-nav').first().children.within(() => {
  //     cy.get('li').eq(18).should('have.class', 'active')
  //   })
  // })
  // assertions

  it('shows an active class for the current page', () => {
    cy.visit('/utilities')
    cy.get('.navbar-nav').first().children().eq(1).should('have.class', 'active')
  })

  it('should not have an active class on inactive pages', () => {
    cy.visit('/utilities')
    // the importance of including find('a')
    // cy.get('.navbar-nav').first().get('li').eq(1).should('not.have.class', 'active').find('a').should('have.attr', 'href', '/commands/querying')
    cy.get('.navbar-nav').first().get('li').eq(1).should('not.have.class', 'active').should('have.attr', 'href', '/commands/querying')
  })
})
