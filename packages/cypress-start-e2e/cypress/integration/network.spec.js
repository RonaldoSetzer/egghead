/// <reference types="Cypress" />
import { ENDPOINT, EMOJI_RESPONSE } from './utils';

describe('Emoji search app - network tests', () => {
  it('displays emojis returned from the backend ', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: ENDPOINT,
      response: EMOJI_RESPONSE,
    });

    cy.visit('/');
    cy.get('[data-cy="emoji-row"]').contains('Joy');
    cy.get('[data-cy="emoji-row"]').contains('Smiley');
    cy.get('[data-cy="emoji-row"]').contains('Smile');
  });
});
