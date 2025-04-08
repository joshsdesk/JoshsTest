describe('Tech Quiz App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.contains('Start Quiz').click();
      cy.get('[data-testid="question"]').should('exist');
    });
  
    it('should go through all questions and end the quiz', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('[data-testid="option"]').first().click();
      }
  
      cy.contains('Your Score').should('exist');
      cy.contains('Start New Quiz').should('exist');
    });
  });
  