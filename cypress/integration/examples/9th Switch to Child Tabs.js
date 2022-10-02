/// <reference types="Cypress" />

describe("My Nineth Test Case - Handling tabs validations", () => {
  it("Handling tabs validations", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
  });
});
