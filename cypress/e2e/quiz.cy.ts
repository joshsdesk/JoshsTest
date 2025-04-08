/// <reference types="cypress" />

describe('Tech Quiz App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start the quiz when the start button is clicked', () => {
    cy.contains('Start Quiz').click();

    // 👇 Wait for the quiz to fully mount before continuing
    cy.get('[data-testid="quiz"]').should('exist');
    cy.get('[data-testid="question"]').should('exist');
  });

  it('should go through all questions and end the quiz', () => {
    cy.contains('Start Quiz').click();

    // 👇 Wait for quiz to load
    cy.get('[data-testid="quiz"]').should('exist');

    // 👇 Click 10 answers
    for (let i = 0; i < 10; i++) {
      cy.get('[data-testid="option"]').first().click();
    }

    // 👇 Confirm end screen
    cy.get('[data-testid="score"]').should('exist');
    cy.get('[data-testid="restart-button"]').should('exist');
  });
});
