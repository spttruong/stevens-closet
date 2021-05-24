describe('favorite-outfits-page', () => {
    it('Adds and removes outfits from favorites', () => {
        cy.visit('/outfits');
            // adding outfits from favorites
        cy.get('[data-test="favorites-button"]')
            .first()
            .click();
        cy.get('[data-test="favorites-button"]')
            .last()
            .click();
        cy.get('nav a')
            .last()
            .click();
        cy.contains('h1', 'Favorite Outfits');
        cy.get('[data-test="outfit-title"]').should('have.length', 2);

        // removing outfits from favorites
        cy.get('[data-test="favorites-button"]')
            .first()
            .click();
        cy.get('[data-test="favorites-button"]')
            .last()
            .click();
    });
})
