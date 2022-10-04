// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("My Thirteenth Test Case - Mouse Hover", () => {
  it("iFrame handling", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('a[href="mentorship"]').eq(0).click();
    cy.wait(3000); // had to add this wait because if not the length was not loading
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
