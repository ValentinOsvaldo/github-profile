/// <reference types="cypress" />

describe('Github Profiles', () => {
  it('Search a user', () => {
    cy.visit('/');

    cy.get('input').type('ValentinOsvaldo');

    cy.get('button').click();

    cy.url().should('include', '/profile');
  });
});
