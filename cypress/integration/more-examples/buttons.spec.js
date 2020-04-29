describe('Click all buttons on the TN prod homepage', () => {

  beforeEach(() => {
    cy.visit('/');
  });

// let's refactor this
  it.only('clicks on the first button', () => {
    cy.get('.hero__cta').contains('Shop now');
    cy.get('.hero__cta').should('be.visible');
    cy.get('#error_page').should('not.be.visible');
    cy.get('.hero__cta').click();
    cy.url().should('include', `products/`)
  })

  it('clicks on the second button', () => {
    // write your test here!
  })

});

// scrollIntoView() -> non-desktop devices
