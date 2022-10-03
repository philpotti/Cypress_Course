/// <reference types="Cypress" />

describe("My Twelfth Test Case - Mouse Hover", () => {
  it("Mouse Hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true }); // {force: true} helps to click on NON VISIBLE objects
    cy.url().should("include", "/#top");
  });
});
