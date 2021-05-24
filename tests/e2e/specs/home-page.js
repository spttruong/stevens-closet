describe('home-page', () => {
    it('Visits homepage', () => {
        cy.visit('/');
        cy.contains('h1', 'Featured Outfit');
        cy.get('[data-test="outfit-title"]').should('have.length', 1);
    });
})