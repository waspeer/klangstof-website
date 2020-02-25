/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
    cy.get('main');
  });

  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y();
  });
});
