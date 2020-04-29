describe('Click all buttons on the TN prod homepage', () => {

  beforeEach(() => {
    cy.visit('/');
  });

// let's refactor this
  it('clicks on the first button', () => {
    cy.get('#cms-home-hero-variant-4 > div.content > div.hero__controls > a').contains('Shop now');
    cy.get('#cms-home-hero-variant-4 > div.content > div.hero__controls > a').should('be.visible');
    cy.get('#cms-home-hero-variant-4 > div.content > div.hero__controls > a').click();
  })

  it('clicks on the second button', () => {
    // write your test here!
  })

});

