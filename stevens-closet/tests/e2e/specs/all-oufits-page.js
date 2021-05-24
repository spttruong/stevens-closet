describe('all-outfits-page', () => {
    it('Shows all the outfits', () => {
      cy.visit('/outfits');
      cy.contains('h1', 'All Outfits');
      cy.contains('[data-test="outfit-title"]', 'Rugged Mustard');
      cy.get('[data-test="outfit-title"]').should('have.length', 11);
    });
});
