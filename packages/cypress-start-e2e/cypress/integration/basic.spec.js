/// <reference types="Cypress" />
describe('Emoji Search app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfylly renders the page header', () => {
    cy.contains('Emoji Search');
  });

  it('renders the list of emojis', () => {
    cy.get("[data-cy='emoji-row']").should('have.length', 20);
  });

  it('allows users to seach for an emoji', () => {
    cy.get('[data-cy="emoji-search-input"]').type('joy');
    cy.get('[data-cy="emoji-row"]').should('have.length', 3);
    cy.contains('Joy');
    cy.contains('Joy Cat');
    cy.contains('Joystick');

    cy.get('[data-cy="emoji-search-input"]')
      .clear()
      .type('cactus');
    cy.get('[data-cy="emoji-row"]').should('have.length', 1);
    cy.contains('Cactus');
  });

  it('shows a "emoji not found" message', () => {
    cy.get('[data-cy="emoji-search-input"]').type('emoji that does not exist');
    cy.get('[data-cy="emoji-row"]').should('have.length', 0);
    cy.contains('Emoji not found');
    cy.contains('Try searching for something else');
  });
});
