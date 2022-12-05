describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h3')
    .contains('Wildfire Emergency Management (WEM) Platform');
  })
})