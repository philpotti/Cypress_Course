/// <reference types="Cypress" />

describe("My Eighth Test Case", () => {
  it("Alerts validations", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get("input[value='Confirm']").click();
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal("Hello , share this practice page and share your knowledge");
    });
    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
