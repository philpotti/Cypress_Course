/// <reference types="Cypress" />

describe("My Nineth Test Case", () => {
  it("Handling tabs validations", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
  });
});
