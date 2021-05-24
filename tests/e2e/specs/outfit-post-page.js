describe('outfit-post-page', () => {
    it('Goes to an individual outfit page via both outfit title and img', () => {
      // navigate by outfit title
      cy.visit('/outfits');
      cy.get('[data-test="outfit-title"]')
        .first()
        .click();
      cy.contains('h2', 'Rugged Mustard');

      // navigate by outfit image
      cy.visit('/outfits');
      cy.get('[data-test="outfit-image"]')
        .last()
        .click();
      cy.contains('h2', 'Preppy Oatmeal');
    });

    it('Is able to leave comments on individual outfit pages', () => {
      cy.get('textarea').type('This is a comment');
      cy.get('[class="comment-submit-button"]').click();
    });

    it('Prevents blank comment submission via Vuelidate', () => {
      cy.get('[class="comment-submit-button"]').click();
    });

    it('Prevents comment submission when comment is too short (minLength = 4)', () => {
      cy.get('textarea').type('ok');
      cy.get('[class="comment-submit-button"]').click();
    });
});
