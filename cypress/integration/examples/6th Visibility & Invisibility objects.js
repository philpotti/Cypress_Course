/// <reference types="Cypress" />

describe("My Sixth Test Case - Visibility & Invisibility verification", () => {
  it("Visibility & Invisibility verification", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });
});
