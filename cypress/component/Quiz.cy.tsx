import React from 'react'; // 👈 Add this to silence the VS Code warning
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  it('renders start button and launches quiz', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('[data-testid="question"]').should('exist');
  });
});
