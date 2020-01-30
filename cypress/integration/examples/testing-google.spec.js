describe('', () => {
//const THIS_THING = '[data-testid=selected-button]'
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('.gLFyf')
          .type('epicodus').should('have.value', 'fake@email.com')
      })
})
