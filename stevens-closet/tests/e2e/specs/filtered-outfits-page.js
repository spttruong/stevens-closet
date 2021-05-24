describe('filtered-outfits-page', () => {
    it('Filters displays outfits by selected category', () => {
      cy.visit('/filtered');
      cy.contains('h1', 'Filtered Outfits');
      cy.get('[data-test="category-selection"]').select('casual');
      cy.get('[data-test="outfit-title"]').should('have.length', 8);
    });
});
