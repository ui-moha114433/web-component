import { CYCLIC_KEY } from "@storybook/addon-actions"

const getIframeBody = () => {
  return cy.get('iframe[id="storybook-preview-iframe"]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
}

describe('Testind Accordion: Web Component', () => {
  it('Goto: Localhost', () => {
    cy.visit('http://localhost:6006/');
  })

  it('Click: Default', () => {
    cy.get('#example-accordion--default').click();
  })

  it('Click: Primary', () => {
    cy.get('#example-accordion--primary').click();
  })

  it('Checking: Accordion Heading', () => {
    cy.get('#example-accordion--default').click();
    cy.get('iframe[id="storybook-preview-iframe"]' > '[aria-label="heading-one"]');
    // cy.get('[aria-label="heading-one"]').should('have.length', 15)
  })
  it("Open: Accordion First", () => {
    getIframeBody().find('.default').click()
  });

})
