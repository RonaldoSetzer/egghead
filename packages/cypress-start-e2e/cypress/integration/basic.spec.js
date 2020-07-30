/// <reference types="Cypress" />
describe('Emoji Search app', () => {
  it('successfylly renders the page header', () => {
    cy.visit('/');
    cy.contains('Emoji Search');
  });
});
