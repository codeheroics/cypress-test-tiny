/// <reference types="cypress" />
describe("page", () => {
  it("does not work with the original string", () => {
    cy.visit("https://codeheroics.github.io/nbsp/");
    cy.contains("I am text containing nonbreaking spaces which are important in some languages for punctuation");
  });
  it("works with all spaces replaced with normal spaces inside the test", () => {
    cy.visit("https://codeheroics.github.io/nbsp/");
    cy.contains("I am text containing nonbreaking spaces which are important in some languages for punctuation");
  });
});
